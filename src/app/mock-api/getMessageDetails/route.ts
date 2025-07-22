// message details API response

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.info('getMessageDetails mock-api POST request', data);

  const message = {
    message: {
      messageId: 1,
      serverId: '0041505e-8ea3-4ec6-b7cf-f1d783ba6605',
      channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
      receivedDate: {
        time: 1698477538700,
        timezone: 'UTC',
      },
      processed: true,
      connectorMessages: {
        '@class': 'linked-hash-map',
        entry: [
          {
            int: 0,
            connectorMessage: {
              messageId: 1,
              metaDataId: 0,
              channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
              channelName: 'HL7 Test',
              connectorName: 'Source',
              serverId: '0041505e-8ea3-4ec6-b7cf-f1d783ba6605',
              receivedDate: {
                time: 1698477538700,
                timezone: 'UTC',
              },
              status: 'TRANSFORMED',
              raw: {
                encrypted: false,
                channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
                messageId: 1,
                metaDataId: 0,
                contentType: 'RAW',
                content:
                  'MSH|^~\\&|SOURCEEHR|WA|MIRTHDST|WA|201611111111||ADT^A01|MSGID10001|P|2.3|\rEVN|A01|201611111111||\rPID|1|100001^^^1^MRN1|900001||DOE^JOHN^^^^||19601111|M||WH|111 THAT PL^^HERE^WA^98020^USA||(206)555-5309|||M|NON|999999999|\rNK1|1|DOE^JANE^|WIFE||(206)555-5555||||NK^NEXT OF KIN\rPV1|1|O|1001^2002^01||||123456^DOCTOR^BOB^T^^DR|||||||ADM|A0|\r',
                dataType: 'HL7V2',
              },
              encoded: {
                encrypted: false,
                channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
                messageId: 1,
                metaDataId: 0,
                contentType: 'ENCODED',
                content:
                  'MSH|^~\\&|SOURCEEHR|WA|MIRTHDST|WA|201611111111||ADT^A01|MSGID10001|P|2.3|\rEVN|A01|201611111111||\rPID|1|100001^^^1^MRN1|900001||DOE^JOHN^^^^||19601111|M||WH|111 THAT PL^^HERE^WA^98020^USA||(206)555-5309|||M|NON|999999999|\rNK1|1|DOE^JANE^|WIFE||(206)555-5555||||NK^NEXT OF KIN\rPV1|1|O|1001^2002^01||||123456^DOCTOR^BOB^T^^DR|||||||ADM|A0|\r',
                dataType: 'HL7V2',
              },
              response: {
                encrypted: false,
                channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
                messageId: 1,
                metaDataId: 0,
                contentType: 'RESPONSE',
                content:
                  '<response>\n  <status>SENT</status>\n  <message>MSH|^~\\&amp;|MIRTHDST|WA|SOURCEEHR|WA|20231028071858.979||ACK|20231028071858.979|P|2.3&#xd;MSA|AA|MSGID10001&#xd;</message>\n  <statusMessage>HL7v2 ACK successfully generated.</statusMessage>\n</response>',
              },
              sourceMapContent: {
                encrypted: false,
                content: {
                  '@class': 'java.util.Collections$UnmodifiableMap',
                  m: {
                    entry: [
                      {
                        string: 'localPort',
                        int: 6661,
                      },
                      {
                        string: ['localAddress', '127.0.0.1'],
                      },
                      {
                        string: 'remotePort',
                        int: 53319,
                      },
                      {
                        string: ['remoteAddress', '127.0.0.1'],
                      },
                      {
                        string: 'destinationSet',
                        'linked-hash-set': {
                          int: 1,
                        },
                      },
                    ],
                  },
                },
              },
              connectorMapContent: {
                encrypted: false,
                content: {
                  '@class': 'map',
                  entry: [
                    {
                      string: ['mirth_source', 'WA'],
                    },
                    {
                      string: ['mirth_version', 2.3],
                    },
                    {
                      string: ['mirth_type', 'ADT-A01'],
                    },
                  ],
                },
              },
              channelMapContent: {
                encrypted: false,
                content: {
                  '@class': 'map',
                },
              },
              responseMapContent: {
                encrypted: false,
                content: {
                  '@class': 'map',
                  entry: {
                    string: 'd1',
                    response: {
                      status: 'SENT',
                      message:
                        'MSH|^~\\&|RECEIVER|SMARTHL7|||||ACK|20231028071858|P|2.3.1\rMSA|AA|MSGID10001\r',
                      statusMessage: 'Message successfully sent.',
                    },
                  },
                },
              },
              metaDataMap: {
                entry: [
                  {
                    string: 'MESSAGE_ID',
                    'big-decimal': 1,
                  },
                  {
                    string: ['SOURCE', 'WA'],
                  },
                  {
                    string: 'METADATA_ID',
                    'big-decimal': 0,
                  },
                  {
                    string: ['TYPE', 'ADT-A01'],
                  },
                ],
              },
              processingErrorContent: {
                encrypted: false,
              },
              postProcessorErrorContent: {
                encrypted: false,
              },
              responseErrorContent: {
                encrypted: false,
              },
              errorCode: 0,
              sendAttempts: 1,
              responseDate: {
                time: 1698477538980,
                timezone: 'UTC',
              },
              chainId: 0,
              orderId: 0,
            },
          },
          {
            int: 1,
            connectorMessage: {
              messageId: 1,
              metaDataId: 1,
              channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
              channelName: 'HL7 Test',
              connectorName: 'Destination 1',
              serverId: '0041505e-8ea3-4ec6-b7cf-f1d783ba6605',
              receivedDate: {
                time: 1698477538722,
                timezone: 'UTC',
              },
              status: 'SENT',
              raw: {
                encrypted: false,
                channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
                messageId: 1,
                metaDataId: 1,
                contentType: 'RAW',
                content:
                  'MSH|^~\\&|SOURCEEHR|WA|MIRTHDST|WA|201611111111||ADT^A01|MSGID10001|P|2.3|\rEVN|A01|201611111111||\rPID|1|100001^^^1^MRN1|900001||DOE^JOHN^^^^||19601111|M||WH|111 THAT PL^^HERE^WA^98020^USA||(206)555-5309|||M|NON|999999999|\rNK1|1|DOE^JANE^|WIFE||(206)555-5555||||NK^NEXT OF KIN\rPV1|1|O|1001^2002^01||||123456^DOCTOR^BOB^T^^DR|||||||ADM|A0|\r',
                dataType: 'HL7V2',
              },
              encoded: {
                encrypted: false,
                channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
                messageId: 1,
                metaDataId: 1,
                contentType: 'ENCODED',
                content:
                  'MSH|^~\\&|SOURCEEHR|WA|MIRTHDST|WA|201611111111||ADT^A01|MSGID10001|P|2.3|\rEVN|A01|201611111111||\rPID|1|100001^^^1^MRN1|900001||DOE^JOHN^^^^||19601111|M||WH|111 THAT PL^^HERE^WA^98020^USA||(206)555-5309|||M|NON|999999999|\rNK1|1|DOE^JANE^|WIFE||(206)555-5555||||NK^NEXT OF KIN\rPV1|1|O|1001^2002^01||||123456^DOCTOR^BOB^T^^DR|||||||ADM|A0|\r',
                dataType: 'HL7V2',
              },
              sent: {
                encrypted: false,
                channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
                messageId: 1,
                metaDataId: 1,
                contentType: 'SENT',
                content:
                  '<com.mirth.connect.connectors.tcp.TcpDispatcherProperties version="4.4.1">\n  <pluginProperties/>\n  <destinationConnectorProperties version="4.4.1">\n    <queueEnabled>false</queueEnabled>\n    <sendFirst>false</sendFirst>\n    <retryIntervalMillis>10000</retryIntervalMillis>\n    <regenerateTemplate>false</regenerateTemplate>\n    <retryCount>0</retryCount>\n    <rotate>false</rotate>\n    <includeFilterTransformer>false</includeFilterTransformer>\n    <threadCount>1</threadCount>\n    <threadAssignmentVariable></threadAssignmentVariable>\n    <validateResponse>true</validateResponse>\n    <resourceIds class="linked-hash-map">\n      <entry>\n        <string>Default Resource</string>\n        <string>[Default Resource]</string>\n      </entry>\n    </resourceIds>\n    <queueBufferSize>1000</queueBufferSize>\n    <reattachAttachments>true</reattachAttachments>\n  </destinationConnectorProperties>\n  <transmissionModeProperties class="com.mirth.connect.plugins.mllpmode.MLLPModeProperties">\n    <pluginPointName>MLLP</pluginPointName>\n    <startOfMessageBytes>0B</startOfMessageBytes>\n    <endOfMessageBytes>1C0D</endOfMessageBytes>\n    <useMLLPv2>false</useMLLPv2>\n    <ackBytes>06</ackBytes>\n    <nackBytes>15</nackBytes>\n    <maxRetries>2</maxRetries>\n  </transmissionModeProperties>\n  <serverMode>false</serverMode>\n  <remoteAddress>127.0.0.1</remoteAddress>\n  <remotePort>1234</remotePort>\n  <overrideLocalBinding>false</overrideLocalBinding>\n  <localAddress>0.0.0.0</localAddress>\n  <localPort>0</localPort>\n  <sendTimeout>5000</sendTimeout>\n  <bufferSize>65536</bufferSize>\n  <keepConnectionOpen>false</keepConnectionOpen>\n  <checkRemoteHost>false</checkRemoteHost>\n  <responseTimeout>5000</responseTimeout>\n  <ignoreResponse>false</ignoreResponse>\n  <queueOnResponseTimeout>true</queueOnResponseTimeout>\n  <dataTypeBinary>false</dataTypeBinary>\n  <charsetEncoding>DEFAULT_ENCODING</charsetEncoding>\n  <template>MSH|^~\\&amp;|SOURCEEHR|WA|MIRTHDST|WA|201611111111||ADT^A01|MSGID10001|P|2.3|&#xd;EVN|A01|201611111111||&#xd;PID|1|100001^^^1^MRN1|900001||DOE^JOHN^^^^||19601111|M||WH|111 THAT PL^^HERE^WA^98020^USA||(206)555-5309|||M|NON|999999999|&#xd;NK1|1|DOE^JANE^|WIFE||(206)555-5555||||NK^NEXT OF KIN&#xd;PV1|1|O|1001^2002^01||||123456^DOCTOR^BOB^T^^DR|||||||ADM|A0|&#xd;</template>\n</com.mirth.connect.connectors.tcp.TcpDispatcherProperties>',
              },
              response: {
                encrypted: false,
                channelId: 'b3407b31-852b-4698-a818-34112ecffd73',
                messageId: 1,
                metaDataId: 1,
                contentType: 'RESPONSE',
                content:
                  '<response>\n  <status>SENT</status>\n  <message>MSH|^~\\&amp;|RECEIVER|SMARTHL7|||||ACK|20231028071858|P|2.3.1&#xd;MSA|AA|MSGID10001&#xd;</message>\n  <statusMessage>Message successfully sent.</statusMessage>\n</response>',
                dataType: 'HL7V2',
              },
              sourceMapContent: {
                encrypted: false,
                content: {
                  '@class': 'java.util.Collections$UnmodifiableMap',
                  m: {
                    entry: [
                      {
                        string: 'localPort',
                        int: 6661,
                      },
                      {
                        string: ['localAddress', '127.0.0.1'],
                      },
                      {
                        string: 'remotePort',
                        int: 53319,
                      },
                      {
                        string: ['remoteAddress', '127.0.0.1'],
                      },
                      {
                        string: 'destinationSet',
                        'linked-hash-set': {
                          int: 1,
                        },
                      },
                    ],
                  },
                },
              },
              connectorMapContent: {
                encrypted: false,
                content: {
                  '@class': 'map',
                  entry: [
                    {
                      string: ['mirth_source', 'WA'],
                    },
                    {
                      string: ['mirth_version', 2.3],
                    },
                    {
                      string: ['mirth_type', 'ADT-A01'],
                    },
                  ],
                },
              },
              channelMapContent: {
                encrypted: false,
                content: {
                  '@class': 'map',
                },
              },
              responseMapContent: {
                encrypted: false,
                content: {
                  '@class': 'map',
                  entry: {
                    string: 'd1',
                    response: {
                      status: 'SENT',
                      message:
                        'MSH|^~\\&|RECEIVER|SMARTHL7|||||ACK|20231028071858|P|2.3.1\rMSA|AA|MSGID10001\r',
                      statusMessage: 'Message successfully sent.',
                    },
                  },
                },
              },
              metaDataMap: {
                entry: [
                  {
                    string: 'MESSAGE_ID',
                    'big-decimal': 1,
                  },
                  {
                    string: ['SOURCE', 'WA'],
                  },
                  {
                    string: 'METADATA_ID',
                    'big-decimal': 1,
                  },
                  {
                    string: ['TYPE', 'ADT-A01'],
                  },
                ],
              },
              processingErrorContent: {
                encrypted: false,
              },
              postProcessorErrorContent: {
                encrypted: false,
              },
              responseErrorContent: {
                encrypted: false,
              },
              errorCode: 0,
              sendAttempts: 1,
              sendDate: {
                time: 1698477538801,
                timezone: 'UTC',
              },
              responseDate: {
                time: 1698477538953,
                timezone: 'UTC',
              },
              chainId: 1,
              orderId: 1,
            },
          },
        ],
      },
    },
  };

  return NextResponse.json({ ...message });
}
