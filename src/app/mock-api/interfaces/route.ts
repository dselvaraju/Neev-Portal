import { NextRequest, NextResponse } from 'next/server';
import { channelsData } from './demoData/channels';
import { channelStatistics } from './demoData/channelStatistics';

export async function GET(request: NextRequest) {
  const channels = channelsData?.list?.channel ?? [];
  const channelsStats = channelStatistics.list?.channelStatistics ?? [];

  for (let channel of channels) {
    const stats = channelsStats.find((cs) => cs.channelId === channel.id) ?? {};
    channel['channelStatistics'] = stats;
  }

  const sourceHosts = [
    '0.0.0.0',
    '192.168.1.1',
    '10.0.0.1',
    '172.16.0.1',
    '192.168.2.1',
    '10.1.1.1',
    '172.16.1.1',
    '192.168.3.1',
    '10.2.2.2',
    '172.16.2.2',
    '192.168.4.1',
  ];
  const destinationHosts = [
    '127.0.0.1',
    '192.168.2.58',
    '192.168.0.1',
    '10.10.10.10',
    '172.16.1.1',
    '8.8.8.8',
    '1.1.1.1',
    '192.168.3.1',
    '10.20.30.40',
    '172.16.2.2',
  ];
  const sourceTypeConnectors = ['Mirth', 'HL7', 'DICOM', 'FTP', 'HTTP', 'SMTP'];
  const channelsResponse = channels.map((channel: any) => {
    return {
      id: channel.id,
      name: channel.name,
      description: channel.description,
      sourceHost: sourceHosts[Math.floor(Math.random() * sourceHosts.length)],
      sourcePort: [104, 6662, 6661, 6663, 6664][Math.floor(Math.random() * 5)],
      sourceType:
        sourceTypeConnectors[
          Math.floor(Math.random() * sourceTypeConnectors.length)
        ],
      destinationHost:
        destinationHosts[Math.floor(Math.random() * destinationHosts.length)],
      destinationPort: [7018, 6660][Math.floor(Math.random() * 2)],
      destinationType:
        sourceTypeConnectors[
          Math.floor(Math.random() * sourceTypeConnectors.length)
        ],
      channelStatistics: channel.channelStatistics.channelId,
      recieved: channel.channelStatistics.received,
      sent: channel.channelStatistics.sent,
      error: channel.channelStatistics.error,
      filtered: channel.channelStatistics.filtered,
    };
  });

  return NextResponse.json({ channels, channelsResponse });
}
