import axios from 'axios';
import https from 'https';
import { NextRequest, NextResponse } from 'next/server';
import { commonHeaders, EXTERNAL_API_PATHS, REQ_GET } from '../constants';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
axios.defaults.httpsAgent = httpsAgent;

export async function GET(req: NextRequest, res: NextResponse) {
  let config = {
    method: REQ_GET,
    maxBodyLength: Infinity,
    headers: {
      ...commonHeaders,
      Authorization: 'Basic YWRtaW46YWRtaW4=', // TODO: have dynamic auth here
    },
  };

  try {
    const response = await axios.request({
      ...config,
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${EXTERNAL_API_PATHS.CHANNELS}`,
    });

    const channelStatsResponse = await axios.request({
      ...config,
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${EXTERNAL_API_PATHS.CHANNELS_STATS}`,
    });

    const channels = response?.data?.list?.channel ?? [];
    const channelsStats =
      channelStatsResponse?.data?.list?.channelStatistics ?? [];

    for (let channel of channels) {
      const stats =
        channelsStats.find((cs) => cs.channelId === channel.id) || {};
      channel['channelStatistics'] = stats;
    }

    const channelsResponse = channels.map((channel) => {
      return {
        id: channel.id,
        name: channel.name,
        description: channel.description,
        sourceHost:
          channel.sourceConnector.properties.listenerConnectorProperties.host,
        sourcePort:
          channel.sourceConnector.properties.listenerConnectorProperties.port,
        sourceType:
          channel.sourceConnector.properties.transmissionModeProperties
            .pluginPointName,
        destinationHost:
          channel.destinationConnectors.connector.properties.remoteAddress,
        destinationPort:
          channel.destinationConnectors.connector.properties.remotePort,
        destinationType:
          channel.destinationConnectors.connector.properties
            .transmissionModeProperties.pluginPointName,
        channelStatistics: channel.channelStatistics,
        received: channel.channelStatistics.received,
        sent: channel.channelStatistics.sent,
        error: channel.channelStatistics.error,
        filtered: channel.channelStatistics.filtered,
      };
    });

    console.log('Channels API response:', response.data);
    console.log('Channel Stats API response:', channelStatsResponse.data);

    return NextResponse.json({ channels, channelsResponse });
  } catch (error) {
    console.error('Error during API calls:', error);
    return NextResponse.error();
  }
}
