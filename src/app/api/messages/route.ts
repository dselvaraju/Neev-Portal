import axios from 'axios';
import https from 'https';
import { NextRequest, NextResponse } from 'next/server';
import { commonHeaders, EXTERNAL_API_PATHS, REQ_GET } from '../constants';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
axios.defaults.httpsAgent = httpsAgent;

export async function GET(request: NextRequest) {
  let config = {
    method: REQ_GET,
    maxBodyLength: Infinity,
    headers: {
      ...commonHeaders,
      Authorization: 'Basic YWRtaW46YWRtaW4=', // TODO: have dynamic auth here
    },
  };

  let allMessages = [];

  try {
    const allChannels = await axios.request({
      ...config,
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${EXTERNAL_API_PATHS.CHANNELS}`,
    });
    const channels = allChannels?.data?.list?.channel ?? [];

    for (let channel of channels) {
      const messagesResponse = await axios.request({
        ...config,
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/channels/${channel.id}/messages`,
      });
      const response = messagesResponse?.data?.list?.message ?? [];
      const messages = Array.isArray(response) ? response : [response];
      allMessages.push(...messages);
    }

    allMessages = allMessages.map((message) => {
      return {
        channelId: message.channelId,
        messageId: message.messageId,
        channelName:
          message.connectorMessages?.entry[1]?.connectorMessage?.channelName,
        receivedDate:
          message.connectorMessages?.entry[1]?.connectorMessage?.receivedDate
            ?.time,
        processedDate:
          message.connectorMessages?.entry[1]?.connectorMessage?.responseDate
            ?.time,
        status: message.connectorMessages?.entry[1]?.connectorMessage?.status,
        // TODO: Replace with actual data
        mrn: (Math.random() * (80 - 50) + 50).toFixed(5),
        accessionNumber: (Math.random() * (80 - 50) + 50).toFixed(5),
        type: ['HL7', 'DICOM', 'SR', 'DOC', 'JSON'][
          Math.floor(Math.random() * 5)
        ],
        event: ['ADT', 'ORM', 'ORU', 'MDM', 'SIU'][
          Math.floor(Math.random() * 5)
        ],
      };
    });

    return NextResponse.json({ allMessages });
  } catch (error) {
    console.error('Error during API calls:', error);
    return NextResponse.error();
  }
}
