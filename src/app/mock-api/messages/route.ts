import { NextRequest, NextResponse } from 'next/server';
import { messagesData } from './demoData/messages';

export async function GET(request: NextRequest) {
  const allMessages = messagesData?.list?.message ?? [];

  const messages = allMessages.map((message) => {
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
      event: ['ADT', 'ORM', 'ORU', 'MDM', 'SIU'][Math.floor(Math.random() * 5)],
    };
  });

  return NextResponse.json({ allMessages: messages });
}
