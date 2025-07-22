export const channelsData = {
  list: {
    channel: [
      {
        '@version': '4.4.2',
        id: 'cab45b01-4d91-446b-9de9-4292f9d8d0e1',
        nextMetaDataId: 2,
        name: 'DICOM Test',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class':
              'com.mirth.connect.connectors.dimse.DICOMReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            listenerConnectorProperties: {
              '@version': '4.4.2',
              host: '0.0.0.0',
              port: 104,
            },
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'None',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
            applicationEntity: null,
            localHost: null,
            localPort: null,
            localApplicationEntity: null,
            soCloseDelay: 50,
            releaseTo: 5,
            requestTo: 5,
            idleTo: 60,
            reaper: 10,
            rspDelay: 0,
            pdv1: false,
            sndpdulen: 16,
            rcvpdulen: 16,
            async: 0,
            bigEndian: false,
            bufSize: 1,
            defts: false,
            dest: null,
            nativeData: false,
            sorcvbuf: 0,
            sosndbuf: 0,
            tcpDelay: true,
            keyPW: null,
            keyStore: null,
            keyStorePW: null,
            noClientAuth: true,
            nossl2: true,
            tls: 'notls',
            trustStore: null,
            trustStorePW: null,
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundDataType: 'DICOM',
            outboundDataType: 'DICOM',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
              '@version': '4.4.2',
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
              '@version': '4.4.2',
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: null,
          },
          transportName: 'DICOM Listener',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'Destination 1',
            properties: {
              '@class':
                'com.mirth.connect.connectors.dimse.DICOMDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              host: '98.70.64.41',
              port: 5152,
              applicationEntity: 'AGNA',
              localHost: null,
              localPort: null,
              localApplicationEntity: null,
              template: '${DICOMMESSAGE}',
              acceptTo: 5000,
              async: 0,
              bufSize: 1,
              connectTo: 0,
              priority: 'med',
              passcode: null,
              pdv1: false,
              rcvpdulen: 16,
              reaper: 10,
              releaseTo: 5,
              rspTo: 60,
              shutdownDelay: 1000,
              sndpdulen: 16,
              soCloseDelay: 50,
              sorcvbuf: 0,
              sosndbuf: 0,
              stgcmt: false,
              tcpDelay: true,
              ts1: false,
              uidnegrsp: false,
              username: null,
              keyPW: null,
              keyStore: null,
              keyStorePW: null,
              noClientAuth: true,
              nossl2: true,
              tls: 'notls',
              trustStore: null,
              trustStorePW: null,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'DICOM',
              outboundDataType: 'DICOM',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
                '@version': '4.4.2',
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
                '@version': '4.4.2',
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'DICOM',
              outboundDataType: 'DICOM',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
                '@version': '4.4.2',
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
                '@version': '4.4.2',
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'DICOM Sender',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            className:
              'com.mirth.connect.server.attachments.dicom.DICOMAttachmentHandlerProvider',
            type: 'DICOM',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706366043760,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: null,
        },
      },
      {
        '@version': '4.4.2',
        id: '688e7bf7-8024-4d38-81c8-6b32299577b8',
        nextMetaDataId: 2,
        name: 'FROM_HOSP1_PACS_DICOM',
        description: null,
        revision: 2,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class':
              'com.mirth.connect.connectors.dimse.DICOMReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            listenerConnectorProperties: {
              '@version': '4.4.2',
              host: '0.0.0.0',
              port: 104,
            },
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'None',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
            applicationEntity: null,
            localHost: null,
            localPort: null,
            localApplicationEntity: null,
            soCloseDelay: 50,
            releaseTo: 5,
            requestTo: 5,
            idleTo: 60,
            reaper: 10,
            rspDelay: 0,
            pdv1: false,
            sndpdulen: 16,
            rcvpdulen: 16,
            async: 0,
            bigEndian: false,
            bufSize: 1,
            defts: false,
            dest: null,
            nativeData: false,
            sorcvbuf: 0,
            sosndbuf: 0,
            tcpDelay: true,
            keyPW: null,
            keyStore: null,
            keyStorePW: null,
            noClientAuth: true,
            nossl2: true,
            tls: 'notls',
            trustStore: null,
            trustStorePW: null,
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: null,
          },
          transportName: 'DICOM Listener',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'TO_RAD_PACS_DICOM',
            properties: {
              '@class':
                'com.mirth.connect.connectors.vm.VmDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              channelId: 'e1b3ea63-2971-4191-a4e0-439cc7535275',
              channelTemplate: '${message.encodedData}',
              mapVariables: null,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'Channel Writer',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706273523600,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '4875d699-c14d-4b33-b2b0-56fa611b06cc',
                name: 'PACS',
                channelIds: {
                  string: [
                    'e1b3ea63-2971-4191-a4e0-439cc7535275',
                    '688e7bf7-8024-4d38-81c8-6b32299577b8',
                  ],
                },
                backgroundColor: {
                  red: 0,
                  green: 102,
                  blue: 255,
                  alpha: 255,
                },
              },
              {
                id: '28eda82e-7385-4be1-b540-ed4505f81192',
                name: 'HOSP1',
                channelIds: {
                  string: [
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '42e730bb-0721-435e-8dcf-d25d6d5d1dc6',
                    '688e7bf7-8024-4d38-81c8-6b32299577b8',
                    'e3f95224-23d7-4cdf-a0ba-966a4b233507',
                    '254e0bd3-4f5a-48de-a94b-7ee0f1db9d3b',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'e678dbf5-f021-43dc-84ae-967500d5c31a',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 0,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: '2d7dc73d-334a-4273-a664-c54bebbe07a2',
        nextMetaDataId: 4,
        name: 'FROM_HOSP1_RIS_HL7_ADT',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.tcp.TcpReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            listenerConnectorProperties: {
              '@version': '4.4.2',
              host: '0.0.0.0',
              port: 6662,
            },
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'Auto-generate (After source transformer)',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: true,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
            transmissionModeProperties: {
              '@class': 'com.mirth.connect.plugins.mllpmode.MLLPModeProperties',
              pluginPointName: 'MLLP',
              startOfMessageBytes: '0B',
              endOfMessageBytes: '1C0D',
              useMLLPv2: false,
              ackBytes: '06',
              nackBytes: 15,
              maxRetries: 2,
            },
            serverMode: true,
            remoteAddress: null,
            remotePort: null,
            overrideLocalBinding: false,
            reconnectInterval: 5000,
            receiveTimeout: 0,
            bufferSize: 65536,
            maxConnections: 10,
            keepConnectionOpen: true,
            dataTypeBinary: false,
            charsetEncoding: 'DEFAULT_ENCODING',
            respondOnNewConnection: 0,
            responseAddress: null,
            responsePort: null,
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundTemplate: {
              '@encoding': 'base64',
              $: 'TVNIfF5+XCZ8QUNNRXxBQ0V8R0VOT1ZJQ3xHT1N8MjAyMzAyMjYxMzM1Mzd8fEFEVF5BMjheQURUX0EwNXw5ODl8VHwyLjQKUElEfDF8fDAwMDExMTJeXl5BQ01FXk1STnx8U1FVQVJFXkhPTUVSXl5eXl58fDE5NzgwMjI4fE18fHwxMjMgUE9TVCBSRF5eTUVMQk9VUk5FXlZJQ14zMDAwXkFVU15IXl58fHx8RU5HfE1BUlJJRUR8fHx8fHx8fHx8fHx8fE4KQ09OfDF8TUhSX0NPTlNFTlR8MDAwMTExMnxNSFJ8TUhSIENvbnNlbnQgUkVDRUlWRUQgaW4gUEFTfHx8fHx8UmVjZWl2ZWR8fHx8MjEwMDAxMDEKTlRFfDF8fENsaW5pY2FsIG5vdGVzOi0+dGhlcmFwZXV0aWMgY2xleGFuZXx8fDIwMjIwMjA4MTUwNDI1',
            },
            outboundTemplate: {
              '@encoding': 'base64',
            },
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: {
              'com.mirth.connect.plugins.rulebuilder.RuleBuilderRule': [
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.3']['MSH.3.1'].toString()\" equals 'RIS'",
                  sequenceNumber: 0,
                  enabled: true,
                  field: "msg['MSH']['MSH.3']['MSH.3.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RIS'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.4']['MSH.4.1'].toString()\" equals 'HOSP1'",
                  sequenceNumber: 1,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.4']['MSH.4.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'HOSP1'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.1'].toString()\" equals 'ADT'",
                  sequenceNumber: 2,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'ADT'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.2'].toString()\" equals 'A08' or 'A23' or 'A28' or 'A29' or 'A31' or 'A18' or 'A30' or 'A34' or 'A35' or 'A36' or 'A39' or 'A40'",
                  sequenceNumber: 3,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.2'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: [
                      "'A08'",
                      "'A23'",
                      "'A28'",
                      "'A29'",
                      "'A31'",
                      "'A18'",
                      "'A30'",
                      "'A34'",
                      "'A35'",
                      "'A36'",
                      "'A39'",
                      "'A40'",
                    ],
                  },
                },
              ],
            },
          },
          transportName: 'TCP Listener',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 2,
            name: 'TO_RAD_RIS_HL7_ADT',
            properties: {
              '@class':
                'com.mirth.connect.connectors.vm.VmDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              channelId: 'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
              channelTemplate: '${message.encodedData}',
              mapVariables: null,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'Channel Writer',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274412917,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '28eda82e-7385-4be1-b540-ed4505f81192',
                name: 'HOSP1',
                channelIds: {
                  string: [
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '42e730bb-0721-435e-8dcf-d25d6d5d1dc6',
                    '688e7bf7-8024-4d38-81c8-6b32299577b8',
                    'e3f95224-23d7-4cdf-a0ba-966a4b233507',
                    '254e0bd3-4f5a-48de-a94b-7ee0f1db9d3b',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'e678dbf5-f021-43dc-84ae-967500d5c31a',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 0,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '13e403bb-cc6d-43ae-ba6c-beb0b2dcb9d3',
                name: 'RIS',
                channelIds: {
                  string: [
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
        nextMetaDataId: 2,
        name: 'FROM_HOSP1_RIS_HL7_ORM',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.tcp.TcpReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            listenerConnectorProperties: {
              '@version': '4.4.2',
              host: '0.0.0.0',
              port: 6661,
            },
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'Auto-generate (After source transformer)',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: true,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
            transmissionModeProperties: {
              '@class': 'com.mirth.connect.plugins.mllpmode.MLLPModeProperties',
              pluginPointName: 'MLLP',
              startOfMessageBytes: '0B',
              endOfMessageBytes: '1C0D',
              useMLLPv2: false,
              ackBytes: '06',
              nackBytes: 15,
              maxRetries: 2,
            },
            serverMode: true,
            remoteAddress: null,
            remotePort: null,
            overrideLocalBinding: false,
            reconnectInterval: 5000,
            receiveTimeout: 0,
            bufferSize: 65536,
            maxConnections: 10,
            keepConnectionOpen: true,
            dataTypeBinary: false,
            charsetEncoding: 'DEFAULT_ENCODING',
            respondOnNewConnection: 0,
            responseAddress: null,
            responsePort: null,
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundTemplate: {
              '@encoding': 'base64',
              $: 'TVNIfF5+XFwmfEVwaWN8MTMzNHxNSF9BdXNsYWJ8MTMzNHwyMDIyMDQwNjE2MTI1OHwxMTg4NHxPUk1eTzAxfDI2MTc1Mzh8UHwyLjQKUElEfDF8fDgzMTU1OV5eXjEzMzReTVJ+RTI2NDExMTheXl5FUElDXk1STnx8Qk5BTUVeVk5BTUVeXl5NUy58fDE5NDIwNTI4MDAwMDAwfEZ8fHwzNiBGYWtlIFJEXl5UVUxMQU1BUklORV5WSUNeMzA0M15BVVNUUkFMSUFeTHx8MDQwMyA5OTkgOTk5XlBeUEheXl5eMDQwMzk5OTk5OX5eTkVUXkludGVybmV0XmZha2VfZW1haWxAeTdtYWlsLmNvbXx8fDJ8fDc1MDcwNzh8MzEwNjg2OTU0MTF8fHx8fE58fHx8fHxOClBWMXx8SXxDSElIXkNISUgtMDA5XkNISUgtMDA5XlJNSENeXl5eODleXl5FUElDfHx8fEtBTktVXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI3NDY3MjVZXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5QUk9WfHwyMTQyNDIySF5QTmFtZV5KTmFtZV5eXl5eXjEzMzReXl5eUFJPVn5QQVBKXlBOYW1lXkpOYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI5OTA3NDJBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5QUk9WfkNBTURBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5NQUlOfEhIVXx8fHx8fHxLQU5LVV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eTUFJTn4yNzQ2NzI1WV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eUFJPVnx8NzUwNzA3OHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwyMDIyMDQwMzE3NTAwMHx8fHx8fDcxNTkxMTIwCk9SQ3xOV3wyMDE0NjI5NzBeRVBDfHw3MTU5MTEyMHx8fF5Ob3deXjIwMjIwNDA2MTMwMDAwXjIwMjIwNDA2XlJeXlN0YW5kaW5nXl5eXjF8fDIwMjIwNDA2OTk5MDMzfFRSSVBBWUFeRkFLRW5hbWVeU0lMTFluYW1lfHw1NTY3ODYxWF5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXlBST1Z+VFJJQV5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXk1BSU58NTA5MTAwMDY0Xl5eMjA5MV5eXl5eUk1IQyBISVRIfHx8fHxNSDQwOTc2XlJNSC1DLUwxLUhJVEgtT0ZGLVdTMDJeXjUwOTEwMDA2NF5STUhDIEhJVEh8fHx8fHwzMDUgR3JhdHRhbiBTdHJlZXReXk1FTEJPVVJORV5WSUNeMzAwMF5BVVNUUkFMSUFeQ3x8fHx8SQpPQlJ8MXwyMDE0NjI5NzBeRVBDfHxYQV5BTlRJIFhBXkFVU0xBQl5eQU5USSBYQXx8MjAyMjA0MDYxMzAwMDB8MjAyMjA0MDYxNjEyMDB8fHxGYWtlS1JeRmFrZV5GYWxzZUZOYW1lfFdhcmQgQ29sbGVjdHx8fHxCbG9vZCZCbG9vZF5eXlZFJkJsb29kLCBWZW5vdXN8NTU2Nzg2MVheRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5QUk9WflRSSUFeRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5NQUlOfHx8fE0yMjEyMzA1MjNCWnx8fHxMYWJ8fHxeTm93Xl4yMDIyMDQwNjEzMDAwMF4yMDIyMDQwNl5SXl5TdGFuZGluZ15eXl4xfHx8fHx8fHx8MjAyMjA0MDYxMzAwMDAKTlRFfDF8fFBsZWFzZSBzcGVjaWZ5IHR5cGUgb2YgaGVwYXJpbiBiZWluZyBhZG1pbmlzdGVyZWQgLSBVRkggKFN0YW5kYXJkIEhlcGFyaW4pIG9yIExNV0ggKENsZXhhbmUsIEZyYWdtaW4gZXRjLiktPmNsZXhhbmUKTlRFfDJ8fENsaW5pY2FsIG5vdGVzOi0+dGhlcmFwZXV0aWMgY2xleGFuZQpOVEV8M3x8SXMgdGhpcyBmb3IgcmVzZWFyY2g/LT5Obw==',
            },
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: {
              'com.mirth.connect.plugins.rulebuilder.RuleBuilderRule': [
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.3']['MSH.3.1'].toString()\" equals 'RIS'",
                  sequenceNumber: 0,
                  enabled: true,
                  field: "msg['MSH']['MSH.3']['MSH.3.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RIS'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.4']['MSH.4.1'].toString()\" equals 'HOSP1'",
                  sequenceNumber: 1,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.4']['MSH.4.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'HOSP1'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.1'].toString()\" equals 'ORM'",
                  sequenceNumber: 2,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'ORM'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.2'].toString()\" equals 'O01'",
                  sequenceNumber: 3,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.2'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'O01'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'PID\'].toString()" exists',
                  sequenceNumber: 4,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['PID'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'ORC\'].toString()" exists',
                  sequenceNumber: 5,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['ORC'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'OBR\'].toString()" exists',
                  sequenceNumber: 6,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['OBR'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
              ],
            },
          },
          transportName: 'TCP Listener',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'TO_RAD_RIS_HL7_ORM',
            properties: {
              '@class':
                'com.mirth.connect.connectors.vm.VmDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              channelId: '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
              channelTemplate: '${message.encodedData}',
              mapVariables: null,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'Channel Writer',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274448379,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '28eda82e-7385-4be1-b540-ed4505f81192',
                name: 'HOSP1',
                channelIds: {
                  string: [
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '42e730bb-0721-435e-8dcf-d25d6d5d1dc6',
                    '688e7bf7-8024-4d38-81c8-6b32299577b8',
                    'e3f95224-23d7-4cdf-a0ba-966a4b233507',
                    '254e0bd3-4f5a-48de-a94b-7ee0f1db9d3b',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'e678dbf5-f021-43dc-84ae-967500d5c31a',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 0,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '13e403bb-cc6d-43ae-ba6c-beb0b2dcb9d3',
                name: 'RIS',
                channelIds: {
                  string: [
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: '0df46292-7a4c-41de-a6a9-c679fec2d543',
        nextMetaDataId: 4,
        name: 'FROM_RAD_RIS_HL7_ORM',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.tcp.TcpReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            listenerConnectorProperties: {
              '@version': '4.4.2',
              host: '0.0.0.0',
              port: 6663,
            },
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'Auto-generate (After source transformer)',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: true,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
            transmissionModeProperties: {
              '@class': 'com.mirth.connect.plugins.mllpmode.MLLPModeProperties',
              pluginPointName: 'MLLP',
              startOfMessageBytes: '0B',
              endOfMessageBytes: '1C0D',
              useMLLPv2: false,
              ackBytes: '06',
              nackBytes: 15,
              maxRetries: 2,
            },
            serverMode: true,
            remoteAddress: null,
            remotePort: null,
            overrideLocalBinding: false,
            reconnectInterval: 5000,
            receiveTimeout: 0,
            bufferSize: 65536,
            maxConnections: 10,
            keepConnectionOpen: true,
            dataTypeBinary: false,
            charsetEncoding: 'DEFAULT_ENCODING',
            respondOnNewConnection: 0,
            responseAddress: null,
            responsePort: null,
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundTemplate: {
              '@encoding': 'base64',
              $: 'TVNIfF5+XFwmfEVwaWN8MTMzNHxNSF9BdXNsYWJ8MTMzNHwyMDIyMDQwNjE2MTI1OHwxMTg4NHxPUk1eTzAxfDI2MTc1Mzh8UHwyLjQKUElEfDF8fDgzMTU1OV5eXjEzMzReTVJ+RTI2NDExMTheXl5FUElDXk1STnx8Qk5BTUVeVk5BTUVeXl5NUy58fDE5NDIwNTI4MDAwMDAwfEZ8fHwzNiBGYWtlIFJEXl5UVUxMQU1BUklORV5WSUNeMzA0M15BVVNUUkFMSUFeTHx8MDQwMyA5OTkgOTk5XlBeUEheXl5eMDQwMzk5OTk5OX5eTkVUXkludGVybmV0XmZha2VfZW1haWxAeTdtYWlsLmNvbXx8fDJ8fDc1MDcwNzh8MzEwNjg2OTU0MTF8fHx8fE58fHx8fHxOClBWMXx8SXxDSElIXkNISUgtMDA5XkNISUgtMDA5XlJNSENeXl5eODleXl5FUElDfHx8fEtBTktVXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI3NDY3MjVZXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5QUk9WfHwyMTQyNDIySF5QTmFtZV5KTmFtZV5eXl5eXjEzMzReXl5eUFJPVn5QQVBKXlBOYW1lXkpOYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI5OTA3NDJBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5QUk9WfkNBTURBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5NQUlOfEhIVXx8fHx8fHxLQU5LVV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eTUFJTn4yNzQ2NzI1WV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eUFJPVnx8NzUwNzA3OHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwyMDIyMDQwMzE3NTAwMHx8fHx8fDcxNTkxMTIwCk9SQ3xOV3wyMDE0NjI5NzBeRVBDfHw3MTU5MTEyMHx8fF5Ob3deXjIwMjIwNDA2MTMwMDAwXjIwMjIwNDA2XlJeXlN0YW5kaW5nXl5eXjF8fDIwMjIwNDA2OTk5MDMzfFRSSVBBWUFeRkFLRW5hbWVeU0lMTFluYW1lfHw1NTY3ODYxWF5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXlBST1Z+VFJJQV5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXk1BSU58NTA5MTAwMDY0Xl5eMjA5MV5eXl5eUk1IQyBISVRIfHx8fHxNSDQwOTc2XlJNSC1DLUwxLUhJVEgtT0ZGLVdTMDJeXjUwOTEwMDA2NF5STUhDIEhJVEh8fHx8fHwzMDUgR3JhdHRhbiBTdHJlZXReXk1FTEJPVVJORV5WSUNeMzAwMF5BVVNUUkFMSUFeQ3x8fHx8SQpPQlJ8MXwyMDE0NjI5NzBeRVBDfHxYQV5BTlRJIFhBXkFVU0xBQl5eQU5USSBYQXx8MjAyMjA0MDYxMzAwMDB8MjAyMjA0MDYxNjEyMDB8fHxGYWtlS1JeRmFrZV5GYWxzZUZOYW1lfFdhcmQgQ29sbGVjdHx8fHxCbG9vZCZCbG9vZF5eXlZFJkJsb29kLCBWZW5vdXN8NTU2Nzg2MVheRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5QUk9WflRSSUFeRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5NQUlOfHx8fE0yMjEyMzA1MjNCWnx8fHxMYWJ8fHxeTm93Xl4yMDIyMDQwNjEzMDAwMF4yMDIyMDQwNl5SXl5TdGFuZGluZ15eXl4xfHx8fHx8fHx8MjAyMjA0MDYxMzAwMDAKTlRFfDF8fFBsZWFzZSBzcGVjaWZ5IHR5cGUgb2YgaGVwYXJpbiBiZWluZyBhZG1pbmlzdGVyZWQgLSBVRkggKFN0YW5kYXJkIEhlcGFyaW4pIG9yIExNV0ggKENsZXhhbmUsIEZyYWdtaW4gZXRjLiktPmNsZXhhbmUKTlRFfDJ8fENsaW5pY2FsIG5vdGVzOi0+dGhlcmFwZXV0aWMgY2xleGFuZQpOVEV8M3x8SXMgdGhpcyBmb3IgcmVzZWFyY2g/LT5Obw==',
            },
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: {
              'com.mirth.connect.plugins.rulebuilder.RuleBuilderRule': [
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.3']['MSH.3.1'].toString()\" equals 'RADRIS'",
                  sequenceNumber: 0,
                  enabled: true,
                  field: "msg['MSH']['MSH.3']['MSH.3.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RADRIS'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.4']['MSH.4.1'].toString()\" equals 'RADUAT'",
                  sequenceNumber: 1,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.4']['MSH.4.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RADUAT'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.1'].toString()\" equals 'ORM'",
                  sequenceNumber: 2,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'ORM'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.2'].toString()\" equals 'O01'",
                  sequenceNumber: 3,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.2'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'O01'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'PID\'].toString()" exists',
                  sequenceNumber: 4,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['PID'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'ORC\'].toString()" exists',
                  sequenceNumber: 5,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['ORC'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'OBR\'].toString()" exists',
                  sequenceNumber: 6,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['OBR'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
              ],
            },
          },
          transportName: 'TCP Listener',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: [
            {
              '@version': '4.4.2',
              metaDataId: 1,
              name: 'TO_HOSP1_RIS_HL7_ORM',
              properties: {
                '@class':
                  'com.mirth.connect.connectors.vm.VmDispatcherProperties',
                '@version': '4.4.2',
                pluginProperties: null,
                destinationConnectorProperties: {
                  '@version': '4.4.2',
                  queueEnabled: false,
                  sendFirst: false,
                  retryIntervalMillis: 10000,
                  regenerateTemplate: false,
                  retryCount: 0,
                  rotate: false,
                  includeFilterTransformer: false,
                  threadCount: 1,
                  threadAssignmentVariable: null,
                  validateResponse: false,
                  resourceIds: {
                    '@class': 'linked-hash-map',
                    entry: {
                      string: ['Default Resource', '[Default Resource]'],
                    },
                  },
                  queueBufferSize: 1000,
                  reattachAttachments: true,
                },
                channelId: '26c66487-229b-433a-8c37-b18afd854fd7',
                channelTemplate: '${message.encodedData}',
                mapVariables: null,
              },
              transformer: {
                '@version': '4.4.2',
                elements: null,
                inboundDataType: 'HL7V2',
                outboundDataType: 'HL7V2',
                inboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
                outboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
              },
              responseTransformer: {
                '@version': '4.4.2',
                elements: null,
                inboundDataType: 'HL7V2',
                outboundDataType: 'HL7V2',
                inboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
                outboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
              },
              filter: {
                '@version': '4.4.2',
                elements: null,
              },
              transportName: 'Channel Writer',
              mode: 'DESTINATION',
              enabled: true,
              waitForPrevious: true,
            },
            {
              '@version': '4.4.2',
              metaDataId: 2,
              name: 'TO_HOSP1_RIS_JSON',
              properties: {
                '@class':
                  'com.mirth.connect.connectors.vm.VmDispatcherProperties',
                '@version': '4.4.2',
                pluginProperties: null,
                destinationConnectorProperties: {
                  '@version': '4.4.2',
                  queueEnabled: false,
                  sendFirst: false,
                  retryIntervalMillis: 10000,
                  regenerateTemplate: false,
                  retryCount: 0,
                  rotate: false,
                  includeFilterTransformer: false,
                  threadCount: 1,
                  threadAssignmentVariable: null,
                  validateResponse: false,
                  resourceIds: {
                    '@class': 'linked-hash-map',
                    entry: {
                      string: ['Default Resource', '[Default Resource]'],
                    },
                  },
                  queueBufferSize: 1000,
                  reattachAttachments: true,
                },
                channelId: 'e3f95224-23d7-4cdf-a0ba-966a4b233507',
                channelTemplate: '${message.encodedData}',
                mapVariables: null,
              },
              transformer: {
                '@version': '4.4.2',
                elements: null,
                inboundDataType: 'HL7V2',
                outboundDataType: 'HL7V2',
                inboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
                outboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
              },
              responseTransformer: {
                '@version': '4.4.2',
                elements: null,
                inboundDataType: 'HL7V2',
                outboundDataType: 'HL7V2',
                inboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
                outboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
              },
              filter: {
                '@version': '4.4.2',
                elements: null,
              },
              transportName: 'Channel Writer',
              mode: 'DESTINATION',
              enabled: true,
              waitForPrevious: false,
            },
            {
              '@version': '4.4.2',
              metaDataId: 3,
              name: 'TO_RAD_RIS_JSON',
              properties: {
                '@class':
                  'com.mirth.connect.connectors.vm.VmDispatcherProperties',
                '@version': '4.4.2',
                pluginProperties: null,
                destinationConnectorProperties: {
                  '@version': '4.4.2',
                  queueEnabled: false,
                  sendFirst: false,
                  retryIntervalMillis: 10000,
                  regenerateTemplate: false,
                  retryCount: 0,
                  rotate: false,
                  includeFilterTransformer: false,
                  threadCount: 1,
                  threadAssignmentVariable: null,
                  validateResponse: false,
                  resourceIds: {
                    '@class': 'linked-hash-map',
                    entry: {
                      string: ['Default Resource', '[Default Resource]'],
                    },
                  },
                  queueBufferSize: 1000,
                  reattachAttachments: true,
                },
                channelId: '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                channelTemplate: '${message.encodedData}',
                mapVariables: null,
              },
              transformer: {
                '@version': '4.4.2',
                elements: null,
                inboundDataType: 'HL7V2',
                outboundDataType: 'HL7V2',
                inboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
                outboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
              },
              responseTransformer: {
                '@version': '4.4.2',
                elements: null,
                inboundDataType: 'HL7V2',
                outboundDataType: 'HL7V2',
                inboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
                outboundProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                  '@version': '4.4.2',
                  serializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                    '@version': '4.4.2',
                    handleRepetitions: true,
                    handleSubcomponents: true,
                    useStrictParser: false,
                    useStrictValidation: false,
                    stripNamespaces: false,
                    segmentDelimiter: '\\r',
                    convertLineBreaks: true,
                  },
                  deserializationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                    '@version': '4.4.2',
                    useStrictParser: false,
                    useStrictValidation: false,
                    segmentDelimiter: '\\r',
                  },
                  batchProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                    '@version': '4.4.2',
                    splitType: 'MSH_Segment',
                    batchScript: null,
                  },
                  responseGenerationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                    '@version': '4.4.2',
                    segmentDelimiter: '\\r',
                    successfulACKCode: 'AA',
                    successfulACKMessage: null,
                    errorACKCode: 'AE',
                    errorACKMessage: 'An Error Occurred Processing Message.',
                    rejectedACKCode: 'AR',
                    rejectedACKMessage: 'Message Rejected.',
                    msh15ACKAccept: false,
                    dateFormat: 'yyyyMMddHHmmss.SSS',
                  },
                  responseValidationProperties: {
                    '@class':
                      'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                    '@version': '4.4.2',
                    successfulACKCode: 'AA,CA',
                    errorACKCode: 'AE,CE',
                    rejectedACKCode: 'AR,CR',
                    validateMessageControlId: true,
                    originalMessageControlId: 'Destination_Encoded',
                    originalIdMapVariable: null,
                  },
                },
              },
              filter: {
                '@version': '4.4.2',
                elements: null,
              },
              transportName: 'Channel Writer',
              mode: 'DESTINATION',
              enabled: true,
              waitForPrevious: true,
            },
          ],
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274343635,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '517f380c-bd32-4011-88e8-4f333470f116',
                name: 'RAD',
                channelIds: {
                  string: [
                    '04d11dd3-ec87-4ad2-b3f4-85026f4e1dfa',
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'e1b3ea63-2971-4191-a4e0-439cc7535275',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 0,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '13e403bb-cc6d-43ae-ba6c-beb0b2dcb9d3',
                name: 'RIS',
                channelIds: {
                  string: [
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
        nextMetaDataId: 2,
        name: 'FROM_RAD_RIS_HL7_ORU',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.tcp.TcpReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            listenerConnectorProperties: {
              '@version': '4.4.2',
              host: '0.0.0.0',
              port: 6664,
            },
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'Auto-generate (After source transformer)',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: true,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
            transmissionModeProperties: {
              '@class': 'com.mirth.connect.plugins.mllpmode.MLLPModeProperties',
              pluginPointName: 'MLLP',
              startOfMessageBytes: '0B',
              endOfMessageBytes: '1C0D',
              useMLLPv2: false,
              ackBytes: '06',
              nackBytes: 15,
              maxRetries: 2,
            },
            serverMode: true,
            remoteAddress: null,
            remotePort: null,
            overrideLocalBinding: false,
            reconnectInterval: 5000,
            receiveTimeout: 0,
            bufferSize: 65536,
            maxConnections: 10,
            keepConnectionOpen: true,
            dataTypeBinary: false,
            charsetEncoding: 'DEFAULT_ENCODING',
            respondOnNewConnection: 0,
            responseAddress: null,
            responsePort: null,
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundTemplate: {
              '@encoding': 'base64',
              $: 'TVNIfF5+XFwmfEVwaWN8MTMzNHxNSF9BdXNsYWJ8MTMzNHwyMDIyMDQwNjE2MTI1OHwxMTg4NHxPUk1eTzAxfDI2MTc1Mzh8UHwyLjQKUElEfDF8fDgzMTU1OV5eXjEzMzReTVJ+RTI2NDExMTheXl5FUElDXk1STnx8Qk5BTUVeVk5BTUVeXl5NUy58fDE5NDIwNTI4MDAwMDAwfEZ8fHwzNiBGYWtlIFJEXl5UVUxMQU1BUklORV5WSUNeMzA0M15BVVNUUkFMSUFeTHx8MDQwMyA5OTkgOTk5XlBeUEheXl5eMDQwMzk5OTk5OX5eTkVUXkludGVybmV0XmZha2VfZW1haWxAeTdtYWlsLmNvbXx8fDJ8fDc1MDcwNzh8MzEwNjg2OTU0MTF8fHx8fE58fHx8fHxOClBWMXx8SXxDSElIXkNISUgtMDA5XkNISUgtMDA5XlJNSENeXl5eODleXl5FUElDfHx8fEtBTktVXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI3NDY3MjVZXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5QUk9WfHwyMTQyNDIySF5QTmFtZV5KTmFtZV5eXl5eXjEzMzReXl5eUFJPVn5QQVBKXlBOYW1lXkpOYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI5OTA3NDJBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5QUk9WfkNBTURBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5NQUlOfEhIVXx8fHx8fHxLQU5LVV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eTUFJTn4yNzQ2NzI1WV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eUFJPVnx8NzUwNzA3OHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwyMDIyMDQwMzE3NTAwMHx8fHx8fDcxNTkxMTIwCk9SQ3xOV3wyMDE0NjI5NzBeRVBDfHw3MTU5MTEyMHx8fF5Ob3deXjIwMjIwNDA2MTMwMDAwXjIwMjIwNDA2XlJeXlN0YW5kaW5nXl5eXjF8fDIwMjIwNDA2OTk5MDMzfFRSSVBBWUFeRkFLRW5hbWVeU0lMTFluYW1lfHw1NTY3ODYxWF5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXlBST1Z+VFJJQV5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXk1BSU58NTA5MTAwMDY0Xl5eMjA5MV5eXl5eUk1IQyBISVRIfHx8fHxNSDQwOTc2XlJNSC1DLUwxLUhJVEgtT0ZGLVdTMDJeXjUwOTEwMDA2NF5STUhDIEhJVEh8fHx8fHwzMDUgR3JhdHRhbiBTdHJlZXReXk1FTEJPVVJORV5WSUNeMzAwMF5BVVNUUkFMSUFeQ3x8fHx8SQpPQlJ8MXwyMDE0NjI5NzBeRVBDfHxYQV5BTlRJIFhBXkFVU0xBQl5eQU5USSBYQXx8MjAyMjA0MDYxMzAwMDB8MjAyMjA0MDYxNjEyMDB8fHxGYWtlS1JeRmFrZV5GYWxzZUZOYW1lfFdhcmQgQ29sbGVjdHx8fHxCbG9vZCZCbG9vZF5eXlZFJkJsb29kLCBWZW5vdXN8NTU2Nzg2MVheRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5QUk9WflRSSUFeRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5NQUlOfHx8fE0yMjEyMzA1MjNCWnx8fHxMYWJ8fHxeTm93Xl4yMDIyMDQwNjEzMDAwMF4yMDIyMDQwNl5SXl5TdGFuZGluZ15eXl4xfHx8fHx8fHx8MjAyMjA0MDYxMzAwMDAKTlRFfDF8fFBsZWFzZSBzcGVjaWZ5IHR5cGUgb2YgaGVwYXJpbiBiZWluZyBhZG1pbmlzdGVyZWQgLSBVRkggKFN0YW5kYXJkIEhlcGFyaW4pIG9yIExNV0ggKENsZXhhbmUsIEZyYWdtaW4gZXRjLiktPmNsZXhhbmUKTlRFfDJ8fENsaW5pY2FsIG5vdGVzOi0+dGhlcmFwZXV0aWMgY2xleGFuZQpOVEV8M3x8SXMgdGhpcyBmb3IgcmVzZWFyY2g/LT5Obw==',
            },
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: {
              'com.mirth.connect.plugins.rulebuilder.RuleBuilderRule': [
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.3']['MSH.3.1'].toString()\" equals 'RADRIS'",
                  sequenceNumber: 0,
                  enabled: true,
                  field: "msg['MSH']['MSH.3']['MSH.3.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RADRIS'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.4']['MSH.4.1'].toString()\" equals 'RADUAT'",
                  sequenceNumber: 1,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.4']['MSH.4.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RADUAT'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.1'].toString()\" equals 'ORU'",
                  sequenceNumber: 2,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'ORU'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.2'].toString()\" equals 'R01'",
                  sequenceNumber: 3,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.2'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'R01'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'PID\'].toString()" exists',
                  sequenceNumber: 4,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['PID'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'ORC\'].toString()" exists',
                  sequenceNumber: 5,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['ORC'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'OBR\'].toString()" exists',
                  sequenceNumber: 6,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['OBR'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
              ],
            },
          },
          transportName: 'TCP Listener',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'TO_HOSP_RIS_HL7_ORU',
            properties: {
              '@class':
                'com.mirth.connect.connectors.vm.VmDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              channelId: 'a93a784d-d0a5-43f3-8cce-cc03538542b8',
              channelTemplate: '${message.encodedData}',
              mapVariables: null,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'Channel Writer',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274375948,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '517f380c-bd32-4011-88e8-4f333470f116',
                name: 'RAD',
                channelIds: {
                  string: [
                    '04d11dd3-ec87-4ad2-b3f4-85026f4e1dfa',
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'e1b3ea63-2971-4191-a4e0-439cc7535275',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 0,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '13e403bb-cc6d-43ae-ba6c-beb0b2dcb9d3',
                name: 'RIS',
                channelIds: {
                  string: [
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: '254e0bd3-4f5a-48de-a94b-7ee0f1db9d3b',
        nextMetaDataId: 2,
        name: 'TO_HOSP1_PACS_DICOM',
        description: null,
        revision: 2,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.vm.VmReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'None',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundDataType: 'DICOM',
            outboundDataType: 'DICOM',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
              '@version': '4.4.2',
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
              '@version': '4.4.2',
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: null,
          },
          transportName: 'Channel Reader',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'Destination 1',
            properties: {
              '@class':
                'com.mirth.connect.connectors.dimse.DICOMDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              host: '127.0.0.1',
              port: 104,
              applicationEntity: null,
              localHost: null,
              localPort: null,
              localApplicationEntity: null,
              template: '${DICOMMESSAGE}',
              acceptTo: 5000,
              async: 0,
              bufSize: 1,
              connectTo: 0,
              priority: 'med',
              passcode: null,
              pdv1: false,
              rcvpdulen: 16,
              reaper: 10,
              releaseTo: 5,
              rspTo: 60,
              shutdownDelay: 1000,
              sndpdulen: 16,
              soCloseDelay: 50,
              sorcvbuf: 0,
              sosndbuf: 0,
              stgcmt: false,
              tcpDelay: true,
              ts1: false,
              uidnegrsp: false,
              username: null,
              keyPW: null,
              keyStore: null,
              keyStorePW: null,
              noClientAuth: true,
              nossl2: true,
              tls: 'notls',
              trustStore: null,
              trustStorePW: null,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'DICOM',
              outboundDataType: 'DICOM',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
                '@version': '4.4.2',
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
                '@version': '4.4.2',
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'DICOM',
              outboundDataType: 'DICOM',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
                '@version': '4.4.2',
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.dicom.DICOMDataTypeProperties',
                '@version': '4.4.2',
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'DICOM Sender',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            className:
              'com.mirth.connect.server.attachments.dicom.DICOMAttachmentHandlerProvider',
            type: 'DICOM',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706273447352,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: {
              id: '28eda82e-7385-4be1-b540-ed4505f81192',
              name: 'HOSP1',
              channelIds: {
                string: [
                  'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                  '26c66487-229b-433a-8c37-b18afd854fd7',
                  '42e730bb-0721-435e-8dcf-d25d6d5d1dc6',
                  '688e7bf7-8024-4d38-81c8-6b32299577b8',
                  'e3f95224-23d7-4cdf-a0ba-966a4b233507',
                  '254e0bd3-4f5a-48de-a94b-7ee0f1db9d3b',
                  '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                  'e678dbf5-f021-43dc-84ae-967500d5c31a',
                  '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                ],
              },
              backgroundColor: {
                red: 0,
                green: 255,
                blue: 0,
                alpha: 255,
              },
            },
          },
        },
      },
      {
        '@version': '4.4.2',
        id: '26c66487-229b-433a-8c37-b18afd854fd7',
        nextMetaDataId: 2,
        name: 'TO_HOSP1_RIS_HL7_ORM',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.vm.VmReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'd1',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundTemplate: {
              '@encoding': 'base64',
              $: 'TVNIfF5+XFx8R0VOT1ZJQ3xHT1N8RVBJQ3wxMzM0fDIwMjMwNDAzMTY1MDI1KzEwMDB8fE9STV5PMDF8NDYwM2ZlZjctNDJhOS00Yjk1LTkwNDEtZTRiZGRmZWVlZmMxfHwyLjQNUElEfDF8fDgzMTU1OV5eXjEzMzReTVJ+RTI2NDExMTheXl5FUElDXk1STnx8Qk5BTUVeVk5BTUVeXl5NUy58fDE5NDIwNTI4fGZlbWFsZXx8fDM2IEZha2UgUkReXlRVTExBTUFSSU5FXlZJQ14zMDQzXkFVU1RSQUxJQV5MfHwwNDAzIDk5OSA5OTleUF5QSF5eXl4wNDAzOTk5OTk5fl5ORVReSW50ZXJuZXReZmFrZV9lbWFpbEB5N21haWwuY29tfHx8Mnx8NzUwNzA3OHwzMTA2ODY5NTQxMXx8fHx8Tnx8fHx8fE4NUFYxfHxJfENISUheQ0hJSC0wMDleQ0hJSC0wMDleUk1IQ15eXl44OV5eXkVQSUN8fHx8S0FOS1VeRFJfU25hbWVeRFJfRm5hbWVeXl5eXl4xMzM0Xl5eXk1BSU5+Mjc0NjcyNVleRFJfU25hbWVeRFJfRm5hbWVeXl5eXl4xMzM0Xl5eXlBST1Z8fDIxNDI0MjJIXlBOYW1lXkpOYW1lXl5eXl5eMTMzNF5eXl5QUk9WflBBUEpeUE5hbWVeSk5hbWVeXl5eXl4xMzM0Xl5eXk1BSU5+Mjk5MDc0MkFeQ05hbWVeRE5hbWVeXl5eXl4xMzM0Xl5eXlBST1Z+Q0FNREFeQ05hbWVeRE5hbWVeXl5eXl4xMzM0Xl5eXk1BSU58SEhVfHx8fHx8fEtBTktVXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI3NDY3MjVZXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5QUk9WfHw3NTA3MDc4fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fDIwMjIwNDAzMTc1MDAwfHx8fHx8NzE1OTExMjANT1JDfFNDfDIwMTQ2Mjk3MF5FUEN8fDcxNTkxMTIwfHx8Xk5vd15eMjAyMjA0MDYxMzAwMDBeMjAyMjA0MDZeUl5eU3RhbmRpbmdeXl5eMXx8MjAyMjA0MDY5OTkwMzN8VFJJUEFZQV5GQUtFbmFtZV5TSUxMWW5hbWV8fDU1Njc4NjFYXkZBS0VuYW1lXlNJTExZbmFtZV5eXl5eXjEzMzReXl5eUFJPVn5UUklBXkZBS0VuYW1lXlNJTExZbmFtZV5eXl5eXjEzMzReXl5eTUFJTnw1MDkxMDAwNjReXl4yMDkxXl5eXl5STUhDIEhJVEh8fHx8fE1INDA5NzZeUk1ILUMtTDEtSElUSC1PRkYtV1MwMl5eNTA5MTAwMDY0XlJNSEMgSElUSHx8fHx8fDMwNSBHcmF0dGFuIFN0cmVldF5eTUVMQk9VUk5FXlZJQ14zMDAwXkFVU1RSQUxJQV5DfHx8fHxJDU9CUnwxfDIwMTQ2Mjk3MF5FUEN8XnxYQV5BTlRJIFhBXkFVU0xBQl5eQU5USSBYQXx8MjAyMjA0MDYxMzAwMDB8MjAyMjAxMDEwMTAwMDArMTE6MDB8fHxGYWtlS1JeRmFrZV5GYWxzZUZOYW1lfFdhcmQgQ29sbGVjdHx8fHxCXl5eVkUmQmxvb2QsIFZlbm91c3w1NTY3ODYxWF5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXlBST1Z+VFJJQV5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXk1BSU58fHx8fHx8fExhYnx8fF5Ob3deXjIwMjIwNDA2MTMwMDAwXjIwMjIwNDA2XlJeXlN0YW5kaW5nXl5eXjF8fHx8fHx8fHwyMDIyMDQwNjEzMDAwMA==',
            },
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: {
              'com.mirth.connect.plugins.rulebuilder.RuleBuilderRule': [
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.5']['MSH.5.1'].toString()\" equals 'RIS'",
                  sequenceNumber: 0,
                  enabled: true,
                  field: "msg['MSH']['MSH.5']['MSH.5.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RIS'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.6']['MSH.6.1'].toString()\" equals 'HOSP1'",
                  sequenceNumber: 1,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.6']['MSH.6.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'HOSP1'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.1'].toString()\" equals 'ORM'",
                  sequenceNumber: 2,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'ORM'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.2'].toString()\" equals 'O01'",
                  sequenceNumber: 3,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.2'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'O01'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'PID\'].toString()" exists',
                  sequenceNumber: 4,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['PID'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
              ],
            },
          },
          transportName: 'Channel Reader',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'HOSP1 RIS ORM Feed',
            properties: {
              '@class':
                'com.mirth.connect.connectors.tcp.TcpDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: true,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              transmissionModeProperties: {
                '@class':
                  'com.mirth.connect.plugins.mllpmode.MLLPModeProperties',
                pluginPointName: 'MLLP',
                startOfMessageBytes: '0B',
                endOfMessageBytes: '1C0D',
                useMLLPv2: false,
                ackBytes: '06',
                nackBytes: 15,
                maxRetries: 2,
              },
              serverMode: false,
              remoteAddress: '127.0.0.1',
              remotePort: 6660,
              overrideLocalBinding: false,
              localAddress: '0.0.0.0',
              localPort: 0,
              sendTimeout: 5000,
              bufferSize: 65536,
              maxConnections: 10,
              keepConnectionOpen: false,
              checkRemoteHost: false,
              responseTimeout: 5000,
              ignoreResponse: false,
              queueOnResponseTimeout: true,
              dataTypeBinary: false,
              charsetEncoding: 'DEFAULT_ENCODING',
              template: '${message.encodedData}',
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'TCP Sender',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274202673,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '28eda82e-7385-4be1-b540-ed4505f81192',
                name: 'HOSP1',
                channelIds: {
                  string: [
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '42e730bb-0721-435e-8dcf-d25d6d5d1dc6',
                    '688e7bf7-8024-4d38-81c8-6b32299577b8',
                    'e3f95224-23d7-4cdf-a0ba-966a4b233507',
                    '254e0bd3-4f5a-48de-a94b-7ee0f1db9d3b',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'e678dbf5-f021-43dc-84ae-967500d5c31a',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 0,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '13e403bb-cc6d-43ae-ba6c-beb0b2dcb9d3',
                name: 'RIS',
                channelIds: {
                  string: [
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: 'a93a784d-d0a5-43f3-8cce-cc03538542b8',
        nextMetaDataId: 2,
        name: 'TO_HOSP1_RIS_HL7_ORU',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.vm.VmReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'd1',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundTemplate: {
              '@encoding': 'base64',
              $: 'TVNIfF5+XCZ8R0VOT1ZJQ3xHT1N8RVBJQ3wxMzM0fDIwMjMwMzA2MTAxODM3KzExMDB8fE9SVV5SMDF8fHwyLjR8fHx8fHx8ZW4NUElEfDF8fE0wMDdeXl5NSTZeU0F+RTEyMzReXl5FUElDXk1STnx8Qk9ORF5KQU1FU15KQU1FU15NU2NeTVIuXl5EfHwxOTYyMDIwMXxNfHx8MzYgRmFrZSBSRF5eVFVMTEFNQVJJTkVeVklDXjMwNDNeQVVTVFJBTElBXkgNT1JDfFJFfEIwMDAwMV5FUEN8Xnx8Q018fF5eXjIwMjMwMjAxfHwyMDE1MDIwODA1MjgxNy4wMDArMTE6MDB8fHw1NTY3ODYxWF5GQUtFbmFtZV5TSUxMWW5hbWVeXl5Ecg1PQlJ8MXxeRVBDfF58WEFeQU5USSBYQV5BVVNMQUJ8fHwyMDE1MDIwODA1MjgxNy4wMDArMTE6MDB8fHx8fHx8MjAyMS0wNi0yNCAxMTozOXwmJnw1NTY3ODYxWF5GQUtFbmFtZV5TSUxMWW5hbWVeXl5Ecl5eXl5eXl5eRE9IfHx8fHx8fHx8Rnx8Xl5efHx8fHwNT0JYfDF8RUR8UkVQT1JUXk1hc3RlciBITDcgZ2VuZXRpYyB2YXJpYW50IHJlcG9ydGluZyBwYW5lbHwxfF5eUERGXkJhc2U2NF5KVkJFUmkweExqY05DaVcxdGJXMURRb3hJREFnYjJKcURRbzhQQzlVZVhCbEwwTmhkR0ZzYjJjdlVHRm5aWE1nTWlBd0lGSXZUR0Z1WnlobGJpMUJWU2tnTDFOMGNuVmpkRlJ5WldWU2IyOTBJREl5SURBZ1VpOU5ZWEpyU1c1bWJ6dzhMMDFoY210bFpDQjBjblZsUGo0dlRXVjBZV1JoZEdFZ056Y2dNQ0JTTDFacFpYZGxjbEJ5WldabGNtVnVZMlZ6SURjNElEQWdVajQrRFFwbGJtUnZZbW9OQ2pJZ01DQnZZbW9OQ2p3OEwxUjVjR1V2VUdGblpYTXZRMjkxYm5RZ01pOUxhV1J6V3lBeklEQWdVaUF4T1NBd0lGSmRJRDQrRFFwbGJtUnZZbW9OQ2pNZ01DQnZZbW9OQ2p3OEwxUjVjR1V2VUdGblpTOVFZWEpsYm5RZ01pQXdJRkl2VW1WemIzVnlZMlZ6UER3dlJtOXVkRHc4TDBZeElEVWdNQ0JTTDBZeUlEa2dNQ0JTTDBZeklERXhJREFnVWo0K0wwVjRkRWRUZEdGMFpUdzhMMGRUTnlBM0lEQWdVaTlIVXpnZ09DQXdJRkkrUGk5WVQySnFaV04wUER3dlNXMWhaMlV4TmlBeE5pQXdJRkl2VFdWMFlURTRJREU0SURBZ1VqNCtMMUJ5YjJOVFpYUmJMMUJFUmk5VVpYaDBMMGx0WVdkbFFpOUpiV0ZuWlVNdlNXMWhaMlZKWFNBK1BpOU5aV1JwWVVKdmVGc2dNQ0F3SURVNU5TNHpNaUE0TkRFdU9USmRJQzlEYjI1MFpXNTBjeUEwSURBZ1VpOUhjbTkxY0R3OEwxUjVjR1V2UjNKdmRYQXZVeTlVY21GdWMzQmhjbVZ1WTNrdlExTXZSR1YyYVdObFVrZENQajR2VkdGaWN5OVRMMU4wY25WamRGQmhjbVZ1ZEhNZ01ENCtEUXBsYm1Sdlltb05DalFnTUNCdlltb05Danc4TDBacGJIUmxjaTlHYkdGMFpVUmxZMjlrWlM5TVpXNW5kR2dnTlRJM01ENCtEUXB6ZEhKbFlXME5DbmljelYxYmM5dTRrbjVQVmY0REg2MVRNVTBRQUM5VFU2cXluY25NYkcxcWM1THM3RVBPZWFBcFd0YUpMV3BFeWg1WDdZL2Y3c2FGcEVoWWprWDY3TlJFbGlpUTNRQWFmZm02QVoyZGIrdlZkWmJYM3M4L241M1hkWmJmRkF2djI5bEZXZGZsM1QvUHZqNXVpck5QMlhLMXp1cFZ1VDc3c3J1cThkS0hzcXlMN1h6dVhieS85UDU4K3lid0Evd3ZTV0xtQlo1TXBjOURMeEhNVDBOdlc3eDk4ejkvODladjMxeDhmZnZtN0FQekVsK0czdGZydDIrd2NlQXhUNFIrNUlXeEgwYkMrM29Ialg3OUVudkxDcC9MNFFsTHVwSzBydno2OXMyM2s0L0Y3RlNjM001TytjblZUSjZVOEc4SC83WjRkUTF2NE92b3hNT3ZmNTJ4V0gxYzY0WjNxeHhlSzl2aXQ1bUFCdkZKaGxkdVp5dzRxZkV4TjlESXcwL25NMDJKWGxiNGtxbm5zZlFreDNkNE56M3FmNzNaUDcydi8vSDJ6Uy9RM2IrL2ZmT0R3eFAyaDRlbHFSK3g5Z0RaY1drTlI3dVRNWFFTM3Z3QjdBT3ZJWEE0TWtzaEQzM0dEN0UwK2tpRVhQanlJTmtLK3Y4SS8yaDZhNXdUR3BhNzBibUptQzhPeklzSE5EaURiL052SnorTlB4NVI1SWNISmVNWEVBT1VpUnNqNFBoQkN5Mk5DMVBpdTdialJUSi9qeDlYTThiVVRaNlNmUGlvMjBFVHVuOEp0OUtpeStCTmJWdVZpdEl4UFI1UUZUem1maEpQSzNnRFpDVUwvSDhEVlJINWNUZ1ZXV2pyL2ZMeDB2UE9QcUg2LzNqNSszc3ZlSmxPQng2Rm4wWjlwUjZ6eU9lSlpqMlFJb1gxRUtZSnZNbzQ4cmJMd2N1ZmxUNHIxaWhMNVIrclk3VlhuemZHWWF5UFllN1lsVHpBa3BDK09HckFxc2VxTG81VmNuM0dRcmdrNDVjemhob3daR3djRFRqQUhrd2xVUDEvTlpjaytsRVMrVXk4aUtOZjFqZWtUOWRrdTRzN3RSTHE4V1V1amZ3MFBvYlRDZVl6NEg3S2orSHBmcFY1cTNXTlkxY3M4WFZMenV2b25IS1oraklkY2ZSNjJwaTlWQnV6MkEvRWdFaUMrOFFWcDhCSEhJVHdtcVJDTWRtNW92aTd5UEx2eTIyNW00RWhYeHc1Zm4yV0dPYytGei9NMUtGQkMxODhhR3g0MEZDemFQNklKZUlDQXdJUEYybGViZ3QwaGZTSHUwMjVMbVlZZ0RCY3NaRzZYbDdQRXZWT2hSVndoemg2N2ZUNVpaSDBvOURCOFVkeWhHK0JwYXR5eGs5MlcrQ1RoY0JGQktFRE1BVktCcXd0QkVZVnNrN01icmF6OUtSY3d2VXRSVHgzOEpHK0NBTzR4cUlacDl1cFQrWDQzZUV5OWxucTZJNWlJVlVEQ2ZRZndNbk5HdFlWVC9iakNtTSs3TU1HQjRBMEt2U2RHbm5LZFRVdGM3cUoydElMS0k1SjVrckpWaEQ2YWRMckcxcHltaExMQ2c3ek5YVnBhK2FnSTBudzlrNEZwWERIT29PaFdSWXp2RGRXODlyMGxMcDNiVC9tdHhRalFvQ3dBaEo1ZG10RWx1NWZselBOQURiSjBhMm5MeGY0a0t6T2ZJcVBSNTkzR0JWVXJNT0Q4L1VHWTNWdldRS3Y4WFBtZm9FOXFTQW1rU2ZMOVV4ZnpQRGR3bHNVcHYvM2hSM1p6SVBWcWlZZ3Z6R2pjSXYzMDFwNG5FZ1laQUpoZnRUckwwbHNWc09VeFdyMnJVQW9DY2htTFVXREl3SDZHdG1WMEwzZEdqclBwRnErRzV6aHRWZmpnMXB5OCtSRXExR29sRExUNjJpOTFPdCtzeTN6b3FxVUZqbG1TUGlRRUlEQmpXTEhvUHdjQkJkc1BycmNjYkEycVdzZUpwQnpNSUJ1ZWpUZTJYZWF0S1VSMjBXRzgxWmJLYVdGVExOYmRuU0ZVUTc2dHFyNEUxVSt6VFMyeTF2elNLb2pQc2xJMU9rNk5udW5OTVEwZ2g1SEdPb01kdmdHM0kzbERjcHNzMHhKS1QxV3lGdjF6bW91WXRVS1pySGRvQlhlam05VHdjc0RMZVRndWFneklLODBTTG1uWEFiMTBkanNoV0hxSjlMRkhzbUlVOFdUM0JRYk5QdmJlbmJzZEE4dTRnQUNET2JnYnFKRnpMZ2ZjTmVBVExDSXdUdGg3Z25vU2dKb3pQdlZqRXpTNkh6RTNKZXVvWjZpMzBBb2NvNXpWZVE3MUZSS3hEeFVXOHlvcmNwWTEzS2JMY2tPK2VQckdXQXJjV3FhUXlFRUh6bUVrT2pJc2g0YkgwcktLa2o2Vno3TW9wT3VXczY4cllKZ3dYRXBqUk5PMXIwYVVqTjA4elc0Q0pIMkJldlZmV1BtMFZqdjBGU3JLYkhXUXJ1SFVkT3FJSXNPbWxaZk94ZzRrTS9aZFNBVWcxYzdiVkt3ZzViR3BDR1FTSmpQRXRlSXR3S2RQL1J3SHdzdTlsbVFJY2M3SEN4TVpWTUYrUktISTRsM2JWZnhoaXpDallkQlQ5QUtlZ29LZXNnTkxCWkdIRXUwRk1VMnM5a3hhL1NxUnY2OGdwYjZWdVhLSkRyTEtsNkU1MEcwTnR4M0ZzZENQcVB2VVE4c2dodFErWXJZajJXdjgyeDhhNXNtZnBxNkJ0c2ZWQ3RmTnRuYWFoWng5cC9aZXVuQkFKLys5NWZaZUdxR0Ird0p4b2IxWFljeE9SRmpTamdSUXU2ejlTcXJNUkZnQ0lTTGhmRlhZeEtEdStpa1J6N3NIdUpBUzJoOGg0Q0ZrUzlkZkp5T1R3NkNwekFjcHVlZEJqNURkRDcvaGxEWStLUlRCQkpmcjZ1d3lnS25WR2NUMEV1Zm9EZEIvMlRveDRtTDNuZENVdGJXTElDSnNjNWRjZGRGcDVwb0ZiMkZhb2NXWktOY21WaGRyL0NMSHdLaER1RVM4T2thN2xmT2t1V25VTDdTNkxaWGdOUy80dFFJRUwzRVFROFRiVEpJYVpYVjVmaWtKZmZaSy9aVWdnZnYwQ2ZmekhReUMxU2dSbTBRUVBSdHlHTzlKWUF5Z3UrbThydmdlaGozL1M0ZDRLelc0T0l2dldVQlFzemt2aFMzMFJ6azNSOEFYWHJCU1RTZWNXWXlJR3hqdUE4ZmJtY3NPU24rd2pWNXRkS0R1U0pQSHRoOHRENmZ0bWZlOXduQURZRzVRQWQveGFPZDc2dzJNZVhXakRERkhvM3ZpMEpRWG52bTJzMEVBWGlRRXRZeHpPd1V3SU1DT2h3QytJaEtlZC81LzhrbXBMYkxESlJ0ZkZKbEhSM2FjdWZ6YksxeDN2d0dOWEJaRmQxOHo4bysxaVpWYWtMa0oxbG9JZ1hIcXUvalYrVmQwZVExdGdyL1JJbG9WdjllMG1Oc2pJdkJwVmc0K1BzNUNNTHorYW1BdnlJSkFzbm1ITjdLTUFoNE9vL3c2dVZjNHA4b0NDNGllaXVqMFRFeEZrRlQxd2hPa1lZVWJuSTBDenNVclh4UDZzWlhIMEdDNVEwT1JnWU54eFhsaXF3L294d2M0N1lRbnRYMld5WlRKVXo0SVgrOUNlTXM5cmwwMFROT0dCTWQreFVkY01JZUtHRzIvWDZ0U21vMXd2V01HRG1lS2hRRjM0bTVGdXBCczV1TUhCT0xPQm5DTElaaTRqMUxTLzd3ZzAyUkRIblYzWm5ZbjZjbUs5cEtmajdhN0dlckhTYWRSMStWNEVmRzNOVi94YzM0UktQWWoyTVgwUW5TTWpHV3JMam80YkRUTUY5WldEZXJTNVcvMGd1c3FMeC9uS2dhYnRIa1pJMVhtV0dGaVhkNWF5RGp2YkNwRWFLaWJ0ZHpmTUhNK2ZaK2xXT0ZDbW01UmdsK3hWWTZZemlOQVkra0wvcDFISjlSTXp4bVdoaWZCcHpodTkrd2ViWFJ1REppeXRUdHBoOGZkZEdHcm9Xb2JyemZDcE5EMURYOW8wKzJTUHdvZFhYd25WbEtVMWtMbERVV3U4aFBJZHZjRDUzZFBVZkZ0S3RxU2wxa1JrS3RMOWt1TldycXBqNlR4QmRtMG1nVjVEZmVoeXp2eHgwVFJKcmtycnpXOEFtWitFSG9vcWNLZUJyTVhXR0RaZ0dUNHJpaWhHM1daSlZwdUthcVNoRXlIRXBqRkgvVmhkcHAweXpkaWFCYkJ3ZW02aXpwVlVLZHQ5SnFWdmp5Q1JCV1NXQ01nNzkvekNZZ0dQc3lHU2JZUm4vOEtYeDZzTnF1cnVxU3JGK3hzcWpudXhnL01iTU9wSVZvVEdyUWFuNHljcVV0V0NQYmhuRjhvYXFXeWk1bVR0WWgyeTZzR21rdEQvQm13S1J1elZQQW5LN1dWa0NvZHBCZW51R09wbE81b3lwRjdSalNaNlJzV0RCbHprYndFT0VNeDFUbnU0cnFYblRWMGVqU0ZvQkpjN0V3QWVBZGNNUWFIZlQyc3RqYW1yY05HUWhiNDZqL2w0S2hZakJnRkV6V0JvekdLblJUZ0xYdmpvMXVveE40Z25NRUovQUpFdjRFUGZSa2NSZG1wQVlIK3oyQmRzU29PZUd2MTJlTW1pR1FkTkN6S1kzdmxWWmVTMlBLbStLOExlRmxCbEVydFNXdG5oblhFU2hiVW9GZ3UreWpFNC9uVTdrRkxCMU1mcm5yOWU0YjE4NGE1U1ljcFo3VmhZMkJOcXFxbmh4OHZXNjhiTDN3OGx0RUxaK29aTE5FbWdIRFM4dDNIazVDcDM2eVg0ZzBWRmFqQnBXTVIwWlRTRGpuK0ltZEJITnVnOE02c1duWC91L3doSGJ3aVBHTGRWTE1HVHRJTnlwMVY5SHNUSlhERVVFMEJLR1Q3S0FuYnFLWjhVT1BoTkhPVGdjRDR4czY0MUVQMDFQWkFpWCttYTNlZ3pWWHJ0ZFVScDdyMVZKWnJFaFYwVy9zc2kwVmpKR1h1RFNWSGxQS3Y3RDVyV1VyMHhXUnIvNEovdjFPS2crc2dxdEVxZXBrZUZyZXBGVzB0dG9abFVaVCs2eFV3UGlDUStsSngwZ3FqN2ZaT05QUHNRenR4YUFlUEV3U1NwR2M4eFNNZEovWmpPeU1pZFJ6bzI2ckthS0lnRWJOd2NqQjdYQmo3NGZqVVlqYjU1Ky85K3pUdHZ3WGlSK3NCSnhERVA2aXlyY2dtblRNd3FZbVR4SERFekpXYU9aeWRRMit2UWZEUlcvc2xlTG9uRWV2WDJFaThZU0VIKzdaYytLTmNNcDRnd3ZSY055TE44WXZaMENBTmhRdXNsZi9vaFdjZHhidWZmRlRaeHRmZDNzWmVDOUxXL3BJQ2VuQ3F6WUZiYld3T05oeEV6NlVmZ3pCNnhXcG94ODY3U2hpU2pzR1hHY2lSUkJJcmpLUkhENSsyTTlFVW9NWUwyR3VValZrbUpuRVorQlg4OU9ZMHBoejFubHVxdjdLUkYyWGNuNUtmMlA5L1FXeU0yZWk5WjI5OTNMT0tQc1o2SHVRamxTcFVwbXErMExWUHVvblZkVWpuODZxZHZzdkpIWExOUHlnL3FoUGhsOTUyZHhqcjRWNkRDTHNwK2FUcTdHUTNUNUhEYnZ3YWZRcVkzQ2FuS3VtcU9vVldwbmwrTVhOVGxtYnpHcHhTcVVNNzZ6dzdnaG1wcWpEeGxjRGRlMTdsblpwZDBMaGhsZmFuaENhT3B6eHM5QXBaZ2NjM1pnZ0ZHZWhuN0JoZWxpSUdUQ3d3QmhLWEkzdnoyTEJEdWV2Mk5jdzlvVjAwZHZQSTluUWNHMHFXVndibjJuZjdOMVZZZmRMSElRWGZiSU00MGVGSVZaK1BtODgrLzdTMlB0WU9GeVhmYitOYkxSeXk1c2RoeHQ4dTJmOG1yMEVlejRuSFRKay9FN3ZvVENPYzlHenNIditORHlSZFJDRUVwMHVaeEo5c1p1MUlJajFzb3NJczNTR0pWS2o0MFJwaXR2WUhZTTNnZEFFSVViVkRub0l2dEdlNFFFa3hnWmVHSkhSWlZvOUdLTnROdDNOalJNcGU5eGd3ZnRNWDg2a0tlaDlLRnJabldmQTkyeXFMUmNwOHdYRTBnNk9ENjVOK2RMVDgwQzlEeDAzbzdPeUx6aWZCMjFDSUxneUNsOXVzdTBxT3hMZ0dtSXlGYjVNeE12WmZNYVFqbGdacTRaVThxR3BQYWZpaTNPRkNzbW5jOXpXSFRHNzRsb0ZHemF1VUJ2MTJxWE16a1U2ZmpGT1FFY0xEdmYwM1ZURlB3NTZFemdJV0VVdVhmUlVSR2JPT3FETjB2VHhPY2R2R0JnS0FhalJMUVp1K0hDTzB2aXdJSmNoN3VWMTBMTnlldGMxeVZWYlFsazdNZEVjZDBOVlpzcXhOcFVjalJOUWtYdFFUQURPNGJiQWc5MjVuanBIRWdyVVpmM2c3QjZIZ2tabW5WdUhTVG1XdTNiUU1yUXRwdGxUcVQwaThrRnR0a1M1UlB4QXhrV1hmbzFmWk1mOFNMcTZQY0hpanNRVDlKcjZrTWFWVklkYzZITitxT2lZMUhTMTYxUUFtd3dSN1NLaGFjS245R3R2dGl0YlI5ZjJqREJGRlhWVFZOT0lWMGk2cmIvMTNsYjQrVWFTTklwbXhpSXo5WE1Mci9nTGhnUzliNElMaXY0S1ZzbEs3RXpUMGUvRm95Nm5hSlNpMlhKT1FmVjZrakxDTUtVOGthUGZOSk0wUWJlcTRPT21vQk9DVkFmeXJIVWNnYzVYeE5ETm9xcFdNMU13MkNRdDJ2aWV6cXZhYzc2bW1VekdFYmZkNzVTV1VqSlV0WFVyYWhPTlBqWW5NbEc0VlM2b1dLWlZFNlU2Y0lONnhTUXllWGR2bmNtakZPT2Z3b0FyRTV3OVI5OG1FQkRCbjArdjd6L0dJL3VQTEIzRXlYNjh4TnNWL09LN2hmZGduY2tiRDl6M21laW9mS1BNOW5YQlp5UkI4dE9rMFgrazhQWlV0RzVVT2I3UHlQQkhkWnkyUEZHNXZGNUd2WGMya1MxdzNpdG9iTG5VY1AyeVZjODNtbW9kd3RQVnpDWEJ3TkZqdzV0NTZLMEd5eEZ3bGxFWEZlZlIzTjRoTlppdG15S29MVnROZ3dzRkh2T1ViZ2tWZEcxb3dvTlU2dys2dGNLV3VVSE1OUUVSSzVTYUNGd29hTndRMEU4a0lQNVNJZVVhK1k3MXpZbUMraThpaFZ1M1VITXVWVXNEN2tjNnR5RG1iYXhmVWFXN0VpUjRxV0Z6MWd5TVRRZnNvZTFtSElGQWdEeGY3bVVJUkRlcmdNUUppV2M2UzNBK1oxR3J2Y2trd0gzamEydzhEWHBZU0hCL2RBZGFJdVZOQjg5MW5jNTJBVXlrRmIydEZldnVZR3hsalNjeFBpeUtoMDRnVzJjOUJob2ZkUHphQk56a0xseThOTEh4MVNQRmFkM3dlRDErcG9PSkNMRlhCejhUNU1ZaDZHT0ppMTZ1MGVzWWZLeGk0V0cvbjNidnU1am9xVFNZQWhOUDEyQjVXZXMwMDhaOEtQVHR0aGZEdFU2ZEpMd1FYY0doYmN4amlDcWp2ZmJQbTVDK2RYL2hCaTRuNE1iZ1ZiN3N4T2xQMmJxNFBkOWdRZHBtZEtDTkJTRWVBbnNFZXdlSE1oM2JVUXJEb1NtMVorenFZNmJHRmlnUUpDd0JjRkRmMy9Hb1BMTmZFUHhiNmlERFFPRkpkN3MxMWdNMytzcUJwVnVzZmVoSW1BMnEvaXY4YUh5ZVhBZis0KzlhNTNqTXBtTU1zdnVzVmZ2Y0JGZmU5M1g1b0srU0xsaU9QenVZeGtoQ0YyY1RIRGdSUkw1MFNzTlZSbWpCQkZxTjh5ZklLcFg4WUk3bXpNZmZ2Q1ppMmhYcm9EOUJmK09JdFBnd1BTUHVsZGxrUFppN1o3cFdidnd0NHhJaVZwRzg0bWlRK2d2by9LSjlhbHNialNtVEh4dElDNko1VURhdHVtU0ZBQkJHVTI0WFRkWjZnb0paaHNjK3BpNlcwYWtkbldKS05RVU9paFAwTUtXYUFnZTlLd09wNUNZQk1EcUl3UVhDbVE3NkRjUnJEVWkxRnppM2N1TGFRUDI1S3pxdUl0M3ZIN0pRbnRsY1c1VWVWUk9SRGRvUnhGUjVHVG1WdWExNG85MzlpNHFNNW02YjY0TnZCanlKczMvRGI0NE56bk1TSVhvTTk4WEpRYm1pcjJpeHBva0tVd1ROVXVCamhDeUk0UFhmZEE4dGM0Zk9OZXo4YklINTZaM21zRU5RUkQxZGtjUitFR3AyQjM0TDZOZ2pEOU9lcXd2YUdzdkdueUo2N0Jyc0UwM3d5Z0dxWDQ2RWZucFVwZlRsSWFxbW9ESlJGWkNCcWY3VGxZcmkvZncwTW0waVV3bW8yMFV0bkNhWW55YUVVZlFCbE12bUVlYVc0SU42eElXY3h4b1FZcllObTZ1NnhQbHAya0JIdGdEeVNPeWpOMGlvSFVFYnY3WkV3Tmo2UVhxSWJJVXE2UkZmNkYxOTVLOGhEY2hJeUJtZUkzRlFTTmg3QlVTbGJRQlFmVFNJMjU2STRMeExqWlNKODdrdzBoWHJ1MVR0ckxrc3BCS2d0cFFZUWROM0czb0tINXNiU0N6dFNNZXB0SFNVRE1XNnhoVzRqTlZoUk5SRVY5Rmlsd2ljb3dwaEpYbENjMmkvdTVBZDJQSkpJUjFiY1VCTE1Kb0h4T1RZUTBZSHlOS1BUNzI2bWtURTZHQnZSMTRVZytvYWEra1A4ZkhUN0JTQnBRdjBJV2FudUdOV253dTA4REpFUXRZTGZEMFcwTzh6Uno5REZ4NVM2aHFMRHFneVhpMHRzMDcxTWdyb3ZhMkZqM1VyMFN4ZmM3UVhTRHV0STcxbzJMR0gzUGVWTUZPL0ZmZGtyd1pobk1ZMVNSbDRQWkhrZEh5bFlvREZQb3RjN2tscjc4MnBTQWlDMDNlekVENkMrTy9mYmgyWi9ueEVFVW1NY3JvY2krUDVoQno0Rmd3blExTGd6b2YwT3dreDk3ajExUDV1L3UvQlcySHJGNlR3eUNndkJ2a1dzY2Q0NUV0SlB3VFdJcTZ2WXVmb20vWWRPZlR2N1BlN2JGa0FJKzlMYjVDYUtkSzFQM3I3SjNtYThNeFlFdXRJQVZ4Ti9NWENGbGsvU1VBcWtHemdNNVlFa2RlNWlVaC9MT3FNSlpxeWZUNng4SDhpUXpCRURRcGxibVJ6ZEhKbFlXME5DbVZ1Wkc5aWFnMEtOU0F3SUc5aWFnMEtQRHd2Vkhsd1pTOUdiMjUwTDFOMVluUjVjR1V2VkhKMVpWUjVjR1V2VG1GdFpTOUdNUzlDWVhObFJtOXVkQzlCY21saGJDMUNiMnhrVFZRdlJXNWpiMlJwYm1jdlYybHVRVzV6YVVWdVkyOWthVzVuTDBadmJuUkVaWE5qY21sd2RHOXlJRFlnTUNCU0wwWnBjbk4wUTJoaGNpQXpNaTlNWVhOMFEyaGhjaUF4TWpRdlYybGtkR2h6SURjeUlEQWdVajQrRFFwbGJtUnZZbW9OQ2pZZ01DQnZZbW9OQ2p3OEwxUjVjR1V2Um05dWRFUmxjMk55YVhCMGIzSXZSbTl1ZEU1aGJXVXZRWEpwWVd3dFFtOXNaRTFVTDBac1lXZHpJRE15TDBsMFlXeHBZMEZ1WjJ4bElEQXZRWE5qWlc1MElEa3dOUzlFWlhOalpXNTBJQzB5TVRBdlEyRndTR1ZwWjJoMElEY3lPQzlCZG1kWGFXUjBhQ0EwTnprdlRXRjRWMmxrZEdnZ01qWXlPQzlHYjI1MFYyVnBaMmgwSURjd01DOVlTR1ZwWjJoMElESTFNQzlNWldGa2FXNW5JRE16TDFOMFpXMVdJRFEzTDBadmJuUkNRbTk0V3lBdE5qSTRJQzB5TVRBZ01qQXdNQ0EzTWpoZElENCtEUXBsYm1Sdlltb05DamNnTUNCdlltb05Danc4TDFSNWNHVXZSWGgwUjFOMFlYUmxMMEpOTDA1dmNtMWhiQzlqWVNBeFBqNE5DbVZ1Wkc5aWFnMEtPQ0F3SUc5aWFnMEtQRHd2Vkhsd1pTOUZlSFJIVTNSaGRHVXZRazB2VG05eWJXRnNMME5CSURFK1BnMEtaVzVrYjJKcURRbzVJREFnYjJKcURRbzhQQzlVZVhCbEwwWnZiblF2VTNWaWRIbHdaUzlVY25WbFZIbHdaUzlPWVcxbEwwWXlMMEpoYzJWR2IyNTBMMEZ5YVdGc1RWUXZSVzVqYjJScGJtY3ZWMmx1UVc1emFVVnVZMjlrYVc1bkwwWnZiblJFWlhOamNtbHdkRzl5SURFd0lEQWdVaTlHYVhKemRFTm9ZWElnTXpJdlRHRnpkRU5vWVhJZ01USXlMMWRwWkhSb2N5QTNOaUF3SUZJK1BnMEtaVzVrYjJKcURRb3hNQ0F3SUc5aWFnMEtQRHd2Vkhsd1pTOUdiMjUwUkdWelkzSnBjSFJ2Y2k5R2IyNTBUbUZ0WlM5QmNtbGhiRTFVTDBac1lXZHpJRE15TDBsMFlXeHBZMEZ1WjJ4bElEQXZRWE5qWlc1MElEa3dOUzlFWlhOalpXNTBJQzB5TVRBdlEyRndTR1ZwWjJoMElEY3lPQzlCZG1kWGFXUjBhQ0EwTkRFdlRXRjRWMmxrZEdnZ01qWTJOUzlHYjI1MFYyVnBaMmgwSURRd01DOVlTR1ZwWjJoMElESTFNQzlNWldGa2FXNW5JRE16TDFOMFpXMVdJRFEwTDBadmJuUkNRbTk0V3lBdE5qWTFJQzB5TVRBZ01qQXdNQ0EzTWpoZElENCtEUXBsYm1Sdlltb05DakV4SURBZ2IySnFEUW84UEM5VWVYQmxMMFp2Ym5RdlUzVmlkSGx3WlM5VWVYQmxNQzlDWVhObFJtOXVkQzlCY21saGJFMVVMMFZ1WTI5a2FXNW5MMGxrWlc1MGFYUjVMVWd2UkdWelkyVnVaR0Z1ZEVadmJuUnpJREV5SURBZ1VpOVViMVZ1YVdOdlpHVWdOek1nTUNCU1BqNE5DbVZ1Wkc5aWFnMEtNVElnTUNCdlltb05DbHNnTVRNZ01DQlNYU0FOQ21WdVpHOWlhZzBLTVRNZ01DQnZZbW9OQ2p3OEwwSmhjMlZHYjI1MEwwRnlhV0ZzVFZRdlUzVmlkSGx3WlM5RFNVUkdiMjUwVkhsd1pUSXZWSGx3WlM5R2IyNTBMME5KUkZSdlIwbEVUV0Z3TDBsa1pXNTBhWFI1TDBSWElERXdNREF2UTBsRVUzbHpkR1Z0U1c1bWJ5QXhOQ0F3SUZJdlJtOXVkRVJsYzJOeWFYQjBiM0lnTVRVZ01DQlNMMWNnTnpVZ01DQlNQajROQ21WdVpHOWlhZzBLTVRRZ01DQnZZbW9OQ2p3OEwwOXlaR1Z5YVc1bktFbGtaVzUwYVhSNUtTQXZVbVZuYVhOMGNua29RV1J2WW1VcElDOVRkWEJ3YkdWdFpXNTBJREErUGcwS1pXNWtiMkpxRFFveE5TQXdJRzlpYWcwS1BEd3ZWSGx3WlM5R2IyNTBSR1Z6WTNKcGNIUnZjaTlHYjI1MFRtRnRaUzlCY21saGJFMVVMMFpzWVdkeklETXlMMGwwWVd4cFkwRnVaMnhsSURBdlFYTmpaVzUwSURrd05TOUVaWE5qWlc1MElDMHlNVEF2UTJGd1NHVnBaMmgwSURjeU9DOUJkbWRYYVdSMGFDQTBOREV2VFdGNFYybGtkR2dnTWpZMk5TOUdiMjUwVjJWcFoyaDBJRFF3TUM5WVNHVnBaMmgwSURJMU1DOU1aV0ZrYVc1bklETXpMMU4wWlcxV0lEUTBMMFp2Ym5SQ1FtOTRXeUF0TmpZMUlDMHlNVEFnTWpBd01DQTNNamhkSUM5R2IyNTBSbWxzWlRJZ056UWdNQ0JTUGo0TkNtVnVaRzlpYWcwS01UWWdNQ0J2WW1vTkNqdzhMMVI1Y0dVdldFOWlhbVZqZEM5VGRXSjBlWEJsTDBsdFlXZGxMMWRwWkhSb0lEUXhPQzlJWldsbmFIUWdOell2UTI5c2IzSlRjR0ZqWlM5RVpYWnBZMlZTUjBJdlFtbDBjMUJsY2tOdmJYQnZibVZ1ZENBNEwwbHVkR1Z5Y0c5c1lYUmxJR1poYkhObEwxTk5ZWE5ySURFM0lEQWdVaTlHYVd4MFpYSXZSbXhoZEdWRVpXTnZaR1V2VEdWdVozUm9JRGt6TVRJK1BnMEtjM1J5WldGdERRcDRuTzFkK1hjVlJiN3ZmYnQ3TmdJaFlRbExBb1FsQ1V0Q05yS1JoVVVGVkFRVUVkQUJSQ0tyS0FZUVpZMEVITVNWVVFFRlpCRkc1L25PUEgxbkZtZm1PRE9PYzJZR3R4SEJjOTcvOGFxNjc5SmRTM2ZmbTN1VGpPblBxUi91N2E1OStmUzNxcjcxTGI2b2lxYzR4aDI0Z2twaWNLNXdqc3NZa29NdkQwbUl6Um9YZjhsbWowZEw0UitXa1d4NDZIZXdlWlBFc3VWaXpYYXA1WURTY1Z4YjlIT2x2VmRxZlI0OEVjdFdzTVBLQmpxRFF4aTh6QlhNWkF0bU1pdy8wRmtoQUhRVm1tTkV2M040T2FSMG5pQUdWeGFjeUVTR3VWRnprWVNFR1EvRzN3b3pWaU52K1RIMW1jaUdoLzZFTUcyNVBQK1FUVjgxbk54MkZQZ2M2TXdPT1lDdmo5SitMRHJxMjQreGtiRURuU01VTm4xR3FGenJHSnd2VzBFTDdyR2NoNzREU0doS1c0OGp2MWs2WG5zUG0xczYwQmtmTW1ENU9NVVpEa2phQTUwbkZQWWR4akc0MVBLOHgzSWVNZ1NoYkhsUy9HWnA5N0h6QmpyN1F3SnNxSWpBRzFyT1FPZkxBZ2VXeXg1dkU1Yk5uV1QzU2ZWWXprTWZJRXhObmVJTXg0M016TXF3QnpPMFhIVGdkNTVnQkcyZ3MyV0JmVDhSbTUrekNTdFdydk5ZemtNbXdJMnVvL1VyZWQ3VFF0a3lidVJNTHJlVXk1OHVURndvMW14Vk8wK1NQOU5xOWtBWDVhY1BvZm9KQzJuTTNqRFFPVUpoejNKS1J5L0RDdVNRZ3FwMDlub3M1eUg5VUNQRUhpVTE3MmV6SjVLREJBcmtlZDBFU213OTFMOVpINUxnSkdIR0tzQUdRSW9UeXBhRC93T2RJUlFvTmJVZlJWbWk5QzVpUURBZFFBVS82eHFkeDNJZVVvUGM4RFNCNHVxZlpuakpOaHdyMXoyRkIyU0hUZTJuZkE5MXNBT2RBU3BRcHFydWt0c3RXMW9TWmRJcVdidWkwbjVNTExjd2pNZHlIbEtCRkNETUM5cU91bFBFWWxWZGo4NGl6czAvblBFOGV4amNRRm11WnFzd1pSbEtWdjU4TkppQ3ppbWtxaWVsMlJ1VFlqbHVYS3ZjZmh4NE16dWhxWnNKakxRTGxUTExaUlVySFQzbXRPVDJGOW5jeWNuVmx4S1dxcnFRUEFNbjFlMXlXQUxpSkg1OG05bHhZeHFvZm92bUlwNFpLUlIvaTd5Q2IrUEluaWpXUHdPek5MOG4rb1FWMEhSSEoyaWZuN3BTNmJEV2Y5Vm04Tmh0YldoNWNzT3plRzN3cFl2ZHhvQkJxdHVOc3h6amM2M2E3YzlIR1JMMFE5Rm5GNFRsaGZMVlNEM0FxcWp1WWxqUkxsemVGTFFobEVqMFhhZ0k3ZHR0eDluY1NXNUxBV01ZSlRaMm8zWGJjVUtzWE9lNHRvL2tDaXJyeHQ3d2N6WmFoOEJ4ZG5nNUhnTlgzQUpub0NhZjR0eWRqS0FTRXVORXJHTTc3RzV6eGMxSTVOQjE5bktqNjF6VWl3NDVLTTU5RXU5NFNzZUxYTWxDWEtwRXlhcnVLVUF5S1BYTldJMkU0aWQwb1AxUURza056N2hpT2RDcFN1L0NleklhWWJDQVhFVXBzQnduaUMwdjBCS1NXNCs0T1IvQmhnb2RGVk5CUzdGWnhlVHdraCt0Nm1hcVdwRlV1d3Z4eklaSHg5OFM2Z3FXWEFWQ0MvcVFsSzdjdEJjK3o1NmdkbENYVmZuaUp2dmE0RUtGeW54MGNRTnRsNm4zcDZBSlQ2alY5aDduWUNZSVpjdkU2U3ZOamgxQkdNZ1F2Q0paVjg0SnFUZnZwNm5IZzVqUlpzcWVBRDRyVXMxT2FteWdMS0lEUjNIRHl4WEtaa3FpRVJ2MzJXaHJvRDF0emlZWWJTRTZjRXl4UFFPK3d0SEFhcmE2a040eEpuYWlpY2xCTkxZV3lwWWx5L09UbHRpWEN6Z2cvTmhOZnFXUTJ1NnNQd21YQjluRThpQ2F3NFpuWU1ibjdiRThiRDFzRHFMUEN5ejFvSGFlaE9tM1dwaUV6SEtDQWhySU1aUFJLaDNmamtlUU5NdU5uZWVZb3JyZ0JKdG45NTBWSmpuVGNpSS9GWThRRm1BenpISXl4am0wZEFITEFTcDJybnpLZWl4RCtzYlJuTlM0aHl3QTBJQ3BKUURIa1lTTk5DQllLSGU4NktZVVNzZHhOcWNFajREQWNybWxZRFprSHh1Y1FRc0tPVXU4SkZWdGNkL1RhTk1CdEJYbWJBTHlsVU5MMWUyR25UWlk0Tnd4RUZITkpjdEpmb20wUFVUT0RKaFFFRGM5dzJQc2R6d3RyUVkrVHpHMlJITTRyeHM4RkxCdXpBMmZua2hMelViZUN2cWtTVzZ6RERRU3kzRksyeEgzalVoc3gyUlp6bEhrTUp6YWNaTHg1Ukg3akZpNU5xazhBeWRXYmJKK0Z6TExjb0JYOFlmVWRGc1BJOHJxNUU3UzBRdW1YWGpld05jOHFhb0FYMHpxTmowR2J2SlNRa0U0dDhHVGdKWUhXdHg5S1FEUk1VRzBObkNXYzZTNFJQY2dGRjZTU2JOMWU4ZFB2cHRRT0tRSkdycHB4ekF0VVkxcmNYbk14Q0xjdW1FNVFaR2FxY2NIaUU2YWlhbWo4REl5VzNHT0pGYlBhQTRiOStydHB5R2NLYzc2V1R3MVhNZzNSQmRIbHBQcTBjR3I2ZXBQL09RbC9JUTJNRlFWN05zS2U1ZC91S1V2Sk1seWxsSzNIaFJyZDBpVTJhdCtNZ1VWbGZtSkM0R2toM3NHczNodVZBMXc0clFWZUxiMTdyZk1XdmdNc3B4Q3lpRXRYZmNPMUJXYXN3aEJDRlE2ajB1VmE0Q0FKMHhlSWpVOWgzc1FwcStpbFJRQlVSc2tFNXQzU2dkaE9FdlZYWHpwWW43aUFxbDZNOTdvY3V0QmhyTXMwK0VzNTlMQnVRUDJCUUZERFBjSlJIUmh5akt1cUpvYlhTZk9YRTlzZW03a0xDU3FsRnZjcGVPS1cweHQ1c3h5VWgxNUNpODFQeWRVYlpZYjlwQlRHVDdESElsUXNoanRuNVhyb0tVT0pjSklRY2FmenhiTmxhMmZiekR4WndJajhBcVJZME5QcXQxcDlYOENqQmRpSFJxVFhNYUo1YmlDU21Rd3FwM0htWUIxOFkyWHhabW9wckU0ZDZzbG5wUllEdTRPeUlrRmZMaUpNSTlRdCtpOEZkb2lRQ1ZrY2ZZbWhyZk9PSGhKcUNSSlUrWmRtMHl5bkRYYTU4V0t0Y0RSMGszVUcrQmhMUWMycTVaRGxOQkEyWkg1Sms0T2ZNbENWRlFManlGVUJXZTNqSitvYit3REpMY2ZkUk13S1lpVmo2RnQydFROU0FGclZvSnlNNW9aZm9KbENZWEdjckJsSThVZ0J0amxJc1hnTDZIeXAxZy9namtsdUI5KzBqM293cVlVa0t5cjMzb1Y5U0FySk1SY2dXa1VGRWRGSDJ6eHJHS2xqVHJIZ1F1cVNoWmNQMVFpUXVsaWRTRksrSXE1VVp4WWpzMHB4Wk1Rd1p6VVhPR3dYS2djQ3lVY2M5R3Rha0pneEJHYVZna2ppMm1HaWpLYXc5alFBNlNFdkRJc0tiSERwaUxQMmNpWWFIRnRXVTV1Mm8vMmZIenIxdkRaK0N6cTA1ZndtUUxMeWZQMkVoTlNPOUdKR3lSekUwQVZvUjI0ZGljeEtyd1Y5TXJjWjNxZGNaYURRajYrMms5aE9kRDNFSS9jc0RLQ045T2FHRGNDN1JMNkNpUUpRV3dEQ3hjTFNjRDNkNlRhYlhZQjRPalk1Y2FaMStvVnE3YUpDa1lUY1plRTViRHVjZExNSjBTV2srWnV3ZU9SbTlDVllhbitLYk1YL0dNcWxLK2hsSm1UV3pINm5ickM3SVBZNHFoSXpQSkViM3h4TTVLZU9HTVZLYllZbkZnT0x4cWhpblRnV2tDTUhFN0VZMTNzNHZLbUVDTVJwMXNZUUdyYWoxZUliQnA2eUlmYldMSkRwc2F3M1dPN00zWXNoeDNwRmJCOVcxTzloUkdwVDVpMEpQNHlCWmFMUzZFb2VObXUrWGdKT1Rla0s5VU1KMGVsZ3hCYmZKMDV3eXdubEZQcWs4Unl0TXFYNmxFNXdid0JSQ2dkWFVLVE1MNmkxcG9KK01LTFZQVzRYUUJNbzRubUdDM1hDTUdYTEVMck5uOEdMWHArVEFNYWoybjJnYk1jRkQ5SXV5MjR6S0IwSERNVk80UzhWZTIxc0REcFNKNS94RXhpaE9LVCtpM09QenFORTBDSU1MN3NiTTl5b2tZcUd1VndSR1FjNGpreEpRRzV0UzZ3NjE5WTBsS0dsZ2VtdW5ISDVrL0Q4MjltT1hGdUYxbzBiQVluVEgwZzd0K0c1Zml5WlVoVTlycER5R0twYXBKZGsyVTUwVkNjb0NXRWZUN2lHblNFd3gwMVZFRXVXZ05OZTVFZ0NkMmhUTEtjQ3FhVzFMalFkR0Uzb3lnaDREWkErSktFNWh1YWY2czBnb0FmTngvdFBBR3lhcEFaSkZuT3RzN2RzMXhzdlVMR1ZpcHM3U2l5YUg3bUpGaVhzUHRRK1NpbE9sUkNsbUlRc08wdHg1Vk1mRzNaYkV1V2xCYUJFQkFGVjVqdXpQWEU1T3dpdEdVNXZFZUpsQ1NpQU45TnN6TXRoc2p6MENrZWtHbjVVZlZ3NWMxcEh4OE5hQjU2MkY0cUlnM0N3Z1lUR3J3MkxDZFZvWVFwem5wVXFGaERjN2krVUh3cExHbE5FcWdsU0lVNDR5RmFCeE9ub1Ewa1RGbHFYNW40SjF1T2Myd21XWTZmUk5ob282V3J0QitqK1FYeFlMVVhaVG5jd0E2Z0M1c1dsS3JSRmhmS0hxQ2xHd2MrRjVQdGxlWGNzUndrOXBqc2dZaUxha2V2VFNuc05xOUpMRWZVZlRKZ0V3L2hsWkpsWDFGQXlMRkptcFFXaWVWbW9wSFFGSHJ0SXJSbE9SbGJrMlJ6a2xHTk5nRUlWRFpOTExXK0lGV3U0WXFxemF0YnRQekwxcUZuMzNra3FKR1NnQTNMNFVKT3NnNXVvK2hJbHVVNFhXU2xnUjlWZzlaQWZYUXpCZDlLNWh5dHhBc0t0VE5uVkYrT05pVW5wYXZQYmlpMVFXYzVmTzZXckFQZllvZmFBNW5GdnRlYS9SNnJPNVpUT3VKVXlUb3EzRHAzeFJnSUxFYzNhbWNURCtHVmt6WTFZY1BSSlA3WnBHV3BiWnpsS0xhcTdCckZudVd3Sllna2pyR2cyUTJBYWI2YkJnSWppNSs4eEZ5SGFBNnRRdyt2VEV1ZG1EZVU3V1c1MW9OOTdWcmhVVVpVeWJJY1VaOHpEZzdiVEFHVHBtaWVzZDBFbHJMZ21RQnBSVGRXQlpsa09ZNXVCU0pkTEZleXNJOHRLRGMvNzFCN2xGUnM5MmM1MkRHc1RpaEZPNjBVSDNjQ1llYVlkRmVNSVlNc1o5T2dSa1dOYlVLQ21HZUNObW1aTVRBc3AvWEJGbFo0YkJKYXdaM0gyZGpWTTFoWHRBNDlWclJyYnV2bXV4M0x0UnpvWTlkaVkyckphV2E1NGVWb0RjUllUcXpaZ2ZZQitqSjFyTG9HaU9Wc2JOMmtpZVdFQ2UxOWJFRXdHM1dvUFlhd0RxOWgraHVPd05lQ29CNlJBYzZ1UDd0MDhZUUdrdVdLbTlGUllMcS93Q1l0TXdhSTVYTHRpK1lBWHBabUV4UUxpUTdJN2F5dWRJZm1FQnQ2TkRGTXFONkMrTFNic1dLMmRJQ1VLSlFzY3UvaWV2aEp6MWdMWjl2VldYRWo0bCtzM1c2OEVtZWhXbFU4L1h4OUZOZ0VLckZaOWgvT2NtekJUTFNpWm0xSXFnWDVjYTdJaXRqWjNBU01BMWRJTUsvTklpcmNVc3NMU1pVQ2RzVVlNamxqZFRqdUlXRGJlVUxaZlc3U01xTS9XQTViYURYVWROT0F5QmloNmdrd2h6VU8vaE83alJZek1JZyt4SVllSUVOaWNDNWg2Q0JXSWpyTDRZcG5iTEF3dGNJbHkzSkN1ZDBkUFZMVlp0Ui83TXdDajVrVXdLMFdJQkFtb0xxMTB1ellsbHhTTElmcEZnNDR5K0dkbWFvczF6ZUlNOUdOUDlqWk1DVXVLckFqdXJBZm1veDRJS2V0MVlXOUtWK3VseTZXVTlyUTVTYXFzZEI0S2JCK2F6Ym9ZWk9XSlpMTXM1eUVpVGRjb2RzclVKT0FxSEZGYzZXcUxVUlZaellYVTd6Qmh4NXBLUVBxVVdPd1lUbHVmQnZhSHlZbU53MUpSSldDdmh6OXkwandIQk1hMld4VUhWMXFmcDVoN1U0YkVkUWFjeVpFMytGN25hUTYxSDM2Y0czemdXYzVMRjE0OHBkMW1GaWxBa3pEU2pOT1lWQjB5QzNnQkxVZHN5L1hhckV2SjlhaUN4R01xVzZUeTJtYVdJN0hSb2M4N3htN2hIa0pWV3hlYU5FT3NrbkxqSDVnT1c1MExUcUlHdmJRQzBaVXc5YWhaQUc1S083TXFoMUlEUGkyT0M1N0VGZ09TalYzaXpNZk5UdWhsS0NlWWFjVkxBVVY2OGtMYUptQmwybWxGY3JSUGYzNEJ6Y0ZsdU1uTGlDbWdwL2pRUHFEaE1uYnVBU2JRS2lRRkZ0TVR1QklHc2lra1V0Y2dSOE1MQ2UxWUJJbWZhR1NIVjZPdENCck52aGdDM0gySnJ5TXl2eWpiR3dIaXBKN1dXbEdjNmlaRkNDakdjT24zalZiYVZIcW84YXFJV002a3BBdWxtTTRpZkNXcnNWSFlNV0dwOTJtWlVJL3NCdzVyT2xFZ3pXWlBNU25GTE9BaXV3bzZSZm9VT3k2TUJ5eUtJRVl6TlFvTE9jUzlpZThrSU94bXRVQ2dCbGdtQ05ucFNYOTJFVzBEQ21kWStWSDE2TEpxTm1FRTlsTmxoVnlmTklLbGMySTFqSjVSWm1QbWx2UmJlQW5nRnRId1krNkFPSWxYdFF5R0ZnTzc0VFE0aGF4eDNJaXJtNmR4TDFPb2s4bGJhV0JPT0hxRTJuTGxSdmJSRFMwUXV6UGVONzRjZk9KR2NFN3JUQTVvVE9aTnBhRFcxM2IwTDRCanlZUm1wVU5GdUVHUnJqQ2F2ZHBKVXJYTHl3bjFXTW5IK0VHSDJGT0pHTjJTOWpZOUpZYk5nMXJpR1Y0RExwWENkbUg1Y2VoRzJlWll6bEd6Y0ZaUldyZVp6bDd3bktBcG5DTkp2TSthY28yU2FUR1ovblJkVXhnT0pzOVhwaTFucmdsalFsWExINStYR2wva1N1cXNYZ2FYbzR6R0p6UVdjZTFPQXRkbk5TN3hQTkN5VjFjL2pSK2JLUGNzSWRvLzBRYkpDd0grQUVUbGtBMW1oZmtJWEpLOE9VUk5VbExtR3dlNFZCdE5NV080M0xUUHFGNmkxQ3hXcHF6U1c3YXE5RE5LaEkxQ2JreDliaFBzV1k3STVwVTZBVVZWeVhTVE5ycFRGcFpqcWo0QjZZU2lGRldNUG5DS1JyVVJuSnB4ZEEvTEVkZThwcC9CSFQ0dUJkdVJBVStiN0ptRzczYkduUThmalRoc2dQY2Nnc1lPMmdPTThkeWtJTFFnd1p4bjNGSGFPczZ5eG1mdmxoZXNuZFJxMU1JdEJ4aXJzeDV4cGZSTkgzTkU0bUpLNmhJT1crRGhPV0FsT1hZZ21RelVKejl4VFFFQ01VdEtWZVg0YmlDU21xdHRCTE1QanVXUXJDZW8wa255K2xtOEhFL3FsT1c0TW9WdG52aW1GYTBFdnFINVVpNjkwaUZrNXR2cEVVN0FqY3dya1p0K0QvT1QramtTeGFKTlR2d3FJekRSK2pEVExJY2dJZ2QvTEYzY0NQWWVrZ3Q2WE9zTlUvU0JDUkxic0ZVbEhJN0FKdFRTcnZ1a3h3VitNcU1JbHV3bDdIajhNVGdJbWJDWXJDd0hLaU55RmhjbkxCeDRCT1E4dTNQM0tnYTkxcWcxam84S2VDMnV5MFE1S2JrN0RyR1ZZemlTQy9Md1R5VjNHV2pGRUVvWnNkeE1FVktMUzJtSDFtT1NmNE9jWEgyWTRRTVUrelUwYnRCTHhzcXhQT2ZhWmFENVoyMFZIVmh1VlNENThGMzQwYnlrOVlLRGhXQ0dyTW5PcmhRWUwrRjV4OHV1MU5zVnRxT3NNUG9SeVRrb0wyOVUvMk9qM29STzdJM2VGZ09JbGhBdEpsR0tFNUhEMWRncDYvb0REVmJxaU1ZWDdYck5xMEhYZDFPeUFvU2Fac0RkNkR6NlBwSWFDV25uZVZncG9ybUVpMThFanB0NDdPMGszMHUwK3BQbG1PZ2JtcUxtKzhqcUcxeDJrcGFOWXB6SG5mWkRhQWQrMkZseFB6M0E4dEIrUE1oODlDNVRtNDdSRHM0bkFMTHdWRGoyb2lYdWNBT1hQR0lxNFZ4bHVjbmROaHdsTko1bkdEMkVJZWdpWE1JS21HYXZ1OXNETS9Cem5KR2JZeHZsK24yN2VGNlhjWERqQkoycUExMzRJYVZTWmlGSE54SjgvWndZeHVUMG44RG55UjhlZHhTWGZXN3VUenlSVytaWURrSVFST21MYmVaUG9BUExsUlFwNnZ4dUV5cm4xbE9qeWhIcUZocmM1UllxdDNwcUN2STVrKzFiekpBTEdMRmFzc3FxeHkydU5paCtGUWdoNnl4aFJ6OFN3RXdxTUhJa21admxHdTJpbk9mQk9PQ0g5dGtIdEVFY0NLYVovT1VGdkFWOGpiZTUzbVpIVkhPVDE4aFZXMEJ5WUcwNE02VTVtRDhBUVhMZ1NrYitDcUJqN3RZL2FSWXMwMnNYTTlQYUdPenh5ZW5YT3JMZzliVVo2eVM1and1em5vTTBLTnVwampXYzBDSmtGS1llUXg1UmR1WHAvcW5Oekd2Mk5VdENXeGtER2d5Y2NacXFicExxdDBHcENOaDhsTEkxZmFYQTZZRzBjZm1UdUxIdHdtVmE2WHFKNVRhYlVMVlpzTVlPenhpSEw4bE1BVm91ZHlJU21IcS9UQkNVSXFxTG5INkttamd3bDdDeDV2Slp2a3gyVlpqUlRhM2hKKzRFSFFQc1dZcnpGTDVhdkRweDAycHA1NldpQTBXMnBGaCt3aVQ1UkJCQTFJVzZQUGdjdzlHSXVnNTBkcE82aUMvbHNPT3FCQ21MQk5uYlJScnQwRUh4bEhwSWhaOGtweHVTZlBnd1lNSER4NDhlUERnd1lNSER4NDhlUERnd1lNSER4NDhlUERnd1lNSER4NDhlUERnd1lNSER4NDhlUERnd1lNSER4NDhlUERnd1lNSEQvMEdaZlZUd1pkK3pRUlNQQU1vekprUGdvc05TOUticXo0aTBQT2h0c0ZpN2Q5LzlFYmc0UHRFeitxaisyRU5aQThudnMwUXVBblRRYUsrWGErNUR3SUs1ZTkrSi81WHFHd0VUN2lKNWZFbjh1SjFJRTR1SjAxM0pIbnc4Rk9CYjl0TDJSLytIeE5KOFpKRXFlVStFRnhldk43WmF6OENaQ2x3NklyNVNlVDZuZkQ3WHhNOSsvZThCZnl6K2JaM0NxUWI0VE9mZzBTenJ2L0lqaGpqTWdqd0gzcnJyL0cvVXVOUzhFUW9iNGcvQ1o3NE5YakNWemFsTmFjZVBQekh3Mk81QVdFNWtLTGgxSWVmZHZZZEMyTFBjb3lzY3ZsRlJJdjZIandNWlhnczEvOHNKNi9iQjFKVVZteUZ4SFhsZTVmMy9UbXpuQWNQSGtqd1dLNy9XUzV5OVZiNDZpM3dROWx3RU00eHk2b2RnekFleTNud2tDbzhsdXRubHVQR1RRWEpCWHQvQlgrUG5ZSm5sUWFQNVR4NFNBMGV5L1V6eXdWNlBvTEpGWXlOL2ozOUcxai8vckJqUUkvbFBIaElEUjdMOVN2TGlVcmt5aTFZNFRISWR6OEcva3FMMWpvRzlWak9nNGZVMEI4c3AvcWx6dFhhamxjQ2g2LzZ1OTlSbG5jeFNlcDA4ZE5ybFhYN2ZQdmZDeHk1N3Q5elJybC9pejBwV1ZnT0ZDMlNDMW51MGpmRzc0VFRRV1E1Ym1LRi9PQk9iY2RwMzY3WDFBZDNjYVBReTFWVGc3SjhDNnl1ZXpjbkhzbHE1Tm9QZ1BvY3d6cXpuQmFBaGVMc3JwK1FhaGFvR3c3NkQ3d2JPSHpGdCtzVjZhNUg3Y1JJV1lVUjhvTDVHVmMwVWJtdnk3L3JGZC91MTlVMXozS2xNeDF6Ymdvc2lIV0xsUzA5L2dQdisvZGRBRGtSWnJZa0VkeUlZOHdrWmZWdS83NXpvQWpxMXBmRStyc1p6dFgyalljaGk0eXlIRHVxSlBMZVY1SHJQOFlWSnd3SG5vUXZmdVU4UUVRcGNQaUR5TFhiU0hCRDB5eDgrZDk4T2VGeWJjYkVjbXdrRHc4YmQ0Wm5oT1Y4Kzg5RnJ2NUF5UERsNzRTR3UxT3JwVGlDci80ZXBtdmxqY0FMbCtGRHdGRzJjR1E1M3hPOTRBazNjaHdwNFVqb2pUOENxaWZXWk9qQ1RiWm9BaDVJdWI4TGJvNU1ubVg4MVRZY2pseTloUWNIRCtVbEd4MUtMa2poTTU4VE14QzVmanR3NmhNM2MzYmxrV2ZCNXlDTDBKMXVCM28rWWdUQk1RWVBReE9aWWptVzlYZWZoVDN3MmcrKy9lZlpFV01Uci94aDVZbmo0U3YvaHRwaTI2bjN0YkhEQ2cxNkNiMzVKN0ZtZ1VVTnpCL1dOaDh6cG43S2hvTjQySVFzSjBvZ0xIQlFscnY4YitOMzNFVWppN0VjVnpnZU1DcE04WTAvaVBWM0pSUTgxSUMydWNkSVRsMjdOK2s2aW9FYlB4M0U0QWNqMmdxK3JCb2tHano1UC9iQlUyWTVvYXBkcjhrN3dkT2Y4bE9zVjlIbEZvRFdBU3dCUElndHk1R0FDWllMWm9mZi94Wm04c3puVXRPOWlab1JGV1hWenZEbGI0RTNlSTZESmF2cUdiUHl5STBmZzYvK2pwOWh1WTlibU5VU2V1MHpnLzNFdVF1b2hROW1aZW1mbnZDRm0vS3l4d0ZueHQvd2srY0FralJpWUF2SFUyUHdNSVNSSVpZTDlud0lxUVo4WVJYS3JXR0NFamgwRlk3NjNXOFEzbktDd1pCQ3pVSjYya3JvL0QvQWw1MGZQeDE1azhLNm5OaHdOMGd1ZU9iUDFMbHdJQkk2K3pjNDZtZVFCVWhIYUYwbllIQXN0d0NnSUxBVktDeGhJRFdXQTlRTkF3TEplVlFKTFdZMkt6OTgrZnZJQjdlUmxRU0Q1Y1NHZTBLWHZnNmYrNUl0Sk1oN0VLQXBUMzJpOCtUOStFdjE0V2NnTzcxM2t4dE5uZlZ6RTJhRTMvMFhySnpLUnNMcmNJN2VHVzdMOXoxQmk0R2ZOQ3QwR2ZJd081Wis1YmVIb1lwTXNKeXlCblpzLzZITGpzSDlSMi9Bb1ZyVmlUelhkT2FSRmozaUVENHJIM2dML2h5VmpsSmdPVWh4TC8yYVllMW1QVnl4cmdSeTVzLzJkRVNHb29XdmZBL2tTVVlnWEhtcGJqb0N5N3R3alUwRXFiRmM0UGgvNmZLWXd3WDN3c3dXNEUxNzdIbExsbldXQzErOUZYenpjN2hHWjROSUhwam1oeTU5eGZDVzBnbXpXMkVNNS83dU9KMWs4MGFDQnRLcEh2SEpBb29HMGlhUVNCMWpNSVE5czZUbndRT1RBWlpqczRkRHJkZjN2M1VYWGdIMEFyb3g4aGlTMHJ2L2NoTkIxbzA3NENPT1BFeUY1UzdmWW54TzEyUURHZlVrUEN1YWduRURzVzR4cktoVk84bXZaUlh5NXkvK1loTkRLaXdYeklLZm02TTNuUE1uS1RBRGIxa3lZTEFjbkFrT2Q5NkExbmE5bW8xczRvZ3lrQUJobHZKZFhKUU02bURCdzNEbXUvMGxTN1NQN29mckVtdWVkUk9ET0c4SlhGVll2OStOWnc5REJ3YkxoYy8vUFh6MmJ5bTQwSVd2RUpiVG5qZ09PL2JFQ3BjWlVCN3Axc1U1MDVkYTBjRFV3Ly9paDI2Q0J3N0RhUzhZenVhSEtiQ2N2TlJwL1Z5SHV2a1lITXQ1STkxNHRxUnkrbjloUVByWi9QQ2xieUkzN3JENW8ya2VVbUE1TUJPRVJWdmU1U2FIb2RjL2d6VnBFb1FNbHZOdFArVW11SHpYZXBoNlNXWDhpZGgwcjA1UWU5d0VOd0EranVFci83Yms2aExzWU81anlQcmdUdmk4cSsramg2R0RLTXRkL0JwdWhpYnZ3QlRNeW5KczZQSTNvS2U1UEp1cGcwUGtEYTYwTW5EcUUyWHBCamVCL2J0ZTBkbGpyUGxoQ2l6SGo1dnFKamwxelI1ZHRobnR4bk1DK21RcTBQdVJqUmQrOGh4OURmOTFtb2NVV0U1cXZnL1VKRy95WTROQTc2OWcwWHlKcmQ3b3Vwek5wb0FKVXVNeW1KOVpDYzJRZ0VIc09RVnVnaHNJdnZ3cGFLbDQ1ekZrTTNuVkx2Y3hLQ3UzdzlhY1Z1TStpSWVmUE5JN1krVkxLdUdVWWZPUnBDS0J5Z3huLzVaYUJvSXZ3NkhFRlJTYkg2YkFjaTYxZ3FNczU5cGNValNVdmdJdk5pNno5d2ExTWk1OFJWdjBTM21QMVNXTTJTWE9jbkZORW5zWWpDVE1ibzMrRDBiZ3g4dHA0OWdlUnRNd2t1MlNvQlhzc0NMWUF4OXlhK25GdzFCQWVsbE9hbHNKeDBYRnZLUWlDZlorREFZNHNuRHRERTRRcHRZWUMwZURtdVU0S0t5RzN2OFdaTmplbzdiOUZDVERlV1NUcEJsa09WR1NGcXlKTHNHbGllVzQwU1Z3dXJxMk8rbk1tQkE4L2R0c1RMM1FIcXcvQk5tMSsxeGYwdlh3RTBONldVN1JTVUJzdUFkTUFOMDczNjdYNFBBY004a2hzVkEyTjZxRW4xNG50YTN5N1RodGFOeUZMMzA5eUZtT0hUTVpibCs2V2QzS0dhbFAzcThUWDZhVDVTSjUzSmpKUWtXanZHaXR2L3NkdVBseTQ0Nmg4WnN1bGhObTFNTmQ0OVlIM0lTbElmVGVUWmlCOGRPUzZFNGxGYkQxVC8rbUwrbDYrSWtodlN5bmJlN0pwcDgxc0hlRUk1bEFXcHM5WDl0d0NBaDc0U3NXcmZ2d3ViLzd0cDdrcDliNHR2NThrTE5jNlBVLzZQbTU3T3M2NGVEMHRvRHhEeU5zU3ZhSjVTUUZmSHEwcnQ3UXFVK1JzeVRCTTU4clAzdUJLNTVDVzVkTGplV01qaUZVdGJrSlMwUGtBOEt4RnpjdWRPN0x2cVRyNFNlR1RMQ2MxSHdmK0pRbjY1aHdqamxtWmRXTzhMdi9qSGJhaTE4RGtVTmUzaVhNYXVYR1RXUENpZHdPZnBaTFlaQXFLN1lUNDBtRjVRUkozWHdzZlBtN2FFMmUvd2VRbk9VbEc0RWd4NDJkYkQ1WGxXYVdtNy9DL0RjMUFKWUxYYnlaUWw4U3ZOMEhEeWFrbCtYVXRYdmhRQ3VhMk1kY0JWK0RXZzJBNWVBU0gxUmpvMnJoRG5LV1V4NTZDdGJQeXUyc0ZuRGptSnpoK2pUOEczd3hLaFdXazVUUTJTK2d3UGJxNytEWFFmWFpaRFc5TENkVWRXVHJheGR1d3RJUXZ2UTEzSEwxNEtGdlNDL0x5WXZXd25FeHlkVzRvRUhkOFRMVWx6dHd5WTNuUWM1eUlUQk9yOTEyNlRtYUgwTTNoblJzTFZtV00zUTVGSGY2Y3VsbE9VQ3FzR1BRejJTNVFlaU5QOExPeVhnbVJ6ejBDV25XSkpsV0IvL2U3MnBZMFJCKy81dklqUjlkZXZZOWMyYlFzaHlZRWtKcWV2VXpONTRUb2FaQXhUbi9DK2k5aWttekhNZkRldWo5YjVmcEJuby9UaVBMTWRrandGL2Z2aVQzT3JQeXhkbnptWENlOGM5LzRDTHNuS0tjWENRZVBGaVI1aE5lV2lCeS9YYnc3UytTdWtsS2FyaEhhbDF1ZkxMWm9vbHdkT3ltS3NjaUNMMzVwMEhMY3NhNURKWitTcDJHNEprL3cwWlJMQlBNWkZsT3FKZ0htK2FlbjdsTU5QemV2OUxKY2d3WHZ2UlYrTm9QU1dtN3FZOGZnYmMzeGpaZjVQdTNaQ1BuWXB6eklVdnpIMGpab29LSG55VFNmbzQxYWkwdG1VdWNzNDBqOERxRVdhMTZoT3ZjaHgya0xDZktJZjFnaUp0b0VTaXJkc0pOblBZSHpRK1RaVGxsNlNiSVVTWVBkb2dNeTA2cnZoeWpYMmdPbjlRdGRwVUJIZUh6LzRoYy9TSHhQeENCeDV3djNIUWZBNjlyc0xpY3BIc1lJa2c3eXdrem01T2FLRW10RHdELzZzWkR4bDkrU2hYOCs3Q3J3NDlpL1QyRGx1V1VKUnZoY0h2b0tUZlJZbmtLZzhFZXZ2eTkrVm15TEdkb2FMdGMvMWQxTXpMcFpUa3VaMFRXalR0QVJIUTU1V1FMaW5VamVMOHpQd3owd0htME1IV3VteGdBUW1lL0JMTUpNUE4xNmQvRFVFQW1MQy81ZGNNZGlDaENCaS9DNFh6bGUwYVVFazgrdU8zS3BJa1dqQ3ZSRFVLV00xYitrVm1uZXdTT3c3MEFzL0dUcE5mbGZFRzR2cmZuTGNlMDJPR2pzMk5LTEdsa09SaURmdk9zNWlJUFRQeWtnMVdoaUFubEFOYUNabWZpUFlRT3FSTmFOZEc2WFNYblllZ2dJMVkwQlRseTVmdkk5UjlsVzROcERDc0VkVDBIc1hhUitiRmhITVBoUm9ESXNOQkZhSzNDcDUrS2NzTnlFYXRvRkVjbVdJNGJWd1lQNXlhNTcyQkdWQ1ErL25IOFNRcDdyTm02aVdEN2hVRzJhQUx3RTNyak00TlhXWlA1cWI2ekhLZ0pnN3NDKzk2ekQyNHNkUGkydjR5L2toYkRqZnZ3K1gvYW04WXlhaXg4Nld2N215ODhERUZreWlKNk1HS1lFQWVkbk0wdFFJOXc2cXI0aG1ZN3dUS1BGZ2dicjFac1E0MDNzaXpqRDJtNithTXcrTDc3UXZLOW02SGMyS3hicVlXbUd1R3VCODV5MnZhWFlUNlhib3JlaEFMeW93V05WNWxnT2NNcXBzdnJwR2tJWGZvcWN1MkgrRDVPQ2l6SEY1ZEZidWpHeG1zWG83SVFvSUpRanYvSWRWaVRaNzhFcWNUTzJVMkdiMFdGU1EvTE1kQk16WnQvMU52ck83NTRLbXBFVkpUNXliT0I2QTdGenFPL3BFV3VyTjFyWFBlZ1BMQ1ZVZjNXbHh5WTRQc09YTkNUK0o0SmhOM2sxc09RUWdadnQrRjQzK0dyOGJ0SS9LYys5ZTk1MjdmL2ZPanRMNDBuWUhDWkRmVllrRnNRZXZzTHcxdm96T2YrM2EvNXVuckI1ejVMdjZFQXlCNys1eTVHYmEyclBzTmI4TlhmQTlwazlRVVpuT1VZU0JyZlpFY3ZaSW1lR3pLZXA1L2xKQ1Y4N1JaY1JiZTNyK3NFYmNkcGZlSy95dmliQXNzQkNKVk5ZZjAwcVA3RitZMXZ4Mm5mMXBPQm5vK2lOWG50dHJickZjTW5YOUVJSytlRE80R1hmd3ZrY0NadExBZWhQbmtTTUhZMEc2LzkzdC85am0vZnVkRGJmNDAyOGVWdjRSZk5GdnlNdXVCYk1mOVh2Z09kd2JmN2RYL1BMOE94QTJ2US9INFM5cjQ4RENHSXJjdTFUVWV3NzZOYkNLV1ZJTGd3clpibUFSQ0N1dTY1WU8vSG9ZczN3ZGlCZWladi9jWGZmUmJlRWVEUUp6bXhiYVgvd01YZ08xOFlBa25vd3MxQTcwZnFJOTNJTVU5K1dtM2cwTlVRWU5GbmZtR3NnMmxkdmZLeXpXaDhpazlkdno5dytFcWc5MWVBYkpXVjBWTlUwdUoxd0Q4VHpIWlRYakM1aHA1RE9UWisySUppNEVkYXNOcE5oSFpRTkJCUGZQOEMvRmJYN1l1L2hEWGYxY3VhYm5PUVdoK0FlWXZrb2ZGSWlyeHNVK0RJOWRCNWVHSU9WR2JvN0plQncxZVY1VnRadjJVT0tMWXM5L2Q4R0RyMWlXRTVFeDRpQmttNFZBNHMwZk5qYysyQzVsZFc3dkFmdlJGKzc1OGdENEJtZzJlLzhCKzRCSFZkWEs1ZXNxd3dkd0VnTnpDL2pseStwYzlQdndtYytrVGRmTlRaMUlPSElZei9CeUt2VXdjTkNtVnVaSE4wY21WaGJRMEtaVzVrYjJKcURRb3hOeUF3SUc5aWFnMEtQRHd2Vkhsd1pTOVlUMkpxWldOMEwxTjFZblI1Y0dVdlNXMWhaMlV2VjJsa2RHZ2dOREU0TDBobGFXZG9kQ0EzTmk5RGIyeHZjbE53WVdObEwwUmxkbWxqWlVkeVlYa3ZUV0YwZEdWYklEQWdNQ0F3WFNBdlFtbDBjMUJsY2tOdmJYQnZibVZ1ZENBNEwwbHVkR1Z5Y0c5c1lYUmxJR1poYkhObEwwWnBiSFJsY2k5R2JHRjBaVVJsWTI5a1pTOU1aVzVuZEdnZ05USXlORDQrRFFwemRISmxZVzBOQ25pYzdaMTVZQlZGbXNEckpTSG1BQUxodmtSRVZGYkE0UklIRmZIaVZFQlVCdVhRVlVCeEIwWlIxM01NS0VvUUZFRldQSkExaThvWlVVR0dRemtpOTZYSVJBNEJnVEFZQ0JCeWt1TjFmOXYxMWRGVjNmMWU4ckk3bTRSOTN4OTVWVjlYZlYxVnYrNjZ1cW95ZWpTWENLTElDS0VsUWFRdGh1aHB1VzVIMTNYQkFsZWlSTnc5ZCtmcElpak8zRGx2VU9XbXBOYklrWmVGSEFtRU5GYVV6UXl1TklORmZRS0RmR2E1RnFEckx5SGYvUDlFNXAwSFczTG1ScFFkNDU4bGR4Y0E1TjhjYWl5WjlxOFY1YWR3eVJBYVZBaTZGUGF0cktUVXlLZjMvejNVYUhiU0ZlWHBTNFdRYnk2NDVibEtTc3dON1BaWGhoak5UdmdkVXRkUDZxbzVJZDhuSG9BQUhxdWMxRnlETnpmcWhSak5UcmY5K2kyL1ZBaU5GL2s0T0dka255RlRkb2ptOWFyS1NVNGF2ZmVxVUdQWmhQd3hYSlZZZW9rUXVvTG40aCs5dUtMalVhYklycHowMVB5ODFKZ1hIV29zVEhFQi9wM09WWStoNzNUMUo3U2Y4VWl2SlRWUjZVdzF1SkpTRk9rTFBRNG1lQ3QyZURLNDZnRDE1QytzOW9RYU1ScDVNWW91MG8rNkM1V1ZwZ29JSm5qSGJNVFJIald0VUxWbHJZUFFLOFVtbFdPZHBNYURVTThpR3Fia2JzZE5MdCtNY2MxOWRnTVFsMFJsZ3JTRjNtYVdDeDFKbHVPdUEyWWhJZkhvcGZCVERHcGlRNHhtK2RyRHpQSjA0cFpmR0tGLzBaVHRXZTNkVUNwcUxFUzc1dWFhVWpVUTcza0ZJVGRpbm9zZDJmbmpNWXhnTEs5cjZ6REdTRUppdnNNWVE1bjJSVFQ5VXdMejFkU3pUTWdMN003R2VNMThzMjBzU3lYSmtlakhCUC9jQ1g4V29XWVN1cHZ2VnduVm1HNjNWOUJSbEtxVFVOeFpFU1JiTFpiT0YreTQvcDVjeVI3d1V5TE1YdlQrVVNRSUl1cGlKRUlhby9jWXVjc3ZURHl2V002MUxYL2tHcTB6ZmFGRCs4Ri9VWG1JKytyOFlGczRLUWJ0YkRoNFIrd2VjU1hmWmhFeDFMQmpuTGhhdTljNlhpU1cvR3JWcksxTjRadU1sVnRUZElzT1djeE1wVWhmaWhLR21xdmp0N21Sd3ZRQmNnakx0WWFsaU1SK2drSE8wQjlPS09FRXFETFJtOUF6U2lqVGZ1N2UxdUxDMHVoeUVjckRIMG1vcDJKaEdvL2plMDB6L0d1aWp1SnFwaDdxQktkS2x5TFZRa2tmbFZEZm5mYVY3RG84UXExTmVtNmUxZ2hOc0Mra1IzZFNnazF3RVdwOFZMT3pNWmFwdTVkcTZwTlIzUFJSd2pMN2dCWG1LblM5U25BQXpBaEY1K2pKNHVseUVzcFZneGh0ZWRxL2RzU0Y5VFhLUVNpVi9RaEMyZm1LQWY4TkxNNGJEc01IOVFwd0Z0UEdCUUhVMXRBdGxIUlZDTzNRRXMwaTFFeDM1bWFHUXVpd2F1NGxiVEtqdm9OUVFxYkR6bXFjamFwOXdhRmV6MDJmSUhXUjNSckNPKzBRcVJMYXgwdGdadExTRXBhVDlsNkVxSnovVWRSMHY3TmFkQXAvMVJlTUhmc3BmMkRubElNUWp5VUk2YklIby9SZ25xTEZrMlpsZ0V5S0xiOEJ6MGxndWNpQ2JKNzY1Z1oyd3pQeE5pRk56TTRZWVEzejViNC9adnczL01MRE5xRWc4cUtEMEU5Y243SGhWKzZpYndlWmhzN2xQVnMyYmZjRUFqQ3VKNktnc0lpTXh2eGV2eEtGMEhCTWZSRTJQN1ZYNFBYdDNvVDJOYmM4TFE0ekQ5WnpMZGhidTdZTzlkVDZrbDFwVnpZaEtxZS8ra29oTktkTm95dGZaMDUvb2wyOHlmamkzTVF1eEt2Rnp4NlZuQ0NBVm1HSVk5ajhOR1V6WFJOVlFwazltalh2Y1lxNTM2Y1hlalAzREx4blkrenpRbjYwUWlqbmhvYU5ic3NUU2Y2NFZiMldiNWt5R1FxaFBpekEraWJVemtGMEYxUDl6OVNWeWxKM0JiYThxeVdoNGVnWVJlN0YzNXRWUXNkUkpiNHQvQ1o5TGtKSFdRZ2ZLN3RTNmw2TnpyMWlRaGxUQU1mTFEyZzFxN01FSVRiZk9ZaDVhTnN5REpUY2tDN28rMUV0ZnphbHZWdjZtK3hUaGJieFdBUWx2RzZNeE9CR3RFMW9FNlk2a21WL0g4MFllOXlXY0lQUldlajlUNFVRdnJDeDNQTUNocHJQUEQ2TkVPdjJiT0hseFh3dExDYzJKd081ZlJ6dlpFaEM3SkU4U3JBaU5PSVVRbXpDYjVISWFBdDhLR1o1RVdyQ2c5U1dpYXFGTlRQdnh0czVTU2liMEdKK2dSTVN0MmZQN1VRWlRuYVJ6NkZYSmNTcTlJM1MzeEpVdVphUVpFa2JoVFh6ZjVDRVNuZ0hiZ1Q2Q2l4WGN4Qmx3cVF2K3JOOU1qVWRtSjZCTkxRc1I2cUU2akZEb3ZkNUszcS9zbHo0K3FYeWl2bmFJWllNdGdsdFp5RFIraWRFSWZRK1h1Z3YwNFdGWHVSekV6b3VnN0FHNTI0eFBiSEhMamJXZzVsUUppRy91TUFJbVdJZzlSRjZwNGx3KzZUaHY2Sy9JN0dGdlVON0F4Q3k2bVBzdjRJY0dVV2hkNTBrdEp6ckUxa0V5N1ZNWnBnTDluZmhOcGxxM21mR29TUjhveEdLVWduTjFRSllnejRVeThFYWlLengxeXY5VWxsUXJkR0ZieFowVWdteC91VzNTNFN3RGtzZE42RmthWFNCdURJUEhiUHQyN0c2NlZpWmhHYm9oUEtGOXgxQnFETTZEc2xVYlViL1hJVVFxNFBzNFpCR3lLekJYeksvdExCVWttQ0VKbXBGQk5MUnlyN0ZWNmhJa3BkOHFucUNGbDBqeE5xMmZzUWw5bHo4bWNWanJuTVFVcHJva3hFcW9XUGdKVTNkaE82WE4zb1MvUWRFeDFENWxwNGdzbHNHSWZuRmwvZTJYWVNlOWt6VkVTVzNoMlRSZUJDNmFMMHpob2NCaGRBekFRZ3BJK05wc2dUWUpZM1FZMXAwalJDcmtqMVdEVFF1VUpOeWFtYU1SbWlhdlBJeVVRbWQ4Y3hJTnplaDN2SkdyTHR4VHZRTUJ0cEp1RXhrdHd4Q2NnWTRFS0ZrejFSbEtybWR3bFN5ZnhmZERXV2FLS2RFVHd0bEUxSW1wLzhkRmQrRVRJZzFrVjdmUUc3V1I2eEZqNnFFNHFXK2lVYm9kOCtNREhFVDZpUHY4eUQ2TFVKczN1U0Jmd0toU1o2cE9xdGt0aGxUVFhTVUFhdDQvNjdtVjVOUUNMMkVpaThyU09nYUQwS2s5bG90TmNaUWhSQVJLeTQyRTQwUW04T2ZtcXhMVnplaFIrVnQyTE8xUjR3NGxNbEM5c25HL0o4VFlxT0RWWTVVYVRqc0lsY2tnbzI1YVp1SnJyTU9DOGxsRW9xMWpiRk8xSWNoRTJKTjVQVmVoQ3pwbmxaUUtxZjB6dnFVZ3ZvVFY0N1VDYkVoVFdlM0pTZWhaZkxLQnZTL1J3aWJjRjFneDVtTWlnMHVRaG1oRW1KdnlKY0JNb25Dbjhibk5TV2JpVERwcDJnMjgraXhQQ29RSVRiMWRKY2RjQ01xeHBGUUNiRXhhckNsYnZVZjM4SW4wZm9wQmNVcjVoeDJIMG5vVmRTKzdyYmlHZytKS2orQ2VXOGdwQmM2TXUyWmwySlUzQ2tJaVJGL1F6TlVRaXljVVNOSUx1c3lVNlh0RlYxMHNXMlBWY0hkM1JFREVXSWxjVWlHcTRYR3pLdEpxSVRHNllhaVdWNElhZFhGRWpGaWlHWnprMjhvaE1nN0s2aTh4VHlTVURNYzhtYlhGdllXWTk4MHhvUFFtenpFSUptbkNEYjE4ckNJMjVWZGlaR2oyblpNejF2MVVBaWRSTmNRY1dFb3B1cFBXa256bHlqM1JxbXB6V0t4MGQxSWRHNFhuejJqMGNMaUlJUnFNVmNEY1NFSnZRZnRNT1VseEIvaEZqd0VXMktTd3p0clJvSklFQTRyWjZ1RU5MRm5mVmdic1liUDNDVGo0MDRuZU56emN1TXdCUDh1Z3YwcVZzM2x0Mlp4NjdBM2R4NTFNK2NXek5SZ0kzUkMxNkxMNExtc3lkNk4rbG9XR3ZCdlNpVWZzYWtIMzNOOGlweDMrZGpBK2hVZW1tVnpkaEJDZkZSL2tsY0ozVmkvYTNUb2hQaGM5SGx1S0ZQWXVSOGRjM2pFT0xRL3NSeUUyckFTejZEUGU0MUZyREQ3ZWhLQ0krTTYzTEdTZHhqeDlZaGlMMUhoazlRemxGRXhjRHFGZFNMZzlOdjNQL09yYUJkREljUmZvbEljSjkvSkxGOTA1R0dnU0ZmSjhiUkY2NDdLN3dGOHRQVVg1dHRGSDlwNmJHQkFSK0tCQ2JGK0RtVDFwSjdKck05eFFnbFRia0lKVEpuM3JQWFlEOHVTTjRqQnFUYy8vK2JLWnMrN2w0TVErWnhuakg2YlphNmZpVGNoUlk0eE0xZVpkbHp1WkpPZ0QzbkVDWWxRQXlWVjNMTDlJWnZMQ3g0M0FSZ3VMcDkxV2NDS09pQWg4UTFWaVdERVZJUVFHV3NubnJzZW9lcnBYSm4yK3RRZlRWNk0rRk1HSWJMVmtjVnppVjZFdHBwS2tBSXgzOVhYTVhUM2orTVhEcWhLTm9FY0VpRnlTN0Z1MmZSWXFmaWtQZ0xFTXAwc3IwWTd2NlB0OGdVblJLYWJlb1NTcTlRdzVTZEVQbmJjbVMrais4bWg5bmN1SHlFeVN5dm1kTFpzMGttbzZ5bzcrZWZzS1kzMjJwQTNaNERRTjcxZ3AyTThtNUFLalJEcGRFcTFmUEVSajF5UTFuOTM1RGxMWFlrVis3MTZ5VnpHR29ZZ2hNZ1RGOVVZUnhwcllVSWdSRjVTbnk4elJmUlgxbW1KTFJsSXlrbUl0RnNsR1owWEExQVhJZklxYjVyTlZMWEp2bXhTdG9oYk5FUDVVcDM0SGRkZUdFd3FSSWpVbUNTL3ZQdVh0dlRJQkpWNzFhVUZoNTV4OU04SDdwUFgwc1hERTR3UXFUOVBsc1R2VDBmcVlVSWhSTnA4S1EzdFZjWlk5OWtKTWhiUkZyc0ZsYVllR1d1T1YyeC80M3ZmV2J0ejI5TG43UEZEUElhZ0ZWNDlkRmw1ci8zZ3AxdTJMM25jdVhpOHhpMHZMdHU2L2V1azJ4M0YwL2JmUGwrM2NrWi9LL1dKYUNGYUpNaStid1I2bXdsdkhmUW0ySmR2Zm5iUjV0MXJadzF1NUpFRklRMzd2Ym9zYmRmR3haTUdlRkc4WnVSSEczWnZtaittbmRTd3hNaDFrSTRVa2ZpK2I2N2NzV25oaEJ1VWpTNWFtUHJvaVhkZWluQ1dkZjFCTTliczNEeC9qTDVlakxRWlBudk5ybDBycHc2b1M4SVNsckNFSlN4aENVdFl3aEtXc0lRbExHRUpTMWpDY3FsSzh0NzZidVdndlNOQ05MUGpJL3AzMndidWZXOXZpOEJoYmVtMk4xVlg3UGpXK3ROL0I1MUJuYkQzOGhEVGNJbktGM0k5dkNLUHFRdW95aVh3QS8xcjVISHZpdklkV1hDQ0xjTlF6TkJaOW9meEc5OCtjTzZHL1g4cWxVb0lBTjdTRlRhaCtDc3JzTFA5VXBUS0pQUXV2QVpGMmg0NWhWQll1RlFtb2VKaU1nZHUxOHlFQ2Jta0VnbDFnVDJrRTRzb3pZUUp1YVFTQ2Uya2E4c1BnSHBXVkppUVd5cVBVRXdSL2ZiL25EeVNBTTJFQ2Jta1RFSzEvN3hrODhvazU5aWsxOHcxVzVZbjJSZ3NRaEZObWhqNVRhaElRdDJuTEUyZEVtaUpmeEt1OW93dkxsSjBDcUdFSm5ZZjRvRVB2dnNoOVZuNXNzVTN3ZlVPN1pJV0wzdmJjU2hsMUVPZnJ2Lyt3d0hFSVIyVFYyMzZiRmlVVTEwdHBBeENIUzZ3RlZabXJsSVVNWnY1S2pUem90Z3paQkZxS3Rlb2NFS3IyYUpNczNDWTU1MFBBNWJ6UnJEWGhhaUVVc1NCUFBWLzQydGl6QnkreENzSmVoRHlNVnZOWkJhL3FDVHNCRjlzNUU5WFYyRzhVOFF5NGQ4Vjh0RmhWVUNDRXZMOURZclgwSTFJZFZNSzdUMG1yY0E4UG9RT1ZoTG5GWWxGeGhhaG1DRkRqSXQwKy9JUUpIUmRxZm5iTU9zMXFHTUZldGZqeHQwZ0hYOXZOMysybFI2RUJvT3h2eWQxWExIR0Q2TlFaUkZxVUdCbS9LdjFUc1M4V1FDcFl1RDBIQmlIOENpNWdZY05lODE5ZzFMSWZwbWk2Wmx1ZU8xTXJPb1NsTkIyMkNrVzJzWnNFcHQxb3FCWWJqR0lPMnQyUTRlckhScGVtaUhxd1BxbmxRMlVVdVlEaTBuT2dUMDBkUk82RG5JN2lLdk5MdnB4T1ZVU2pNakxFbVVkazg2NWtXbHdRZGFvTjU0WHU5Y2JRNGxZTzA5NkZKajIwVjdWUllJUm1nNXBpbkliMzBxOEFwNnlsYzNwZmtQaVFhaDByMTNyZDRFTTEveEF6YUtMZkcvVlhMQlA3M0lUK2hGdXRTTU5nUCtnUDBsUW5HRWZQOUswSkJlcnkwR1FwVlJpcmZMWUhtTmZydjgrUlF2Wm9SOTRYY2tTaEZDTDRnSlZHVmVjaTcvR2VWVnJzREF1UWtYcVNWVS9nV3Q2OWlHWXdsM3g4QStwZFJGcUFOdlVKTENnU1FCdEZPMVNvSnRmWXJQMFUzakh3UmYwNXoxNFI5V09wRHNEcTVkOEFWbG5YSktEaEZJYys5Tm1BSDBhYTVvN1ZPVm1kbVNFaTlDTGFxQlAxRU1JbU93SE9XZWFaOGcrb1l2UWpYaGFnWlNqZEhPWVJXaUJxbndHMC9rSXZLM2ZvUUNQVXNoMTdHTTF6NU5xSmw5QWJvNUxDaWtoWDRHcGQwOGpZS3YxOTZiMEYxVGxZbnIraWdjaGJkL3JkTzJacDNJRjdKTHVXKzN0cUM1Q2o2YjNVYVB0eG81Zmt0ME5vUElJME43MUFYQXMrZDF2Uk5GM1pvcXVuYXp1UTYwV0VyaVd1MGs3NFlPS2Vkb2Q5Q0RnUVhMQlI2elQ0V3BIdEdsc3Z3eTNteU9hS2EvZXRpcG5PYUVlcW5Ja1BiQ2hnWEtDakNMTDlmT3k2TkVyYjNtRnE4SVNtTkJZMTdFbWUxd2JwNlB1aEFvUmlvSUNwVlZmS0RlNkJpY1VNeDRDRXVxZ3R6ZENEb0pqTVgvZDBBKzhybVFKVEdnNmpPaWlTNnA2c2xIRERyM0dMaXFFdkFvUjZnZ0xGZC9sV0gyaW1RQ0VJcHAyN1BmVVNqQ0tBeExxNDczNVBRZTY2bm5vVGcrenFWWVNtTkE4Y0F1Yk1Jc2E5T0VlM0tXYjlka2RuMWVJMEcrUU50K1dMd0Q0Vm1RdlFuRWpVbjdCT1l5TTl6dnREa2pvTWU4enRQM3VQR1NWdTJ5cWhnUWo5R2h2cCtDV3N6Zk9BK1IvbXpTd0svVlZqSkNyMlBqT1JUZWg2RThLQWM2bFB0Ky9JNTJXQzB6b2NmWDBJRnY4dWE0OFhEbzloWGVobmZ1S0pVZmdmTDlFT1FLdEVLR3BNRGxCbFJhUXo1b0xGNkc0VERqVVZSN2xFSVRRZmVDNStDWFA4TkpXS3dsTTZDbTR4U3ZDUW5POTZxMFFvYnhTaDlIRndNNy9kUkhhcjQrSEFoUHFDbi8xU3UweHFNVC9DUFcvSTRFSjlkSUxSNGpqcWZ5NkFvUTZ3V0dIMGR2b1VUL0VUU2hTUGQrUjBJTmVBaEZxQWFzZE5wc1Bha0kzN3NhU2FpNkJDZFh4bjNMTXBvMFlGVUhhS3djc1VUbFJBVUtib0FOeFNBYmd0bEVub1g2T2M1TXVCQ1FVa1Z2cUdQbk1OVnZUbzNnY0hZalkwUjZ6dUZWYWdzekxwWUZqV1NLY3BNZDhQSzNyUWljVVcraVlpYkhrVGNCVFM1eUVYdEkvdHpZTlBCNGl5ZkNnYnZKc0NhR2ZIaHpIT2ZkMkhUaFgxU1VJb1h2MDA1SEpHUGlBMWtmYVA4RVlYZ0ZDTDhCVTF4M3JsZUtKTDA1Q1kvVDJmM29RUXBjYjJWcUZkcTJCWjAvdFV2NDNHWlhUL3VhdW0xZHRDZmIxNFdjWXF5Z3ZLN2tZWS8zMXF4UGVDVVVWSUxRZmFoT1g3TVlWSlU1Q0NiQkNDZE1HZ2hBaXM3U3c1QkE3dmFlUnYwRDlad1BqWUtYNzNsVmJnaEdLTFRMdFR6ZFJtYXdhT1FyMktvQm11YkJBSXlUV0hBUWoxTmxVejRzVmNnLzJDVng5T1hxc3ZwQjJ4cEhkUUw5dWV4T0tPQVJyYldXYW1MVjRHczdiWDhUdmdieGcvMldnU2tyUWI2d05pdUJRUzV6Z2podmg1OVZiZ2g5ZXd6YlpsemdQQ3VxK0FvK1NhQjhudEpEK201YW9Pc0VKemRVWE1RckpMZlY1RU9wc3dJUDREa1EyMmdwbmZLblFpY1FFSUVSOHg2R3dNODRjeHZZb3NMOHJ6VERoTlh4cEkrcDlCMFVlK3dpcXVBUmZTUks1eVFSSS8zYnRHWUF6NHRWcCtUdkFpZFNVTkQvNHY2OUpUL0k3YkZYdGZHRmlQb0JmcmlTeFJTVVVWMXppNkhReFdVU3JWUGVjd2owWEFQWXYrbXlYQWFWTENPa1A1a0V6RUNGcmNGWUtjR1RsNmxNQUJhL1oxM3RiL3NLTnk3YVhBT3l1aHN0OVJuM3MwU2pjL0xHY0dybDYxcDVjMDMveWI2UHN2RVU4OFgybUFkbTdadUJrMmwxcHYzeFRpNlRnQ2RDazFucy83RjR6MmFwYVVocXE5b2FtMkllNnRFMzVzMmRDYXFaWS9ZZVVtZlR1S2JRelBpYUZuYThTOS9LV2MyQ2MyVFFKNjZyUk85SVhra0VwMmpHN042WElDZDA2azdkbEcwYm0rdWRycVFGOFE1WWRMWUw4OUUvK0VMZ2NxcTc4TjdENmRlSU5DbVZ1WkhOMGNtVmhiUTBLWlc1a2IySnFEUW94T0NBd0lHOWlhZzBLUER3dlZIbHdaUzlZVDJKcVpXTjBMMU4xWW5SNWNHVXZSbTl5YlM5Q1FtOTRXeUF3SURBZ01UQXhNall1TWpZZ05qTXlYU0F2VFdGMGNtbDRXeUF3TGpBd056RXhNRElnTUNBd0lEQXVNVEV6T1RJZ01DQXdYU0F2Um1sc2RHVnlMMFpzWVhSbFJHVmpiMlJsTDB4bGJtZDBhQ0EwTnpZNFBqNE5Dbk4wY21WaGJRMEtlSnlGWEVtdUpia04zRGZRZDNnblNHZ2VqdUV6RkdCNzB3dmZmMk15Z2xUcUZmcXpnWWJ4ZzQrVlNVa1U1L1QvL3Z6amYvanZYL2d2UFhXUHozLysvQ09uMU9yVDF5ZVg5S3o5K1V0Sk9aY25GU2Y5RS82RmYxTDZNL29uci8zcyt2a25qSCtTK254S2ZsbGlMUC9rdjMvK3NkZW96NnlmMXViVHNrcTdkMDNQMkU3WmU2Um41MC9kOHhsVllDK0F3bFNuUG1UUHVwNURpQkNZZTVPZGtxZnRSMytXaCs1K1h2VXRDOWVVNXBQcnA2ekZuVXg1UDJWOTZoaFBLYnFtMUo4MFBrM2UwSXRLdDU3ZVBtMjBwMk1qWlRVZHoxejVhVXNZaEg5OTJzNVBHZnJDQzFHOCtkUnhmaCt6eXU5VmtJcEhWTVo2V2dNM0NYbktmdWxpV25tS25Fak9UOWJGRkZuNmRBaFI1TjI2Lzhhd0IwVFBYUTVkNFJhMXlaOVN5eXY2MVBlUkVDRXdsNnovUEsvK1pQbDlyYUw3bkdVOWN0WjdWVWhLaElYNnkvbjdyRmwxdHFTS2RUc2M4K20yTVVhWi9ZdGh5Y0VxS2srYk9DVFRxdDZ3K0NaU3BBbXRhbHZVYURzbGh2ckNKZ2Y5M3FJWWduK09aNDZYSVlMSzN6T09WczVDWHY4akFLY2M1Q2lmS3RlbXltTDdWSlZ1RmJ5alFwMkpvQkxOOUpFL2k3YUxTcmgyRHJsS0lrVXJyd2FKeG90Nkd5V0dyOGI1cmdXSUQ1OTZWNXFvUk1MVHNscU10bkIxUkZLWUtZUGdUN2pwenRCRlJmUnlxaENpbngxWHVaVjJkckFPM1JlanhORFVJc3R0RmlVcGNneTVReTJjSXRkenl2WE1jbkZsaDRxSW9CdVc3VTZzNVdwZVpFZFgrNVRkSUdOWlRmVk1vZDZobW9hcVVVMUxudy8rUFhSTlJleUMzdEVRZ24vQnJCYTVxbnJZUmZTNEZsd1RoWG5TZ2hJcWZ4YlYxMXZ1REZ4T2x1V01GOXA2YlJPcTNFV3hNVG5Eb09vbTFBYXhqU0lXcTZrQlZtVlZOQXBSY1J0YVo5Wnp6ZktEK0p3WWdsOHNscXp5TUVRUS9CVjduTHZjR2RHYktycThaSW16R09TZXBXVENKQmgwTWNnNGdRaUNmMDJvblR4Y0Z5ZFdTM1Z3NC9STDJ5L0M3bmFjdi8rZU5yYS95UjFUbzVVV05MaUszdnRwdEt4YmE1UVk4dm53dTYwTWVDczFudnE2UnUwckRicGdyN3Uwd3dWUTZWVWUyUy9WSm9QMStOZERhYnhDcG02NmczcEY4dTZRdng3M280Y3N2NWVweGlPSlk4aXV5NFpLSmlPUm5wbmUvTFRoc1hOdWdIYUpERUx1akJjN1E5SE5GNjJ1T0FPOWU2clVZaTNNVVpWVm5rT0lrRFByeTZ1Y1hkYzFObnBCMCtVdlpSZit0VnFpTFBDQ292NXJsNXV5eEZtcHg4NWlMTlhUU1R5Rks5NmdFa3RjaFQ1UTRVOS9nMDNPUkFJQmkzV1dZRVJMZEhjaUE1M2w4WWRyVGpnZ1o1aXRxZlV5TTNEZ2NHUG1sQ29LSkpRMWQ5RWRWY1VRVTd2V29pVWxwRHdkcHR3WVBFNFJWd000cU1saWNibExPeFhxS2lreEJIK3UxRXlvcmp3UVlaUEZNU0pQVlR2MEJqcHJqcHV5aGhoY3VmSjF3aEE2TEdPWXpYRktWa0dIYnNpaWl2SEl2czlVK1Z1cFQ2dFhFTHlhN01rNE1XNE05UW5xWitWRWhsREUrY1VRL0RBbDUvZWZFYzN3eWpucEVieSs2RkRvaTVicStLenVpMWFXeTV2bjVZdFdFV1ZSNzBSZnRJcHRHbjNScW1ucmlieSthSldOb01XOFRRekJ2K0I4WEFsTFB5cXFNRStHUU1jWHJleDIyeGk0SFBORnY2M1hOa0ZOa1NZZXh4ZXQyaUMyVVZabFFFeGZ0RlRoZ053WExUV21FaVNZOTRnaCtUTWM1R0VJSVBqcjVFMkZMMXJWcmpWOWtVRHVHWDBSWHBlR2U1c1lnbC9zcG9abjhFV3JTcWd5cHpzYjJXNEV0YTgzV2lwRWZobVNISmhlSVRxRGxUUnM2cGQzV1Zsc2hHeXVVV0xJNThQdm16ZGFlVEdHdGl0dG9janJqVncvWElCYWVLWHBqUnkrM3VoUTZJMWM0Y3diaVg0dnlIKzgwY3JjRUxxamxXUS9GRkdmSFpwRGNtZ2VTZmJHekQ0Y2psK2wxeU90WWdHOE1haldxMjdESThuQ0t0WEFuY3pTT0ErUG54UTlndVNub3RJcExYTzhSNm0vdEY3NHAzZ1pQZXpYWEUySjgzRVBTSWtoTnFCc0JQN0xOaUNDZUNOVjNTZ3hCSC9OREpUMUlrWUl6QmxuV2VoZXB1YlZhb3o3MWp4MmF0WU5aN2d0elo2VGNkQmhRSEtwaGtQL3RkcDZ6ZTZxRzNkNUFMMlhDUnRDOEl1NzFVekNHU0tvL0dNanFDNU1tMklJL2puZHU4dFZtdE9xS1JuSjhaeXJYVkQ1VjEyTVVjaXc3SjlycFVBMk0yRzVlZm85RUFwTklpa3hwRjJkYXBqMFJFYURNaG1zRFE1bzFvWHphQTFtYnJiWk5MTnFidlJtcjB3YjdmYythRm5rdnNvQkhDalhtTnRsQkUyTnhBL0pXYllySlpsTlZHLzN5MC9NeW1qREdWeldoS3JMTGJveXQySlZEZXkyTHFZTjVqaWt6SjRLdkk2OFJtSXZrWjJ4NkVpMkZMUG82ZlBUMzJBem1lMTZoUkQ4cXB2alpZZ2dOV1NyQWJJSUlJYmdsMVdMRGgrR0NGS2Vob0JQVERkT0xJTGtwd1ljaGdDQ3YwUENOclphTE44UXJacUlwNWhhM1dnSDRvZ1pEVHREWVRYSVhKL0RNcktyaEZIeVFIZ3FPckNZVVBDSXYzVUEvQWtxMS92UmlrSWJZNVFZNGdseTZlU01mRXREQ1A0TXRUd01FYlJMbUswazlocjFMRkZqM1VkUFFvaVhXa0pLUXhVZ1pjNjdzSHpDMzBOSUNjZVNOK0x1dUlSak42aVdVV0tJbHpJK09tK0pvUEluTFlTZHdsd01mNms4SFJLV0RrOFNRL0F6ZkN3VmZsMGdhazRsZDdVdFE5SkJ0VVVTcjVrcEZsdStjVWFhUDhudkJTV25yQm1nSWlybDdPYW5obWVLMHg0WFFlZlhSSGVoSER3azQwWVlzZ3QzTTFQNjlLNDJEd1kxaTlKbkJHUkZkaEdyRlgraFdlQzcya1hEWWZzVlEvQXo2amtNRVRRVm1RVUZ4ZmVtamJuS2RmZGlxQytkTERQWTNZZ2grSG41RDBNRVRjZ2hqdTN0WDZpUWc2VWFWOXdRNHFVRFJWYmZpaENDWDFMTjltNTFDRTFJTFE1bWQ4bUd6Q01QeTNyTTQ0N1dFaU5yZDhtak0wQjBoczZLdDdua0E5MGxPOEZjOG9BZFBxbmJxRXdsWDVjOGF0blBlbitucEhUSWw5emdYTlpXT1ByUVdOc25ZYWlMZ08rRE81WTNNL0tsbnhXNEhxSy8vNU04NlRLRE1jUmEyN3hxOFRIOEJXWEJKWGVGQ2lHZUx5dVdTK2tNSVFSL2wwQzF1ZmVNSWVYbjJUdERCTUZmckM0T1grd2JZcTUycUlhTWZmbmlVVE51bUROb0hxZVZJL3BpaDY4dmRvcjVZamwrVkpyOGZML1BYL2o3WGlnR3ZiMld2aTA4SUNXRytvUmx5UnZQS0laNFkySklhUXdoQkg4RFJmUFBMcVlzaE9DM2N0aWFtcjJOVkJEQU43bGRnQnZ5R05RZGN6ZG5ETm1QTEdtUllHalpWL1AreWVQellxbnBad2p4Y0N2T0cwTUl3Yy9zU2wvMzA5ODQ1WXd5dldYM0l6TmtkU1hSeHNHck14Q2JwK0FNS1ZITlJFbmttdmM5a1JOWjZRQjdPTk5WVElnaERXUWY0aWEva3VBK3YxWVhReWdTSytaMkdXT28vT3FzMWdta1kyaENhbUV4M3lGVDF4cm1hMkZpcUMvdDFvWmxZU1NHeXQ4cWdnSm5DS0VKV1VRVGNiamVWSmQwaDZVbVVycjZuVHk5cWQ2citZL1RKKytvVFhTbnhCRDhqS3pZVisvYXA4S0Y0TnUreFZIMnVnWWlHN2JWZTkySWhLeXJMci9DNUZqYnNsZDIvazVQdmF0RlEyTVJQZlZ1eFJhckpYZHRtN3lRd3NFSk9VUHFLQTVaVzkzaDIxZDNpalhXZTBiMTFvckxIVzZ4WHJYbVhreHZqYUd5Tkc5OTlXNWx2N2RWTHVLanBtbVVHSUkvTVoxa2E3MFg5bEd0VmRCUlpCbFhMNkZuRjRBTWtLdDViLzNBMDFzL0ZQYldEMFExQjJqV3E3ZmVwaFYzbHQ4QXAxUVJUQVJzazhVcGkxWGFhcXdMbm1CR2JBaXRpekZzT1YveGlBbGxSRU82aVZ5K0ViUVhrRkQ4WkVDeFVFWnVLN0ZCdXJ5cTNHWmpzY2tZWE5xaW9kRnZzb045b2R3aWVPMkUwS3l0aWJEYlNjMTZPYXE5U1cxaTI5L1pmVStGd1prNXVCQmlSZGI4SUNXRzRCZDkxRDVmZ2NlUElma0xlOS9PRUVEdWNOSURrQXN3dFc0bUVia0dyN1QwY254b0s3eXVvRWsyZlZHYTl2WDFPcTF4UTgyZ0dWQTRSZXZKK3Z5WnJkeFZJWTVYQXdtVmY5RmNPTU9hRnExcWlpWXZaVFZOMDR4aTJrUjFKeVdHZUx6VmhndjFMWVRnWjROUmJrZnZVT2ZKNHBrc1JuWjlXaitaa0FySWFvc3pzSjdYTmFWVGZVejROU2NFQjlnZTYvR1RFa1B3ZC9qT0lpbE0zMmM3ajdiK3B0RDZMMnJtNEJEVm04Z3lqMllORnIrTFRWNlg3c3lqZGM0UU9FTjN6NEhNNDBEUFBKeGdtVWV6MEo2SmhhUTE5YnRuMUxTLzhrNDB1S1RNUEM2NXdTcDYrZGI5ZENYTjJxaWtOQ3REV2VvaGdqZnNITk9LMWpGNXBlanYvMVFlazVZM08wSjRvQ3p4RFQ5aXlIT3JWL2dSUXp4L1l6bk9FRUxLdzdvM000VVlraDgxcnBjaGdPQ3ZiUEV5NzdEOWNDUFFNQkJ3R1lsYUNpYXE3SGR0K2FlVGRUaDhzdzZuV05ZaFI0K0d0aC90OTlrcmZ4cmxDbWhVRy9UY3l3azZtallUeEkxWmlDTVFLZmtic3RUTkNTR2p4QkQ4Tm5tSUVFZitselZQZTl1M09GaFE0aVFQUTV4V3N2WTBMTUpwY01iTEk1eVdiYk5QaU5PeWxlQVo0clJNWGJZSVJ0NTJRd3BuU1I0b2tybGcreXpFY2ZpR09FNnhFS2R1dWJYemhEQXR5YW0zSzhTUjk5Y3I2R25haGxjTHpSQ25hVUZMVC9PRUxBMk50RU9KSWZnTEN6Z01jY1ROcGl1Q0Vhc2h6NjlYaUZQMzIwSVFTbFVIbGozQ2NYUUNIQ2N3dm5HRThLYmFzT2tiM3RUSlNQa044Q1ZqbXRjc1FReXh0NWpxdEpzWklUQW5qRCtkM3lOb0VwYXhyK2FmU2xnTFo2aE1wQkRxUy9WV2orMnQxeGlDdnlMRXFKM3FaSFlYM1hKdEJLblBxSjR1Zzc4ajZkRTYwOVJZVHBSVGF4NEpsMThnU25paVJXd1gxamJnTTBpSTBNM3NEeHZtait4VkE0cDh5OEp3K1FocjBKZkNrZDk3clY5WmFBeVZYekxDcTRZZVErV2ZYK1dQR0NyL3NMdHVEQ0dFUEIwenpXWmFZMGo1VWY1QTFsUXBNT0xscmtNR3RYTjh1U1NmUXFpZEU0ZFdRNjg2bmFwM2M4TVVWTzBNNmY2d2R3dCtPZ0tqeFBEaUw2TDUyTUFJM3Z3YzlEd1E0WmZDeEFuTDdaWlNLNmx2anlHRzBBY3F1ek9FVVBrcnl6MzJ4aGlDbjltRkMxd1pYUHYrVjVQLzNYL1BEMjMvSzNzRXZ2K1Z5ZHUxbnpZSDVCc2V3cHZmSDBoNFhwY1dPeFRITFdJZ1F5Z2FqNDdQZ1hTRTFZdkgxZHhpdFdUWjl5K0U0Qy90S3IzSGtQYXhyQWxyVlJpby9QVlNha2ZRV3F6eFlzTndOYVhOYW9WUHk5VTA3YnNBTXRnWWJkM2wvYnRtTnpBK1pGc1JGNlN2N0x6c2VRLytDWHZSNUxjYzEzV0U1WkRWYjdLRGY3S0FkT1lWNVVRR0s3S2dWQTJaME9PYTZqc2QzZ0tTWWdsZjFibWg4b1lLS1hQMC9jUVM0Z3ZaN1NDbExERzlNTy9JN3h5cWhOd3RwMkRJUmowcGgyY28zVy9pSzN0djl5eUtIbysrNmMxNFk2aFBhT1dlbG9raCtPYzlMUk5EU01nclpoWGhHSUsvWWd2TjZjamR6dnlNQk9YZ01zeGhuWHB4bWF6eE9jUGtBNjFlWENhdm1CVnF5K2hYM2hFaFBGbXN3ZkUyRVFJenY4SFFGLzMwTjlnbTNUVXJ4UVdqbDZjUUxGRVdhM0VuOGk4YXJMekRBYVZQRmhkUUtKYXRZby94Rkg2THovVlR1d0prdDF1SEFWYTcxYWUyZWV0TENQV04yUWJ4YkY5Q3FQd2FwNHFQdFNBc2hudyt3aDFuQ0tIeVc5ZmJ6eW1FZUQ0VE1XY0lJZmhGQWZYR1NrYXFCeGhDckxmMDh3SEt6MEE1elJ2NHEwTUkvcGt1N1EwUXhCaVlJYWtOWmFNWVVqZnlLbmRIUUQvWWNtdEVTZ3psSVhtdmU3UW1odUF2S0RZZmhnaWFrUHkrNTUzN2RRTEhmblBuSkxpTi9Vb1d1NjMrYXJsUzFuS2FoaEFjKzgxajYvMnlxZDg4TXozZG1mcVZEQThOQzV2cmpTRWV2KzFUTERpa3JKOFE5VFBVbTNVMEtMZXJncE41UjgvdldJdk4vSDR2MVpZL3EwMWUrc2l2WElqSzc5SkF5Wk1mL0hIa04wLzdQT1NNL09iSjVvSU42Y2FRL0xod0wwTUF3YzhRelVaK016OGh0SW5mck5WbEZOT1RQWHRjemRRWWduL2pHeWtNL01vakVUcmJQSy9zOUxnZ3R0YW1yb3loODZ4czNqWXIrZjc2SkZ1cjJ5Z3g1T05SRERmem1vL2JvdUtObnEveDRrc3ovUDJ6c0JES2VWK0g3N3p2b1hEZTExWE5VaTB4TzlwVmVjZDlzMllTV3JQQXVHOXUvRWJFRk5taGpmczZ0SEhmN0ZNR25PYjFLL1NPK3dvZjFkWVl4dUFjRThaOTgxak00TS80cmxDV1J6UXFlUWlkWDkvUGNWOVphV0tQM0JUNlMrT1ZYMGM5Vy9XZXhsOHZ4YjdueUZvSUtXY21NeGQrV25lS3N0a0c1UHozT2hMTFBWV2Q3SUYxUHZ3Y3hTbGFaT3M2NXN5T2x0MVpuV1F0OTRSbXpteEJPSU9MbTVDaS9DYTk4cWQyVnhpd0hzVDlibWNEaE5kbFZ2aDFXaDlGcGdDU1gzWnlYQXdCNUhiekFDcnZjTVlYbEZaTHpPYS8zOUtpTEc5ZDQ0YTU1Y1VwclBkdlpIRjBBRWF4U3A1c05ITUpCais1VURIZTZDZ2pUVGpkbFd4VDc5cDdVVFdYTzZZSGZRcGpRdUNNUFNreHhPTlR1OFpSWW9qbjB5bzRRd2hwd0Nlbkd0L3N5Z2lXWEdrNUxKL2Nhdlg1ckN1ejJtV3dUTXBQUXZ2Z0ZGTTVmNTZzeFFqTXFueWt3NzZPS3ZsQ3Z6Q2VlbFVEWFVBNnNHOXhmK2xuQmZ2S1QvQnBjTHMrSHNyNkpkTSs2WlREVnpDbldEcTEyN3dLcjZ2ZnVaV0t4djZHRWF4YVk2bVVvVGVUTWdJVHFXbGZkdG9uVGw5Uy8wTFQ4YnRNcWM3aXJVTkdTTitFY3prelREOEI1ZVJIdWY1cmdLdzYrZlVxclh5bk84YUtFSnNTS01ldFprMlVIeEh5T25nUTRwOEJBczlNMThPTU5rQW95V2ExSDBhSUVNcDUvSWlscE0vZi80a1NYdEVJalY5UlczM0VQbVFyVEw0TjhjTHpVeElRSkducXlHR0svNm1EZW93T2pLQ2VVSTBxNXkvNmhOWktycWRyTXNRcWxrWWlSckR2am5UTXY2dlhRRytsaWRPMERtbG5qa1pDaE1DTW9LQlAxcmNtb3NXQno4L0xSS041bkkvVHhSYnFrRFN3MXZzbEpORUc2ZEI5T1ZpcjFUUm1oNlRlVUw5NFVqZGQzUzRYMDUxanQ4dTBNQklFSzV4bGNaVGlJZDJrNjlpSmxVbXBwaVJFaUdyOWIveS9iUHdmQUtPME13MEtaVzVrYzNSeVpXRnREUXBsYm1Sdlltb05DakU1SURBZ2IySnFEUW84UEM5VWVYQmxMMUJoWjJVdlVHRnlaVzUwSURJZ01DQlNMMUpsYzI5MWNtTmxjenc4TDBadmJuUThQQzlHTVNBMUlEQWdVaTlHTWlBNUlEQWdVaTlHTXlBeE1TQXdJRkkrUGk5RmVIUkhVM1JoZEdVOFBDOUhVemNnTnlBd0lGSXZSMU00SURnZ01DQlNQajR2VUhKdlkxTmxkRnN2VUVSR0wxUmxlSFF2U1cxaFoyVkNMMGx0WVdkbFF5OUpiV0ZuWlVsZElENCtMMDFsWkdsaFFtOTRXeUF3SURBZ05UazFMak15SURnME1TNDVNbDBnTDBOdmJuUmxiblJ6SURJd0lEQWdVaTlIY205MWNEdzhMMVI1Y0dVdlIzSnZkWEF2VXk5VWNtRnVjM0JoY21WdVkza3ZRMU12UkdWMmFXTmxVa2RDUGo0dlZHRmljeTlUTDFOMGNuVmpkRkJoY21WdWRITWdNVDQrRFFwbGJtUnZZbW9OQ2pJd0lEQWdiMkpxRFFvOFBDOUdhV3gwWlhJdlJteGhkR1ZFWldOdlpHVXZUR1Z1WjNSb0lEUTBOekUrUGcwS2MzUnlaV0Z0RFFwNG5NVWRYVy9qTnZKOWdmMFBlb3dQRFNOU3BDZ1Zpd0M3YWJmWFF4ZmRhL2ZhaDdZUGlxTTRSaFBMdGV6czVuQS8vbWFHRkNWYm9yMGJpMjZBT0xaTWFZYkQ0WEMrYy9GNnRaN2ZGdE4xOU9yVnhldjF1cGplbFRmUmJ4ZHZxdlc2ZXZqajRzUFRzcng0WDh6bWkySTlyeFlYUDIrdTEzanBiVld0eTlYbFpmVG1tNnZvcjVjdlloYmpUNVpwSHNXUnloVkxSSlJKem5JUnJjcVhMMzc5UjdSNCtlTE5oNWN2THQ3eUtHTktSQjl1WDc3QXdYSEVJeWxZR2duTlJDcWpEdzh3Nkx1ZmRUU3I4YmtKUEdGR1Y3TE9sZTlldnZqdDdGMDVPWmRuOTVQejVPeDZvczRxK04zQTd3cXZMdUFOZkoyZVJmajFkeE91emNlRkhmZ3duOEpyN1ViOGN5SmhnRDRyOE1yOWhNZG5hM3pNSFF5SzhOUHJpWVZFTDNOOEtjenplSDQyeFhkNE56M3FmOUhraitqRHYxNisrQmFtKysrWEw3NlFQS0pQSHA3bkxPVmRBam02ZE1qUm5hU0dTY0tiWHdCOXdGVUFoaU9qSkJMQmVISUlwZEVwSVJMSjFFR3dOY3ovQ1g1cGVkZTRKa1NXaDlHeFNUbVRCOVlsQWhnSmgyK252NTE5UFQ0OTBwU0pnNXp4TGJBQjhzUmR3K0Q0d1RJdDBZVWI5bDA0ZWhIUFArTEgrWVJ6YzFOa09COCsybkV3aE82ZndhMjA2UXA0czNhaktnUHBtQmtQaUlwRUp5elRZUmx2QUt6aU1mc2JvTXFVYVJFS0xJeU52bjEzRlVVWDcxSDh2N3Y2L3Bzb2ZwNU1GeEhuTEpaOW9hNnpqR1daUVozUU5paFBpK1VFSk9qMUJIbEZnVkJWOUpkazd0T1JtNlNQQ2VBZ2dYNGVYSTdkbEgxNE9XY3E4OEl6QjBzQlUxOVBhRmZCeWJOb3FJR1VLT3RvUnBzTHI4S0gwZkhqbVdZNjhlRlhJTmliYUZZdXlnbFhCc0hIWXNJVDNPUm12V2dJelNNQWRrSm5LTk84MUV2UHF1aTZKR2xVM0NDcUpiNGdmb1JxdFpya0FkWTBVWUlKN2NPS0tGTSt6Z0c1OGlPK0lHSVJ2TGwraXNwUHl4SnhNdlJDeVVoNGZrUk5aSFYvTXpGdmthdzBFNFpmam8rLzJZMWFzYlNQL1h2QWdaYTB2QWVVVWRWWkxpZVduTXRWQmRPU0JyY2FwMlQ0dHh5ZksxWENrc3lIWTRCZG9GS21mT0FxNUNlaVFyVmE0MEcyV1ZoWlpXVlVzNHkzeEhObWQ0eStFMFRLTWkrS0FYYWV5UGZBcTJubVJqcUFPSkNHNlcrUTU0bXIwVUtBN3haUmRUdXhZbU9HVExNb0hTOFZ6Y2Q3VXI1SDM2TWE5T1RrZFBSS01zRzBsMTdYVDA0bXJVQXhLbkh5MHpzazEyTFdVR1JhSVRscmt2VDFwbTZGMktJWjhSRmxNTjExckE3ZngxOGxpaW1QVklqTzRlazhFNlM0M29XU1I2bGdTZHFqWE1zMmRlUU95MGNRK1JrUTZSWmVhZFBoWnB6aVMrbE9JM09ZZ3J3Q1M0Z0UxbUxxbUsrN1VjL3ROY084dERKMTZZaGYxRFV5TWp3YlNOOXdOUnVmZStBUzV6NGE3RkM4cDZqeHNSVTFtYkJZOU5CNFJ3Y2JIZ3ZYU0liTmFnSExvTUhXYkxRV291aERveGhNM1lKeGFSY1BMeS9XNVd4bGJHWnVsOHFka00xeHd1M3k0Zkd6QVZtVG1YVXFFTGJUT1dqRUFlQUVzSGFBNkw0cE1VK0Z2SU13OXgxNEJ0OEszcXN1cEY4c0dsTVVkVUhQYUJUQy9ZWDRBWm1VMXNDUVpWMmhpdWcwTWxBVEM3TEJPbXpzOUVtY085R2l3bmViMnUySklwcHU4REZHdEZ0cWpuK3FhQ2FWYjE3bjQ4Tkw0SklYWG9ENXlaaUpmQmplbGhRdGJzb0FaM2JLbWRhKzJTNXhTU3VqZmFabUw5SEM3OW9nNDh1MmhFN2lZYXg2NWs0QWJWMHg3dVdCUnVRZ3Qrc09RU3EzZDBpaGVWcE03NXI5VmpYcTMvaGFpNVFhekVVdnJjYUhCM3EybDJFQ0NEVlFzNzNnUXRrU1Vnc1dlMlFwN1VrVjU3UW41K05yN1JMc1YrNWR6d0FFempqemJyVkdsV3BPMThiVFV1TytEN0R4VkJJemRMV2NiUEowWkhLMDVIYUIvWDdXSEk3SE9TRUhweWtaT25nRzRRWWdxbWE1Rjl5Z2pqSzZyUnpIalB2b1BESDZkTnJSTVZvSlMxeTNJSDF3M2FoWEpFenBNRUoyZkFyajRJcDkrRTQzcTZKUlFRZTJCVW4vOFhVRXhUSWZRZ0dVQXBteFBQR0ErOWgxdGhwN05JQVBMMlZaZnJyNWd1SHZCZWRSOWdNWWRDajc5TWttblNSd2p2c20vZUZ1SWdQcEt3a0lQNlZPTjAyUWZsNnFMbzFCcEsycGR4OUdtYzB5Y3YwT1lrQTBKazl2YVRYRTFydFRUTmZ6eDhiZDlVU1hqUEhWZXFzN1RpSWJjSWFQQWN3RWMwN0dDV29tdTFQNENiQjdaNExnMW05blF3Qy9YR0Zra0E2WW40R2R4dDh4WEtUazhoM0c2NUFMUkR3My80QUxscWQ5OHFRWWVMQktDMmlJTW8vUXNNdmdWZWswV3MwR0wvOUVxRjZ0cW9lUDVlUThPN3UvUHpJSTJFZU94eHpKY3dSNmh5aVpqT3hNU2xVR0t1bnVlbDZaNUF4UVZKQlc1dEM5YjFqTzdpT0tJbyt2dldSTVN3OVdpNmhhbHVPZmdCd0lrZmhnQnRCNFFNR1FQc0xYMWNiNTY2ZGxkRDFIWlpFTy90dldpL1N3N1o4TG8wY0ttZUJCN1VFekFMZ2NFelJPdFFoQ0NUODRveHhYOWpRSW9RTWw2SVlhQm41REZ1QWphVUFWYWovVy9Vb24wSzdDUHZyNW1ZTHg0TVBzRFRyWmpWUW82TkFCWkw0bm02SGU0a1Y2czFrSGNCV2d1MUNjakVka0lobjN5UVhyb0lhWjRsRmNyRERzYnJmblRmU2Z4Z1gxU09Ia3VnMUdCbElYVWluQjd2VGxCN3dEQ1U0TDlXSDhmSTJFeGFrY2hrL2VtelRuNUwxaDQ4ODh5K0dzOWNEK0RTYWNOcEdtMFpOR01pYUZGN0JSNVp1Z2N4SGdBT0VaZWlFOTRDbFp3Y1hPL3J4dGJPYnE0L2lJcE9qTzh1QXhmclNBcHdESUI2NzhoQkp4dW1raTIrVmlOc2M4dVhJcmRyV1Z5bE5UMUpBTzAyVVR1bkxoeXJLTzRCYmREWGVSYzM1S2twZDhjamE2WXdDMjhXQW5HS2JWd3hKT2M5RktSbXR2V0d5SytzODJqRXlJR2plSEZmaGhCQVdJMExRZndyenRwT080WklCcTBvM1l0Unp0WEVKUEpOanFBTWFHVE5FbjdFRTJoRXFXZno2OG5rb3VuNmVTSjk0MTRxU1A3cUR4S282VCtQSThnYjh5ZzkrM2x5bStWWEdzeENWZVZYQlY0VWR1UnNUSnBZYkw0dlhsdWJRM0tXNUdpa3RPZjV2blhWMHEvSlBDSmZoOWs5Skh1Ti9jYUw2RmU4MU51WDBXanRiNE5meStwdWRLMlY1cWtPSm1KT0FPS09PZFpxUTJEMnRnS0czL2l1M3J3cUNpbEVHMGd6aE9UYjAyZUhmSThYWWJkZFZDYkdiaHNIV0RKQTQwZzk2NkJ5TENpQlhCRVRRNjYyTFNVdE05aDJaT2FNQW8zU0RXa0FrbXI2N3NjNFVoSjkvQm9uM2crSkVkRXAyRGpIWDIyb25CNHI5R2VJSUUrN1c4TnJJcGlCaFNlWTZxMVM0bTZMb29WNC96S2RxYzQ5c1ltV1FaS0NzZTRBRVVGQk1NOE1ENy9TeEVOcXVPdlFCcG5YLzkrYXNnU1pkY0NLWXpIK2dwYVNBYjhxY0ZFdDRleUFIVUVMVjNwbTJpeTNJelNYYk8vdDhuVFJTYndrQ1BjK2RuV2VESlQ3ZlpIS2xodExuV1VuMEcydW11WjByb0dKTVBVdlRmOVpBV0FVeGNpWFV3SGlJeGx3SDJBYWxGa1kwUXFRV3h4TlFHRHhLa0RCby8xZ3dSZUN3WFZqc2JpdE1abHpCaVc1Y3J1TXN1VnJVcTBlN0R1NXltWFg3Q3gxM1BiZENzYS93MXZCRFZVNUN4TG1ISzZvVmhSRzJtOWlkV09CN2NVdjBhYm13bnY4ZXdTRkVKRE9IUDUxZzBJM3h6ZUZ0TlRNSm1KNWxzWFdBaUlXRDVWUmpiRDZ1cGN1M0Q2Q2NVc2RzTyt0WmJhcEpHdCtNT2ZrZnIrTUdabUNWcUx6dFVZVTc4SkJWTTVUN0loWk9TcmVTMHZzMzBySXlLeFUwSXp3NHNvdlJoUkR1ZnBBT3hVcEQwUVpONDRrSEFTUXpyUmhnZGVpNzI3S3EvTnBOT0xtYzNoejZNZk5KaUtQSmZ1VXhoc3oyT2k5VU1RZGVLYVNrOThNZWZyTTcyZ050WFpHVzlFZk9kcEZyY0ltU2kvMkxEeDlNQWRuaWVZT25vcVVqRTgvU3p3ZldzY1BYc3dKZ2U1a3NZcnhzMFFIZUtCYnhtSURVb2ZMZDF4VVR1ZnNTazZ6VTZvYXFIOG1qanBZY1VGekZxTVYrTTFpRzZwU01IRkpWSVdnVDM1ejYxRlFPdHY1Umk4NlhqOWFWVE9LcEhrc1VMNDVacjh6K3YyeFJwZDgyb1p1aEcyNkFjSzdaTENXb1NaeVovcUhSbmpuSFp0ZnVRTkxrQnIxNmJKRDkrVFF4bldlSWo0SGE4ejNrU3QxT0VvbnBaVXFHRms5KzE5WUduTzFHdEFGNDdtZE41NHNIL0VCL3FzZmtRbEgvWmo5dFF0azNaNXRYM0R2dXVEWGJlclFJMGxSS1BaYlNrN1AyS1NnaDNLaHJiTWdZeUthN3ZHeDNHamNBMWVYQkJYSEwxMG5xMTFSYm9mVEZmRWxiMTlzTmJ4aS9KWk95VUR0UjNoU3N5YURWTXV1SFdHVngvMHBueDBSNHlCSDhXTXBGRjVsUTYwK1BtNmFxcWEyTTZBVllEdFN2b09OOHh4bm9sSktrbDFNTTFEYWZaMDRKOTVlWjdLSit4VGFHWnV6VXZuYnhZRkYwVGZ0Umt5Q0gzcjYyS0c2YlpxemgrdzBmM0RDYWdCSHBCQnNyUUF1bmdnV2VDMzQzNjgxaXVZRkhBSm8yS201dDVrenEydlJMdFNsUFpaL2xwT1g1T0wraktIbnpMNmJvTVlaL1F6dEdhNVgyUTE2N2l6c1dxbXZMdWRGZEVISFJrWUhBNmdOR2VzVlQ0OEErZ05tcXFxL0hBczdzN1FONlFpQldUdVJkdUk1aTN4ZkYxNmVUUmpxeHA2bTdwYTdOWU8rV1MwOEo0bXdMa3c0cWNTUzhKRHgzZDJjaEh0MVFaT2d5ZXBVSUdTa2p6b0dTT0gzTjJqKzlSMTR6N0FBZVlhQkw3d2JYemZEQTluRkJqR0Y4RDVqcG1VcHh3empwaFNnL0QyNm9IWEpUbFRZQ2N0empCY3N1VFRWZkU2ZWROTjRqVFRZZ01pejA5cyszV0lkY2JwN1B1bEkrVDAyTWRBTGVjaWhBOXVCMzI3QWVvR0VneGxmNWtySkVrT1ZZb2VPRFphcUdsUzNHenhrK1FOZzF4OGhrY0dzQmNTVURGRTE2U0cydkxHWXFvVWt5TEpSenljc2RqTjM3Tm9NQjhKdzlhMW9KcGpVVFQzdVl2UkhZemI1S1V5TXdiWDJ0UU12ZWYxb2VVaG54a2Y1MkU0L0lMSEdQWTdDM0d0SHZrcGgvS3VxNFdJSHh3SVVISEtGYUxveGV5NzhCVENUcnd2aERQejJndjhjeEdZR0NBeW1GS3dqR1I2Yjc1eVhOeHJQblpCNml4a2Rvd3hDUEYzSkNCbmNJTmNFbUNVdGYzRGZtU3BlSTR5VTEyVVpzblpYT2tWRHE2UWM0NWxRY01veGhDQnpMWnBCNTRlenlwSWJKSlVma2JSb1RVK3pZZXRKazZoOWxtTlg2bXVZZ2w0L3AwaXlCaWpSVUJIbmk5Smd6a3FpSkgzcVBMUHgxZkpjcFk3a1VwUkxJRzN3UFBXdkUxdHBzNVYyY0ZsY1JRbjVWVEtHTlpTdGJ4TUdwZkJZQ1g3NEVYUXZPaEFMMlA5UFdXODdyampxQldZaTVVMHduWmtzc0R3OGlkZmphdDMvcXhpVUU4QnREaUZGZ1owaXZPQ3RMaUFoZzM5bUJKNEViaGthSmxHYXlIQzZ4ZmZnaDZhN3lYcnNJc2NncmlYeWpoVzMzeGdmeE1pelhhWTdyTEFkM0sxMW1KZVVLcTE5WHB2bWtCUlZHUDJzVFV4cGZSYUNMbDNEZnBBTHRFeG1pYmVPQk5qV21BZnI3amc3OERFb0ZqSWJjSGRnQi9ZQ2Izd0R1b2tUNno0NWxYSThWT3d2RkFRQ1NjUmpvTU1RQlhOWUpEUzNUTkRFY3JvKzl3Rnc3RndIQUQvMmlVSWoxUW1nTEMxMFZMYUd0dUpWaDMwOU5zK3VLbWJSblpqWVAyK2xGVkFXSmZDWlVlRGhQaVdhcDVqSm4wYWFmT0FjZEw3WW9sbXBvQmFlb21xR3BCWCtiNDdkWDRHZmltbU5DenpnR0M4WW5lQSsvZ0RuNW13YjUvQnl2QmtwUGFsTU1RQSs1Z01PL3p2cXpFSGJmVmpkWGFUd0h5NERtV1cvcndDR0U0VWlzSUQ3enRLc2pyUnZjeE1TOVhhTlpXNWJVRmRDYTRVRk5EM3oveHZxOERaZkthWm9jZS9FTzFPeE80SGZMVHJaSnRaK1NCMXg0V0pPbG42enVYa3RGbVBKbGdjY0E4OVViMCt6bHBRUjZJZXIzQy9zNEJETHcwWTlwTHBQRkxTQkl0MERyeExZcHpkZlJrUnJOSHlQU2lZNTB5QWFibVVGN1Z6YjVxMWU4UTJjTXBVMTU1dDF4VjdsK3lWRk9YYlJaTzdJSldydnRvbUk1eUpadVplUGw1cDJQdCs2WWFudWo4K3lTQVlOVFlLc2VEV1lqU3E1Z3BIempUVkc5ZlFzaFdtL3VpanVxNzZtT1FUbnpZN1ZYcjA5RUYvd05ObHZ2ZytkbzUyV2JHbEl4VzJLWlFxQi9iMXRQWU1uMTh5OUtJZzFNUkpvRXpRWGs1cHRQbEdhYmJ5WXFiT2I5Qk1LZWp4RGI2d29kWkhhcVpjNEwvZGVRejZkL1hsY2R1eVpRSStsOUZuNFBIeGQvd1Q4RUdSVkNXc2xSaE41QzArZTgzZnN6cEs1cHBwbGd1SmFqd0VqTURZb1ltbXlTQXQvK3dNM1RJSGFwODNGcVNwaVMvTFllVVdaL1FXckZZV0hRSC9sblBzVldSZWE5MVdjcEVoTzF1OXdBOTFyRHVBODN3eW42bzJGc2d2V3lzYTVtWnNuY3FWVTg3Vm5keUtidjJzcnc4NStLVkxXODNEUWVvaGo4eFpmSmNOaWIzTiswelpHcE5jZDArMzlYVGc1bE9OZll4UFR6cGx0dGZYWjVUWWY5YmM5c2JkWlRWT0VBbU1FU3BMK1VoT2duQWhNZE5ad04rMlV4UzViYVhnalI5QTdKT3p3RnhlWjdiTzZnUHdwV2RWUE1aYUNBNjNRZmc2N1JwVlhCbEdnbWtadnBJOG55N3pRSGhRbjBPek5BR1dMZmZRVzdwS215RGlMaEZzek8wQWFMc1grdEg0Y2ZtSFBkSWpaWjVuSHpoUmlCaDhIOG5mbHBHRFFwbGJtUnpkSEpsWVcwTkNtVnVaRzlpYWcwS01qRWdNQ0J2WW1vTkNqdzhMMEYxZEdodmNpaExZWEpsYmlCTlpXVm9ZVzRwSUM5RGNtVmhkRzl5S1A3L0FFMEFhUUJqQUhJQWJ3QnpBRzhBWmdCMEFLNEFJQUJYQUc4QWNnQmtBQ0FBWmdCdkFISUFJQUJOQUdrQVl3QnlBRzhBY3dCdkFHWUFkQUFnQURNQU5nQTFLU0F2UTNKbFlYUnBiMjVFWVhSbEtFUTZNakF5TURBM016RXhNalUzTVRrck1UQW5NREFuS1NBdlRXOWtSR0YwWlNoRU9qSXdNakF3TnpNeE1USTFOekU1S3pFd0p6QXdKeWtnTDFCeWIyUjFZMlZ5S1A3L0FFMEFhUUJqQUhJQWJ3QnpBRzhBWmdCMEFLNEFJQUJYQUc4QWNnQmtBQ0FBWmdCdkFISUFJQUJOQUdrQVl3QnlBRzhBY3dCdkFHWUFkQUFnQURNQU5nQTFLU0ErUGcwS1pXNWtiMkpxRFFveU9TQXdJRzlpYWcwS1BEd3ZWSGx3WlM5UFltcFRkRzB2VGlBME9DOUdhWEp6ZENBek5qSXZSbWxzZEdWeUwwWnNZWFJsUkdWamIyUmxMMHhsYm1kMGFDQTROVEkrUGcwS2MzUnlaV0Z0RFFwNG5KMldTMHNqUVJESDc0TGZvWTY3cDVsKzk0QUk3c1pGVVVNd3doN0V3Nmk5TVpoa1pCeEJ2LzMrT3pVeFVUb1RIUkJyK3ZHclYxZDNTanJLU2VWa0pDbEJJaTlJS1JMV2twSWtoU2VsU1RwTnltQUNrL2h6anBRbkRVWTUwaDVjUWNiZ015Y3JKR2xCMWhyU2twekFwQ0xuY3RLYXZNU2FJUTljV3lxQWEwY0ZjTzFoRm1aMEFla2RtWnlFaURvbFpDSEl3QjhKUFVaREZoYTJTQ2hBTUNsMERzOHRKRFlaNkRFU0hQUVk2TFhRWTZIWElpenJMVm5vYy9BY3NRa0h2WEJTZU9peDRJb2M2OUJYV1BpYms4d2wxZ3RJaDNXRlJDQndKMGhLWVFscGtESXVJa0VHUVV1c1cwUW1rU252c1FtZmhjQ2toNFFUUmlDelNPckJRVGFLY0U2WDJUZzdFZG5WMjFQSXhrMzljdGNjejhJOE83dW0vSWF5MFlSVTNIUjR1TC8za2Zrem5ielVJY1ZKMlJkVUtSQm56K0FveVloT1kwbEdMVGQzY2ljeUJmYXcxWjJMdEh1a2szbHduWFoybkZaVk5ZdXFDZG5wNE1jUWtzUlBTdHIyTzFPVE5HOElOZmw5ekZQeGZVaDBoN3JsNkhxY25laHhlTGhySW5sOGEvOVVrak05Yk5rZVRQY3BiWEhPOXpEVTQyVGJneFhGZCt4ME0rbUFaQTlEcWdlams0enBEaWdOYmIvS01uMlZqVnRmNWEzWlNkNFYweU5TMjROeFBSamZKNkFpQ2VFM2w2SHpYOVg5VzlkTDh4bFVLL0EwbVFxN05mSFc3VFNacnVkZEp2MTJrOFZPaytuYnNNTWtPcE9kNVhXZUhaSFZ5MEhLNldYKzI1eTBmdlo1QUxaY3pGWGJNS2p1WHVaaDBTVGZBYmF0Y2hhQ2hXU2hXYkNYeXJKb2dhV3QyR1V1QlhPYU9hMVlNSzRaMTR4cnhyVm53Vm9NYXpHTUc4WU40NFp4ZmpGaVY3a1V6Rm5tTEZ1M2pQT3B4ZjV3bWMwMkhSdWhYOVVoWE9JSnlTNnJXYmdvbjJMTEdCTTFLbXNrS2E3RzVqSE94UHlzU3ZsMHdDdm0wOTVoZUczT3dodkoxdEQ3NHhSZnB1eDRjYjhlWEdIcmJmV2FqY05kazUyRThqN1UvQjJaMWZmcFlqWmRoUEZER2YyTkUwY0xhQ2liYWJWb3gzVXovVmZpWXpuNlc5V1B0MVgxdUQ3a09QUDhFRUlUbld5eWkvS3VyamJHdngvd2YyTThtSmF6YXJJeE1aNU43OFBHWHJhRGJaTzZuTGU5YXh2cjhHWCtqTitzMkZ2SGxJdllYRzhtZlZqT3cvUDFlN3ZWMXM3N205MGVLbTlmbDJLeTZ1eG0xWDBVcXhyOFFpbCt1U0s1QzJ6NzVJKzM0NGFpczE4cDJTL1VLcnZBajFmN29MU1YrLzdydGIvM0h6bk1pd0VOQ21WdVpITjBjbVZoYlEwS1pXNWtiMkpxRFFvMk5DQXdJRzlpYWcwS1BEd3ZUeTlNYVhOMEwweHBjM1JPZFcxaVpYSnBibWN2VG05dVpUNCtEUXBsYm1Sdlltb05DamN5SURBZ2IySnFEUXBiSURJM09DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdOekl5SURBZ056SXlJREFnTUNBd0lEYzNPQ0EzTWpJZ01DQXdJREFnTUNBNE16TWdNQ0F3SURZMk55QXdJREFnTmpZM0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ05UVTJJRFl4TVNBMU5UWWdNQ0ExTlRZZ01DQXdJRFl4TVNBeU56Z2dNQ0F3SURJM09DQTRPRGtnTmpFeElEWXhNU0EyTVRFZ01DQXpPRGtnTlRVMklETXpNeUEyTVRFZ01DQTNOemdnTUNBd0lEQWdNQ0F5T0RCZElBMEtaVzVrYjJKcURRbzNNeUF3SUc5aWFnMEtQRHd2Um1sc2RHVnlMMFpzWVhSbFJHVmpiMlJsTDB4bGJtZDBhQ0F6TmpNK1BnMEtjM1J5WldGdERRcDRuSDFUeTI2RE1CQzg4eFUrcG9jSWcza2tFa0lDMGtnYytsQnBQNERZUzRwVURETGt3Ti9YOXRJa1RhUllBalRzN093T0d0eWkzSld5bllqN3JucGV3VVNhVmdvRlkzOVNITWdCanExMHZBMFJMWjhXWk8rOHF3ZkgxYzNWUEU3UWxiTHBuU1FoN29jdWpwT2F5U29UL1FHZUhQZE5DVkN0UEpMVlYxRnBYSjJHNFFjNmtCT2hUcG9TQVkwV2VxbUgxN29ENHRxMmRTbDB2WjNtdGU2NU1EN25BWWh2c1lmTDhGN0FPTlFjVkMyUDRDUlVuNVFrZTMxU0I2UzRxUzlkaDRaLzE4cXltV1pUNmxQTFh0NmZXUmZSM05Kb2dlek53c1o2ZkNlNlIxcVJHdVI1aUo0UjdTeGltVVYrWkZIQUVHV0lZa1E0TE5oYXhDaWkzZU5GV1lqeXFCdjYveGE5YzgrMlNJdXVSZG1kYUJEOHpUYVB5TE1MQldneXhBOFlvZGNReDRkb0pQNC8zcjhkSDZMREdCM201anY1MUdPUEhlWTRJbytRdlhubzBOdjZoaFptMmJXb3lZV0o3emwwL0tTVXpwdk51QTJhaVZncjRmd2JEUDFndXN6MUM4YW43UklOQ21WdVpITjBjbVZoYlEwS1pXNWtiMkpxRFFvM05DQXdJRzlpYWcwS1BEd3ZSbWxzZEdWeUwwWnNZWFJsUkdWamIyUmxMMHhsYm1kMGFDQTBOVGMzT0M5TVpXNW5kR2d4SURFd01UVTBPRDQrRFFwemRISmxZVzBOQ25pYzdIMEplRlJGMXZhcHVyZjNUbkk3SVdzMzZSdWFORXNEZ2JBRVFpU2RrSUFZZ1FBaHBqR1JoQkIyQkF3dUlHSVlCOEYyZ1hGbUdHUlUwSEZHUkpHYkJXeVdHUmpYRVkwNDRqampDaXF1bnl6ajQ3aEMrbnZyZGllRUdmei8rZjVuL3ZINW51bHpjNnBPblRwVmRlclVxVk4xTzZRaFJrVHhTR1RhT0hsYVRtNlBDYmRVRUxGNTROYldMNjViT3ZhUktUMkppdjVBeEQrdnYyNjV1dlBnc2J1SXF1OGxNbDQ5WituY3hTTi9uZUlqS2psQVpOUG1MbG94SjNsVS92dEU5WGFpdlovUGE2aWIvVjlsbFMraXI4K0FJK2FCa1RnMGRRajY3NDF5NzNtTGw5K3dLR2x3SnNyb3Y3QmowWkw2dXNrZnJWNUNERU9TWi9EaXVodVdwZ2JpVUdDWGdxRXVibGhlSjIwejFCRzdlclBRNytxNnhRMkh4c3plU3N3L21HalF1S1ZMR3BlSCs5TW0xTjhnNUpkZTA3RDBnWmFQUHlVcVgwUmt6eUV4VnhOUjhXOVhISjZaVVBBM3M5Tk1BaDU4djA5L2tiLzI0eE9mZmJ2cjNGeUZ6Rk5RdE9qeUFwQ2J4blJNb3JFS2ZidnIyNVVLZGRWRUlYNmU0RGgrUVUya2tJODRIb1g4ZEN1UklSWGpjdFJLMG5xMmtReGtObXd4REVVSHprZ3UvWkhtOEVTemdkdU1NaGNnSDZkQjRVTjB3NVc2Qm9DS2lXTlY5S1ZtdjJnNDJqR0ZEVFdOWVMxK1l1RndHSXZtTmV3WE02VmtZMVFsUHFvTE5mNW51b291QW53SHJSTFlWUjVGTzFBdVFyNVBsT1ZHbWc0OEJpem8zZzdsaWQzbzZaRGZlN0grQlJncXcrY01sYlRKOEJ6TkFkNFAra0g1ZmRwdUhFV0xVWDRJYlEvS1JIbENCbjF0TXU0Z3NhYUUrbnJ3N2tkZUJia0hRRmVqM2VBb2JUSGRTZWtpQnhyQjcvZDk0NlBQeTRDM1lveHk1T09BWlJnekNYa3hjQjE3anRhejU4SVBvaDQ1M1lMeDF3aytzQ1NhWHdxYnJFVjlJZHIxUnZrVzBCblF3NGc4QVpnRjdQdDk0OGZnZnc1eVkvaHM5ekxXcFFtNDZJZlNCK3YrN0Qvd2R0QUgvL0p4ZHRCQ1lQcS91dDhZeE9CL0N2dzF1dVdIMWlFR01ZaEJEUDZUZ0cwUDcvdWhkZmhud2VEODM2TnJER0lRZ3hqOGtNQW92TThNVkNnV04yTVFneGpFSUFZeGlFRU1ZaENER01RZ0JqR0lRUXhpRUlNWXhDQUdNWWhCREdMd3J3UDU5elRuWW56eDcyRC8zYnJFSUFiL1c0QnQrYUUxaUVFTVloQ0QvMlRvYVA4ZS9oKzcwVy85ZTNTNU9NaU5WQzBsVXFGY1RwZGV3TCtKWm5YUks2aEMvTzJVbEU2ai8rSHZxMVozazd1UnBodWVvUVdHbzFSditKcCtZN21NZm9QOFhvblRhRU1SUFdRY1JiWHlOVFNPUFVlM1NWL1RPbTZsMjlEZkpGNU84ZklOdEZib291c0RlVkVuL3Q1SlhvWitiNlBOOGxPbyt3ajVFcUNaTmh0eVVENURtOW1udEZscXBINUNSam9BL25Pby93ejVFTlF2anVadmdyZVlMcE1WeUwxTlA1SG5rZGtZb0V6MFpaWVhBZVBKL2YvZjBqODh3RmJyZm1nZFl2RHZCNzZEZWwzczc3VlFIdFNOSGlySzBielh2MS9MR01RZ0JqR0l3WDhRU0ZGMFJiNEtnTWtvZ2NMdFQ2YVB3UmhCS3FnVW5FZjljRmJsb3B4UEUya0dyYVJ0dEpOYWFDOGJ3dlA0NjBhL2FsR1QxSFExUjEycVhxZXV5TjZSL2FMNHJnRzA3a3NEYUREYWphSWlta3gxRjIyWGRtRzc4UHYvOE5TSDYya01qUWcvWlA1TEJ6dXIvZGRMeCs4L2Z0OS9iVC81NWNsVEp6OTc4K01QTHZuN2IxZjQ1NEVaejM4MUErTWNrLzk3QVpoSU51aWt6VTZVb0Rnb3FVY3lTampNWFQwak1yMnp2WDM2OXV2dkd6QndVTTVneWgwNmJQaUl2SkdqOGtjWFhCS3BMeWtkTi83U0NaZVZYVDV4MHVUeUtWT25WVXl2dktJcU1PUEs2cHIvVjdXL0J5UTliUWJ1M3ZOL0VmMlRTTjZJMFA4eHErMi9jdTN5eG11V0xWMXk5ZUpGQ3hmTW56ZDNUc09zbXFvcktxZFhUSjVVNUM4Y2MwbkI2UHhSSS9PR0R4dWFPMlJ3enFDQkEzejkrL1h0NDgzdTdlbVZwYm96ZTdxY0dlbHBxU25KUFpJU0hVcENmSnpkWnJXWVRVYURMSEZHQTBvOTQycFZ6VnVyeVY3UHBaY09GR1ZQSFJoMTNSaTFtZ3JXdUF0bE5MVldGMU12bFBSRGNzN2ZTZm9qa3Y0dVNhYW9CVlF3Y0lCYTZsRzE5aEtQR21JenBsU0J2clBFRTFDMWt6bzlVYWMzNm5RYzZLd3NORkJMMCthVnFCcXJWVXUxY2RmTkM1YldscUM3WnB0MXJHZHNnM1hnQUdxMjJrRGFRR21wbnFYTkxIVU0wd21lV3ByZnpNa2NCNlcwREU5SnFaYnVLUkVhYUZKMmFkMXNyWHhLVldtSk15c3JNSENBeHNiV2UyWnA1Q25XRW55NkNJM1ZoOUdNWXpXVFBvdzZYOHlHYmxlYkJ4d0szaEZTYUZhdHp6N2JNN3V1dWtxVDZnSmlESWNQNDVab3FTdFBwSjB2b3ZQRXNWWHJ1dGM2cFdCcDJueFZGSVBCZGFxMmJVcFY5OW9za1FZQzZBTnRlZmE0MnVBNERIMEhqRmcyVGNWb2ZHMmdTbU5yTWFRcVppSm1GWmxmZzZkVWNHb1hxSnJGVSt5WkYxeFFpNlhKQ0dvMGRVVldTMGFHZjIvNE9HV1Vxc0dLS2srV1Z1ajBCT3BLWE0wOUtEaDFSV3U2WDAyL3NHYmdnR2JGRVRGc2MzeENsTERIZFNjYXV1cDBTaGNYVk5uVUxzc3lvWkZuQWh4Q1UrdFZhRkxsd1p4R2lxUmhKQVhyUjBJTUVHQm9wYzNHaXN6WExHTnJnMHErNEl2Mm1pRmI4YWpCdnhFOHdIUHlzd3M1ZFZHT01WdjVHd2xTK0VtWHE2RytrOVo4UHExL2YrRWlwckZZVStnNFJpOFBIempndWhEM2VKWXFLaktZajhwaDI3cEFmZzdNbjVVbEZ2ajJrSjltb2FBMVRhbUtsRldhNVd3aGY0NHZvUEZhVVhPb3N5WjV1cWhwNnF6cGFsN3JnU2UzNlFFaFdUTjd1MzRTbEpTazBubjVHa3Y1UDFRM1JPckxwbm5LcHN5b1VrdUR0VkhibGxWY1VJclVqK3lxaTFKYTB0Z3F5Y21qRkhkS2VpMmNzcnBMV0JTcTdKcWNqUitqN3RTelF5WXp2RkxuTUhXY3B0UmVHa2tEMXF5c2Y3SlJLSHhHdE5Lejg4MmlhbXI1dmd2TG95OG9YNkNlUFNoQllkbkx5eXBtQklQV0MrcmdhcEVCSjBRemVEeFZWR1dwWXpXYWpwMlpqWjlRK05CSWdRR241b2ZKeGdvQitGK0VGUzFlSU9pTTBnR0E4TTZCQThZaDBBV0Q0enpxdUdCdHNDNFVicHJsVVJWUGNDOS9rajhaWEZwYTIrazRvZkMrMjUzYXVEc0NzTlU4bGo5d2dFZlVCSU96bTBuS3hqQitaelBUaWJ5eHR3ZTB5YjZBUjV2bDgyUjVxaG93bCtaOHNtZFYxSTRGeGFtNDJjUFdUMm4ycy9YVFpsVHRWWEJ1cmErb2F1R01qNjB0RGpUM1JsM1ZYaFZIaGM3bGdpdVlvcUNLQXBVeG1LYUZtM1Y1NTE0L1VaTmVLK3NNdlZ3ZllxVHp6SjA4UnZVaEh1RXBrWUc4K2tCKzNEZnFRM0treHQ4cExZTm5qdkNhSXRKOW85Sm0xQ2lpWmg5eGNWTVRsUkZvUnFHaXltL044K2Y3Ui92SDhFSU9pd2hXQ3pqN0lEdWFVZXNZVnNpY3plaHpxczRPc2FibTBYN25YcjJucVZISkprZ0tYbE1YRDVvTHNXNGRZYnpJeEtlZm44SDBHVld0WXdqOTZ5a2tpZ1dJU0FzbHV1OGhQVEFKUDcvQ1YyWG53YkpwOEVCUmFSM3B0SGFyVmtWRGpYbTBtWjRic3NUc3RFclBpaXd3UFpxS2FBMmhaaHJ2Q2dTREtoNFByRkpmV1JWSlJSVWI0RUpQQWExcFZxZXMwd1dmT0YrMG82bnVWNjB1RVVPNlJydXhjN1JyTUpvZ2dwM0RhZlVYSFEzYWEreEtrZW8vdXZyTkk4Z1RHUituZEdUUVlIVndCdnd4UytzcEJvN3FnV0s4SzZEM0FFMDI2NW93L1hDcXg1MWdqdGhMcWdoeUNKT2V5NXI1SkorZU16MFBYdVlwblEwSmdUaDBoMk94c3RUWkFTSGxFWnRHT1A3M0NyRnVRdUlnMFRzUEtxTTdTeXhhaW16Zm9EYjN3dUs4cnVJNGdiaWpaQStLaEFuTVJkK3lXZG9DcDdZbzRPc1NxUk56RG1KdjU0c05ucTgzSGkrd0ZzZk9lSzJwdmc0cTRyeVpVTzhCNHpJdzFLcFpFUXVLZ3pvb2JrNzFkV2dtckJ3ZFNidmFkMEdYaUFrTUlRb2RpZWxvVGVWcWJVQ3RSUXhoVTJCc3A2b1prS3R6Y0gzeTFJbTRVUjZaVHptQ1A3SzY0RFMwSmJGc1RzMkVlRGFucnNFamdxc20vRDFpZmFHakRPMW9XcFZHem1EUUF4K0NpdG5qSUl6dXZaclJPMEZrK0ZucTg5UTFpSnZkSEhHeGE0aGNPYUN1YmgzUm03UFVreFdBQ00vV2JRbkRZYVBORWtsOVVOd2JhMnA5c0lRam1CaFVSd1d4NFdzVThmVnQ5WlcxaUd1cW9vNVQ5YVd1YzZJRUkwd1FwUUE2aWdoYXNvVWcydXMvWG0yeHI3bkdsSDJlby84czhVV0V6WHF2K2lWQ0srOFVNZWsvSUpiNU5KNDZFcFZpOG16cURQMWN3RUlKNHhteUo4QzhmbmlWVTdUR0xxcUlIaHVSOWhORVUyZm5na1dhZ1JQb1BBRGc3ODNaYkgxNTkwaFlyU1dXVGIzU0NjTU9iSzVZVzJTVEJvaUg5NktlNUpaOFVuOHFRTjYveGRqVEhaTDZ0bnJUM0M4ZmtQclJjU0NYK3JYNGVycjNTbjJrbmkyajNmNlE1R2xOVE01TktCb29xUWpCT1hxcUlsMEMzQVU4S0lsWG5wbFNKdmdLMHB1QlRjQmR3SVBBbDRGNFFVUXFhbFhnRXVCVzRIRlJJL1dVWEMycVd5bnFJNldqYlRxbWtDQ2wwbWxnR0NoQnoxU01ta3FUZ1RPQkc0QmJnVVpkVG5DV0FHOEdIZ1NlMFd2OFVtckwzVU9oZTJyTDdYcld1bUJScmw2c2l4U3JhL1JpNnhXQlNENXhTaVF2bVJBUnk0K0lEUmtXWVE4cWp1UjlCa1R5eE96Y0pwRmI0M0lQRmFWSUtaaGtDaFJmaXBUeHB5bUJNWExUTmltWk5DQ1hqRkdPWDBwczdlM04zWHBRa29sSlhHSTBtOXpoUXhKcmlYUGtGbGw1bUorbVJITHpVL3hrcElhZmJJMTM1RzR0dW95L1I3dUFCNEVTZncvUHUveGR1cGtmRnpaSFdnamNDandJUEFJOERUVHk0M2lPNFhtSHYwTUovRzNLQVJZQ1p3SzNBZzhDVHdOTi9HMmtDbjlMLytEaUxiM1B0eUQ1Rm5IK0ZsS0Z2NGxwdllrMGdiOEI2ZzMrQmxRNzJwSTNLbmV2VHZoeW9vUTdPMHFrT3FORVlrcHVpTC9TOGswL2VKUVhLdzJQMmkvMXdydnBVS2xYUy9ZUXVGOWFTOEY4ZDRpLzM2cjYzTnVLQnZOWFNRT0tUeEZleGNpdmtnb3NCOVlDbHdLTm9GNEQ5Um8xQVRjQ3R3RTFvRkgvSWkwRnFQTER3QmVCcjlGZ29COVlEalR6bDFzd1RJZ2ZhZkVXdTR0UytFdjhPVXFGeGR2NUgvVDhSZjZzbnIvQW45SHo1NUZuSWovTW4yM0pkRk9SRGZXRU5ncHlCWGtPNmczODk2MjlFOTNoSWdjL0NOdTVrZVlBQzRHVGdUT0JHNEJHZnBEM2FwbnRUa1FuKyttd21TRFpRcC9vK1cvb1FUUDVGN2o5M3JGd1FGVWszdnhMUUNIWnFtNzFjcjkzMHowb2lzUjcxOTJnUk9MOThSMmdST0pkdVFhVVNMeUxyZ01sRXUvc0JhQkU0cDB4RTVSSXZKTXJRQ0VKOGZ1ZjZOM0huVGQ1SVZPTEV2ajFzTkwxc05MMXNOTDFKUFByeFVQZnlFSzNYN2IwN3crTGJmSDcrdlYzTitGdWM0QTFUV1ZORDdLbUJ0YTBtald0WVUwRnJPa3ExdVJqVFM3V2xNbWEvS3hwUHhzSlV6UXhmOXNGeFZIK05OWjBtRFh0WkUyTnJNbkxtckpaVTIvV3BMSThmNGhudFV3WXFtZWxldFphSkRZZDhrdkdJUG9rOEN4WU5BcytuNFdZY0JEcEVXQllML2tocFBhS0NLZG5pcnhYYS8vQ1NIbFFmdTRTYkorbjBQQXBMTU5UZEF3b1k0R2VnaHM5aFU2ZVFnY0pTQXVCTTRHSGdLZUJZYUFSMHIyZytBWTlUVUNhQXl3RXpnVGVERHdOTk9ycW5BWnlXaEpWY1pldW1GQTZKNnI0WktETW44TFRDMDhXei9MM1ZGeUtUN2xVMnVCaUNabHNjbVk0aytkUlNncmVzeElkWmtlSXhlMzVLdTdycitMSVVtVGhkL0VOSW5UempkRjhROHMzQ04xc2M0dDN2N3NvbWYyQ01tVjRIaHRGWHBhTmZDUTE2dVhoNURLTGZCaTUrS1BJYzF0Y2xXaVcwT0lkNE43SDRrV3JQZTV2WENmY243aENIT1RIcnYzdVA2c2htYlc0L3dUT28zdmNyN3B1Y3orZkV6S0RjOEFiWXNqMnFicm9YdGRJOTg3RHV1Z2FWR3hwY2E4VzJSNzNUYTd4N29VdXZhSWhVbkZWSTByK0JQZFU3d3ozcGVpdnhEWEw3VzlFbjN2Y2hhNnIzQVVScWVHaXpSNzNZS2pnaTVEOW9Xdy9sejZvSnhPY052Znc2ZFB6UW15ZWY0QnBrNm5LTk5rMHdwUnJHbURLTXJsTlBVMU9Vdzl6b2xreHg1dnRacXZaYkRhYVpUTTNrN2xIS0h6Yzd4TWZRdll3S2lJVDN5VEtTTlpwaFl0VWZGNHBRaDh6YzdxTXRDU3BqSmROSzJabDJxRjZLcHVsYWw5Tzg0U1lGUzkrQms4eHc4bEtaUlhGMmtoZldjZ1VucXJsK2NvMFUvbVZWYzJNM1JVQVYrUHI4ZXBTVVJWaVljRmE2eFFmc2V3bHhoeHI3M1NLdk8vYU93TUJTa3U1cmpDdE1IR01ZOVM0a29za3RkSFVkeDdTTHFCN0ZtdWJ5cVpWdFF6ZnNhTm5jVURMMWVsd0dIU1o5bFB4VWN4ZTlqazdVMXF5bC8xVlpJR3F2ZElZOW5ucFZNR1h4cFFFQW1VaFZxbkxrY3IrQ2ptNHpsOTFPVE5PYVNGSHFqa3pJcmNsSXBlTjlwRHJMVExJV1N5VXJjdGxXeXk2bk15RVhITmo3OUtTNXQ2OWRabFVsUnAxbWNaVXRidk00V3pJWkdmck1pbE5kRmlYT1p6U0pHUzBNYnFJeXdXUlRKY3V3akxJcFl1NFdJWXVVbmxlSkNjcWNsdVh5RzM2U0JJN0wrT0t5TVFkNzVTSk93NFozejhMRGNVK0gyc2RIYWl2Rmg5ajFYcEtHNEMxMnUzWHpVc1ROM0sxdVQ0US9YekxXenVyZnA3SWNTY05lQnBLdEhwUGlkbzh1dm9pMWRXaWVyU25wSm1xU3l1cW1xdjlEU1V0by8yalN6MTFKWUhXOGVYRDhpNFk2N2F1c1lhVlg2U3pjdEhaTURIVytMeUxWT2VKNnZGaXJEd3hWcDRZYTd4L3ZENFc2YTVlWHRWc3B1TEEyT3BJM3NwdFZyaHRMZTd4eFNuSzBqRzZENC9PU2x2dDNJZXJ5M2F5K1FLYTNWT3N4UUZGMWNDaWdVV2lDbHRMVk1XTHp5cWpWV21yUjJjNTk3SHQwU29GYkllbm1IekxyMjI4bHRKSzU1ZEVmaG9CWUMyL1ZoZzhrdm9hdnc5UVY2cjU2MG9hbHhPVmFmMm5sV21GZVBsdE5wbkFyUlZUMHZJN2VUWmJhU2g4S01JY0JHYStZRXBTbDZEZ0ZRaWV4UklWL01mMXZ6YWFqeFc3b0ludmIyWCtUTGFjR2dPU2xsbFd3UkVSS3FJZkN1M0R4VXFjRlkwQlRMQ1IrVmhqWng5UnRYMCtpcFJKekxrVGwxOGJwYUsyV0I3Tkl5M1JwTEhUSkYwZ2pPWHJzdGh5dlZ2ZG5MN3FxcUo0YVlTVVEwVzRPdzlHUGhENVFPUzV5SE9sSEgraTF5M3hQTGZGbk9lMldVdmNKbU9KdTdQWGdJOE0reWdkbUdGNG1OSmxMNlVSaFQ4Q2Zpenlqdm5oajBXOXlQbW5pSnFoS0JKdHA1MXNQdTJrZy9Ra080Tld1Mmd2dFpHNFZaWFF2YlNLZmticmNGTE9BT2MybW9ySEFQN1BXSHE0alhMb0FaeVZEMUE3WksrZzFiU1BVbGhhK0JPNm1kWktSOUZxTGNWUkwweW1uSmJRbmV6eThMVlVUY2ZrV3lpUExxZXJhU2xyQ2xlRjd3cmZIWDZJZmsxN3BUK0V6NUdOTXFnZVQzdjRsT0V2NGJkZ2dHcjZPZDFEeDlqZGx0M2t4eWhOa0x5UHJxRXRVbzNNd25QRDMwS0RMTG9lT3NnMGtkclpJZTVEN3czMEVVdGpxNlN4Nk9WWFlTMzhOS1JjVkVQemFBdnRZOFBaZUo1bHFBNVBETGRUQ3NhNEFiM2VReTIwQjArSWZrdHZNTHZoVFBpaDhCbEtwd0UwQWZOcG81ZllJYW5qM0pxT1Fsak1BQ3YxbzFHb1dVSy9vK2ZvWmVaaHYrZExESFpEcnNGdldCbCtsWHJRRUpvT2JSOUd5dy9aVjN3MW5wdWxaK1Z4NFdLS2gxMStJcXhOejlDN0xJUGxzTW1za3ZmalMvajkwalZreG9oRDhNeW0rYkQzWnZUK0RweHhEN2Z6STlLdjVFZmw3NHc5TzQ2SDQ3RWlYdm9sM1VlL1ozR1lxY29hMlkvWWEreDlQcGJQNUwvazcway9reCtSWHpIVllkWlgwV0s2a3g2bHIxZ2lHOG1tc0N2WlBMYUtyV00vWWZld2R2WXkrNWdYOFFxK2tKK1c1a25McE4vS3hYaW15WTN5TFlaYkRiY2JQKzZvNm5pNjQ0OGRYNFZ6dzdmU0ZQakRHbWovYzdvZk05dExSK2gxUE1mb1BXWmdOaGFQUjJWWmJEcTdFYzlxZGlkN2tHMW5qN0EyalBJeWU0OTlnb1B0Yit3NzhYWHYzTWlkdUV1Skc1V0hYNE5MNjgvNHZmd0lucGY1Wi93YktWWHFoWmZkNFZLQkZKQ1dRS3QxMGtZOHU2VjM1UXo1aUJ5R25YTU5td3hiRGRzTmp4cWVOSnd4MmswL3dvWGh4Yk8vT3RmLzNEc2QxTEcrWTFOSFMwZGIrRjFLeGhyaURNSTdYQUcwcjhPekFPdTlDUjYzaTQ0eU8yeVh3ZnF6TWV4eVdHWW1XOENXc1J0Z3lSK3pMZXpYdXU2UHN3T3cwcC9aYWVnY3gxMjZ6b1A0Y0Y3TUorTzVpamZ3WmJqYjNjM2IrR3Y4VzhrazJhUUVLVm5xTDQyWGFxUUdhYm0wUXRva2FkS0wwdHZTZTlLWDBsazhZZGtxdStWZXNsZjJ5ZVBsbWZLMTh2M3lSL0pIaG1yREM0WVBqRmJqWXVPdHhwRHhyN2dpalRHVm02YVlha3diVEh0TXI1cHI0WjFQMFc1Nm92dnY5Tmh4YVkxVUt1Mm11L2hRT1IxdlJTL0JuMmZTYkdraWg2Znk3V3c5djRtMThkNkdHNHlqK1dnMmljN0lYdGo2V2I2VmY4bEhTeE5aR1p0R0MvaVFTRy9HSHZJT1pBWHlVM1JTUG9DNXZZU2ViekRhMldwKzJtaW5GcVovVno1N1Job3MrNlFYNkEzcEdEUEpEOUNic3BXbHNwUDhZYWtjWHZCYmVZeWhpcktrZStseGFSbTdpWGJ6VWlMcmQrWTc0TWVUMkE3RWhRcVd5NzZXd25naG5nUXZ5cFBlcDF0b0lmOExuY1ErWGsrL1lMUGx1WFFYRFdXcjZDUDZEWFpGUDhQVnh2N0daUFk4bnk4SGVSSnJJeTQvSXI1dm5QVm1rcUVIL1pqVlNGdU1wL25yZEMwZGthMzBqdlFZdEQvQ0g1Y215bWNNVTlrODdJQ2I2RlphRmw1REt3eFY4aXRzTGttc2tyTGw0NGh1cTZSY09RdjV6WWdxMVlocGU3Qzc5eUVPRkVrVHdVbUQ1MXdPdjVpT0NMRUZ6MmJFQ1JrZU5COTcvQXBFc1plb3pWakJRelRYRU04UWRZamtGenFtMG96d2IraWU4Rnk2T253M0RVUThXQmRlaFI2MzB3ZTBnYmF6dFIwMzBsSzhuYjZPdlgyNVlSdy9ZaGdYSHNpRC9IVStqVys2Y0gxaDdXeVdScC9pZVJ5Rk1ZYjlGSlQvVE5Pb01IeEgrRS93N3I2SXNQZlFMTngrVDJDV3B6RENwZEloR3RveGlUZUh4MGxMTWQ5ak5DWDhjTmpOckRRdnZJZ20wd0g2dGNsQWRTWWYxbGhqcjJDK04xSURueHBlTGpWMHpJY2ROc0FLNHY5aXVCYng1elo1bVh5TC9BM2RnVDIvQ2ZGbUcvYk5EdXljTnYxL01oQWZ3aU1ZR3NTdjNrMVUzTWJaQ2FNcHhPL3hKNUZCUGlHUjFTU2ZZSlJ1TmhwT2NPa0FuTXlDa0RPSTBuektsd1huQ2lZcFh4Uk1QRmRBaGFDVnMwaUdETTV5WkRteWtlQ1NUMmRWNmRCWnY0RytJMVUrSlA1bGdnWmJiTUFaWmlBTGJkTFcrcXFhamZvbi9Kd01JYjdMYnpNWEdLMldmTG5BbU05WXpvbHpKNmp3M0llRnptYVhYdXRGTFNlajFmYUNaTWszakpRTGFDVGtwQUxPVmNiWUMxYXJiVTNXQTV0eFVZZFdOUVVUbFpQS0NYUnhRamxGaFlVVGxYTWY0cExlYXNBRmlpa0ZTa0VnTUdTd0U4dGs4aHZ4M2tGcGhZVVo3Yms1ZzRjRWtpVEhVSWNrRFIrYS9GSGVzV0cvT3NJV1NSWlcyckgvN0ZjZFAydHZ4eHl1a2xyNTlmb2NiUFJUTVFlWU1meDFhNi9zWVlaUStHdC9MMisvWVRhakZjdURsMENEd1dnN1pUR2JKWW1UeVZ4Z1RiQTBXYmdGTngxL2NsekNNTXM3VEpJTE9QUEhPWWF4ZFB1eWg5T0U2ajVoVWVXY3I2WkFONnhROWx3QkV1WklIRFZLNEpEQnpPZHordTFNTmxuSllNUnJWbVFDeXRPcG8vUUpRSGRwcUo1dXpHMGYrUGFROXNGU0swczljNmJqazBncTNyZFdkVXpodFlhanBOQWtNUWUvdFU4Q1hzZ1NUV1pGQ2JHaHJiUTEzb3pjN3pCdGpiK0tKRVZTSlVsNnpISGZIV0xoYTg1OWVWTDU4aVNVSzhTQ3N4cG5LeVdZbUZBQnd6TXZkd3pMRzVFMzFHakNrNnd3ZHV6bkwwMmNjV0ROaWo2WGVIek0xekhsQVB1YXhaOTY0OXgzTHdlQ20vYi90c1Bkb1Y2bzBYVzZSdmErdksvQ0xWYUZVYUpGNkdUZEtqSGtiYlJWdWlvK0ZEN1RwaWg4T29pdjJ4SVNkT0pFVzF5Y1Ruem1UN0JhK2ZTRWVIYzhqMzhzTWFxMXVHTDlnK1lzd2RLcGVaS0hITVA2ZVBFTVRVbE5TVmI0dVRVd2RLOUwrcXhjYzJER3hDTWRVOWh4OXU2QnZadUNNMTc1N3R3YnB6bys3ekFMdlhkMHZNTnV3ZDNGU3JPRjNydXQyRWlQR2tPczNPL1ZuWk5aV1FGWnVZUUNHVWVhOGljanRpOUJwTm9HRDlwbUV3NExkLzNpaEhJU2EweUZJb1hubmpzcGxoc3V1dHRrWk9LM1ptbnd6NXgyYURrVTY5ckRhT296WWtUZW52YnlLM0pIalpEYTI1ZmQ3cDJZWG5jbHRDbGlJYjZBTDhadXZrUzNZdnBTdmxUaUU5bEVLT0lobm1GWUNxRjBlZW1kd3RkTzFDZ2ZVczdFazBNRzB6SVlvNFg4c0VWT2hoZ21hWGhXY2hIdngwSzdkNlBCUGt4MEhlWW9VWjdlYXhvWFV5cUlUR1FYeWRzZ3MwM1c1L0psVFEzc2l5NWgyMDdGbzJydmE4Y0dnck5PRDM4a093eUhzTkk5V1ljZUJYamtWMzhabWJLaFIyWmNYQ3EyeU1mNnFnckNueTZXMWVJZ3UrQlFpdDJPMUM1NGxJTWxiVWZTamhIMU1TUHg1TUtldmtCUFJ0SFRoL0FQblRqbFQ3ZlpqS0pMUlhCSXNkdEZLbmhkWFo3djB6OUpOcTdqNjIzckU1NlBOMWhNdGpSZW1uUjU4bVhwWTUwVlNkWEoxZWxUblF0TkMyMzFTWXVTRjZiWE9sZnc2NDNYMlZZbXJETnVObTFTbms5N2c3OW1mTTMyWmtKR2wwcEZTdmdMc3BNZDVxbWsxUERuaUNPMktQMDFidHR4ek85M1ZLWTJXdnhabm1HRDRaMFdCVEdqeUlwR25ZSVd2QkRvZ2s5VVdqYTZIWGE3UGNUOGJaV09lSnN0UXBqajRrQzBWam9hU1FRYk8zb1MvNkVPcDA1Uk1rZEZLU0s2cDVJMlpqNTN1MWcvVEwzR2R4S3BJR3VXNldUVUZLeG1HZFZvZkt6bUw2OXFNNnJwaWd2YnNJV3J0dCtGajFNS01CR1lBQndwZ0FFRGdZQ3pPYTVIU01wcFd4UVhKMmVBYUZrazQvSmQ2Q3YwQ1RkVEVrY016VTFKU2NSMk0zcDY5ZkVtS1NsRGMwYzRGSytubDhrNGZlSFJiZGUxTEM5ZWNQU0JWMWY4Wk84anExWTk4c2pxVlpmVjhLTk1acGM4TnJPMUkveEdSMGZIVXpzM1A4SHU2L2pGNlRPNEZpODROZjlXZU9NeE9OcDM4REVyaXhjZTFtcnRtbmtuWWUyMEZuVVMxb2d0dW96aXo2cVVSR3hlS04vTU4vQjd6UEpqTXJPUTBjQWxpNEhaT1R0czFhMXJGZXRFVFB4cUpoUStya2NsRUovNkhicTd1blIzamRmZEZkYnlwd3RuN1BRNDNmc3k3QVkvVGdPRDZDdGU5R1ZnS3Q1QnVDSGR0bzhWc0xVVTJhckxJaXVpQXdxUmM3Y3dkUlJ6aUJPaGhtb1FYSFhBMGNDWnhlZzNHQ3pNYmhHMkxrd2NoVjJOZ0FLTFoza2NScU5wT01MSFVQNWRXOUhSaWwrOGw3TmN2bkhNS3ZmajR3L1B4QndLY1A4eHdYS1p2TS81RTlwdmNTaHhhVWxKeHVseFlrTTVIRHB4eW05UkZGQ1pQUXlaWXFPbUNvSE1URkdiNllwSFRhWmR6REF6eFBkREoydHFxdXBXSERpdTNWQWw1MVdoVUU0NzVRZ0g4eFdLOU9sY3NZVjUxNEQyeEVTdUQraTNKRGg0NXpqSC9iYkVKRDQ5czRmZ2liNWIwTFVJR0RZYm41NHFvcjl1N1l1TkpuYTFHRStNcGcvbUh6L2FNTnE0MzNEUXVOLzBuUGw1bDJtQ1BXQ3ZpRjlvbngyL01uRmwwbTJKQnhJL3lQakFlU2JEZnREMlJCTFB0Q3Btby9Hd0s2T0h5NVZoZG1WSWpKc3pYRkpjcGhMaUQ3Vk9kakJIaUtYdEZucVNVS3lWY2J2MWd1MXU3YmJkclYzYlBhN1MycGg2RkRGV2JIbTJuNjhobFJRMjBtOTM3QzdFdStBU2ZqT1grVDdlbTl4c1E3TytTV3Urd0RubUsxQytpT3hPM0JBS1Q1NnJPZUZJRlA2QVpGMzhJRi84VGNyVGtWTWt1bVg5RnFmaVVub3FtWXJ4ZDNneE5tR2ptcEZiZ0ozN2RXU0FhbGpOTmRpMVltbmpuQ1pUSE04TVNVUGJGbkY3anpoOTkvYUk3bDdIS01kUW1CUXVsWjJjNWMyRFE0MFlNWHdZOXExK09HRlQ0NWpDRGNCb2trMW44M2hxOXErMm5ONSt6NDAvdXBmdFRmcjZqMGUvdlBUaEp4K3N6dHk1czZpZy90RHFweitZcy9Dbjl3YVRqcnorNmM2cUhRY2VXbDgzQk1GcUlzNkpaSGhpVCtyUFB1bDJUcmdUbUJzdmVoSno5czMweDdHNE9MaUYwOUFyczBlY05aTlJ0aUljUmo4emxNeFVSV3pDVkVWc3dsVDl6RWlOQnZqMlY5dVZaL1M0aGtuVW5GU2VyaEh1TUhCaE9pc3grWk5MMGt2VUdZa1Y2a0pwdG1tMmVVSGliSFc1K1ZyWFd2T3RydGZNcjZZNFRLcnc2ejVpdXd2Q0k1elNLYWdzdlVLb1ZSN0hvWmlUSFJWN0tzVG4rUzJkU3VJU003S0ZkbWRmNEJqWjNSd2p1OXM1a04ybzZPY0Fia0VLSWd2bWR1WUpFVHVValFPczZLYzFzek9jWlhaR3NVd0VyLzE2UDVsc2xEK3VNSFZtNnBMVW0xUGxWQ1VxQUd2bzBTMitNalZGZEpXYUluUk9EZkhlcmI2dUk4QlhJenhMT0ZuMENQamlwRzRzM2NtRXdicThhcTl3cExZK3FrZk5naGtpVGlRNkVDRXA0TnpObU1FYTF4ZWVzeHNIZ0xOSEwvMG82QkhuTk9qTzVPeHlwaHhmYnNTYm1BbFhNQkg5alNiaFJvbkNqVHk5eUtIa0NhZGlQVkxFQVJGeE5PbTcxclFCRXhaV0ZrMmZ4WXNPekcwN2QvM0xQMzYzNDhSOXQzMjg4KzF6ZVpQdm1uVE5Rdy9ldUhLSFBDMSt3ZUNKZzhlY2VxdSt0dU9yVjRJblYrT1ZlUlY3NVBmYm56ejdkczJPUU9qK3pidDJSZThsNlNMeVVYOCs0M3pzZThMbVRvTmJPZEpDNFMvMXEwU2FDSUhDWm1raW9QY1ZOa3h6NkpIT29jZDFSNXBqZ00vV04xUGNQeWZIUy9IeFBhZ2NieWdpdnNjcGlJMU16blRGOVJKQlFsajBhVjlOcm03UlhQMkdEL2NVSHFvSS8zejdtYTU0MkUySlQvV2JrU0Q4L1lWSHA0a0xBUCsrVVM4YzYrK0d5dWsra0g5OGZzYmxLWDdQbFNsWGVPWklpMUlXWjh6MXJNeTRLZk9Pak5zenQ2UThrbkVnNDlPVUQ5VXYxYVJMVXU1UDJaa2k1ZmViYmVSOU15Zkh6OFF0Tzk0bEJtRkh5eVBlM2lhR2RSZjE2ZWJoN200ZTd1NzBjRUd6VVdUckptY0xmOWtsWitzbVowTkFkS1RwbXdHV1NGUFNlTnJHQVdJdjdjWmU2dHdGMloyN0lMdnpDcFRkNk9nOFdGV0gzOEVkRzZOT1hoTjFhMUFSRDQ5ZWRPRGgwWmpRNWVMN3FROWlwU2Q4dkRWTE5hcWRjUkpYNW9EdTRMSXRQdUxnc0xsTDFoM2NGYWQ3ZXZkbzJlWGdTWG5DaGNmdzRjUDZDTTlHVG5Ec1JJZCtBL0l5M2JPVGV3Z3ZYN296WlZYZHRKdktSN0FSK3hmdk9jdE16MjQ0ZWVQS3Z6NzQyQnY4aFY4dnY2SGxrVlUzUGNDbUtTdXZ2dnptdnl5MXAxVXVaT2EvSEdQS2xvNzM4WEx5VVVmcjR3ZWxZYi9jOC9TOWQ4Qzk0ZDk0VVdXM3lsNzlUVC95MXFmaUttWTBXYml4UUpZS21GSEduVDZIQ29tTHU4d0Q1dWk3eVRMcy9NS1RpdjVHTWtwLy8zVHVOc2ptenBlRndzanJBdDQyZ1h0eHhaY0M3ZTFuSHhidnl1RnpSSVlBM3BWTkZNK0RZc1NpbnNTd3B1ZVB3N05kdEtVYjM5Q05sanZwdGtxek9ick1SamxLbU1ENVhiVEp0eEczZ1pqUlp2dGR0TzBYblV4dTcyU3k4MHlqTmVvdXBwVE95NkE5U3RqK203UXZnWk9pdXZxdGUydmZxNnUzNm1WNnVtZDZlalpnZ0JtV2hqSFRpcUNBeUxqUU1FQXJSaEVYVkJhWHFFbkV1SUJMRlBYVHVDUXUwUmhjQ011d2pPQVhrZkNNeGhoOFVYR0oyelBnRm9sOFNvd2kwL1BPdlZYVjB4UE5TL0o3UUZlZHFxNnA2YnIzblA4NTUzL09iUVEvVGxROGdmY0YyZkEvaG45R2RNOXNMU0xEaFBBUDl3MTh0c2tUdnFSSWdZbFA2aUhnSUd0a3k5TnRtelhTV2lTZEpTK3dWckdycmVmNFo0UWQxZ0ZMbGZnZVZNVGQxbG5xZXV0ejdYUDljMFBtTkU3bkRGWlZaSjdqTk4yUUJGR0UySTZUQkEweWI0WVFEeVlOTk5PaUZvSzNNTXVTYzJGeWprMXpXZ2grU2s3eHZKUVNXS0VQTHluSWpLUjlWTUFJNDIxSVpSQlNDN2FXWmhhSzdJbmQzRzd1SFk1ZHpTR3VENkdDMnEzdEVOL1IyTlVhMHNpeFpZcTdSWHlGdUVMRTRtM21ubGRkRlluQkMvNDVvQ2J4bUxWL1B5aDlaM3gvMTk1T2t0YnVYOG1QYUcyRmFHVGxDSWZ1WFNvam4xOXA3ZHBsN05xMWtuZjNFTVpPWDYrZU5IMTk2b1M1cnVYTm5iT0pNMWxKM0FZaENqUHdKVFU4dEd4cDZmOVZMMHhza0lRK2RsUkJXeXhKREFJOWxUU0U0Zk8wZDNYUkVCQzB0UjYxbzNvMnd3WXpiSzVSRUZuYy9yL3huTGNlNjcvbmdkZlIvOXcxcFM3WnptODdOQVU5V1Q0YXowVjNQSEhKajI4QW03a0Q0dUtQUUpjRE5CNTUyMlYrUU1FS3pTUnY1TGdwOWNYNk0rdVh5MWZMd3RueGkvZ2w4bkwxS3Y0cVZXaU15S3pUMkpLSzFNamc4VCtzMHZjUHY1blFGWnlpTEFmdFZFdExjek9UckVuQkJOVkNRTTFJRHZ4c3VmS3pUaFdXT29DWEd2MVpwZWprQkkza0h3SWt1NFVHNGlZRW03Z0lRU0NLSUVqa2t3cFU5WVFRVVV2aDVJWWg5eDBhaGZqM3RZb05PUzFKN3FzcDVHNGFVV2FOM0V1TEQ0UFArSTBJUlBFRGpGU2Fwa1ZwTHlmNmdub3VLbmo1MEtGTlZHdGRRWEF6SklWbVJhWFdpZk9kU3NaVDZ1eUhiZWZ4OUhnR0JXNXZ1Z2NEWUhqQi9IWmEvWjNFaVpMNDFNNGppSVc5N0NpeFViWmJJSlRkdk5pMkVlTUd0WXlFYWtEWXVKaHFpQWZUSkV0cUQyUWdLeVZFQzlrYXVCNWxScnZ4YmE0K0ErK05JL0JONUR0d2JzM3p5ODljZE0zTnMxYzhmV1A1Tm5URWxlT25UWi95bzN2TGYwTG5uWktiTkhmQ3liZmZXRjdMYit0NVl1RXBEN2MzUHJsaTBZWUZvOWdUQTVFeloweTlvUG5yKzBWdC9MbFRUcngwRkF6VG1RTWY4QmZ6THpFMXFJMHlTYWZqYzJvd2NqTWJPallmRms0bFVwb1pyWi9PTEdFdXJGbkJYRjJ6bXJtYmY0ejloZjRFdTBuL3JmNGlzN2ZtODVxQVlkY0VhbXJZRnFFcDBKSk0xeDZqRjBPenc4WFlXZnk1TlpmYk45aDNzM2NaZHlmWG9JZndtc0FyUnBBSk1YRXJaTVU1Z0ttM056YmxhYWlTYnNwYkpoaFFJcGpTMkVTS2s2MmNPWTNKRWE0MVhodjFKejNxVDNyVW0zU2xHTTJsSlFTNFRBLzFva1ExUllxbFRwL3Y4cHV0SlRxQk1KY2dlR0ZsSU9yU21pWENNRURzdUN4UlVNai8wR3hhbHNZbCt0alJteFp6c2hZRVllTmlqWFhuQ2lhN0hlYXJuY1NNVVlHcnI4dkNuTmpaOXRGY1ZNd1JKNHJESVp1NFVXN1R6aVBLdjltM3YvenFQZXZRcEoxdm9tRVRuMnJmZWRzamY1NS8zdnZYUHZnZXhxTSsvZnBwZFA0Zjk2RlpHOTU5ZnZqOXQvNjgvT2t0MjhzZlhmOGs4WnIzZ2crYkMzWnZ3cnk0WHROTzE2SkprbXVkQVN0bE1sSjBpQlVONVhSOEs2b2xBeU9qMmdKbHM2aEp5QXJsdUJ4Nmhob1Y5UkR4MmhyTEgxWkw4VGdKeXcxeHdLaXNmOXVvL3U0YjFaZStVYVcreGFpOHc5SVFTeG8xY3RLbGhiRnNRcFFFaVpjNGlSTmlUdHpCZ3FvQUJpaXNFSTZFSXNFSUt5VFlhQWJaQm13Y0tabEJFU1dRWVZvSkU5RUNmNjVFcGNRR3h2cDJVL09zTEJxSlJpREd4MkJqRFpuUlhoSUpDVURtWHZUVlkzTi8ySFBoOHVNdnUrV0ZhOG9iVVA2V1g0eWFQT01uaTQ5ZlcvNDl2eTFjYzl4M3k3dDMvYkpjZnVTMDBXdkhqcHI4MGNQdi83MkYvTWZhek05QmNVaWxYR1gyMC9rS0MzeEtra1NSWVRreVpZcWNVaGxKSkRvZXN1d084V1IyV2xwSjYxaUo2NXlNS3o3ZW13QzVBbWJ5ZndCbXN2eFBVRTJiT00rekFtOEtadmpBVnBweGNPODNrSXpFLzd4RVVZdm5FU1A3UThsOUE3WGM0UXhudk5mUHVlemhlOW5XdzYrd1YvUGIxcGE3SGkvcmE4bllySUd4dVFiR1JtWmVvbU5UUjhmbVpoRlZoZ2VHNXFkcG5GWXhqcXYvbitOUlVGMnUxb092OGpkR1E1azQvNStPeGw2SU90MkJLQTBaaWExMEpQNWhDT3gvSElFMTdGdUg5K0gxL2QzazZTZXM3VDhUUHVsNWdLOVBBTDQyb0YvU1o0OG5Rb2t3WHRDSVRwR0N5R2F6V1NaalIzRURrOElVQU1QazB5SWtSRk1HbTBrSk1rSzV4b2JzRUV2UFZsbDZ0bUxwZWpHYlpsa1l3OFlGbU1Xa0xrRkdoZ2FGWkdSQWVJTnFDZzBLRGZKYjhMSVZqYWl4eGgvc0duK3dheXFnV3BOTEswaXBnS3BDRTAwbGxqdDkzaEJRbldHVnZ2QkcwcUpEU1VJZW4rVm9oZUdFWStJVzRVV0lJYkR4bzduNlJES2VqQ1ZaUWN0WkRlRmNiVTVxNEhMMURZNWVrMkVpWmpBREY0ZUNhUkdPNnZpR0RFcXFZT3loQUd4U2NpYkRaRm5ZMExZYU1IcFNyS29FWXNUOG1WSmlLMXZJWmpNR3BJVkVpeEV5aEF6QStOYkZnbXdIZzBhVVFycEJJWDEwVzd1cnl3SEtWeEpjSDlNUUdJTHNrYWc0QWdPMGs5SlN5T1lBM01jRjJPUHdlVGVYWDd6L3RmSjltM3BSOTUvdVEralczTHJNZDdkY2NNM09TekxqVnlKOHl3OFBmQWQzUFk3NjMxMjIvQWwweW10NzBQSk5pL3IrYStTU0ZUTk91SHJtcXZ0MmxiOWNjZG80RkFBZGVRalF2bzVnQjVyaVJuZzZhRUlrR083ZzJKU3MzSys4cUdDRngxaVZBQldIcUlKVXBRcVNyd3FiaTFKYUZDRWEreXRWQVJBK0s2ZzBJS09NbEVCNG96QU55aEFOeWtvcmRLUmoxZGNEMWRjRDFkV0RyVVUxN2ZITU93b0tmS2gvdy9na3ovaXFmRUhFZzZLMGp0SjZ0NzVBWDZKekUzdWMxdExTQ3NGYzhRMnVPclYydXRwRUMyZjVVaHQxRUFoQ2JWYUJXUzNvaTFtV1FSQnVTenltQnRrMUdHdTNCOEFvNFZVUDI0ZDI0a003ZC9ZTC9MYitoL0hjUTFOd2IvOE1lSnFuQUppdWhERm5VVGZsNnJILy9Ld3ZZTkViQ0JhRUkzVXZqZnVxTXVDTUw4T2x2T1k2VEJhRXlxVmZ1L05CTC9Ya0xVV0NkWmpRN3Izamo2RDBlMjk3aDdzZlB0TGROelc3Ky9vR2QxK1RjdmRPM0tYclczU3JJODJ2NXRmeFlPOFFyOXpNM00rc1o3ZzJwc0IwTSs4d0J4amVUc1BKMVF4TEw2ZFR6emplbkgzaXo5bGYvVG43b21DNVNSeWRzNTl6ZTNxcW5QV2srWE0ycm9CTXJkU3pkRmxuZnlVRklrVUFHanBWOHA5ZUFFZnMxVFRKNkQrMWsyUXpNTTdqQmo1Z1R5TVpESXBSL0xNVzRrWENoZmdpWVpXK0tpRElGUFUycVFUMCtsQjhFNWN5WlhtSWlzdFZLaTRQcXJpY1U1Ui93eFo2aTFKT0pld1ZlWHdxa0tkV1hiZEFCVGZPSldjS2xKaFVTK2tnU2djTHdlN2dnaUFYUkRrU0F2cys5bU5mbjkvMG5NbDBlNHMvWFB1dDB0SXZLdGtCSktBdXM3Ty9GVVlLRUdrempLSnNjdFNYd2pQU3NXcjFJa21YbklFZ0JBYU9Fbys1aWV2RUphZFBQYWRwWjgvVFAzcjZCWFMvcytiN2s1Yi9rUDNzY0t6dmQrZThUWHdxWkliOGlRUXo4TWwwWEZOczNiaThKRTlvVk1ZSVk1VmpsTm5zdGV5cnJIaXg4anI3T29ST0JQVnB5TmZFMzhoZHp6L0tmU3p4Q29mR2NIczQwaHZ3YmtHMk14MXNtbXdnSE8vVjhqWTUyd3ZIa3JmbnlMNkc3bmYwMmhGeS91M0NwQmo4em9hR0l5UTVGanVDYTNHY295RHRFMlZGbGhTZTViZzByNFI0SG80QWtZUVFnSktpTUR6bUVKZ1cySzNDWWhVeFhCK2VVREJIOHVoK2ZqMi9nMytYNS9ocEVqbW5qaFJSR2xMKzlTSXI5dUZyZS84cFFvRnJVdFAvYWNyMzJXQnd0SWJRQ2EyRDhXaC9hZWwrd2tBUng5Sko0S2V6azd3QVd3aW5RQ29jc0hkYU9SQkV5ZXFVT3RIMDljNUowOWNuQmhrRWtxUy9OcjdINVhMSndZRmVMVUNHOWtBaENvSmdHWUVPeVRLc0RwbElpZ1VtN1hXSjlyUU9HaFpZWHlFZzE4RVlENHZsT2ZLcVMrVEJxTi9lRWdFeGtoZklGS2gyWHFvTDVibENLRSttWkhNRGlPRjhGVGZSUSs2TWxpNHJ0VEtFeEVqQUxRV0JZMkVxS0hweVE5Q3pIVngxdTJmREtJUGdueGk0WXlkK0RZbjlkK0VmRFREOVh4d0FJRzNHci9iLzZ2Q2QrUDJQeTV5cmkxd0w3VTU1eU8yaVFCZzhGODlJYWNMbjRGOXVGbkVGVlZsLzh0aEtUTWYrMnpIdUY5L0lMWVJ2eXkzZUw3a2hMUW5mR05ZUFgxMlQ4NzFER0o3cWo0QlJuOU1JOVU2R0VVeDRBb3QxdllIVW9ycUFqa0Y0Z21DS3k0Zy9RYURGZFhLU29RZG9PQVZJQ2dKUEtwTk5STkpzOGpadmFxek1JQ3pKcXNGSU1sWlVnV0tRNVFIUW9TMFVnQ3lHdEFoNFQvNmwvK1NITnczcE5DQnRBVjA3ZGxndnZyaUQxTmxhUFJWaC9NNkRXcEdDdDBDM0xOMXlkTXZUclVTMHZaNUltRWJGRUhTUjhNOFlaQVlWdWhWOTRsQWlBMXhMcEJ5UHRMUmlkNWgwdzBNV2pBeklZMkF3RmZMZzVHNVVvRGZaam91TXpWaTRXTkM5OEZ2d3A0dmVsa0hrV1E2MkhhUXBINWlVK3pDbEtrL2lHa0dpY0FXRFRTbUVFeEozc1hhdDlpd01wVFpWbTJxeXpWeURQc3lZdzg3akx0YS9aNnpVSlJYelVsNGZhOHpFMDltanhZSTBRei9LVU83RWQ3RjNpSGRJYTloZmlvS05UY01ZeVdNQUlpeHB1ajZTbDBDVXRCUE5FMUVCWVN4SnNxS0NrelFNaTh6VEFudUZqZTF0ZUEyNGoxRWIrYlRVaDBadDFtVEZKMjA5WnJZZ0Y1VjBRYnRDUmVvMmVHd0RxWEF0N29PZGlaZ2psYXB5QWtOOWtVWUNLU1p0THJHUTFZZUxXOVA4QW40RkR4NGFyK2tOa0Rnb1JocHlTcDFPUC9VZGhNK0VvM2pWNGQ0UzBkOU8ycHZsLzQxYit5blB1ZklIbE9hRUhmaWFDcDA1NTc4WkRRSVBhV0FQZ3dmMlVCcHorbm9OM211cUJpcDk0TXNOaGtMZXBNM3Urc0RMV3pKNVkxZ21yL2VCT0M1dmpCNUh4YzNENGV4d0QxaDZsaTB0QVpxUVlnUkQ1a3NuZU02VGhUalk5SWhQOHRlTkJpQkRqNDRkaHpJUWpxRjZGTGdUWmRHOGtaSFlHSFFxNHJlWGkrdktjL2h0WDM5Mnk3SGQ5N0NIRDAzaG52OTZEUGZ1MTJteXNoVnlwN2Y0bHhtRFNTRFh5MDJQbXloa2hVS0phQ0xCY1JZWFVxTnFnbnNrdXNWNHhtQ2pVU2VCMHpXRndNemd6R2doUG9lZkk4KzJaZ1ZPRGM2Tm51b1U0N01UTjBUdndsWXN4YkoyU3BYRFE2S0hjRlgwRVBhamh5M0ZjQzROV2VxdnE5cGdSSWdHaUxtS2ZnZ2xrcTR3WXNzaWlRK0kyb3QrcVU0a0VURTFNekcrb2diVm1ENEltajRJbXBWY3k4d1JES3gweUhoSlY3RElDRldXRkV1ZVBwaTcrb3hXcWRLZ01lTWYyMlpLcGFXSkRhcE5xU3hWWm1NMDcySFpxazRZSmpPYUkwd0l6WGZHV1V6N2FDYlFnWFAxZGN6cGFCVWErenlhOHRpbThwYW5kcGUzclhrVzFiejZKNVM0OUtOYi9sQitGZjhPbllkK3RyUDhpemZmS2QrLytWazA5OWZsdjVkM293NlU2RVhxYmVWOUxvZkY5UU9tNm95RFJyZ3h5c0xBdVNFODNab2VtbWZOQzNHcWxnTFRaS0tPeXdEWVF5YkVycG9RMjYvSTlSYnRuTFFkcHNmbHJZMmlSTGxoeWZKZzdtREJKdU1reGROeEJQL2lqdTZQdU82UHVGNXhPL3AvU2lWOGsxaUpWWHVmUWI1NHFUc2wzblQ0ekFwTlgwaHl1c0hRS0tWZ0dJUlNjTDZkVWhnZFRXR1lsMHdtQUhLRm5zTE50ODVZZkd2UFg4dlBsVmVoeTUrOHQzVGNxS3ZMMS9IYkRIdmhsdk8ybC92N0gyZlJqVmZNdnlxc0V4Wnh6c0JOL0YvQmZzSk1FMmJwRE54K2F1NitISTQ1NDhKWVRYSzFKQTBQMVlicWhSWitlTFExTjVIdmpFN0lIY2NmRjUyYUsvR3o2dWZrTHVBdlp5L2piMlJ2NUc5bjdtWWZZaDVqWDJGZWlleGo5a1gzT2ZFazM4cTA4Qk41cnNUZjZ0eVJleVhITlVSYWNoMlJmRzZxTXpVNXVYWnkvZlJjVVpvVG1CV2VtNXhiVTZ5ZG5aNWRkelovWnZqYzNPVzVtNUkzNWY3a3ZKbUxxUTRLQTdwc1RPUmhZRjh1akV6a09TZmt0UEFUZUE2emtTWldiTW81RVo0Uk1td3d6bU55d1BEWlZNcGtzWlJOaVhKOGlOTEVxNVFtWGxXaWlPZUNEcG5kb0crMFFUK29EeExySmZNYjlJMDJXRkdqNERRY1Q3ZXNhTUV0R1YrTk1yNGFaU3FHbThtbHdRbFU3RlYxYUQ1QjdWV05OUS9hNjZDNXp2Q0NUZDlhS1JQdDhTUFJQQk5vdDU2em5pdDUxRFN6ak1EczBtV0pRcGhuR05GMGNybHNxaWtTeVpxNHdMSmlsdHEyS0pzcGF0dW1aOXZ0YnV0Vkc5bEF0T01GZFEyUnFKaHJGS3FvRFdMNmNIYXNaL01CQWdEamNvM2MzMVl1eTkvN3N3Zi8xMi9MVDY1Ymp5WS9SM0RnL1A3MzE1ejNHSmovNitYM1VPTE5zK2JQVy9pelV1dksvT1h6ZHFENWI3eU96dGoyZFBrWGIyd3V2L1BqdHRKUFVYNGpVbTRydjFxR2k4dC9hSndZSS9yNEFPUXNhd0VSSEtZT1gwSDFNV09yQnJMSEp1ZlduaW1kVjh2SnREbE5vbHVSYnJNa1BTUVRSVnZBaUtENWd1b0xkdC9BZTcxMnZBUDJCM3JyR2pzQzVMaW1zY1B5OXFhM2gvZGY2NjNKdWUvRDlaYTNKKzhYcG9MUVlFeExUa3VmcE01UG5wZGNKbi9QdU5TOFJsbGwva1IveE93elB6UStNQzNBOG5UQURBVUNac0RVWkR1Qk0vR0lJdGlrYTR4M1pEa1NqY2RTMFY4UDdLaGk0bmU0WEVzMHltVHFLTTQ1b0ltR2xCcWl0NmtxdlUwTkpybXBuUEZUd2U5S0ZYeGtvZ1JPakZJNUFxMm5sZExaSmRrVldUWmI1L2g2NnZoNjZsVGd6dmwzNFU3NEpubmp3VjA5U1pXK3laeDZIaWkyMS9IWWZCS2FlS2dIMlJRYzVOdG9qNWpiSXNaRDNrU1FzTFg2RCtPeERRVkZLcGg1MDVvUXNDZVFPQU10cFZHSkFZbE9QSllQUUM1a3c4c29KUE1XSkQxV1hTMjhLdGxPVDJLakhDUGtYa0ZkSElzeHlJU2dCTlZSdy9EdzFXV0kvcUhZRm8xRWcvWHNDQXdJVzAvUmxuYjZaQjdBMSsvNi9XVy9lMmxHMDZ6akJnN3VuSFgrN09HWjZmOEhQWEROSGNmLzVNSHlTSDdiekdjdi9lbWVtb2JzOFJlVmw2SlJWOTg0WGhYN0wyTGJ4MTE2ekZta0czVCt3QWZjWC9pWG1KSHNrYlFMSWNBMFZuV1c1S3JrU3U4VnpKZmx6V0RNRitJZ0hGbExyOU9ycXJkYWxheFd5Y2txT2VITGtHMDVua0pnWDBDdVVHZ3FuczZlemkxbkwrUzRoc1l4YkQ0NWlaMHFIbGN6dWZibzdKVEdrOWdlY1g3TjdLYnJna1k5b1pLSjhtUjlvY0VYY3I3UTZBdjFWSy9jaTEyaHdSZHl2dEJJdUtjcFJHclNjMW1jWlJzYnhwb2Q5VWMzVEc2Ym15N1d6MnBZcko2am4ydWNHVnJvWEtwZXBsOW0vc0M2S0x1ODRWcjJldlU2L1hyeng5WTEyYXNhYnRYdk1POElwN3hFYUhnbVp5ZHljVG5YakhJTTB4eTN1ZEdqY3N4Q2dCNTkrS1dKNnhJNDBSRFJoNmNhRzFBREgrRXJ4UzgrTlZ4T3BTSXNEWjBJRVZ4eUdXdXlLOUhXeHJiOTd0OUVZWGhEMXRCVlBwT3NTU1VrRWZKb0xLQ0diQjJjRS9oVVluaThRR3pvWm9nOTlrZVk0WlRTcCttZ2hkS29HeTFBUzlCcUpLQSt0TDZnRFUrbGc4R2pacEZmekJPVDFza1IrU2p3Qk5Qa0lZMTZRMGt3VDFtMkZPVWMwNHlhU2RocEdIaFdNM2tlYXNMTjhkRVo3UnNleTIrNmhqRkNPWnRRZ2VTbmJCOEI3RW8vaDMweUFZcllLSS9tTDgzWVMra3RyMzdxZXpKYVJDVk5yVlovcVhVdjJSd2tJd1ZHVGhvdFNBMjhoeEJmU3dkdEhGVWZVSXRQYkVVSk5Ed1JHYzdUSkgyNEdrblJhQ2pDK2pVbU1GZTNmU21GMjBkN1picHNZeTQzcG9PMmUwYThxbXM0Rkkxd1VXclB4TDNsNW0vVlQzMzJCeGM4ZWxMMy9Jbmx4U2VjdmVpSG4vM1hnMTlkeTI4ejF6Nnkvb0g4ZVBUNm5CV1hYZnYxejM1Yi92d3U5S3AxL285bkg3WDg2TW1MNnFPbnRZNTdjT0VGVDU5eDl1K3ZORzY0NmNwNU05dmJ6MjJhdVBuaWkzWXZ2NUN1WVJrSlVlMDIwbDJFb3BRcEVIeklGWDFCOEhsajhWL3l4b0xQRzR2L2dqY0cvT1p4Q3BTTm9WK2NLZmZoNWIxcHQxbG1xNUJHdUkxRkxNaWJrY2ZVZjFoUUtjNUxIc2gvNWpNbzcvbG9mOWhIOTdLYm01TTdTbHZ1cWlaVHlJb21xMzl2NlgyTHJoTHA4Z2o0eXAvRUprWVNXRXhuaktYNE9wb2tmSmxBWmd5cGh1Rmd1WWE3dnB6ZzliVnJEMzFPeHU0QnlPZEluU09FSnJycmYzTG1IRzZPOUp6RVJmcThpa2NITjFHYXdrMlRMallmNWo4MFJZM0JBZEpzTGNpaElRNHpWR1VRb1VHeU41VERQc1dOSzJVUGJIbDFyM2NMY1VxQ2xOSVJsSTUwUi9DQ3lKTElpZ2diK2FkWndwYWlUa3RnZnVsRG9kNVQ4YjJuNHR1T1V2R2VDdWR4SXE3M1ZDcmVVeW1GU1pvLzZEMWRybkdHVmZKbzQwcnlSdE9FVnBJbkNBRVkyeTJMQlpuQnFzdlJrZVFBdFFlOGZJM3l4WlE2RG5BTGRwNVIvdnJsUDVRUExkbDV6Tm9mN05uQ2J6dTg0YTN5NFFkdlF2cEg3TXpERzUvYS9OMmRLRVJtUVlZb2JBck1nb0luVVEzbWgza1BMZml1Z1FQQmN6blNFSWI5VUVWbWhxVEUxY3o3WnhXWDR3OG1OaXAySUE5OFhQRjZraTl2S2lvaFhmKzFkOS8zL1pNbzYzVWhZRjlRNG43akhibk02ODlEV2I5ZUEwSVZWVmV3U2NXV1pwWUt3OHNTanpEZjl0WUwxbHN2Qk5yYkdaZnVKQTJvMlRZZXRUQk5iSVBTcG8zVUZtalhTZGZKcTdVZDJnRk5UV3ZkR3Vhd0ttR3ZLVmRHbWtxWnhLNHUyazRHUDYzSWNscmlRNUxFTTJCOG1BOWh6TXZ3cXo1S0s0d2tMNVRRUWl6Uk1reFR2bHRDSzZUVkVod2pWTkJ4b1NsL0trWTM0L3N3eHVSTUlNMTM4M2drdjRCZnplL2dEL0E4MzRkWDlhb0wxcmprMEZLeUdvTzhIQXV3R0tLc2VHeS8wOVZKNkIrdnk0MDB1Ym5rVDJpUTRObkltS0NFLzdOUnRoSFpTU0hDV05LbE1wUU9hb0tyeDU0d2w2NG5KTjh3U1lrRDBrUmRaZWZWZ0wyRlp5VEpaNHhKVHBGQjdTNjkwNDd3a2YzUC9oSDlZRVJ0M1hCMDR6UDlPL2x0WDcrNllzbjN2c2MxMDBvUXBBRGl4U1Q2eDM4bmV2Y2tZL3E2QlhNSEZ1aXBpRkdsWmVaQWYrVUtkc2dWdnI2WmczMlZuRkJobHFzVXoxVm8zeHV5dmdDL3o0K3FETGlGcjVObWxYNmFWUTVZRzNnWmZvM3VOWDE2Y3FHOTJNemtBczEyenNrelk4RlhqWFdtTXNjRXB0ckhPSE9ZMllFNTltekh1bE82MDhRQmh4UkdMTHIxSXBWMkM4VmpyZUVPdmtNN21qOWFteDQrbVQ5Wm14YytnejlET3pkOElYK2hkbm5ZNU1PRWI3VWhpRFV4SGZNdWw2V1AwcUNFYUYrSzVYZ2VDeUpvbndMd0krdUdhV3Fob0cySEkxSEhnYnk2czVkbm5EVFphM2FBN0F0enc1S2Nabml5ZmhWd0dERU9MMG1wc0JNS2h4MWJrK1ZVMkFiUkRtaW1tYllDSWNzSzJMSW1PV0hlREZnQXh2Q1JlTmF4VEZPV1FRM2dNem0ySFFnd1Vqd2FqVnRIeXVnRUpnMGpkZ0lUaGxlQjRkRUpXOUtrZHlzVzYwTTNiSENUaDFJOE5xTS83dlQzeDJQOXp2R1RGeDc5ZmlWajhHbE5raXg0NjA3OXBzMFoxU1RuMEIybzVVckQyclVMTnAyN2ZLbDZBMnB1Z3BvSHFvekNWa2hqdldzQ0RmQmVTelVqU2kzQm8xR053VGQ2dFFKZklLdkxFQ1hnbDVYY25xT2hmeElGWGJNQkMyREtFQTVMWGc4b0lVTmRXd202dGhLMFlSZHNSL1dJOUlJaWRHLzU4dCsrazQyUFYxRDA0ei9PckU4T2YvODM1Zk8zbDU5dkZLT2g4bk9BNVYwL3VmMHZXZmJ0L25qNWs4OXYyTVQrNnRBVXJuUmpldUV4WHovb0lmcFVzS3dnTzRkbUdpcGpWUkhRcGk5dktnWXEvY2pHb04zWWxaUFNZRHN6TDFSTXgzOVhIOHdtZ281L1V2NUdpbEZvS1VLQUdVTVJGVGZiemNIeGFCdzdYaG92ajljbkdHUHNjVUhGRHBJcW8wMDJobGRhMUwxOWRjbXhzSmpVSE5OK1ZmSVNkSW1LYzF5ejJLUzJHRGw3TERkQm1xQ1NPeDRybmN5VnBQbnFYT05rZXhGYXlKMGpuYXVlYlN5MEwrSXVrMGphY0lsOVNmQmE3bnJ4ZXVWMnJrL2Fhai9EUFNlOXlyMG12Vzdzc1QvZ1BwUStOTjYzaHdsMDZad1dnRGc5UXJhcVJMWUFtRi8yRXNHeldWVmp3aUhMVVFJQ3ljRS9MQmhFc2dRRzYrQmlNS1kxRGFLdm9CYXVlWmJBTW1VWmtXODZaeUVlQzVxR3JpUEwwZ04yTUtqQ3RHRmRaYldnb2lMQndrRlpDUWJUakF3dVdtYXhycWMxTnFScExMZ1hsc1U0cU91YXhraHRZUlFHUzB0ckJRMERqcDI2TmEyc1ZuWW9yTktIK2phZjZubVN2b0lpYkNwWTNkWnVpN1hnb29LU1ptS2g4TTRNOFNTdHh4OGs5bGR5OXNYMmwvYVhRS0FtV0JwaWd5djVJZWJHa0tmSjUwMlRXRmludEt0NjUxcllyaDdxSGx4K3MySVROSE5YU1lreWxrY2thM2NTZVpzMGV5YnlRWGZId1RCdVNlU2x1a1NlTEZEZm1DU1ZoaDJGMm1RK0NCaytDeS9kaUVRN2czWWtlb1FrZzhSeUlLbWs3RG5DaG52YWVWV3J5UnlCbUpwTXA2b1FDUk5KQzBiaFhEQUs1NGlFUVJwcXBkVm0yNE9XL21OaWt0aXFTNlFXaEwzQ0tLRUwwS0NmODYxV3h1UEsyZ2RJT2FsKzFDVFUrRkovUDI0OVVMNjVOak1xWEY2TkQrTmZsMWRkMU5VOUcxM1RQK1B3VjFnZFBxWTdWVWJrMjhpOCtFdkRDMmo4cGZKZWVLT0JVSlVFNkZWSmdCY1NWZFlIYUVMRkc2SWhVZGtoMzE5eUVJZ2VHZlRpczhOVjhkbWhxa3h5TUZZei9aSzZuN3hvL3lKNTJWcVU1QWtzTnhIbTdZTmVPMHBzOW9PQ0FRSVhndzFMTmpMaDJ4eHF6cThWSm9MQU5jSEdCaXVXV3BRMmd6c0xuU1djcGI0dGNNUStCRW1VQlVFV1dGblJTSmRxV2xGRGlxSUtyQ0N6aENpSWtMTnNHaU1Jc0pDZ3FRS0NsQU9wZlRoV2tCVUZUQWJpUEtNUE93VlprMDhzS0NzVURFYXh1YUNycXBabTJCTm40cHVwY1d3dXlPRDBRajRKVmxCcGdxUjVTZEY3WHBxRW5TMjY0UmtNRGM1SkxyVGY2bmQzNzVOY3FCTmtXc0FFVDdWeVJHdXJCTkVYVDljYUVHa2xXV0Znd1diNitpaDRrV1RWMmdKSmt6VnVHOEF2TzNEUVhkVkQwbVJFeVMrWkZ2dmhCWWJ4OW9ZWTRiVjZ2bFZwUFdlekVha0NvYnVVeFNva0NJTWFTMGd1Nm5BQ2cxb2J3QlA3bi84RVpib25IM1VLU3I3WHZ4V2Z4ODRvVC9uKzk1ZXZSdXNPOS9iZlJuS0Rac2h1MXhQZFJDZTVNVnBWUEYvcHh2UVdNVzhzMmdheFZsTVBkQnlManBHT2xWbEZVbVV2Vmk0WUdtUG9TRTFwRUp5a0JFREgvczZ1L2wwZU1yWSt4c0g4SWNUSkNpY3BTcTRtMDlHa29LOGcxVW9qRHNJU1RtbFNreDJJYklqMjlNS2VJMW9VSkdmaFIvaVVLR0JWU1FFbUt0c1IrYllBRHFZMndZZ2pwUUlFMk5PMExoV3BjUU14dkhBQ0U5TkpYZ3VoeDR5REFHNmt6N056eHNHbG5kWmU2M0NsOWJVemtLZmpTOEpwUUFOQVBjUHlvb2RsSkNoZVdxTGRHREt1eStTUmt5Rnc5ZmJtV0I3WDBVbHFwZmdIMDhFb3RPRVFZbVNCcDNteDRPWEZyYVBwOXhHZ3NlTkljb3pFVExnWmY5cDk3T0UvY1BIRHovV3dhemF4ajUweGJlM2F3K0tpdFlRcG56YndJWmZrdnNNME1lUFlPcG9yRDVOMXVTV214MXVhOVphV3ZENDJQQzR4b1dWcVMwa3Z0WnlqbjkyeVlPVDErclhOZDBmdWlUK2loNXY4dHFaRytrMEdSSG80OW1qVGx0ajJwbDJ4M1UxL0RML1ZKQjBkUVNsQ0dBVkltbXJiZyt1RHhoRG5PNU5JdGRGYXAzVllTMGVleXcrYnloMDdyQ2oxdEo0cG5kMTZzYlpTZTA3N1N2K3FOVEN1dzBDYzFaYnRpSTdPaEp4VG15OW94czNKTnFQTHVObTR6eGd3K1B1TWRjYW5CbXRzOTJGbmE5SFF2Ry9PK05qL0xvMkRoUkJaMFczUTFZeUdRRlk3R2prUEV3MkhJdDdtb21FazJXZ2ZmclRYY2ROVndtZ1BVNVNqWmptM2g1SkprYWs4Q3pPNVVSbWRaTlhtMDZ6VG1DT3RJWlg0TDZ1UThyQlhSRlNMakVETnZ5R1RKZVNCUjNGKzRwSUhXWTRnUXBiMDA1S1YzbGxTY3lEam1TVTlZQ3I1MkZuNmdiTStvNUx0dy9NS1JtT0J5Vm01ZEc1a2JsMk96NU1hQnVIYWNuMERlMXhodTU5ejlCWnpvL0owa1dhcXZtTmtma2NlMzU5SCtTajhtcTNrNWxISjd6YUlOamgxYmY1M0JiVDVhVXliYTRxRlFMRXQrNVN3VzhDMVFwZUFoWkNmMFllOEh4QzgrNHdvQ2dZdEpsREVFeHhhUmRESWt3bTB5aWtZdEtKQUczMkZVZU1IV3pQSjhuK1g5V3R0dGNCQTZEYzI3Szl3R2JUeTJicHZIK0V2OXJaMjdZZkR2ZTdhOThvUEwzVTVWWGVwT0lFOGltbWtJNGxabXRqS3NLMnRtbVkwOTdIRFNXRTAyYWl3bzZuTXFrNDBtZ3pSZFkwd3pYN0hiaGRkTkVOTFc2U3dSWnZtQ0NjNGp2NGQwOUhvcmduL0RxWWtZU1FjRGtXaTlUbFdFQTNzTG5PRWk5ak9NNTQ0WjkyVHh5dy9kc3k1Ynl4QzdaTlhYWEZwelhybi9CZXZXL1ZvdHlWSDY1NU1Scis3NjRMNW84ODcrNnlmNTJxdW1qWGxzV3VPdi9MNGtLSEhzdzNLK2NPUDZGbnFMTDFoZXVHMGFTTytkK0RyYTQ0WWo5NXFTbHBOTTlxT1hUQnY1aEdYRUR1K0Z1eTRsdlFWTVRYWXBuWjhPZUkxTTh1UDRTZnpmRmZ0K2xwY1cxdVhiRThlbFZ4U3U3cFdtQkRzakhUR2o0c2NGeTlKSlgyT1dZcWNFajlIV3F5ZlpaNGZPVCsrby9aMTdZM29HN0gzZ3A5RVA0bjl1ZWJkMm9IYVdKcHZNOXRDSS9rdXM4QWZaM2J6Wi9KdjFQeU5PMlJwVnRqZ0FINFNTUWhWbEhEU1VNbHlyc0dpZzFPVjNsYVdkaFhxaWs3MlJSVlpha0Zkb0s1UU9YZmxpRXB0Vm5XODNxVXYvUHJiQWI5NTB2MjZFNVdzVGFlRlQwcEZFMVZTTHdUSDR5bGh3RlhDTGNWQU8yUDdqUTZjN2pjNlVFc2p4MkREN1pWRW5mVytGaU5XWkJzdzNvSFFhblEvV284T0lLNFdkYUdaaUVXRXdpUkdDOExoUWcweEwwUzFHMUhlRDlsRXV4SFZiaExRYnlKbVJTK05rSStNSE5wd1R4ZW1vVmpxbUhGREtEcWl1TXZjcm5aNmJpOG9mLzlRZzNBTHVGMTA0WmZyeUpjdUE0WGVoQlRMQ0xzTGRGVk9TTkFGdW9Mb2ZtbFNhOTZuU3V0Qmc4ZTJqMDdoc01YVTF6V3lvZWpnUW5NMC9KZWJsbTM0N3JxbGhmSm4vLzNrdWJoajFpMFhQLzZMaXk1K25OL1cvN2ViWjk3OHUrWGxUOHQ3Zm9idWVHcldEUzg4LytJekw0QVg3Qjc0a04wUGZpT09UM1A5ZDNUZ2dCOFJLdjVDVnRrWFRGK3dmSUZNVVRXSDFtRmNZU0tUd0djM3M0UmhHYzVPcXFLVDVGUmtoRVdKakxWSXgxcWtxOEZGaTR5MVNLMytoWmVmb2VVVWExZHBOSG5SdGQ2eWhtcVRrNEtUb2ljRlQ0b3VDQzZJM29QdlllL1dIN0llaW11U0hsUE93V2V6NS9BWGFVdjBGZnJEMm1aNWk3SloweUxhdGRxZk1XdlVuV3BlWUY1aHNpWUNOMURJamFUOXpndmdZNjFtN21mZVpRNUFHbXlhS2pQNEdaUHcwZWxYMkF6U1NiNmFtMFV6YTBqVTM5UWxHTnF4ZGJES04veTFjaG1UVlZ0cklXSkVDQldNVnJkd1Z2RDBHUlc4VVVOalhSUk93eW1xWndXcVpNZFMxWXBUMVpxYURQdmdIZlpWTyt5QmQ2WVl6dTRXVWEzWUpXTFJvQjFFQ3JtQlNMMHlHV0MzUnFCNTVpT09TblRzcWhEMXJocFdOZEV2OC83YmtDY2djTjh4dmdmZVhYYVE5Qm9zODVka0FIUmFwYjN3ajlablFHRjdLbC9pUXRhLzJlQWhiTTZoR2d0SmhFMmhWeFVycTM2cTFyL1I3MGpvb04rbVV5bkVFQVZtT3pmVWZQcXJOOHAvWC9iUmRXdmZyRjBYdTJMdXFrY2Z1dnFjbTlBMTBhMjdVUTFTSGtmNHluVVBKTTVkL0p1WDl1ejhFU0RsRk5EY2Q5eVZyamhJa2ZMN0N1YjBCcjFEUDFybng0VEdKR2ZqazVVVFF5Y2xGK0V6K0lYeTZhRUZ5UjIxTC9PdkJOK0s3UXZ1QzMwYS9VdHNIMFhFU0cxdGE1ekE2UFE0d1ZSeEJNN3FJeUlUOEJoOU9wNnNUd2xOVGM1V2l2b2lmWi93UWVRUU9taFlLTXdhcW1VQ1VxcGlnQUdvQko5enBESUVLaXVyd1oxMnhHd2ZqSW1aaG9BNUJGWE5iMVczYk5Gc3NLd1hBOGdLRkFJTEFpc0NnS3ZFVkZ4MERkZ0V2Z0kwZ2lFNEd4Q0lZUVVvMmdab0dZUG9STUFnT2hId3V5MERmbGRsWUx2LzZRQllMN1I5TGJOOUxiTmRMZHRTdExPaVgxTW12UlZFOHlZV254SjNpKytJQXlKSHRHK215SW9wYXNJME1CQlRybWxUamFUQm1SaW5HaGxMZFhSWDRTVEpubW4xb2dLTjlLVGJBZzk0MmJuWEsyeVExeUJRa2c3Q3hBYVdnQ1FrTUN4QWlzRW8vNWV4TDRHUG9yejdmNTY1ejUxajd5UEpacFBOdFpHRVpKTVFqR1pRQkJUbE5uSkZVQkVsUkpGRFJFQU5WVUV0dFdocjBSNHZlTlNqbDBEQ0lXcE5LL0xXZzRxdlJ6L2FvdlJqdEtpbDh1OUxhUVd6K1QvUE16TzdrMkQvL3k1azVqZTdNenV6TTcvbmQvKytqMnhMU3BuWGJFblozbWkya3F4SGFSTlc4VWpIMjl5R3k1TURIbENPTWRjZXVPUGRtN3ZldVhQaEQrcDZCNU8vdUhuMVQ1OWV0K2JSamYrMStjemoyeUI5My9SeGxPLzBCTXA4NDdYZkhQemdqUU5ZTjA5R3Vya1l5Y29nNHJnUTRiaHdDVWdFa1pmWnlYYUtsOHZYMGt2WlplSzFzaEMwVWQ3SVBSK3dabUNxS0VHd1dNejMyZE9CVXpGbXREazJPam94enJ3c05pNHgzWndmblpHNHlyd2hkbFZpRGJjbWVJbzZGZEZCQ0dwcU9Ed3RoRk5PZENpaGJkRzM2NVN1TS9HRXhJUDkxTS93V0hXMVdMOUZIcldPWk01RGZpVEhjS1BuaWY4M2VGZHZSOWhTa1VsS3NsR3FYZVZFMEpMc2pnVVNWUkVyYTdJN1ZLakdTbkFGZjdvaWk5ZDdzZGxaQWt0Q3o3c0c4WjZPVUdOZUh4UmFRZ1ZYVCt2bHZGVmVrM1g1eFdVelIweFptUTVjakp4bm9RUmhJVnVvSlFqemtFWWd6RUxEVlcxbmhoU1RES0QzRUR1ZElnRVpOeVdHRzA4Y2ZJeTJ3ZVZ0RGlhRTAySk5hdHZqVmhFZ0txb0hhUU8yM2lINndXRWNiV0gwRU9ZeHRWc0hlcjFPK1dsZFl2eU9lSlBpUkx4SnZOdmV1K0RLenJxTTBWalh1ZHdqNHV5NnlBQmZTcEp0c0pTQXhYRDBsZnRyLy9iY1o3a3ZZZUJQNzBJZi9QcVl0T3Z1YXpZUGZrQk5WOFowM0x2K0dkZ1JmcndQbGlBYlJZRlZ1UTl6WCtuSlovZGZEeC9hZU9IMVQySnYyNC9Zc0lkOUc0VGhsWFo5WkVDRVdyUXVXaCsxb2pkRmY2VDhXSDFHRldKcWxib2oyaDlsb2lRMEZpdkpGZ2txcldnSkNRYXBUTURQMEJ5UXRnVmdZTWh2UDZ5OUhYNkxLYlJJdXdJaDdQVHl5c2lWWUFCTlBRaEpTMWZ2NkRGWjB0cVZTWlJrdHdBWXRiQUlpbG9xRWtGT25LU0t4RWhTV0NpQldpZFM4bmVuV0NqZ0ZBdDlUdXdxVXN4T3NNYjJEWjBta0VIZzhVajBCYmdmbElKVFVBSnVPQ1gvekhGZ0JmbmtSRkFjenh6dnRDTXJHRmlxMWJCYkJRTzZ3WWs4SnlDdlJoZk5PREE0TFE0ek1GT3pZUVBNSUJHeUlyNGJTQ0UvVGtPZjA5ZE5jNUpHNm4wazZCVENOZGcxeUdWTmpVM1pGbHd6Z0JRVjFsUEJ4bUNac1d2Yk5uL3N6dFdYem8rUGFaZ3gvczAzNlI5dVhyNDBPK0VLOHlmU2hJVlhiLzU2TVpZVEYrU20wNThqT1lFUmVxckpjMW9veTJ5Z1ZrNEhMcFV2Q25CaVViU29WcTRJMUphMXlzMkJTK1FKZ1E1K3RueTlmRnI2UjlBM3FxeTI4dnl5OHlzdnJkeFN1NzJXYnk1dHJtNnZuU0JQS0wyb2VsYnByT29sL0RXbDExUXZyTzJwL2FEeVdPbmZ5cjZzTk1JaExyaVAydGxYbGZEenhOTFJrNkNlMkRrOWhLR1JxMHZkWnVsc0lxRkpGNlVTaWhRS05xWWJNZUtYRitYcjd4NjRFeGZZcWJ4RFNrY2loOE5RRDF2aGhlR2VNRk9MbmlKMWVTM1JRbUdpaGNKNUxSUW1XZ2pqTkpGM1A3ZTFFTjRMNHpZNVdpaHM5eW9nQWluTTB4NFpkZG81cDlJUlhxWEJORWlWdUF4WjRqSmtpY09RNFk2UzhwZTBON1dQdENHTktkSGF0YW5JeG5QRml1Wm9xbEVkR2hFcldneXpuWmJDVjZVbDhCVnBSRE5wUkROcDBVenRxbEtzbkRKVENwSmx1Vk92b252MUUxRlFST0tjd2dpWUF3NEd6NENkZmwrT0RDTmtEYUZCR3FJQjhDZFlZc21qTzY1Z2hKMjkzZWl1YzBGL0ZaRWRmdHNydGMxNkpLT1FCRUVzRjhZOTVzVFByTFR4ZHJEZUNqZTVEVjUrai9KYS9LemNjT0dxMis2SitPRHFIWDg4Y2VOYjMzbGg3WlBYL25IN3J6OS81TW5iMWovOXk3VnJucDRkbTU1dVdEUzNaY2UzWWR1Umh5SGMvSERQMTEzL2VuUE56K21hdC9wZmV1UGxneTlqZWJJSkFQb1lxYTk0MWU0akRhSHhIUXpqdnFPakZ2SHMwMHdUZlJHOVgyWElXOEZ3TkJzV0RNVUkwQ3dFV29MbEE3S2tETE5uRkE5WEthNXRZMVYyS0duUmFtek9Eb213WDRRaFlzeUVMQUl2VUVXV0FjdzhJZzZqR0FSb2dEaDNZZ3p2SjVLNEs4SENKSEVmRWRkSUVHY1JReE9RN1ZON1NHL0tGRklXRXM0MlozZUVUb1NvbTBMYlF6dENReUVtUkFWY0pncTRqQkp3K1N1UXRsdFZkWFI1Si9Ba0gwazBhSTRDaGhSd08zSGYwMWFZU0RQRzdWYkZ0RnZsYlR1R2dDTGlpeUx1NkpUZ3hHa1JyNDI5UE9PMnFpN1BuQnpPVlM0NGlPMFU0dkF3a1dNK3pzZW5mWndTaDZxQUpCakE0ZHdOSUlNQkZPTjdaQWxJTklza1YzMWZONHV4ZFd3bjBXMm1KSlZPUWFQTUlPekNCWTFOZmJmM3IvN1Y1TDZibDA3N1RodHlCLy8rWU9jVFB4NWNRRDI2YWQzTSsyOGJmQjVKclhzUVE3VGgvbGJBVTVMZDRTcU56SThYa0lnUU1TN3FCUHUvOWdUTUNqVHJvUm1YN3V1Z1pOZFBkd25PSlhoRTVMOTAwT05kRldqV1F6T2VYRC9qUEYzYUpUaVg0QkhodWRKQ2pxUkFzeDZheVlmNVdqckVadnljcDRwYnhPM2lEckZmL0VnOElmSkFMQkZ2RW52RWJjNWJSOFVoVVNvUmtjUEhNeFF0Y3ZUelEvM09OOVIwMExkRHdMRWNJM0Y4bWdYTU5tWTdzNFBwWjQ0eVhEOXpncUVBazJRT295MkdzZU1NMU9WTW50VVl3bXFNaEMrQklVcVRjWlVtNDlaZ01UZ3FJV0cyWTZZSUl4bHVCVUZteG15VjhZSXlkNjd3cHE2R3YrSjdHWW5sTUdRV0FjUzE4WVl4WmhaaXFYdjYrdnFZTDk1ODgweVFxVGp6QWFDR0hzdE5oMk1KdjVod284MHYrVTQ5bDFEeTVWRXU0ZlBXVXd5dnNGQmNRczN2NHc1YTJpVVVsMUFkOHpMZHdiQnA5bHlta2QzSXNtR0JaWG1Hb1JqV0Q2QXFVM1JBWVF4VzVqM1BwSXc4RTVuakU0YTJCZGxBNFREU0EycGFrcmJJc0VSdWw2ZktOTzYxczFyd00zQjY3MGhZU0NaQlQ3bVl4SzhVL0Joa2dVU3VpRGFSby83QUwwc25qdFFqT0JMVU5rWEhDZFBsb1AweUhQakpFRkNEL0JNeEdoczM2WUlOWk9JVGRLMUMwS1U0RkgxOEhOZ2pma1RaYzN5bndhTlJiNG5kaGlaN0gxWEdlVmF3aGVnSlhPakZJNzJ4c1M5M2ZhcTVwS1c1cjNIYzFvdVp6OTU2NjZ0MWovZ3VmcENaZjJiN2djc1dJWEdIeGozOUw5d1hUSk40WXk5K2VFNGVVUHltT2kweVNQTCtiTjZjNTF5Q2RiUjBvb096WFVDdWc1c3IwcHI2dit3cGpoWmQ1Q2U3RWw5eUNkRWxhSnlCSUpYOGw5TzNTSlRKSmYwa0lYaWkxNnpFQ2NJVGZXaHRzdVFOVWdCd3dyb0x2Y014RE10d0xlSkV4QTdjT2RKczZSYjZadWtEK21PT2Y1S0RaVndGbnhaYXVURml1enBWbmNQTTRXYnpjOFRibUZ2WlI4U0QzUDh3NzNFRDNHZjhQN212aEtBcFNTeE5NeFJ1U2hZRnRDRUtRdHB1UmFZWkptMjNKMHRvbURPNHFvdGhjU21OTEFPSjJRYzFTMlFaa2haSkNYZ3JtQ1R4R2QxdTU5cUNIS2xDSDdMTHhyTGlRTExKYVpBZlBubTJwL0pvT2xRYVFtUnJ0NE9wU0ZMajF2UFJSQjBSL2dSMk96NlJGRGhNaXRRUGlRTUJFcTRDVVVYOWMrbkV4VjdPSkl6cG1OQzRSSGY1S1Z5aWV6SnpQSi9VUjI1M3VCV250aGkzZVJsM01mT0lVNFUybWl5ZHBKMDZXWVFsNGwwMEpVWlVJNHZVMDNLYy9DSjErV0p0VWFzb0ZCVzE0YTdqWFVXNCtmaWRYVW15MmxscVYrRFBJVDJCeTRHVCt1ZUcrbmVWdHRJNHNSL0NxdzkzNmFSbEdhM0lsa0pXTzJXM3B4QkhvZkNwekNNTUZBSWhkTFpBb0kwc2NPL0RyZ2crK0s4NzQvYnVzSE9PblVJb2xCV1RUa1JOUWxLYkFZeUFWQ3JEMmFyVUxwcHl1NXBKQXA5SEVoRCs3TE5jRjN6cHc5eWpkN0Q3djM0QjdzaXRIbHhFbGF6TllVenpPNUgrYkNINEVCdk8xcDc1eFBnMzZNb1JPakcvNnpkb3dCR2F6dk90WittMXZSMHNVVjhFQ2FKbGpJMElrVzJ5MS9XajdiVTlIVUMvbFVZMm44YVdzTnZZajFobUtscWNZT2tTOWlhMmh4MWlHWFJMSklxMmpTVDhUY1JZQ2lMdmFCdUEvZUFFeHZVdldFei9LbGhNUlI2THlXWk8yL2NUSE1mUHJTTWVHbklyaXgxbEJxWXd3NVVaMW1ZNFplU2dTSkN0czNSWEw1RHNoK2M4dGp2N0NLQ0ViZVZ5RmNnZks2T1hrV3FuQjRIZkk4ejBZWDJEQmRydzBFV2VPNXp3MEhFUEhmUFFSUjdFeUlTSGpudm9tSWRXUEVXenFvZjJlV2pOUS9zOTdwcnVvVTBQYlhob3Y4ZEE5eHJycG9jMlBMVHF0TFlKYm84YnJzeXdMcFBWYkpvWllBYkVQNGMvU2JMdnNxZVNWRmhJbG9tUmVGS2s2YkxpQkJmRUhoWVB1YkpZVkpjT3ArR1c5UFkwbFVaSzFwZmVZa0NESVhGTDBsbG5rSXdwaVZzR0NEQXNnZWJHYkdKUUpIcEpkS3hCY3FXRzIwcFppR0h1ZzUyOUVUZm9WR2hlY3BKRGFrY2t2U1VPNCtSTThmeVo0dVJNY2R4NGIrQXp4WWtKSHlleDh6aVdxc1NwaUN2NG5IRTNQeHRIcDlvRHFNWXk5eVJscm5ndWM4UnpvS01zRFE4RGlOTUtWQW5BUXBvbVFycm9MQ0ZOakFnUWNqeUhyOTBZeUVrclFGd0ltLzE5dHR3dVQrK0RhM3BIR2hWMmdvbjRvWjYwVTZjWGJCQnZENUlxcmVVcmJEQ0tkakxSQ080YTlHQXErWlNBdnlLZ0dIRm9xa0hYd1hBalpQL1dSTFFrWFlvaFVRazVPWWdNa1QzZE1pL1NYREVpZDNWenRtUGJnUHVtM0hFWUpHMFhZUUsxVFJ3U0Vrenh1aWFQTmp6WnRYcHJ5ZTJ2L2RmUGVzdm1uMy9UOS90bUw3cDB3MWltNHFFcEM2NmV2Zi9aUFlPVjFFKzZGNHg5NkluQnJkU3VOV3VtL2ZDQndmZGQ3L1ZUTks1RDhGTVNaZkd6Tk9lbm50YjM2Ui9UZi9HZm9FLzVPUWJiQnluRXQ3ZnE4R0g5Y09Sb1pDakNKSVdBTHhBeWtmY0t1WkFxcVQ3Rk44eUY5WGxHdmkvdndpWTZmT1VSNHJGR2lQY3FFNzlWSm42cm5QZGJaU0x2NUJUWmd5UTFpY0ZJL0ZhMC9aV1Q1SlNjN09jcHUzRlVKcTZ4RE5GL2VVb0V5OWNZOW1Fakp5TFVUWkh0a1IyUi9nZ1RvYW5HWU1qbHZaRExqU0hYN2dvUkNYMnF6ekFjQ0l4dmRGMmxFYTZyNFhGZEdVY2U5MXZtU0ZkNFNwZ0FFT2RmdGpON2tyaXp3ejdJdUdnMkJJV3AvWGpCbncxeGhpZ0pFaS9SbkY1aGNMNDQxQ1RUWVRzTXdyVWNHdzl4UzFTbEVHSXVtalVKUzdGdXJDVFBUazUrM3NOTG14NjcrY2pDUjZmcFVsL04wa2tybjJJcXRqNTcwVTJYTmR3MnVKTGFlT01ONHg1OFkvQUZwS1RHRHgxaktoRzNxQ0FLaHpDLzdBbEduUGJkWTBTbWFGZ0NYWXVwS1BuQTVLV29NcEdiSkhSd2M0VHJ1Q1dDa05YSG1tTkRUWkdMOU1ubTVOQkZrZm5zZkhHRzNtbDJobVpFYm1CdkVCZnBONWczaEJaRmJvRkJrV1BWZWZRc2RwWTBUK21tcjJXdmxib1ZLWnhnZUFOSnlNQ3cyRnZBa3dFSzVHTnZla2VnUEU3aWJISENibngrc2dhZTVIbWMxS21iVWllRUF5Rndna1JVSFpnQlF2UmJ2dkowdHA2SGdOZjVKRS96K1hJU25CejhDRWxLMG5HQVEvdUk5cmxNbG5mV2ZFN2ljUndhQTBEeDRlZ3VRV3dGSklzTEVvU3BTTXplRVY1RWVBT0Nqd1FzZEdvc0ZTbmdKaVlMRTN3b1Rxb0pqSTdoOEw0enI0ZVhrL1RsbVU1a25uWU81eThYc3dDbmhFaVoxVXgycG5nMWU3WElZRE9QQ0txZHNtRm5obVFtYkUvb3dYdGdEREJNTzNCQTI3Mmh0ZkZQM1B2S0gyRm8zUmZmL2loMy9MbGRtemJ1NnIxNzB5N0tEeXZ2WDUzNzgrQ2hMNzRGaTZINnh1dHZ2UFhLNjYraG43UXB0NFFwUlZ4bGdtTDRMcEZDcXhUOUhQMDhmYkxPdENkM0pLbVNaTFZTVnRRUWJDaTZvT2ltNUpha01EWThObjVKK0pMNEhHR2VNajg4UDk0bExGV1c2RGVFbDhiN2syOEhqa1NPeE40dUhnZ01GQjlORGlWRFpVeEd6d1NibUxINkJPWVNmYTcraWZ4RlVVNlhEUjhkU3VBeURTNlU4TW5BRngzR1VGRVBRMFh6REpYb2lKWWZscUF1V2RKQ3FVZGlrb1N0a3BiVGp2U3BYZGtvUmR6MkpOYy95NE8yMkNVYkVoNGxHbWxWV2dYOWpWUmpJWUhvaWlRbmsyaEZPOHcwQU45Y2dlRVdYdWlld2d0OVdPSEZxWkdGRjZUWURPa3FVbmhSTXJFbEFvZFZYdVFMTHpJbkI4NnV1YkM3NWx1SGwxd0FuK0VMa2ZDc1QwWWloMHZzbzgvSmF6RVNVTU84NHVxd1VEQkFzTThyRGRyRE1KdWVHUHZnOWZjYzdycjVvM1Z6dnp2S2VITDFtcDgvdFdybHp0d1M5c1g3cGsvZlBQVHc0N2t6Mzc1MDdPQVorb2xEQjE1LzkvWFgvb0M0WmxKdUNYMFVjWTBPRXZEWGhHdTZaU3BEMVVUT3BTWlR0eXBjZTdBOU9qbTZwWGg3TVp2MVorUHR4ZVA5NCtNei9UUGoxL2l2aVM4czdpbCtoM3ZYL0pUN1RQazhvbGRUS1NVVGJLV2FsSXVwQ2NwY2FnbjF2dkxIeU1laHo2S2Z4cittTk1pb2dWaEM1bjFjSU1FZ1ZnbjdHc0V3YmdIRENoa0tvWCtBRTlBYTFEVkxXNmoxYUV3eENmMFhFMzdSU09oZnk0ZitOUkw2MTBqb1h5T0dGQW02aC9BVDFHemtCTTdlbmJTMmFhc01sMmxHVGd0a2hUdU04ck55ekNNcUdxeXFEcjZjaUQ4UzNPZEpjSjhQMlk2Mm5TMHNLaDRaMW5laStwNlF2aHZRUDlsMk5uL1k3QUdaQUdFUFJ2WnhxaHdqN0NFUFp3OW9PRVVOelU2NGZsaVd1YlptNitVdjVyNWM5dmJ0cnl4L2JMRDBGMnRXUHZuczZwc2Z6eTJoaEhPbndGR1EzNTY3ODhuN1QxOUkvL0xRb1pmLys1MzMvaHZiTlhjRFFCMUUzR0ZBbnZER3VYVitxRE93ak1reUZ6SXptY1hNS29ZVERVRVVSTlZ2aUNxZ0JTZ1RZUUFrc1dxTEFJVlUwZy85Vkdya1RFdmV1LzN2WTk1NUQrNWZsdUV4SERnaTQ0ZlpySGJZbS9QRUdxYVlFdzk4VTloN1FPODh1UUpEcGVKN2pOdHpTUHdMNks5dThoRUVvczRWc0RPK0Z4dVZ5SmFVOTlITkhsdlNhMGZhcVRnZTZmeTdIenQvU2Z1OEs4Ky80SUp6cnd3VU14V1BMcDgwOXFuS2llMExWd3krZys5aCs5QXhlaWU2aC9WTU1mSEc4K25Odks4UXhYR3VGc0wyVlo0aDRKME1vbUxZMUNjRnV0eERsM25vbEljdTlkREp2Qkc1dm9OSkJWSmp4VXZFOGVVZHFXdFQ2OFg3eGJ2S24vVC92UGEzdENxR1k1RncvZVRhOThKc25McWNvdlFHS0VYbUMvUEYrZEo4ZWI0eVgrMFN1c1F1cVV2dVVyclV2b3ErU2cyM05wZFhONWZQbGViSWl5b1dWYTBxVzFYZVUvNDk2Y2ZLZzFWYmF4K3FmMEo2Um5tODhvbXEzb3BYS2tKVnJqT1hjb2t5bHloM2lTbzdET2ZzZzRreWx5aDNpU0xjVFdFV3Q4NFZLdE9LeE1TU0ZVRkdIbFVVdzZuSFZMU1dsS2xFMjZOVG93dWl6MGJmakhKYXRDUzZMUHBSbENtSmZqZEtSVjlFYkJSRUhFNHFHS3dBM2wzSHVGbzZQQXdwQUhWSUVCNTdBNkVzcVd6QWNIY1FqcHBmMUYxRUZTV0NQR01YMUpKUSthZHVPUHhUeTQ5NWtVbU1ra3RpTUZZZXRmeVJiQU0rdklFa3B5UDJFb3VKS0ptWkxackVSMGFUK0tnb2lkQkZTWmtCL25TY2FHdE9hbDZoVWJVWENad2E5SDI3RTYySGEyQU5QalgrbWhvWGE2UEdGWEkxTm1Ra0lwNTNIM3B2UjAyTVhFdHBaVTEyWVVOL0E5WGUwTk5BTmVCeWpYSVFzYjFETW55UzltTkFXaGtUK0FveHNSZGZaTklSajZHT1pMbEdGS1ZHZm9pV2RHVHVhZXhDNHRrRWlhaTFVNXgyODRkbGRHaXBqOXpnWVhTMFUwZUI1S0VYblI3WkdabmpLNmE0cGJxWnpISmNUZUZ4S1kvamNyQU1ucFZxT2FuVHhWRVkzTVdQVjNtODNyQnQ2MXVWNXhTWHNZSGFDa00zZGI5T2N5azFHUWRpRlIrSDdEbG9VUnhBbTZXK3NqaElsYW1LVUMzRllWV2xLSEVaSmc1SzlDTHNGZGdvdldSQm5OR2F6SVlORzRCSGR1Tk1SbWZoRFdnN3B3RENJcm1pb21nVVF3VDNLRGthaXdXTGlQMFhMQlFENDFtaGhrTnA0Z0xneWxGVVU3YTU1U3ljQVBRUFF5dVJOR3o3THUzZWRldlhOS1cvZC9DUnFlUEcxRHd3ODdZWDV4bzdsSlZMMW5lRlFuWHh1MTdhMnJIazRHMXZ2Zy9QU3l4ZGNlMzQ4OG9pNllhTE4weVplR3RWU1diU3V1c2lNK2JQYUNsTEZQbWw4c1p4NitmUDNYYkZMNUMwS2gvNk8xWERQZ0xDOEVZU29Vb09pd2pKdzFxcUN6VHZvVGtQTFdFczJJb3NtY0d6SEJFOVVRaWdva3FRQmlGZHpHZ1NzaHBwV2ROVElBWFZiekRmSE1DNkZETGZGRGpFQ3hlSkZ5M2tiK0o3K0MwOEE1RDdzSjNmd2ZmemgzbU9RSm81MkdZbnlUamdNWElBcWZLMEl6VU80YUNkblNZOGpSMFRiR3ppMUlEam45Z09HTCtmNmdJUjJMeHo4WWpnSDVsMzBrNmZEbUJsZlJ3M1lHQmxiVFEyNnE5Nm9HSGlPK2tRd1RlaVpZemszR0NKM1JCWkhJWlBFb251bGpqTUFvME5EWFdPSTVBTzIwVml1TnpEYURGd2lRZnBqNmYwMktWdFYzZlgzblZYNys3ZC9reFY4YVBiOVBPdmZZeTZaalBrdTNQZjJUejR2Y3RxWTFqUDNJbjB6RkU4QnpyY2EyZlFZN2h3S2hqT1VrbC9DQU1GbmJDaVppQ2I4Y055d1I5U29EOGtJelZ0b1BzUEdrUERvZzRoajAwVzhrUWRRdWxJR0ljSFlpVDJFQ1pSaDdCSlNpM3lUUWRob3FQRCtYaERPT0FVWFRoNThqQUphWVZ4dkVIRnQzd29EUHZETUR3bFJsQVVjS2doZGlKRzNSVGJIdHNSRzRveHNYeWFMWi9BYzVKenZUaVBuemNjOExTUFNmR3dlRlJrUk5kd0VQT0dnNVBDbDBqaW5uUmtrV1E5aVRXSUpFMHVUb2tPQy9RNnVmQ3pnd3EyRVVFcXA5dHM0NEdJbVJpaisxUk54ZjNNR1ArZjVuUkdpUU5WTU96a1dVM05CcnU1RUpseWlQa05FcTZpNVJCSDJLRGRMYW0yNndRckswak9MRndBMXFYYjE3OTc1ZU5UZGJsUE5tNmNQdjMrYy90KzNEZnBocWxOSzZrSEIzdS9NM3JpOUpuZnZZZHFQZk1CNG9JWXJxTkFYQ0JSMTV6VkJlVUJNd0RmREdaQWhmS2hmSzh4TGhRcXNURWloYmZLT3N3S1FCSTR5T1dCQ3NyeDZHUHJNbDY4QWdKWHNMZUpoU0JsdEVwWWE2dEdxeGd5RTFrQkx5aWtxbnJSR2pwckNjZDR4ZUxTTEtoQ0MrTG5pYWwwRm9UUUFtMTlZTjFlTlNvTGttaWhLZFdnU3F5UVdrR1ROQWxNbERwZ0J6VkhtQzB1aG91cEpjSVNjUTI0QmQ1QzNTcXNFVytSTnNGTjFFYjZYdjRlNFQ3eEorQmg4UUhwRitBeDZVV3dsOThwdlFwZWtUNEE3MHAvQlI5TFo4QkpxUmI5SENrQ1FsSVZxSkJhcEtuQWtrVFdNa05aRnJGeDFwM2pFYU0wY05qWXhleXVFYWdNUVBRZHZoY0VpNDJFcnRGZEllOVNMS3ZJdUxYa1NBYmRHL1IzS0hNb0ErcnljQTR0RWk4SWFWRUtpS0lFYUlwSzIyM3VyQ1FCeWU1WjUzaEpwQUZrNnhTb3BBVExzdXo1a1dGOHQ4WDJzQlNMS0V0TVVoWk15Wi8vRDJibjQ3SG9ZT2RnWnl4eWZLRFRtWTRxbjFreldvZmpiK0ptUHFldHBmRHl3aWxnQkFYeXJMMElDcVFyM044STRhOXkzYjhlU0pkRU1uOTlMbmNqVXpGNDEzWExacTJtN2lGY2lmdEc5eUt1Tk5tL3ZvQTRLOCtST0pyemEwK0JqdXJrR3AwcFBOd01FNXV2cGFEeS9Fa1BTelhsT1ZoMzIweTVRcHVwNkNudjhoWGFUTFhDSHFabkQ2R3dCOVlLN3VVTkcwWDI1Ymw5NWh6akFRbjVlbGpBMWpsR1UvSjdtQjcwRWFHd0IxL1lRL0tBT2pBdWpSeWxsR2VQWTU0TWVMNkwzVWk2emxVSy9US2ZzK3VIbmpLVlBPMUNBcHZZYnliSzBXNGs0NXlZeXp0OWlrb00yMlBJZ2NhMTNFbkYvcUMvejJjWGgvUmJkWmd5TExJdEdUUUVDdktISUtjaGJsVVZNb0dTWWtDS2tSaERjdElxdGg0MjhMU2loL1QzRHVudkVIUmdKOGRKdUs5Z1A0VzBBS3hocWlYcUVtT2VjYjlCRzJTbVNNbWRRcEp4Q1FNck5yR2tOS3NuaXV5MHZMVzNwRHpMY0lybzUrSmkxR1Fad0hDeUtQc0VVd2QrT3NBbmhMaGM1Q3NIYWI1R3lQaXlvSWtmSzV6ckcwOVA1Q3orTW1HeWZLRTIwYmpFbktmTk1KZnlpNFRyekZ1NXRmd3E0VGx1djdiSC9BZDNScXlTalNwUXBWYjZxclJLc3k0d0JyU1l0d2diaFlmcHJjcFQ4R25xYWZsSlpUZll3KzMzL1k1NWozdGZQTVljMC81aW51Uk9pd21aZ040cFpLbHpkc3VnYlI2VEtLOGpWdUtTVDJOTVlBaThrT2ExdEErSHJudzhyVUlscmU0YmVzOXF3V3BNUmRLaGhzU25WQmp3YzVKc1ZFZ1pZeFl6UTVwdmRCdnJqZnNNeVpBWUpDdnc0N0FmekVnTWpyck15VG9iK0VvZndQOXMweG45ajFzQm1tQno4S3dvU1lLc0tKSnVHTWlDbU56TEFoTTVBaGRiaXlYTmwzelo0SVVrYjVobWh1VURMTXY3MEhOT3E3NkFxdm9FUTlNeWtoQkFoMlBBRGtlU0FRcnlKaU5vaHVKVHllV1p5QWJBTTgxZzBXWnFHRkZWQ3B6U1ZZaW5XT2hSYWNUTlQxbFNjcW9FbDBsMzRLNW82bkpMbkdyQVpjWWRCZ1pYdXR5U2RSWXVKT2xoR2dtL3AzYkRVLzVUaTRsVEViM3NaR2RuQkRrRjZEOFdncDJSYndicmNLU2lRWmIvQVZZSDc5UGI4TjhtcDhsMjhvNlNtZmtHYVRXcEpLa1hobzRpaC9Jb0d2K0grMEM5bGpUZGFUNUp4L1RrSGRtWkJid09ZZWp3VHI0ZWt2ZExaMDdlMGVnRjh4Q0dqdTdray9hSDV2QnAzakNzNE9FOXlPVkNKMFNhNXZBdXZoNmZaaGNZUSsyM1Q1OC9ZLzd3c1Bkd1kraG9yNVJra29CTU9tMFhTdUF2ZldlUDJRcHFUWUpvdXROZjZPSzJNOTE0aEJMbzVPSGV6cjk3WWZWQXRJTS9UQkJENkVvYVRzNDl2LytaZHFieG1lZTJOWjIzNTlsYzMvUFBWUDhCcVlzZkRSaXZVVGNPUHZ6NklXcnhtUStvOWJ1L2ZoTmJ0UnF5Wi80UDBodzZsYkh0R2JVZ2lYVmZBY3BqR0hTVDEwQUphbERtR0Vya0tFNUZRMEVqRHJoV2x5R2pnVXlqRmQrcm1WQkxSVzFNK21uUjFybmFENWdmQ0kvNGZxajFzLzFjUC8rNkptcFdxRFZHKzhXZ0d0T2I0Rmg1QTd4ZkZ1ck1LNWc1L0J4NXRtOHJmRmg2V041TDdWTitKNy9tZTBQL2dINVhmRXY5by82SlpKb0ZCQTdUMENLcTdpSndZRW9qQ0J5U1JIRm5JM0FzNWpqYXh1RGdSSUxDb1drNkJ1SFFORlhQSTNEb0VxZFJtcVFmQkFkRlNrL25NVGdPcWxCTmUyRTRPSjNBY0VoVFRXaGVyTjZ1cENUdEtrNjgzWktReWJEWDRxWnhQV1Npd3dzdFg1SytuVXBOUmJmK1ltUDlBV2Z1WkdKRklDTkMvMFEvZWZ3c3hJMVJtVTVubUhUZXB0dVFHNXEyaWFCc0hMQ1hhTVVUNUkwMmg5WDZmSkdpVmdLR0lSZTFLcWx3SzQzKzhQYXUwbGFkUUpZRlcyR3F0RlcwRXZuNUFPYVF4QndwbnlIV2lLV1EyNGVOSS9SdzgvTUF0RHFRRjJGc21MVGdpaG02RW1yd3J0d2pmMzU4VktJMjNmdUgzQVB3MjBjK0dKdjdqS3FDdWE4bTFsL1FlQ2FuRFA0ZVhqSW4xNGw1cmpRM25mNGI0cmtZOVFxSjJLR241bGJzNXZ2ZzNPU25TMmlNQ3dObUZsUzJ6LzFVZFFrbHYzOCtvWFZXclNGMmNOeXZ5ck8xTW9LdGk2U0FSc3QwSXFxWm5NejVMVk5MeXBhU2ROZzdXcGVKSFlsRkRzV2lPbDZSY0NkUnNmRmVMUUUxZk45WEpscXJBaDNhc3hKdHFSYmlvV1JWZlZiSEMxNFJ6WkFhTVN2bFNxVlNiVmFhMVNiZkk0WmNaVmI1SjRYbW1IUDhjNEpMekNYK0pjRmJ1ZFhxcmNiYXdOcmczZXA5eG1aenMvL2V3TVBTMC9JTCt2UEcvc0RuMGw4Qy8xQUg5YThDUTRsaTB4L3grZklBVWlHL25JZ3oybmp0TG8zV292a2ZZUWRselR4Q1ZJdW1LVHJTTHNnV2pnYjgvclFwQmRDR3BpRDFrWmFsZ0N4TGZ0ejhMM1A0QzBCQ1QxQjFpWmNTVkdJZjFiNWJRM2ZFQ3V5alpsbHl1Mm1aMUFMekpaTXk5OEVMOW1nd0JTNktTL2dqY3Mrc3BGS3ZURlhvYWNvUUFhYTVvTGRPUTNlSWF1K0xKOWNqVllKdTRTQ2VxaE54UDRheWorZ25CNko0ZHZuanNZaCtuRkNJODQ0WGhvTGdMVlBEWThHQm5KbTh3NGRrY0tRZ2c1KzNjVkNIam1FQlQ2Yk9JQ0k0TVBUaG5wWldLZFhTNmtOaVluZXcxWEJBWXVkZ1B4UlBnK0h3djhkR3o4UjNSdkZjRVpiVUhkVTBTU0ozazlqb2RvNngwcTdtYnlId1RZNjlqcWNhTDB2ZEVUaTN0bTFTMktoZzVkd052ejJTU1pWa1B1N0xkWThycjEvZmtjMWQ5NHhlVlI1ZnFoVXhWWU9QM0x4aC9XcHE2Wm5mUFh2Qm5KbDRsRlFoeWZ3T0dpVSsrRGN5U25BN3NvdkY1TXphYWZrNnpIM1Vxd0psd2dZYlorWDNsb2dJZUg0eHFhVDhyWFVKSXFxcEtyRk9iNFd0MHNWd0FqVkJ1RmljcXMrSHM2aFp3bHh4bXQ0TnI2R3VFYnJFZFhDVnNFNzhOcnhidUZmOENwNms0bEdoQWxZTEdiRlYrS253QjhoanFiRlhEMllwcEx4RURNZGRaclpDYXF3b1VZSWtwU0dGN0E4SzRvbGdxYXZZRFBydDBsVm9rR0lmVFNUbVZNWW5VZnVnMW9lc0VaWjducG9IQU9CeFlvRmt0RlBxZGg4RVBzdTMwTmZqTytGakNmQkRPZjdJdHdwSXQwUDRMSUJUd1RJd0JHaEFNTFJCVk5OWGxXTHhpYk0rZHBHalBvaUpnUXpwR3RJSGNRaXpUZitrdlczd0U5Slg2UGhpdXUrQU0wV0dFMUpFVExHN0dsWUlPQlp0M3owQjMwdTA5ZHU5K0M3aVcybFBKN1o4RGtGaXdYYkRoN3MwQXZOaHI0N3RqYmVLUWloK0hyYU9kNFZiU1dCRUNyVlNBZlFYQ3hVRUxLNUM3SldRSWIrUHJ0L2RqWDA5ZTlaeHpnNVc0U1NJRFFYQ2xkbFFJTTJOcGNFcTZvbVZzM05UNlVXRHYxbDJheGY4NGtGYTRCNjhaZkRLZGVLUGNEMGdmSTFaaG00bkRjNGhHU1FOTmdFcXhoS1VWcVozTFRiVkJqcjFUMEhkWmNmSmxDZDRqbVRzV2RMbyt4bG1KWHp0Z1FmUWV6MzAvOExwN050SUdINmZmRXZ6T21HelFLa0NIT1RoaC95WFBQVWlubVQzUi95dmVHb3UzODFUQWk4RCtpdGtWY3FnRFFwamxzRTc0SGR4c2hkT3M0STgrajUrakZBSjJ2Q2NjNUNLS2orNTFRNUQ0NlR0eVFGY0wzSzhFdzRBakpuVGhxZHh4dWtobk9ISEw3QmllWHczSlFzV0QwbTVjeDJaZGkxWWhqdTBXc0ljeDhOeHYwbld6S3R0eWRMTWdiZCt1ckZ0V3ZXRThMd3IwRG03NmMvZ2VleXI2RGZjUzM1RHhkdjh4enkxazMrWnAvNHV3TzhKandyVVN1RmJBblc1Y0MxeTlRVW95RFFRZnM3amF5NkcrUjhES0xyTnZueEEwT204RjQrenpXMFlyQVpmdGo1SUpxQUc2TXJSTmFNWHV2NTRud0Q0SGpJTjlSdEVUK0l5N1FEUDhaWE56UzNyZjFPU21WZmIzRVF6LzBMWGZlNzA2b21oQlRQUmRSOUVnMzB0bVFWN0habGxsY0lCRHhhM2srb2swdk00cWNnRVNWSU9QT0NtN1A3YXA5cndyU2NLMHhlNWVUdUxwRGxBRVJrcGp6TjJwTUtKdTdVTnRuMUtKaDdBdWdxbjRUeDFsQWY3U01FL3VxWlBtSi9CQSt4OWVhN3lVWkJHTndmZG10ZVo5LzlCQWgrZ0R0OEg5QzI3Z1AyTDNXbTNQL21JK2RuUm8vaGJsbEpINEovWU40QUlWdHJ6ZTJGVUxocjk4WGdpWkZvRSsyQkpyMEFmWS9aUmoxc2F6Nk5uSWpaQmRBcjZadW1LNTJBZHdDZHFPMFdxUWR0MDNLVFY1c3dWU0h6Wk9KNC92TVFTZVF0WmJ4QVNoa0UvbzY0eHBoKzMwN1Y4RTdydmpRYWN2SGp0K1EvWGRWTkhxSnJweVhXQnJ2TUdEWHg5VWZUR1BlajZFdUF4Y24xeG1sRWkxTTBSUElQQjF6UWpzVEFXamRDOEdvbWFzZjNVVlNBQlMvWVlhbVc3RC9yMlUvdUFSRjFsQlF3WVQ0emxxd012QWJYYVZ3bWlSYzljNytBSllRN0JJZXpCazUySWJ3WU5COTdFMXRHN0kwYUNObUxBZGdqbk9QVXQ4ZDJxR3BOaStMN3NrZ3p5ZXdZYURHZVdkcVJleWx1Y2JETm1LRnhtaDNtTDQwdURVYTY2SFNiajZRbmpMeGdYM0ZyMDNZMWJ2M1B1T2R0bmxzRnZVVWRhV3p2ZUtxN08xSjlmZDZHK2JNbnF5MmROSHJQeXZQSmJjVVFidmtqTm9EZWpwd3lnVVdwUU0zS2o2YzI1MGZCTkpGZjJ3elI4R3I2TkJlNkxnS0srQkpENkF2bVhKM2F5c0U3SDhWbDB5VWhHd2Fkekp2d2JUUDhLMk1ldzhmLy9NV3o4OURiMnFzSXhFUHk3WXo0cG5BZms5c01KaFdPRS8rQVlBZnh6ditBNVJ2OFBqdEhCbC90MSt4Z2RMQVp6bVhuTUZNQWpMeWtNU2tBbHFBTXRvQjFNQkZQQkZXQUJ1QTZwcEZ2QUhlQjMxalhYZDArYk5Xdis3RFhyeDdUZHRLcXFkdUdpOGtzbktjSjRpd0VDK3BkSWxyZlZscGZYdHRHekU5bjZnSzVIRWxNdVdiMWl4ZFdMSjF4dys5cm1oaHU3ek5DTURvb2JlMzRIK3BlNmNtNXhiTzdhcnJsenU5YlNpMU9TcjJiVXFJclVZbEQzNGFIV3VrT0hEeEhROGJvNi9mQWgvUkRpS2tRZHdxVDNqK3dINit5MS9udDcveEU3bjdVL3VnT0JzbFJUdHJHaDBsbjduWFhZV2J1Zjh5TzJSNjVIZmo1eU96M2krOTN6MGUvVVo3UDEzOGVMZnphT2JoeGRqcWxjU3dONi9iSng5T2hHYWdaZURzYndHOVNkK1gwSGYxV2ZiV2dnTzhQZjRjOXk4L0h5bjNqbjcyT0sva0VEMXF5akczTi9hR3djL1JIYWdGc1IwWUcvYkIxYXdCY2I2cG9HSnlIcW9mcjZMSlYwZHNyeGlEaUdEM3MvVzU4ZGhRak1TYVFiQ3NsckRTeXg4MEFVOGpaSENVcld4NGtKUmdNY1ZHbE9UUU1MV05reFdXQUZJMWtOTVE4MUZaa3ZWQW11d0RCMFBLYUp4dytSbFh2WjRJRUZWM2JpbEljOWh5VWprbVkvUnZOeDdyUmtMT253cWNRTlB5MDRZd0hITmw3d2c0dkhwNXBMTGd0SmZXTmZuckxJLzRodlNsa1hNeC9MTmM5ck5PTHgzQ0hRQlJ2cHBVZ3p4a0hKSGxDdGNOVUIvUVVrMENRUVFVc0cxQjMvMDNGWWQveERQQWp3bVpJRzByYU5TWnBBSmZFa000cFBEQnN2bnZxajNDRzBnSTAvRHFTdXVpb1ZzSmZ3aTUyTHVtRVBXdVI2VnJVc1dEQm1GVm5pYzcvMWY5bjdEdkM0aW5QUjg4ODUyN3QyVjNXMTJwVzJ5YXUrVm5PUlZyYXNia21XMVd3a1hGUXN5YkpsVzVMbEFoaHdrUnRZcGhyakJFTW9nVXNNR0JPTXVIQXBlaUdFSGk2WEVGcHlDWkNRNTdSSENBK3M5ZnRuenRtVlhPRExTNzdjZC9NOTdVaTdjMmJtelB5OW5JcHJaK0xhMFVpQzJxQWh4cFFxczNHcEFKcFVHd2YyMDJoQzlRcVpZa3h4WEVIUWdpdjR1Q2NSSWdQSGsxV1BtQTFjNW52MFdtWXF0dTJtQU5ZQ0NHVWc4NHp4dlRNQkJKVmVJa0t2RW8xaGhoQ2hOdExYTjRPRm5lUk5TWWJFTzZJNmptWHMyRkxkMExKMFIrZ2xLQnFvTGdvTjd5MWFjbWd2ZVVpeCtEL0tpa3EzREZlVXdqcTRxU2dRV2pkYVZySVRJWDRQSWZZaHhMSG9jcXVDZWdxc0xqVXh6cHlLZ1UwU0ExaWxVTjJoZWtoRlFBVXFXUUlscEltVDRiZVZFZkpDY04rakVDTzArZXltWDNvS3l1dkpaZlJGZUxFT0NLb1ZZUTY5ZDRjODBSVzROV1ByNXJMcUpiVlhRWHJvaFlIYUlCeTRldWMxMTRKSEVSK2RpQkF2M0xxNXZEUjBZNmkvYURiY01EcTZrOTZGVHQ4bUVTUE01OHhJNDRwZzJ0b29XQjRGYTdXd1hBdWRTbWpDUDlKRmlHeHdMQVppWXB5Smd3NU13Q3gydFM3ZXpwM214UXNzSWJPZFBVTUJBVzBYUDBDZlBFVGZOSjlNejVVWEVYUDRTaWVySlpvVWJubDB5OXppclk4T2pqdzZNcTk0NjhuQkcyOFl1L1h3RFllRitkWFh2N3ByNTJ2WFYxZGYvOXJPWGE5ZVgzMjI2UFVYZnZ6NmF5Kys4RHE3VmdmQmJSUHlVZkRjajZ0L29wSUJ3VWlIUHNOZHJqN056M29FdEJpWklMVk1oWkQ1YWdCaGNhYVk1SklYSjIwblMwOE5IbnNyZjVpdnlHdjNQSlN4cTV6T1dJRlowbThRZHg5M1Q3QzcwZzNib3ZkSGsvMVcyR3FGTGhNMG0yQ2ZIcmJvb1ZJSkZRSWtlMzIreE1IOWNwZ3IzeTRucVhLUWcwWXo2eVV2SFBVKzRCMzM4aHU5MTNoSnZYZWxseXp3Z3M5YjRDVmVpQm8wbStzd0VqVExrNzFSVVY2alBYWWNhZVlsVHo2Q09SaDdWWHhoSnFiVHlPcDJLcG12aU5TTG9vMzRleVlua3o2c29EM3ljVHFSbHZsRmZPNXMrdDVnaGJlSUQwaUVWdWg1aFpQL3pka1ZTYzFIdHcxY3U4aVNVTGk4Nk0vVzA0cEZ3OGM3dW83MTVmdWFkaTV2SHE3eUtNakp2SzNidCtYblZCUVZlVjBsV1ltZm01Y2ZXSkdWMGJpbHNxS3Z1U3JWTXk5bkZuMThCTGNhNVNKVjlpejZyaFR1U0hETjdKVFNsRjBwdkNjRlJwTmhjektNT3FBeURseFdrRm10VnRKcmhsRWpiRGJDa0FFTzZtQ09ya3BIRnFtZ1VkR3BJSjA4TE9XaEFNQTBHQldGY3BRQUNRbHVKeGN6U0Y5dlpJcXkyOUdqeGxyc2VsbXNYYWtMRXlWdzV0VWNLbFk1T1V5d21CSzBYL3dCVkdENnFpSHhXUnBPOXJTZ2xHUmlnbW55QnJIYlB6bDE5cXMzM2d5OURWcmc3djRrOWxUMkMvdGVnTElyYjd0dDU4aURENURQbnd0OThkb2JvWGNSeGtNd0NnZWZPR1g4VGVoM29YY21SMSs4N3Jvbkh6cDArRFZLajhaUUo5T1RXTTdGalFYYjh4eGxEbEpsaDBJNzdFc0VmelRFUjRNcUdvWXMwRzJCWlNhNHpIakFTSzdWUTVrZVp1dWhTZzE5U3JnTS80UzFBckZwQjdteFdJaU5sWHZNU0pQa1FYbVVPYzdPOFh5UzFXN1FKOWxWWWNXS0VJSVNnSm45QUxWZGw2Q0RYSHdXQUh1Y0NIM2lsNGVaK3lpVGJCb2grSlc1cDllZENnRjU2UlZJRGYzKzdEMGZ4RDZZK3RJOWo0UmUzbm5zK1BZcmZ2Qjl5R3p1QS9WYjcwQjA2UG5RMXRCZ2FNdGpwL1dmUWlZb1U1NDhkUGo1MTI0OCtEQjM3aHpYaEpKaGtqMUQ1UFE1STdnOUY4blRJbnNHSXgzTHVUYldNby9qQkFVYllXWGJWSlptNFFnNUYyY056eERIdG0wY3BXM2Z1ZmRsNnpDRHpNSG9hSHR3OFlGRnNHMFI5SlpDVnhDYWc5QTlCMXBTWVkwUG1ueFFib2ZTUktpS2cxUWpjR21PYUFFYzVWQmVycTkwZUp6TytSNjkweEd3UjBjdlNMQjcrQVYyUWFYQytBbU5na2pLQ3lnWm1EaVRjd0V0blNrZWoxZlBoNjFXUHBvT3BtbW9YMkZkTTFrc2RoNVEyL1M4MVVMZkhWSkVjbVhyUGpERUtuMXRXMjdyMnZyVXRhV0Z1MzUyeHhOdno3SXZ1VzVneGNIVmN3M1BXSmJkK01iQjc3NTFUWjVNRlpWd2puUDE3amhVMlhGVmhjMno1S3JXeS81bDk1TGs5Z0pQYmJGMzdycmJWeTBmRzZpTFM4ZzB0dC9ZazU5U1Bkd1FPL0RBcGpsbDE3OTlRK2duUGJjTTFDMllUOTdUeHNYRmFReUZOY3V6Q2k4dmRjL3V1dUZ5NlkyR0EwaEJPOGFaZHdUWDdmRkFweHNVN2hnMzZVdUc1amhReEVGekxKVEhnc2UwMmJUSHhPL1h3WFl0OUNxaFR3RzVQSGg1eUNOd3lBNVgyV0d0SGRyc1VHa0hPOGRaUFp6RDZDQU9SMnBTTkgxaGhVR2RwQ1pxenU1QUlpZWsyQTE4Z2wybUNvdXFxTEtvczB4bGN6SURqS1lYaXl0UUNuczg3TkVWN0JxcUtLdlZhZWZwVVRCdzBxdXA5RVEyNE5oNDdQbE5kMDQrMUw3aXhKZTNIZjdrZU5QWFR5bXF0dC9mYy93RDM5bHIrR0h6Znp6WmVlZElKYnd4OHZnVndiNFhJZVdKdTBIL2JGL3ZjNkhmUGxoKzlZOUd5NTUrSEtwKys4WGNMWTlSTzM4dng4bmFrRG8ycmlEbzNLemFveUs3bFJpR1FRSjd1eTluTjJnY09wUGNIczNyQ2FkRmlaa29MajVEM1cvT2xGZHptaVJKb0hlVUJLeUJzRGdJUnpOWGpLMjY5djRPN3pNL1ZDYXQzRFpXdStYSGgrdjVxdEVuQm5OYUR2L2Jtck1meXNiZkRyU1V1SU0zL2ZuVTJRY2thSlFuRUpyWlhGK3dkSGMyakdTREw2MGdqVFNsUUZrS2xNZERXVnh6SEZrVUM3dFZNS0lDbjFBZ2tJU0FnL000ZkJ5RmxNdXcyNXhPQ1Y2ZmxvcjRCSU1ZczFmMHhlK2R5VEhTeU9kODRiNDAvREVSUEZLbStvVXFmL08xTGNOSGxxY2dTclpsRzNkWExONjNhVm1pMHR1MTljRGk5YWQzVlQyRC9hM0RSNWFsWEFMTnBFVUQ5UXY3YTN3aXV0TUhJT2JIVUVycHU2VnRYRjR3NllBS3Rxa2dWd0NEemtGZGdjYk9PUklvVmlxOVVvc2lIZUdDNkFFWU5tQUs2eHg5Q1h0dWlxU3JKcmc4WThVaHlnWGZzejlVT1ZadU80UmNHS3VYalo5OWZPLzRKcnArRCsvNHF1eXRuSllnOHVGL25lSmJLUitvM1hxQjN0SE8rWU14R2dVR0ZMekRvUnBURVpXZ3NpdVVhdDVPWDQwd09VR2ZMcHpaUHZuK2hQSDlpZXdzczlOS0Nlak1SUURta29PLyt0WGswQ2VmeU1aUGZIM1hpUlBDNVhUZXUxSGFWdEwzb0hDN2cvVmZLK0VUTlR5dWZodjFSczBwRlVvSHZZUkVyVlIrb1FLRnlxc2FVWTJxSGxmSlZLb29TSVljNE5XWVc2b0pPRGkxQlNmZ3RBcmlFRlJ5b2xDQW5ORFgwak5lSTBVS2pRalU1SVFwa0RucU4zTFBqdEtYbjhIR1FDd3FZSUJ1K2tlVlYwNEFVeituRXlqUDZXdVhaU3REbjA5R1BmY2MrUkM0U1JQNWZGSXJHNStzSWFjbWE1RGdLOCt0bE1lZ1hNWmlwdnAyOExxZG1kQ2NBZFlNMkpNTzVla3Q2YVE4RlpwOVlQV0IzQWZMWEJEdkFwVUxLbEpnYXhMMEpVRmhFaHl3UTU4ZGVoS2dOUllXUlVPTXRkeEt1ZzNRaTg1UGdEMFlzVWZISk1Za2VoSzRXSnZONW5mR2VtSml6QjdPYVhRNm5MelRtZTJuNzBRMUtKSVVST0d4YS9sRW16MGhEa1UwTnBvamFHTUNnUThtakpNNU9SOU1zSUJUaWpoelJHdCs1ZWpFQk1TZU1kSmZlcDNmTjM3YzdDMU96UFM0VVBBRmpCMFVrQUk1K1h3Z1pzcmFVOHN1Ykx6NXFUdERrNmM3ZXNhQjNONzkrTzFYdG1ZT3JZR1l6eWIvc0szcnk4OXVLNmtnTlhzZTYrdC9ZclNtY3RmcC9QcE5Qd2I5c2NmQThlTzEyZTE3N245eDA2blErNTJoWnlBOUd4SWZydjc1Z1VQdkg2bXRPdkxwZDNiODlKYWw3S21Fbi9JZllqUmg1Vks1L21CVnZxL2NSL0tUeTVOSmdiM0NUZ3BpSzJJSmhwK3QraDQ5YVZYMktFbENndFVORm90NDNUUDQzUzd4SVJRck5JTEdLbmZZb295S2FCc3YxNkRJTUhlSGYrR2dQSkJwUko4WHNRVk8xQm9hTElnZUR0T2ZRRzRBcUVKTlE1My84UHRDOWcwOVhmZU1sSlFNMzlQMVZLZHdLclJnenByRmFaN0tkV1hsZmVVcG1mVzlvL1gxUzI1OGVmdU9WOGRxRDI4OTI1eTE2c2FPRmQ4Wm1EK3YvNWJsM2JkMUJhaFgzeGZxZ2ZuaWsySzRsS0JGSUc0NVBURGlZRGNROEppNTBST3JIN3hDSVoyWXBKcUZNa292c054MzZ0U3BVSS9zcWE4V3l2ZThMTjIvK1NYVHA5Wmd0cWhFN0Rvc3RVcEJPTFhhVFIvZERtcmlwbzlKSVFKOW9pYW1nMHFWWEk0cmcxbzBqcy9TQndSbnRxTWFNK1dneW1LTW5VRGRvV3BDVXdWSlJRTEFmL2wreUhIcUZEejFkcWlRSkV4K2pFWmtHTDRJYWFsbTd6djNKOHc1eGpIdW1SV01VeW5ON3FBSk9KUEQ5QXZUSDB5Q3ljd3BaVGFWVm9PeWVpYUhZclZ4OHRVY21oU3pWNHpseDBoa3g4UnV2c3lTbWhMbGk0NzFMYlN0Nk1wVW5JSjBiMEdLU2NZZlZ5cXptMGZLQlphWjFZWWFoVk1vSXk2dWdPc0lGdWZubCtlVC9PenliRktRWHBGT2xtbDZOYVNiWUhvR0NUYUwyelZyVnBUTE5XZTJLMGxackNSSzFCeGJrc0VzejdRYmRRcTNIWGdHRmYyandFbXlNWUd5TWZseXhFKzRVNmJKUlRRVkROSGFSaUIzWHlnbkFhSDMvdFgzWDFGUk5IeGZ6NXFiQTdMdlVieGNhV0cwUWw4VTkxYlA4dGYyQjB0NnFud1pkWDBEZSt0dWZPTWFkSkJMbHRUdis3ckhrNDhaMm5HbFBBdFIvaWpRZFV2SFpiY1BGT2V2UGRiZGVVdFhEcVczSHNsUUxFdEhDNTBjTkdyVVNyZE1JQnJpbDh1VWNpYnBFNjlRMC96S3hPUXJqSWZzNmx4NkQwZ0tYSFB5MldkUFB2MDBmL1FBS0VOZkhxQjN5NFFhK0k4Rk4rZm5hb0xwZTVLaHo3RE5RSllaSUNxS2M2ZW0ydEkxTHJVNnljM1pIRFppbTJXWGE5UXVteVZHcmJQSkREUytvV0Y0TVhVRDRmZ3hyRlB1Y0paTDgzTWtUMFM3VElGcHZvci9PR2ZkaWUzTk53MFVQMngrczZTM3lpY1UzZGJYZTdBeCtaUXV2YVc2Wm0xcDBxbTQxZmR0WGVSdXVMWTk0ZnZPNnUzTGJyN3Nzb1dEeDVhVDRjazNXNjlwVE0xdUgyMGljZUY4UFJGbDBJN1I4bUN3cGlrYm1Fd3M4OEp5Si9SYW9kTUVhN1F3ck5tdElaMGFHSkdQeW9rOFk1dDl2NTBzdzVCdWtPUDBnMk11Y0xsbVp3dzZNQWRKdGNzeFNrNnlteldvbE1WU3loRko2Tkc4MG5SMGVoQUhOTlhNeXd0Y2tPSG41L01YU3NmRy9kMEgyd3ZOR2JkMXJqeTJmbDdKdGgrc0czNzhxZ1Y1bXg2NW9xMnlxSGR4V2xwdDcveUY2K3Y4R2ZYclpPT0grbzZPck1ySldMQmc1TDdPN2tldXFhcSs3cVdydTU1NytmMnJWMzcxYkdienR1cTZvY1h1MUpvTlpSVlhYamFiVWdFempFVDBWUTZNb2pZR0s1Y0hvREJRR2FBaFZIY005Sm1oUncvYmRRZDBwRjhIZTVYb05lTUh4N0lnSzh1WXQ4WUJUUTd3T01DQnBQQU1Pb3hnOU52cG8xbWNkcXVNQ2RVVUNRSVUrM2FXTFp3NWp3ak8vQ0paL25RcktpWGhDck9FZTBDaUJTU05sdmJVRnM1SzBtWGQycm5xMk1DOGhkc2ZYamY4MkJYQnpMNEhyMmpMTGVxdDhmc3F1NG9XYmxxYW1WRS9jRjM1MElxNnNoSm4xc0tGVys3cjZucjQycXJxZmM5dDZmckp2Mys4NDNKWmNXYVRTQVZmelVCRnhSVkloWDljQlBOZmFPY3dHNVNlS0liZW9JWmxnL2dSTmdvYjBXdFl1UlBCeXcxNnM5cGk1UVd6VUNBL2dzS01GYmRNYnBISksyVlFJQU9GREdReWM3Y1p2T1lXTXpFVHBVcXRBRFc0T1lVRlorQzJxZW1wYXpYeHFrR2xqc01nalBBMnBkV3NWcHV0bU1iSkZaaHFuNUlKa3ArWVFJdGlZc2U3MFNGQlhDYmxOWVpVbzlLNVh4a0dHWmpVbUZpVTFjNWFvZDJJSVlkK3doUUY5TEZaemhUZXlhZEF3TXhuOEY2TVRoVzhzUEdWSzBQR29lZmgrVmRyTitndFJxMWNrR2wwWnYxNktBdU5DeHNuaDlDWjUvcG54ZHY4NmJtZTBMdm82cmdqaUw4ZjhiZHdUaTZEdXl5WXhXVVlYUWt5bDgrUkFKelA2Q01KdmdTZkpzdWE0ZVkwRGczUmNGYi9oblFZU3orZVR0TFRrNTErN1dsKzFxUEpmbzA2bkppMWJ6eERuUjlHaTFIczhHSTdlOGdEZmNxWG5XYzY3S1R2cktVMWQxaHdVMUt3U2FvNitmejViZlB0d2MzMzlZUnk0TWN2dmhpVFdUYjVQOC9NYmx2azlTNVlGdmdjb2haM3o0OUxXTEJ1eVRtT3JEUVdWRFZudEZ4Wjd4RTJqbzZsVkN3b3pOQzdpckt5Q3UzS3M2OGxaQVk5M3BJTWRrZEUyN25mQ1ZlaUFMaTRMY0h5Nm1USVQ0TDhPS2pTUVlVU2xpbWdTZ0ZOUExTZ2IzZFpyWnhyekhYYzliQ0x6M1lCNXpLNkhDN2U1ZkxZWEVscVFOSGdYRllzemhpYkFabjVxTk1tMDBpSUk2N1VIWVN0V2Z1Rng1RmdLdFZueVpEQ2t4TFIzN3g4NGNyNDFxdnU2UnA5OVVCNTB5MnZiZSs4ZlZOdDdBL0xmN0Y4WHh0bXRqdnJkbjdQQVFPdDEzZmxOUjE3YjNULzJ6Y3V6bXJkWHUxOGE4NjY3M1FNM2RjLys4QU9sR1RLeVgzSVNTVks4cHhnY29FV1N1V3drSURnTWhvY0JtSXd4Rmpkbk5LQi9scnRWNnF0Zmc0NWQ0a2pxbWFuZ3gzZWN1WlBzZWNJbk1DRXdSbjZOUFRyVUhEODg3NmJMdmZuZE43Y2NVYllHUG9zOUt2UVI2RVB2aHZvdWFOLy9aSExVeW0xS1NRcENJbUdXeHowS3BVYVFRaHFJRnNEbk1hSU1zUnJOS0NUcTl3Y09EQzhWUGhWS3BENUNSVWp0UjhpWW5RbUxFT1VsQUVrTFhwQXpFUHBLem5adjVCeWRwaGZqK25FNk9SVzhvYXc4WGpvcGVPaHU2WFYrZWR4ZFJYbWZlakU2QXRHQlEyUnVlbGRRa1JCL0lJZ0I3K1NIc1NWaHkyd3RGaUFCckQwN0JwYkFvV1NmMzd5RUVtYy9HaWM5L052aEY0NEhsTGl2S0kwblVacGNxSTBWZTZKQTNjY2pNYUN4N3pIVFBZYW9Vc0hTM1ZRb0s1UWswb0I1Z293REpDVUZKMm9keGtNVGplWDZFZ01KaDVQRkJLajNaaUJLUFFHdTkvcFRERFpVSkg4SnhOc2hNdWNmb0RqekZRUWNGNkc3Wlk3dzhMa01Dczh6b2dvNWVjNmM1M0M2VitIUGh2OThIaHJ3KzIvSElOYm1yOWZFdnBMMTIzZGdZS2VXMWFNSHczZFM3UkhIMXg2Mjl1N3JuM25XRXZvWDEydkZtMzg3b3FlTzljWGRvMkhLU2kwTXY1bEJhTTBiaFVoTXAyU2Q4dVVma0lFTlZxeFdTZEJvRGFzZUNLS0VVOWsxSVI0R056SmdsdW5LU0MwbnA0OE9UNU9hazhUOWVRWEtDdUY4SUk0T3pUZzdEd1hIMVR4S0Fhdm94anc3S0E2NVFjd1FhVHZGSUNHOFhGRzc5Unp2eU1mWVMySzh3VzFCWEtJY2h1TkZwVkxHWVU3UGFaVWFaZ1NvbHNvRnZOM0tzZkFvZ1ZQYm42MEZCU1JqN0xhZGk2OS82RUgrUHZubEthb3hxR3Y1L0R5MUg5N3lQeWY3bUJURnZrcWpQZHVodmUyNEJ5RkJqUnFIa0ZEdzJmaE9EUjlhaDd0T2NlcGxTcVZXODFiMUR6R01tb0hUYlVwZFRpWlEwWmtQREQ2UEJvMjhzVVRwc0lwNFdMcEFIMTZHY2Irc1psUmhaaEM2aWVFaVZGWnJGSEtEUUJ6SmxDRTB3Tmg5NWxROTRuVHAwbjZuMExSSk9HVzBIWTA0aStUMlNHN0pPZFUzMlZjYXRBa3JpNVRDSkphOFF3SVNaOG9TZW42VElPUU5meStTY000eVJjMm5zMFU1NUZsNGp4VzdzNWcyeEVMYkxWQXF3VXFMV0NKaW5JTHZFWGdvNFJSemEwYXNsa0RhelRRcklGRlNCcWRUdlNMT3RsK0dXeEY1MmlvTUpCaEpCOFJqQWFab09DdGJrSmk1QW8zdlJ1THFIZ0x2WVY2Rm5vL1VFcmVMekFoSG5SbjhTMjlGQjAveGtqQzFCN1pqSTFzaTJFM1p0QXBWRGtoR3RPR1BIb2hteXp6aER6MDRJSFFDZUVFb0hSWUVwUkVZNCtCdURQOEFUUVN4ODUySXRXaVo2OTJKSzJaUno2UStOekkrTHcrbU4rRVNxaUE1UUNWQUVwNmJRWnlYS213S0RIeDA3aU5LbENwZENUTTNZTUUxcEx0aEJBRlBRa1UxTzVVUXFkeUNDMnFxQTQ1N2Uzc0s0d1dxdTZvVVhUY1lmQVo2QUZBUnlFMFBqMzVRK0hoZnlWVndrbCsrZGw3a1J2MzhzdFp6UDA3NFMyMExtYk95NjBNRnUveHdCNEg3TGZCdm1pWUUxVVZSYXExTUVjTEM1U1FwNFI4QlpRU3lDVWdjM0Z4eGpoSEhCOFhoMGxSRWoxdFpsTnI3TFp2T1cwbWVxV0x6cDFoZEQwdHJpWkhkL3owMXFWTGIzbHp4NjYzYnE1dlBQTG1sYTBIVitXUy9JNzlqVTNYZFJmbWRsd243R3k2L1dlN2R2N3NhT095MjE4ZnVmNFhSeHZPQ3ZNR2puZDEzelV3TjIvZy9xRzJJd1B6SmUva1JKcnJ1VGh1UWRDN3hiclhTcmFaOXB1STNNV1pqUmhMbWZVSldvT2IwenYwUkcvd2F6UTZkVnpFUlozbkRoZ0dabWNZY0RRM1puWWFWWFJVRXlNUHJwK2RzL2Jlb2RDdng4ZlA3dC92cmVncCtWTFltSTU1VGZXdXpqbWhabExWdnJhd3ltOWlsTDViK0JJcG5ZQngvY2ZCbzNzQ3NEc0g5bVhBUGgva3hpK0tKL2x4NVhGa3JyWGFTcW90VUdpQlVoN3llU2hqQkhkeURnYzlWdTNKMG1vMFhRWm9RWklMR1B6TFhHc3c0V21sQjdUWnU1TjRqeWN2eTVVVUF6RjdYRENDWFRhbnY4TGVhaWQyaDgwV3BmRnJ0WHNOMEd2WWFpRHRCcWcyd0J3RHBPSlVzNVNnVWFJY0szRkloSWtZRG9xSHVkbjV1OGtQQ2xHdEMwVnhZd2Rmc0p6SmFVY0J6TWtNaUtjZDZHTU1MbWEzWENIZVN1eWR5aXJNT2ZuMExBNjlJdlFpN3JmVTVYVGw1RmJ1bVZkOC9aS3dGQ3l0cUs3MVZtejNkZkVYaWNMZWQrb2NtYWFkTWFWWkR1ZVVTQ1JtR0haSEZTU3ZmKzBTY3ZFaXlrVU1abGV0d1hSTE5IMXloTXZJTGo1dzBVdDVIVGJlWmxNbnh5cmRvckcxV2l5eGZvVkM1ZkJybUNOU01VZkVQS1lZZm9YRkpJZGF2Y0lvS1ZMTzRGT1kxWkFJWUkyT0FhZDR1c29wdlBpcnQ5enppNnV5N3hvbnRzN2pHK2I5NFA3dGF5Y3ZoN243eHJidkN6ME0rWG5sZmxQSUtHeDBWSTYwWG50bnRKQjlGR3FiTyt2WXRhOVZxSzF4S0VOenVTZURRNXNMWWJnQXRtWHV6eVJiWisyYlJiYTRZWjhMZGpxZ3l3R05EdGlUQkZ2allVc2NkQnVoeVFnSENPaVVVUzd2WEJmSDlhZkJaV21ReG5tTjNqRXY3L1ZtejA5MDJXeEtGNWZ0eUNiWmM5bGxHUnluNDNWNXlUWXUwWmhJRWhQVGt0TmllRnNlRFVPVGJUSGhNRlRrdTNpeEZsYW1IVVJvTHhUbDVzejVwM2xGdWZCRW90RVlLVXhId2ZEbTB4TWxZaERvemVBam9TdGZyTnAzZGNHS01xK3RiTnVLeTQ4UFl4NTliK2ZWeis0c0ZVNEtCY3MzTHdqMlZQa1M2ZzROZHQvUTVwKzM0WTZPenZ1MmxBbDhVa2UvTlhXdTI1bmpjNWt0V2JYRHJWVlhMTXNwNkxxK1dWdmNYbVNQejFxWTZwMlRsUnBqblZmWE1iOTBFSFBVMXFzYnBMZjU4Wit5REMweHFGS0FHMzJzNEpmVGVJSFFlSUZtbTY5T3ZzTEN0aFQ2MG5iKzA5RDIwNkVkL05QOEcyY3orVGVPMHprT0k1ZHFjWTRrYm5rd2IxbDhienhwc2E2eGtnTnF3SlJOUERjd0tvTmhHZXdXWUxNQVNXNkp4azZqWkpIc1J1cFFZMjBLUnVmQUphMHB4aHdDa2swUWo4WUlVdUFoMUtxY1JYM0hCcmJmdTdZZ2puOUNabllYdHkxWXM3WEk5Q1I4bURzNDBGR2RsdFBRTzlEbkp6ZE1idkEzVnBka3htY3Z2N0tHakNIVVN0U05sUWkxQWVQTXVTMEF6WmlCYUhSeWdTZHlJcmg1WXVFSnp4T2RnUU1kb09rRUN3ZjFWSEZnSjhBbWdFNEFJQWFCNDVtZUVERmd3Nnh5UGp0WnhoTExxY1A1TENLWnZsbklqa0hRcDR3R01ITVRQYTJ3TXBUOW85RDhGeUZYcVZVclpVUnBNVUNwc1BIclEraThmbVJOZGpvdEthVWVmZzZsdUozajVITVJkamZrQlU5NWpXRFU2N1JHcmQ2dDAxcDAyaHQxb05OcDkybWhSd3RlTFdnMTR6SGdpNEg0R05ERXdNMHFvR2NxU0V5Y1NoT2pVYm5qWWl4eE1hcTQyMW5vVWFHQldScUl4UUFrcmlvTzR1SlRFTzBVY0RQa09SQnNjRlFBbndDMmVJSFlrRWJ4Tmt1OFRZZy94cWl5aHRMamVRS25DZHhFWUEyQlpRVHlDZmdJa0RYeEkvR2o4WHhlZkhNOGlYZkg2M1ZjSEkxV05BUzA0Vng5UWlSZHhBUWpBVVVhaWpGTDVMUUlUZFl4bkp0R1Z6cHlXalF6ZmFRNHpVWE1BQ1E5ZTBHcng1dENMeVNtU1Q2TmRvcDRlZ2VWeEEyemZHN29oUWRDWHhyMVBJWm8rdERaSDRaZWYrTDdsaGc1QW0zUXl6NTY1eVZ0dEVrTmd0eHNQRVY1eFBma0Zwb01sWmxuajJNNEZHalk1VEhOTFo1akpKOVBydlF0YTFnUWxiVzVoTEJyWWFuVWRiSjQ4TlpnZzlXaTVMUW1sWm5UUmhsVlpwV0IxdFFxc3dZVUZybEZxUUVaL1RJckxVcTN5bXhScWN3eEdEWmFkSHBPeXhGZTBHaEJnK0d6MW9LYlhJeEdvN0tZdFN3S1ZBS25tcUlyWkxMOExuemdZMkxDU0Y4OENvd2tMSHlpdHp2Ukw5cHNNREJ6N21IdnJrMEJrVERzMWFCQzU0ZnZweGNhVkxOQzc3NEpiNFZXLyt5M0ZydEdPUXZVTDRSYUlYTmVvOFZZSExxQ05KTEUwR2xiUnBTdUdGb25QNTZPcjU2YkY3VEwzVEpCTFlEZTdlQWVSb3NMMG5GK0pDUFA2NW5SNGRteFlIcS9JRDNJMVU1TnEvRjlldFVVUGFndmdZUE1FVHBEM3ZGUS9ydWZKMmFaZEg3UFYwanpEYUVrK0NVWkN4MzIxNlFrbGhmQU9ycDZFbHEzWCtMcUptNUowR1ZVQ0lJQS95NkFEdGQwYTNRV0RJTk1KbmErMHF6RW9GYkFiSm5tUERwaTlOUERoMmR5Y3VpL1JFQzA3dUZ3YzZNcGtFT2ovVnpBY0k1ZG9LOG5DaWYveTdORnBEWGU0NCthM01EM1R0NXE4Ym5ONUkvM2tydnRxUmxSeDQ5UDFrYW4reXpuenRGeklOQXRlNGQ0ZElleEp1ZCtmbGNkRjAzZnFpVW9DRjhDSUR6QnA2Rlo5b00vRjBjbm4vc0QyVXYrQ0FwZEFUU2QyOE9wSHNXQmFDWnpjK254dHJVNHczdms5N3lDK3ozSFRhWndpcE1jaFp6MTBVUE1lMW5mSDhKOXRuQmZCdVo4QjhudmNkWWlhRCszaTgxcWlNd2F3TjRkckxjRVdxUmVhNlEzZzd4TURzcGVFZmNscTFtdm1ZL3NpNzA3V0MvdUsvV2FJcjNKMkx1WDlTSTJVcTlhN0dXZlBLa2M0YjZlS2xBS3gxbjVsRVNSUWxMSXJ4V1Vzc1Zpa2UrbVJmRm5aY2Iwb3JwSi9UODBZOXBlN1Y5MHcvcFJRNG5oejhZN1RaOUdWVmpNV1A1a2ZUVDY2OWhOOGUzeFh5YzhiZnZLZnAvakt1Zkx5V1BUaTJ2SS9hQlg1VnVRdW5OV3MvOWYwaDVKZnpIakIxbExzdTBCOVd4bmJrM2VtdnpOQmJGekJ1Yld6S3ViZnpUNGVNa2ZGKzRxdmZXZnBJeUxaWkZ0MFphL3F6d1hLUi8vdGFVc3QreXhtZkozbCtkbnlrejVKeTN2LzBQS1gyYktUUG52VjhwTjVmN3lSVE5scHN5VW1USlRac3BNbVNrelphYk1sSmt5VS82YVVsRS9yZHc1VS81YmxmdG55a3o1cHk2ZlRwWEtJQ3UzL1ozbGQxVXhWZmVJcFRxZGxaUFY0OVhQVjc4a2xUZFplYmZtaXNXYXhRMkxYNnVOcmwxUSs5MjZ4cm9mMVgxV24xbmZYZi9wRXQyU2pVcytieGhwK0Y3RHp4ditjK25xcFc4MWxqY2ViSHlwOFd4VGY5UHRUYWVhZnQxYzNOelIvRjZMditXV2xsKzAzcldNTEh0MDJWdkxzNVpmZjluYXl6NXFTMjdyLzM5UWR2NS9YRzVvTzk1MlFpcFBzZkp5Mjd0dG43WDk3NWt5VTJiS1RKa3BNK1VmVVRpT20wT2U1dWg5WnZSbXUzaDJCUTJ0QTZkbVd6eTdCMDlQamtsMW5pc2xWMGwxWWRvWUdSZExucFBxY2h6L2M2bXU0RG9qWTVSY0Z2bENxcXU0L1RLNVZOZnBCZGxZK0Zsam9EUGZKTldCazFudWxPcUVVMWgrS2RWNUx0bnlVNmt1VEJzajQ3U1d6Nlc2bkZOWXc4OHZVM0Raa1RGS0x0Wjh1MVJYY1l2WUUwYnBSNmNnMWhwNmg3akEwMWVPMm1wWlhZWjFvKzF5VnBlejl2V3NybUR0MjFoZHllcjdXVjJGZ05ySnI2VzZTRU94THRKUXJJczBGT3ZDdERFaURjVzZTRU94cnVCVzI0NUtkWkdHWWwya29Walg2UzIyczZ5dW5nYS9oc0xtTjdLNmRscTdudGI5RGxZM1V0ajhXYXh1eG5xVXY0alZMZFBHV3htT1lqMTZXbnNjMjdlZTFSUFlXdUtjaWRQR0pFMnJ1OWg0a1o2eldMMmYxZE5abmRGVE9RMSs1YlMxdE5QYXRXRmM3dWNjWEE2WHhXVnorVmhyNUhxNEx2eGR6QTF3Ni9GL2lOdktiV0F0QzNGckU5YnA5eXBzNzJVak1yQ25oT3ZINHVBYXNHME43ai9FRGJLdEx2enR3dEdiOGJ1VGpkUmhxY0N0MWRqYXhZMWdTeDJiZlQydUcxNm5CbWZmaW5NUDR6d09uSGNBNSt6bE9yRGVnZlVOMkxjcHNvNGpBbjBXRjhDYUo3S1Z6NlV4R0ZiaERCdHdyQVBYWFlYcjBEazZ1TFhTMkNyYzZzRlcyanVNTUE1R2NLSjA2R1Y0OUg4alBOMk1GZzV1QVc2dnhoN2F1b3BSNG53Y3hYa0dKRXdkYkpWaDdPMWcrTkt0YnB4N0JQZmR4RnFHY1ZRbm81d0QyOFA4cUVTWUtIVjYyWDdyR1czbnN2MjcySWd1YmgydVNTbmR5YjRkRWtUaHNRN1dQb2d0bEg0YkloeWN3b1AyRHlFVXZiam5JRktoaEkwVU1RcGpzWXJCUkNXZ2s2MUlZVjdMc092K202VG53cEZ6emx1Vnl0QWFwRWMvVzhmQitYQjhMOE5nSUVLM1ZLNlowV293Z2s4K3prdGxZR3FteFFqWmY2MmNxOW4vakt6L3M4ajZ4WEl3eGFWU0pna2pPSFk5MG9QeXNSdExyNFJUT3FQOUFNTFR5MWFvWlQwOTJFS3BPY2g0VTg4a2FSUHI2V1U2dEJTL3AzQ25OTXZtQ3JrQzVPakZFazd4SGtaWU5qQXNSWHk3R2J4RGpIL0xHSTBkVEJ1M01wcUtOQmlLOERVOG1yWU5NT21pMUtjd2RUSDRPdG00RFJMLzA1aWVyMmZyYkdCUWkvdDJTTE4wU2R1cjJOd2JHQWJyY05RUTY2TjdyV1p3aFBsNUlXK0dwRDFFU2RsMFVVdDNCSWUweVBhVWJGeE1uUTFzdXhQMzZjRHRORWxPcUQ2SzY2WkYxcmtRQTVGakk0eE9IVXh6TGtXekVRblRYcVpUL1V4N3dwcCtJZTNwUHYyczVzUHhxZWZKNnFWbkYySDRXMms3WFJQQzhybUp5WDVZM3NLeWZ5a013cXRmRE5mY2FUSkFNUkZ4R1dMcmhXM2pKcVk5VzVuODBDY3ZyMmNXWTlVM1lpckszcXJ6cEVyVS9BSHBXOFJLckZNYnRFR3lSQlRhTURmRDg5Q1IxTjU5bTR5S1ZudTl4Sm1wMmNNYTBpdFJlUk96amIxTWg0Y2szdEpZSmV3bHVwazI5ek1zdzFRK1g2clRHR2RXc1hxbkpBY1hXN1FMTmNISExEdkZjdzZYaWFXTFdXUzZ4bHBtdDdvWVYxZGhHNlhRR2h3UjdzdVU1bHh4Z1pWTWxiUjN5bG9NUmlnV2h1Yi94Zy85bFhiZllidGdqcHJ3SEk3RWlEVDNZWnZJcDdEVWRER2YyUy81aXlucC9qWmZGcGJLYi9abmxIUDFFYzBabkJZWmlQd1dwYUJMV21zTmsrWDFFdC9UR002YkpEOGoyaDVxR1ZZeCtvdDhEc3V4S0ZjYkpBc3Vya0Q5Z09oWDFrY2taUlUzNWM4dnRHZi9BRjVFS0xTSzRUNGcrWnl3L2Voa0xjTklHMUZIcG1JY0IvTnEvWkxNK01Jd2ZqTnZPZXJIenZQb3lPM1VhVFRxWkY2bS96dzdjekdPM3pJZnM3NjliTC93NkV0YnQ3UUxyRnVZOWhmdVRha20ydFBwZUlmaG1vcTJwclJteWhPRmVaakc3UDBBVzZVN3N0MDFUVUtvM1JJNU5JaXpUWGxZRWVyVkRKWXV5Vk1OUjNnNTNaYUlQTXlVT0Q3SXRLUS9Ba05ZcjgrWHBiK2VxdE05dklqbGRFOXp2a3hQVVdLRTBYSGQzOGpIc0RlZzBlQjZpVEpkMHlEb1pOOTB6U202OU9HSWptbStZK2hiN0xGbytUc1pCbUdQTitjOEs3NEtaeHhnRnVmUzhiVVkvNFc5ekJSOXdwNXNpa2JUYmNyNWV3MHlXeUh5YXJXRTk2Vjk3cXB2NE9pbUNQYURURXJYczlsRkxSSTk3M1NQL3JkS1FOaS9WWENMV0c4ZFY0WmJMZWd0RzFoTEpiYlJ1TFVCZTVweHF4UmJTN0hGaXlPV1N2MWV4cWtXNW9jcWNGd1Q4M0hpSEEzNFhZdmJ5NWlOSytNY2JKdHVWZVA0V3B5TDdydUlhMlZyTE1MWmxyS1JEV3p1eGRoYWc3K0xwSEYwajRYWTBvVGJ0RjdPcktDNFhpM3VKV1lMbFpKUEZDRnR4SFpIQk1Qem9hcGtLNFloVzR4YkRUaC9oZFJiZ25OWHN2a28vSFQ5TWxhdmpjQlpKa0Zhd21oRVo2WnpMa1NJYXRnV2JXM0MzM29jdDVTdFg4SndGcUd0WlRpVVliK0l5eUlHQVYwNVE4SlZIRWZwMHl6MVVCNVIrR3F3VEdGVndtaFF3YUNab3Q5Qy9LMUh5T244NWRqYnlEeEVIZTVaeWpCZHlxaTNTS0laeGJhR2JVMWhKWEpxSWNPR1VwWFNvQlRyaS9HL1BFSzdCdll0d3RJd2JiYnphZGZDK3FkR2lmaVZTTjhMR2VYcTJKYklqWVZzcTVIeGl2YW1TYnhzWUhoY3VHb0xrOFJGYkZRSnczaHBSRUxLbVBTSzBJZWxVMXlqYmhvazRucVV0OU5oQ1V1MTQxdDBSSndsM044a2Nmci90SFB0OFV6di85OXM3cGZVa0VRK0lwZk1mT1lTS2pTTUxaZXhMU3BKczMydzJLWnRydDJZVWlycElrSVhLcWxVQ0VlbmtvU1RTL2Q3cDFQU1hWRzZuZTc1dlQ4YjB2bDJ6dmY4L2ppUDgvczlIbG5iWisvYjYvWit2WjZ2ei92OS9yVC90QXRxZGJMTUpxaGN6Q0hPZjBhWnVCZXloMG5PRUNzR2dRS0VBcUVrSlI2QnZJU2llS0dJTGVFSkJVU0lIQmNITVhqUk1SSXh4RURFaUNnUjRSSWhMUzBxRWlsQ2tpQjZQQ0pnb1dQODJTbkNCQWtVSjR6bWNTQ09NRDVGaEk2QlVQS3dBMlNCWHB3SkVJTWRGeDhEVWRrQ2pwQVRDMnFuQzJNRUVEV0JLMFk1c1dKNFlpaHVPSjBvb1FqeTVFWEc4VGpzT0dpQUkrZ2pCRXdoc1RCQnhFSEFKVXFTeEJZaFVJS0FpNGdnQ2FvSGpRWDU4emlJUUl4TWdjUUlBaUg4U0lUTFJiaFFuTHdXNGlKaWpvZ1hqeW9vNDhGRkpHeGVuSmhJRnZFQUk4Q0JEVWxFYkM3Q1o0dGlJV0hVbjF0bnNIS3lmQ1FEaVU2SVk0c2dxd0FlUnlSRVJiTU9RVVJpbEkwekVZWmxuUUpZUTVSa2h2TVdzWk40Z21pSUhoVUZwSU5zSVlZd2tpZUFBbm1jR0dFY1cweUFndGdTRVkvRFkwTk10a3hITVVSeWRiRWY0Z0NKRStMajQzaEF1eWloUUVLRVpna1RJRDQ3QlVvQWVrcFFpNkxWa0VRSWNVUUlXNElRSUM1UEhBK3NUSURZQWk0VUwrS0JWZzdvZ29Bcld3ekZJeUkrVHlJQjVDSlRaTlljdEprRU5BRFRpd2EvUktFY0NPaFZadk1oY2VKRlFtNENSMEtBVUY4Qll3bm9tRUVHUUxHa0dLRFpNTW1TQUZPZWdCT1h3RVVkYTFCNm9TQXVCYkxpV2N2bmJsaDNRT0d2cEpWUE5XcFBFU0pHN1laTzAxY0c2UEFoV2xOa0ZyRGlBUzRTaEkvT3FZZ0h1SEtGU1lJNEladjdyZlhZY2xNQkZ3UHFDQUVyOEprZ2lRZXV5a1ZRTmRFK01VaGMvTGNXQmVFalNCbm9qazRJSUFqc0U4T0w1QUdaaVZwYXFHTkZDZVBpaERJWEdEQTFBWXBraTRHc1FzR1FPdzlPZ2xXTVJCSS8yYzRPRVJDVGVMRzhlSVRMWXhPRm9tZzd0R1FIZWtZTU9MNDFtRjZaVzRoUndWQXkzNC9VNzBYWXhZRWUvbWlQUzZpWjV3dUJUcWhwa0VRa0RrU2Z6TnpmeGpKcXltK2lXVXNyQ0owY3NjejdnZDdBQkFnWUZTMWlBOHR3Q1ZDVUNFUW04QjVPREZzVURYUkdiUXhzQldZVURJZUVrU0FpQmFoUjJESTBHZlN6djY4RktoQmJMQmFDeUVIOWd5dmtKUERCakxEbFFjK0xBNWF4UWlsK295M0VISUNUUzlZeWliZ0lpZ2Z5ZWZodVB5aUpKNGxCcTRlNUcySEEzVkRwQjV2amVNQlA1YnhSV2lJNW9BSU9zaUJDTlNSQWZDR1hGNFZlRVpsQjRoT0FRdUlZV2NBQzBwRUphUENLMGNvQkx3RWEyZ0hGeFFoQWFFQUJuZXNCSzMxWFZIbkFBNWJ5b0Jtd3RFeUlwQmdoL3k5MFJNTWdRU1FBd2lBeUFsd2hnRjJaTFBNUmptVFF3Yjc2TVhCK0xrOFdlSlBsTHM2T0ZDWWl3N0lDd0Q4MFpHVHlvRUVXLzlWVEJwckVNV3lnVlNUeVRlU3loeWtxUXRtTEpjQ1pVT0FGd1NzUDlMOHlBQnB2VkFyRXBQdXdRc2tNQ2tSalFrRU1lZ2pObStJTldaS1pvR3hKZ0VKcExDcDlCZ3NDUFJqa1FOWXNpTzREa1FOblFYNjBRRzhDUkprWnhLQXdtUkNkQWRFQ2d2eHBGRkJIQy9UeW4rRk5DL1NGUE1HNFFEcElQalFRaVlBb2l3NmhEQWRJMFNoTWxGZ0FoZUZGQlVXeUo4MmZ4cHBGZ0h4b3JFQ1VwZzhnU29hQ3lBd1d6V3VHUDVrQkJjMWdCTkdaRk1EZUc1QU5wQVg2TUFBWFNnQWxrRVVFWEVFZFJBa0JCWWhKSmZ2N3kxaVJad0RwR1RMNXZPaEJzeGcwWHlvTG90TDl2U21nMHBNQ0pDTjcrbFBrcklCU1h2NWtXZ0FCOGlZSGtIMHBzbEYwUUlVaDZ6WWdYU2lWSXFzQy9NamdueGVMUmc5RTFmQ2lCN0lZb0VnQVdqSllRME5EYVV3S0FTSXphRXpVSUQ0TU9pQ1BtaE9Nb011SWdIR0JGRGtWMU5UUU56TUN1cURsR1V6S1YxbThLV1IvUUl1SkRoN2VtUWp1YTRTeU5SSzZYaEhJMWlLUkNpa1lMYkRpbUEvSzNiTFYwbUE3YzJCOXc1V3RTYmpZUW13VnRoN2JBTjQvWTQ5ZzkzOXpFdlJQblQ3OTJHdi9zZGYrWTYvOTM5OXJsNStYL3Rodi8vKzUzeTZmdlI5NzdqLzIzSC9zdWYvWWMvOGptdi9ZZC85MjMzM1FPai8yM24vc3ZmL1llLzgvdHZjK2JBWExsdVdJd1hLWGJFV0xmTFBDUmI1Wnc4cFdzYmh4T0JMT0QrZUxjd09mcnFBM0d5QWZlcDh1eDZzWVRDV21CS3NndzA5MGZTdVNQUVdHMGhoNGZseEJvZDlTSVUvaCszK1lnYXNWK2pRM04wNFFQZkJkWHl6LzdnN2U0OGtpdm9BQWVhV0k0Z2lRcndpSkpVRCtiSW1BTEdKSEVxRC9iRU4zNXVROVpQUXhNaDdnYmJ3VlhIWGw3SXczd1ZMajljcHFFek9wbVcrMU1DcUt4VkpqS2FoYW9vakJrRFJnTldVbEcyMnNvcUdTQXN4V1ZyZFJ4dUF3VW1kRkRLNllDUWZEaEdFMVJqdkdwUmtwVEpXOTZES2dGY3FNaUNabWQvUUZtdzRqaHRPOXRnNXZvRFBLSVBya0pVeDVTK1dObWpsRmVYdUxwUVpNV0lwcmhLWFl2Y1ZZUll5aUl0NEJpSGl5V0szRk9iSDc5ek15Z1UvQ1drUFNZcFNBWEVreU1iRXpjTXA0eFJsTUVoNGVpUlpVOGVxaGJIRU1UeEF0RVFwSU9yQTJXcW1DVjJFZ1hMNVF3Q1dOZzQzUUduVzgzdGV0OUdFbkRTUlQyQVJ0eCtJTnZyYXplSHpFbGlsaDgrT2hJQzh5UEc2MEZta1M3QW83azV5ZFhKeElzMEhSWlZnUlRxLzZSeVRUaE5YUmRnMDhsa3ozSWxuQTV2S1NNU3VHalc2eXNwaE1pTUlNbk96bDRBbmJ3ajZUeUxhT0pQQTNBVGFUNjJQMFhYMlk4c01EV0lvWlA5eStHQ1VGckJRelFnSFVxeXRLTVJpRkxaMXU3dlBvZVJwcGMzL3ZXeVg4NGpXcWlCeGNXN0NHSkRiV05MenFjUGVzNjVFekNzc2FzZjVPcjdhNDdEMkZuK0xVS20xRXB0ZzhiNDF1WGJQMDhPbTZYVXMyZkdKV1BsdHdPbVBHNVRxaTl1dmxhWjQ2QmNnRmdzTHlENzYrUWUrY2xMZVpqdW5heGhMUS9PMTdqcXh0TnAxczJpK1JMSFozTFVWK0diK2lxU2JGUjJYdEkxcnQvWkd0SDhzL0J4TmZtMjVYMDkvRlhYU0UreWlxaTNEdDBZNE8vWGVtenhXWVY3ejhOaTVyS2l6MkxyTm9LNXEvV0NmR2YxYjl4d1VIN2o4OXg5VlpNR2RLVjNhOVd1WU5pbmRyeDVyVzNmYzhWaGRpaUI1UmpmMmVPeFJxRHFnV05VWTNIL3UwUS85ZXdaY2tiTVNHcWRiQnYzWmwreFd6SnJKNUhqbzBSU3lJb3AxU2pCcXdpQkpzREV4cXJJM1R4K25lRzVkeS9WUHJQTUxJTVp0SDhVc3FCZGxudCs2WGVaQ3hHYzRBMWsvVE5YTjhkNFBoRTYvZU8rMWo0c2RxbThvbXArb1JNQXZ0WUlJTGdQMWdXckZ2TVNYVGErQzhnU09LSS9JSDU0bklFZkx0NG1ONWFLM2R3SEdQMkc1b0d0RlpsRTBpOEVraTZBTFBWRllGWWFta3BJTEI0UHpoNlRCMXNBd3JaazRkWUpDVWxQUTlCb2pvTHloTFlEd3E3d1FjNm9FREpMR3Fmd2hITE9vbFZvNnMyTW9SWC9nM2owRkY3VHRIMjNUNHRYcG9UVHhiYXg5N2RPdnI5cll2aFl0MWVwMWNabC9iV3hWeCtFM050b2tGZFlkbkhqeDc4eHl1dEtDU1dtT3RXdmhaV2JXbTRkYXAxeUVSdjUzL2piVjdLWjR4MmVyRGZzdXA0VSs4RVFleGVtdC93b1BYdm8rMVE2ZG1SeWN1WFQvL29QTzZSSjZ4SysxQWkvV1Z1bGxqdzdxaTE4NHB2VnBoT0x0ZzlGeHNMTTZ0UGt1aTF6Tm13cUdQWWhxanNSUEJSeFZqaXo1Vjcrazd2cU1sKzBaWDh3amVyeGx6SEIrRlBQbjRqQzdtcFgzMmFVc3QvMko1aGUybHVkRXdQVnlkNU5hdWNxdTNlSlQ3NlVqRlpuTGxaYVE5MkQvNzNva3RJU0l6cjlmN3owbkQ2RUZQc3hrNk85VDU3aHV2YWJyM0dXWEJVbVVNQUxIdVlTRFczSjMxTGpVOXFMdGZCbUxOdzYybUFVQnN5VDhDRlZhd2hUem9UWWEzY3hHSXlZdVdIZmFBaVVYUG8wa3lMSE9HWFVna2V4aThIT1ZZOXJVSVMvNFIrUWJhc1gvUy9sL1JhT1dxdytaTktqbUZhU2w2bnl6bWZSS3RKSHg0dlROL1paNVAzYzZPaUN5N3lRN0VjZXVUUHl6YWF5TEYxS1oyR0I3RHR2czhiU2w0K3hGbi9ISzVldjk0UWNuTGFMY1dTNE1IVmladmNMbGtUcys5STNwcmV2R0ZUcmRkNGxuQ0tUMEhLR293cmZGNERseWcyWkhZOWxhOFNUL3B3dXFqdWFkVWwwTzk0L1k0dlZodzhvNUV3Vy9WeGQvV1A3MmEvQ1g3dzRGNUs5M3Fmelk1R0puZjBMS3NhdDNCcXhVMmwxZ2ZuWDQ5czJERHczSDlQUXRpTzVhcUprcnU2QVJUTDc5UWFLWDY3MVJ4ZWpCTDYvT2lMYTBQWjk5Yi91WnE0UWlUdGJ2dkx4dmRlTFY5dXpIbTFHZHFHWDZEUTc0cDFmN2RTZk1kQ29lT005c3pCTlpoNmM5ZEJHbXZqdmJnTlo0T29sRWFzTWdpT2R4TVFPRm1LQy83cTJLR0loVTdESzQ2cmtZdU96ZlA5VWwvOU1rNUYxdVBsdGMxNFRmRERMUjVKQTVnMFM1Zm1FTFNnalhrbVFVWFFBOWlrQnhoZTdTb2hMZXhkNEJoa3IwTnh3VjJqSFJDMkxhT3JwR090bzcyRGk2MkxnNlQ3RzI1SVBsRnNlM3RuUnlqT045QUlGWEFmUkNrZEVtNmI3U3o4L2hhL3A3MkJNVk5mdzZCMzBVb1lieFlob0xBWFlBZkF5OEdEb3o2YndUNllRczcyOEl1TWdoa0Q0UEFHVEM0VnhrR2daVC95bUFRQmYrQ2hRVFdSQVhIWXpEOU9FVlk0US9oakpVcVloU1U5VTF1aHA0TWFqV2o3d2hPdnRiNzd2T1oraXNuWHJ3Zkc5TExiT1g1S2wxcDd1aTUrNmtnYkZQRVNCZXJFMG9VL0ozQ2xKWEhvc3B2SG4ycU9NT3N6czBzbWN3LytPNkZ3dXpjZ2xWR3A5VTJuUzgwOG9iM2x1cWZPdUliOXNiR2NmWDJuSm5PVFlGR0ZlUGJkYzVjbCtyc2RlbzdPTDQxeDN4Myt1cE9TNlA3VWNaWjdzVCtVR3hBb3lDajJQNXBUYlZkVUVpNGNwWGVtbFpqVHAxWTg5N1ZWSXNSRS9Nb1pmWVo3bm51b2JRa3M2d3ZWVHFuVmoxUTFRdHVzWmxOQ25PZG43ZG4xOHJZUEN2aGkrYURUK29wbzA5SEJxYlhzZ3g5MTI0dTVaOFFXUDd5enRLa3RSZmFxMUgxNHF4R1llN2QrVnQ1R1NXVHJ2R2hMOHV2OURjZHpwK2s5c1ZOdDNHejd0NFRtYWVmU3h2TFo1aDdHZFJTbHlkbm5uOS9jYXZIbUJ1NldZK3l0OGVZcjR5WnN2ZFVXcURGSTFWVGY4N25MUnYxQWh4cVErYlJyMDMvMldWdFAvRldWY1F1cjlpMjVITlZSMk56TXVKV2lQWTlLZjI0L1piaFZkZFAzRGErdStxRFJSbFZCNDd0UExMd1hGN0lydFNaSGFOOEl5K2FQdjgwdFptazhkYk9uVnZxTEp3WDVGSG52WTVlckxINitKS1p2NStLWHNHK3VXMXpjK3VhRHFGdjF3bGlibS9WNzVVd3YyYytiVTkzWG1KcnZXcnpseWx2RG9xZGxRK0ZuQnR6K2VpYjNQWVZSaS9UNW1Qb1A0MU5GMWRmQ2h2dk1YbW1RZWZLWjlITnRESzczeWFzZHB0N3ZzZlJlNzN4c2ZXYWlWTDM1ODNYYlV0d2ltdXA3NS9mVWp5SDNRR1NnQXBJQXMvbFNVQ2RyUi9qS01OK296L2V3RWJJNEZSZGJZTkYxc2FYQkM1bWpENFdlQ05wRER6Nm0wcTFJV2NGYm1nangwM3pyN2pKRUFvQmVBTFg1VVh4T0d3SkFwRVRKREZDRVUrU2dvSTc3QXc3d2c0a2V5Y0gyQldBdXoxSlZuU0EwZUsvZHdmOTMvQjllMGxjVmVkTjZvYUppMktKWTdycTc5NXJLUWcyQ3pwdzlwWkJvUG1JWnhmS0x2Z2ZrTURReUtjcVYxaWI5R2k1WXowM0hOdzhCN2I0VlNIMjhjTDZuaXlWRVcrMWNadjdzazZiZERpWXI5ajY4blcwRWVIVHdrY3JqWjg4Q3R4WjBtakdiTS8rUURtbmRuNXV4ZmxLVDl5Tzk3dmpOa1pmcy9yTmgxbVplZjZCbFEvUmNuOG1mUVpEOHo2VzhISCt1bld3WU1XcldmRFdEMHV1NWxjL05zMWY4dTRpL3BWcUhaUFBxS0dzMjA1Vm1PNGJOZExTT21wUC92MUx5dW5UZDd4ZlZqYlNWMWROdW4xWjc0emtMNWhDNHlEVjVRbzZzRTl2M1cwem42UE50cXp0RmVPU3lhU2swMFdkVXpJMmxyQVZhNDIxcWo2OUxUcUVPVHZlajlYL1hxbnBKS1F4aU8vbHdDSmw4SWdoeEZHQ3NlQXlETSsvZTNlSndyZnhDQndPK0Y4bXJLT3NOcEFUOURCb2pRS2N2bG1PemVucjRQVHNORjN0L2RKNTAwSXM4eDlNd0grYTJLWE8zRFRyL3E0U3ppNzJQKzZlVXAyVUEvb2wwNHRMRC9pTFo3NVd3Uk1ST0VpZUZHZ3d5RVBGWHNYa1RJKy9mMTg4MUN3Q0hGRW9seVVFMXJDRVFJVjlZTzloQ2NIbGYzTlBqT3JoSmFmNk4rK0hnYTExOGxjMXpjRjZUN3JWWFhNZzZlYlpsT0FBVEJWUnNpQ01yNGt2UDN0OFljNWg0dVZSTzlid0l3K0hLbllFUXZpZ2dsdXAwKzZHSHEyWVdXalVaWXpKM0g4MCtlWHE4ejFUTU0vdUhzOVJWMnJOcHQ3dFkrcmRvcGR2dVA4b2UvNlZ0TWFIdVMrVjdaWmp1OWRQTkI4Zi8vSDNUL2VUQzRoYWIxWHV4aDh6Q055Nk5sWmR0T2x3aWV1V2FOdVdZTzBua1hNODlEZXZoanp1cWhqYXZ6OU5tcDVJY3JNUmFiUStpWGZyWDY2Tzd6eXB6bDdiZCszdzZLZUJxNWUyT05uTTNkbnc5TmhpRGMrRmw1a2kwMmR3KzlGa1pFNFlaclM2cnZiRlgzVTN2NW42YzlUTWFsdTdSKytYWjU0T0RubThOVDQzYnIrci8rWGZVeHIyR2FSR1dqL2ZVV1R0cUp4a0dObm1ObzV2SXUzVE9FVTRlczZyK3NIN25zVzE5M2J0a1RnZERteFpZRGJLSWxGakttUE5ndGsrWHJySHFxc3JBNkpidDN2MnA2V1lwbTNUZzZNZWU0NmFhOWk2YmJ6cGVhOXVtKzZqcjZtbkNaZXYyNmY1VzB5a21rZk1maEx5ZlBmdGdxM3RrNFgxNlpZUzVaSFBFazBiaXFTTmxxeWZxdWE3WlpVa3Ntc0VKZmpkRGZ0OCswWUpQNit5anp2MHBUTzRkWTFaVzFUOVZ1TVZvN2lLYnJZVnMzSU8zemQ5VUZ2WnpxbEpaaWxkSmhPRDl1ZFdsaWFYVnhmbkpSamUyTEFDbnpEZXpuNlBxcUE0Yk0yRWh1TG55OXBOcno0ZFIyOHJmRWE3OHhhRENMTTBGcmZ5V2g4S25wVGxueVZaOTJ1M2hNMjVIakMyNVBvSHUyMGV4Qm42c1czNG5aOWhxVW9xTEZXS0hFd0YydXN1eXYrbi9oK1hBZWtyL3hFb3RvZGhlVUJhLzUyQS9Mb2lJSUcwNFdJUE83bktrOFlrV1pFRW84Vi9mY1VpVmZ6UDNLR0k1ZzVGa0R0QXpKWDNmUkRwR0JFUFhCZnNrK29FT0I1NStkTk0wKzJlWXlmR2RzOE8ybmRZMmNVUVJ6dXl0RWx6M0MzbjJGOUdYZGZvY3psWm9Gelo2bm9GbzB2eXZKU2xsY0pkc1NSM25ubGN4VGJhbHU2WXVSYzdpNWlIMUFsTkZUZjIyaHhNVmF1NGxqZXJmWjZoVW5kVTRtTjdoc1VvdTBmbHFrSG5xcjNyd3E4M0U3RUo1VEd2T3ZpdkpzOHAwWC90YytTT0MzZS9nT3VVdkx1WU04TDIwclNONys3ZFZ0RzZNaWVsbEdiOVNPdDRNVDdwZUs3Yjg0LzNiR2JybUFTRVdPMUlGZDBaTmJtT052ZDZiNi9YK293YkN3OHR6Qng3dzcxcVRmampMUG95dzVjbGRyUHVyNXRpZTlCaFprdWQreGY3UzlWWXQ2cERGUnRjbGx6Y21rWjRFeGl5M3RScFFwT3JnTHVVZVdUTGlBTmp6SloxdkQ2Q3pjeCtHOUYzbnRHd0puZkZzUk9ta2drUkJsWS9uYmEwY3BtdzJYWDZwSE9McWpZY05ESXIyeHZWd3phWjMyVkYyeHF4OHU2RThFdW1mdTZNNXRwUUQzTnMzNFhVTUxzclp2Zml3MGNFK3lSVnYxUG9PclpmVVJweDg0UmVkZjNZeXpQOEhybVdqT2cyb3gwek9PeTlpSEsvc1VtVWVrZjB5THl6d2FlZzVmbEpvOUNiR2RrOUFUUzRySHh0WjAvWTlvcFB0eXFqN2pibXB5L3N2ZHJyOTRobVhZYTMybDIyT0RydDRhckk1SWhEZHN1dWhXNlowNUJrWmZXaWw5OWtsVVBJbWVaTWIreGE3cDNWck9iZmNyblV5MDZ5NmEzZ1hUSTBrNEFQbjdlcDBKM3VzT3pYeXBXamIyOExmSjFYZWN5bk9HN3p4VHRYVjY0WnlwMjlJSGQyZnlmOWZVMmUzMTJYakJrYW9LdUkweHlucnNDVW5SOTVLWkMvemF2L2taU0hyM2hFdHBNVlNldThmdFpWQ3V4NlVuYUtkTUVzeXhHZUxVOXU2QVlxdlRpZzJDK1Q5ci9hOUFGeEM2SVdCT3ZRb2lRQ2RvaXd0NWVsdWJuRDBod0REb0lEaDZVNXo3K1g1djZDdmdSTzM0NEtEK0hTOCtIMFhEaDkvWkNSaUZnNFBRUDJHR1NuaU5GMytHL0xMSzZRSXdhYThmaHNVUW9uWGt5TWtmRGhhVU1FRkdISGNmYVFzWUsvQXZvekFlaUdmSVRzcUU1K3RKc0NTdUtCUTJkazZPaWRDQmwvYnlFVy9US3pkUE1kVm9vaDhkSjFTZlQ0SW8yOGtWMmNEUVdlZVlzdnBtaXVhMFFpaUFUM2QwMmlDL3lNTDhjOUhxdTNUMm53M2J2ekZlOG1wMkc4VTJsK09MSnMzZUxWUGtFenJtdHVXSFRSME0vbzFWVFAxWXp6bFo5ajc3bXJFSzJMSHJxTkxiMWNhNXlVNjNxM205dm03WmFjYXZZS3YzajNPa2xHOXVzT0MwV2ZpU2RYNlJ6ZHRWZEpzNmczNWtNTWNWUHhSSStKc1ROcEhCTTFubUQyNXJ6N0dhOVA1THp5c2JuOWFjcjVlcWZuZ2drSEgxUlk5cDYvOVVxN29zQXFmM09BdHB2R1M5V3NxeVpOOWdaMysxcHN6NFp0cTZHNXF2K2lmdktYQXdjZkhMcHhVMjlsTUdXbWkvMENTOE9sVmE4dDM5MG1USVo0bXcvTnlvb1JDTXZxSkUzVGxKUjNZeVphdVVzOThBRlJHaWVxQTk1MDVTdzFFdW90cHBRbFBwZzJFZG5aRk02SXpHd3k1a3pLeit6ODlkVzdsL29saFpaZFowcnp6ejhMNTVEdmhhbHNXZUd1bktSOFFia3F3VVQzT0p0ZDIvZmJMMk54eHp2SnA3U3RudDFHN0hyeWZ5K1prM2RkNFdxSlQvMnNWL21sYW41VW5ZSTBrL01LMWkxVlJhVWVsS1J4VHI5YzNMRmplMnJxK0EvVVRTYmxIMzNOMHQ1c2U5Y1FXK2VYZi9kcFFySmh6eFBuZ2hRRHYvNnIxV1l4Q1E4clBueGEvVlFqN1FsdlNzVW51QmZudjdhek00SFBXZTkyWVd0SUlMMGhMWFI4U2ZKSWU5UFU1MlQxS28rUGUwN3ZDbThzV1ZrVXVpQWtrRW81NGRsV2xCaW1ua2FOL1p5eXZiR2V6NS9meGhEanRWS0R6cENrdUVwWWl0dXZpTUhBNlp2KzdjVDEvZTNBcjBjanhlbk5LUGdNT0xFYWxxUTUvTndGU1BHMXBFSFNob2UzNnNGbVh3ZmlTQURhVnYxbU1zbGNmL0w3ZlQ5ekV3b2RYTThRZGhJZXdOeGhRelJKSVRDcmVHTGE5MzU5WS9CM0VvUUR6L1NnenhDbGxGaWttZjlwWkxOUzRvWFJJblo4VEFyMGg5eU1rMklVN0xUdW45Y0xXbFJlVmRMOGhoaXNzcnBmaTl5NU9tOTMySXVua1pvNUQ4MnExVWJ0d3ZDZk4yQ043S0kxTytxTU81UXVwSEkwZzQxcWVhTFNycDlDa25ONnQ5d2E3Y3BwYk1zN2RMdy9UWU44cnFpM0E3UGNMUDFTMzRTYnVVdE9mRFp0bUtxcmRQa01OZjhuZ3hjTHc1MzJoZDZkdVhkVmI5L2R4K2NhZjk2UU05cXZyTVY3clc3UXFocGo0bDE0WFJzVmt4TjU0NTNiR2NiSFZ5cDZucmtXSlgwZXg4dXR0TnNpYkxEN3BxL0Y2aDBiVDJaa25DdVVKQkY1NFlXOERGS3Q3aEgxbXdRalRNSjEzdnpGNjdwVmJwYTVIYlpkOUlUUUZjNVFzdGNxVnA0VVhyeXRRczNDU1BIQ3NsdTlxdVZ6QXk2cTc3bndKWHZVVkEwSG5ZY2JKNzEwM3ZaVGlWVFJDdHllbUgrZEkyV1NWRkVQVkkyVXVlYmFmMjBoL3YxenRtRStHUTRiREhkSmphL25oUmpBZktoRmlUUkN0bkZNSWptVFhCMWtoMkIvOU1nb1IveXFCZmRtdSt5dEdiT0hzNzBkUCsxWHZVTi9XREtodnNJWis3Q0NNOVp0ejIyVDAwcG5YNWhsdFZSWU9pM29uUFQ2K08vT1NROGtkaUVMYzhiV1hOdno5RlJvcDJaVGdqQ0Q3OVhsWXJWbDkzNnNvZVhrVnJJSDdpMmpxNm5RVW1OWE5ZWWFTRTNNV0piSFArRzlKcmQrNmRKcFNvU0FjS1hjTTY0QnVETnJzdWdicTNlSG5kaWE5L0hLN2picnlFbDU2MngvMnpoTmlYcVJaby96RGZyd3NmSlNTOHpLTzZKaTc3VVd0SmlhSis4dlp6NEp2Zll5cjZBQ3Q2dGh3cHR0OFJkT2Q1OTVVR1RYczJxOVNWWDJlYmZhejNtajV4OXZGejlSUWg1cHYrODZUZ25XT2lXKytGYjdXRnRHYWtXenQ5NjhJMGc5c3VwMGpmMmwvWHVNcCtkZVBuYnpYTnJOYVVhQmo1YmxMTHp5Zk5LcUZ5UDZCTzV6NHZnT1A0VXVBQlB3UCs2aHFjNE5DbVZ1WkhOMGNtVmhiUTBLWlc1a2IySnFEUW8zTlNBd0lHOWlhZzBLV3lBd1d5QTNOVEJkSUNBeld5QXlOemhkSUNBeE1Wc2dNek16SURNek0xMGdJREUxV3lBeU56Z2dNek16SURJM09GMGdJREU1V3lBMU5UWWdOVFUySURVMU5sMGdJREkxV3lBMU5UWmRJQ0F5T0ZzZ05UVTJJREkzT0YwZ0lETTJXeUEyTmpjZ05qWTNJRGN5TWwwZ0lEUXdXeUEyTmpjZ05qRXhJRGMzT0NBM01qSWdNamM0WFNBZ05EZGJJRFUxTmlBNE16TmRJQ0ExTUZzZ056YzRJRFkyTjEwZ0lEVXpXeUEzTWpJZ05qWTNJRFl4TVNBM01qSWdOalkzSURrME5GMGdJRFk0V3lBMU5UWWdOVFUySURVd01DQTFOVFlnTlRVMklESTNPQ0ExTlRZZ05UVTJJREl5TWlBeU1qSWdOVEF3SURJeU1pQTRNek1nTlRVMklEVTFOaUExTlRZZ05UVTJJRE16TXlBMU1EQWdNamM0SURVMU5pQTFNREFnTnpJeUlEVXdNQ0ExTURBZ05UQXdYU0FnTVRjM1d5QTFOVFpkSUNBeE9ERmJJREl5TWlBeU1qSmRJQ0EwTURKYklETTFORjBnWFNBTkNtVnVaRzlpYWcwS056WWdNQ0J2WW1vTkNsc2dNamM0SURBZ01DQXdJREFnTUNBd0lEQWdNek16SURNek15QXdJREFnTWpjNElETXpNeUF5TnpnZ01DQTFOVFlnTlRVMklEVTFOaUF3SURBZ01DQTFOVFlnTUNBd0lEVTFOaUF5TnpnZ01DQXdJREFnTUNBd0lEQWdOalkzSURZMk55QTNNaklnTUNBMk5qY2dOakV4SURjM09DQTNNaklnTWpjNElEQWdNQ0ExTlRZZ09ETXpJREFnTnpjNElEWTJOeUF3SURjeU1pQTJOamNnTmpFeElEY3lNaUEyTmpjZ09UUTBJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJRFUxTmlBMU5UWWdOVEF3SURVMU5pQTFOVFlnTWpjNElEVTFOaUExTlRZZ01qSXlJREl5TWlBMU1EQWdNakl5SURnek15QTFOVFlnTlRVMklEVTFOaUExTlRZZ016TXpJRFV3TUNBeU56Z2dOVFUySURVd01DQTNNaklnTlRBd0lEVXdNQ0ExTURCZElBMEtaVzVrYjJKcURRbzNOeUF3SUc5aWFnMEtQRHd2Vkhsd1pTOU5aWFJoWkdGMFlTOVRkV0owZVhCbEwxaE5UQzlNWlc1bmRHZ2dNekE0T0Q0K0RRcHpkSEpsWVcwTkNqdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaU15NHhMVGN3TVNJK0NqeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStDanh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUNCNGJXeHVjenB3WkdZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZjR1JtTHpFdU15OGlQZ284Y0dSbU9sQnliMlIxWTJWeVBrMXBZM0p2YzI5bWRNS3VJRmR2Y21RZ1ptOXlJRTFwWTNKdmMyOW1kQ0F6TmpVOEwzQmtaanBRY205a2RXTmxjajQ4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ0lIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJK0NqeGtZenBqY21WaGRHOXlQanh5WkdZNlUyVnhQanh5WkdZNmJHaytTMkZ5Wlc0Z1RXVmxhR0Z1UEM5eVpHWTZiR2srUEM5eVpHWTZVMlZ4UGp3dlpHTTZZM0psWVhSdmNqNDhMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnSUhodGJHNXpPbmh0Y0QwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x5SStDang0YlhBNlEzSmxZWFJ2Y2xSdmIydytUV2xqY205emIyWjB3cTRnVjI5eVpDQm1iM0lnVFdsamNtOXpiMlowSURNMk5Ud3ZlRzF3T2tOeVpXRjBiM0pVYjI5c1BqeDRiWEE2UTNKbFlYUmxSR0YwWlQ0eU1ESXdMVEEzTFRNeFZERXlPalUzT2pFNUt6RXdPakF3UEM5NGJYQTZRM0psWVhSbFJHRjBaVDQ4ZUcxd09rMXZaR2xtZVVSaGRHVStNakF5TUMwd055MHpNVlF4TWpvMU56b3hPU3N4TURvd01Ed3ZlRzF3T2sxdlpHbG1lVVJoZEdVK1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0NqeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlJQ0I0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUkrQ2p4NGJYQk5UVHBFYjJOMWJXVnVkRWxFUG5WMWFXUTZOekpCUWpKQ05rTXRNRGs0UkMwME9EWTFMVGt4UmprdE5FTXhSVUUxTnpBM1FUbERQQzk0YlhCTlRUcEViMk4xYldWdWRFbEVQang0YlhCTlRUcEpibk4wWVc1alpVbEVQblYxYVdRNk56SkJRakpDTmtNdE1EazRSQzAwT0RZMUxUa3hSamt0TkVNeFJVRTFOekEzUVRsRFBDOTRiWEJOVFRwSmJuTjBZVzVqWlVsRVBqd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLUEM5eVpHWTZVa1JHUGp3dmVEcDRiWEJ0WlhSaFBqdy9lSEJoWTJ0bGRDQmxibVE5SW5jaVB6NE5DbVZ1WkhOMGNtVmhiUTBLWlc1a2IySnFEUW8zT0NBd0lHOWlhZzBLUER3dlJHbHpjR3hoZVVSdlkxUnBkR3hsSUhSeWRXVStQZzBLWlc1a2IySnFEUW8zT1NBd0lHOWlhZzBLUER3dlZIbHdaUzlZVW1WbUwxTnBlbVVnTnprdlYxc2dNU0EwSURKZElDOVNiMjkwSURFZ01DQlNMMGx1Wm04Z01qRWdNQ0JTTDBsRVd6dzJRekpDUVVJM01qaEVNRGsyTlRRNE9URkdPVFJETVVWQk5UY3dOMEU1UXo0OE5rTXlRa0ZDTnpJNFJEQTVOalUwT0RreFJqazBRekZGUVRVM01EZEJPVU0rWFNBdlJtbHNkR1Z5TDBac1lYUmxSR1ZqYjJSbEwweGxibWQwYUNBeU1qQStQZzBLYzNSeVpXRnREUXA0bkRYUXUwNkNRUkNHNGYwUjVLaHlrUE5aUVFRVlFnZXhzOUNLbXBKZWVtTkNzTURZVVhBRHRpYlVKdGIwZE53RHR5SHMvNzJ3eFR5WlpDWXpzOGJZdDlzNU5zYU1jZm1CcmZCMFJEb0tmeUx6RFJ1UjljTlM1T1lpSDRRR3JFUWhCUC9pcVNLR0EvRzZFT05mTVgyem8rMFNSZE9DTzdpSEIyakNvYkp0K3o3bXg4d0JEM2poQkh4d0NuNElRZ0JDRUlZSW5NRTVYRUFVWWhDSEJGeENFanFRZ2pSa0lBdDV5RUVCaWxDQ01sU2dZWStlUFIrUHZvSXExT0FhYnFBT3QyN2Z1Lzc2Y3lLK3VpNU9ieVQ2YS9FWUVDOWpZL2JTNkIvakRRcGxibVJ6ZEhKbFlXME5DbVZ1Wkc5aWFnMEtlSEpsWmcwS01DQTRNQTBLTURBd01EQXdNREF5TWlBMk5UVXpOU0JtRFFvd01EQXdNREF3TURFM0lEQXdNREF3SUc0TkNqQXdNREF3TURBeE5qWWdNREF3TURBZ2JnMEtNREF3TURBd01ESXlPU0F3TURBd01DQnVEUW93TURBd01EQXdOVFU1SURBd01EQXdJRzROQ2pBd01EQXdNRFU1TURRZ01EQXdNREFnYmcwS01EQXdNREF3TmpBM01DQXdNREF3TUNCdURRb3dNREF3TURBMk16QXhJREF3TURBd0lHNE5DakF3TURBd01EWXpOVFFnTURBd01EQWdiZzBLTURBd01EQXdOalF3TnlBd01EQXdNQ0J1RFFvd01EQXdNREEyTlRZNUlEQXdNREF3SUc0TkNqQXdNREF3TURZM09UWWdNREF3TURBZ2JnMEtNREF3TURBd05qa3lNU0F3TURBd01DQnVEUW93TURBd01EQTJPVFV4SURBd01EQXdJRzROQ2pBd01EQXdNRGN4TURRZ01EQXdNREFnYmcwS01EQXdNREF3TnpFM09DQXdNREF3TUNCdURRb3dNREF3TURBM05ESXlJREF3TURBd0lHNE5DakF3TURBd01UWTVNamdnTURBd01EQWdiZzBLTURBd01EQXlNak0wT1NBd01EQXdNQ0J1RFFvd01EQXdNREkzTWpnd0lEQXdNREF3SUc0TkNqQXdNREF3TWpjMU56RWdNREF3TURBZ2JnMEtNREF3TURBek1qRXhPQ0F3TURBd01DQnVEUW93TURBd01EQXdNREl6SURZMU5UTTFJR1lOQ2pBd01EQXdNREF3TWpRZ05qVTFNelVnWmcwS01EQXdNREF3TURBeU5TQTJOVFV6TlNCbURRb3dNREF3TURBd01ESTJJRFkxTlRNMUlHWU5DakF3TURBd01EQXdNamNnTmpVMU16VWdaZzBLTURBd01EQXdNREF5T0NBMk5UVXpOU0JtRFFvd01EQXdNREF3TURJNUlEWTFOVE0xSUdZTkNqQXdNREF3TURBd016QWdOalUxTXpVZ1pnMEtNREF3TURBd01EQXpNU0EyTlRVek5TQm1EUW93TURBd01EQXdNRE15SURZMU5UTTFJR1lOQ2pBd01EQXdNREF3TXpNZ05qVTFNelVnWmcwS01EQXdNREF3TURBek5DQTJOVFV6TlNCbURRb3dNREF3TURBd01ETTFJRFkxTlRNMUlHWU5DakF3TURBd01EQXdNellnTmpVMU16VWdaZzBLTURBd01EQXdNREF6TnlBMk5UVXpOU0JtRFFvd01EQXdNREF3TURNNElEWTFOVE0xSUdZTkNqQXdNREF3TURBd016a2dOalUxTXpVZ1pnMEtNREF3TURBd01EQTBNQ0EyTlRVek5TQm1EUW93TURBd01EQXdNRFF4SURZMU5UTTFJR1lOQ2pBd01EQXdNREF3TkRJZ05qVTFNelVnWmcwS01EQXdNREF3TURBME15QTJOVFV6TlNCbURRb3dNREF3TURBd01EUTBJRFkxTlRNMUlHWU5DakF3TURBd01EQXdORFVnTmpVMU16VWdaZzBLTURBd01EQXdNREEwTmlBMk5UVXpOU0JtRFFvd01EQXdNREF3TURRM0lEWTFOVE0xSUdZTkNqQXdNREF3TURBd05EZ2dOalUxTXpVZ1pnMEtNREF3TURBd01EQTBPU0EyTlRVek5TQm1EUW93TURBd01EQXdNRFV3SURZMU5UTTFJR1lOQ2pBd01EQXdNREF3TlRFZ05qVTFNelVnWmcwS01EQXdNREF3TURBMU1pQTJOVFV6TlNCbURRb3dNREF3TURBd01EVXpJRFkxTlRNMUlHWU5DakF3TURBd01EQXdOVFFnTmpVMU16VWdaZzBLTURBd01EQXdNREExTlNBMk5UVXpOU0JtRFFvd01EQXdNREF3TURVMklEWTFOVE0xSUdZTkNqQXdNREF3TURBd05UY2dOalUxTXpVZ1pnMEtNREF3TURBd01EQTFPQ0EyTlRVek5TQm1EUW93TURBd01EQXdNRFU1SURZMU5UTTFJR1lOQ2pBd01EQXdNREF3TmpBZ05qVTFNelVnWmcwS01EQXdNREF3TURBMk1TQTJOVFV6TlNCbURRb3dNREF3TURBd01EWXlJRFkxTlRNMUlHWU5DakF3TURBd01EQXdOak1nTmpVMU16VWdaZzBLTURBd01EQXdNREEyTlNBMk5UVXpOU0JtRFFvd01EQXdNRE16TXpVd0lEQXdNREF3SUc0TkNqQXdNREF3TURBd05qWWdOalUxTXpVZ1pnMEtNREF3TURBd01EQTJOeUEyTlRVek5TQm1EUW93TURBd01EQXdNRFk0SURZMU5UTTFJR1lOQ2pBd01EQXdNREF3TmprZ05qVTFNelVnWmcwS01EQXdNREF3TURBM01DQTJOVFV6TlNCbURRb3dNREF3TURBd01EY3hJRFkxTlRNMUlHWU5DakF3TURBd01EQXdNREFnTmpVMU16VWdaZzBLTURBd01EQXpNelF3TUNBd01EQXdNQ0J1RFFvd01EQXdNRE16TmpVNUlEQXdNREF3SUc0TkNqQXdNREF3TXpRd09UY2dNREF3TURBZ2JnMEtNREF3TURBM09UazJOeUF3TURBd01DQnVEUW93TURBd01EZ3dNek14SURBd01EQXdJRzROQ2pBd01EQXdPREEyTkRnZ01EQXdNREFnYmcwS01EQXdNREE0TXpneE9TQXdNREF3TUNCdURRb3dNREF3TURnek9EWTBJREF3TURBd0lHNE5DblJ5WVdsc1pYSU5Danc4TDFOcGVtVWdPREF2VW05dmRDQXhJREFnVWk5SmJtWnZJREl4SURBZ1VpOUpSRnM4TmtNeVFrRkNOekk0UkRBNU5qVTBPRGt4UmprMFF6RkZRVFUzTURkQk9VTStQRFpETWtKQlFqY3lPRVF3T1RZMU5EZzVNVVk1TkVNeFJVRTFOekEzUVRsRFBsMGdQajROQ25OMFlYSjBlSEpsWmcwS09EUXlPRFVOQ2lVbFJVOUdEUXA0Y21WbURRb3dJREFOQ25SeVlXbHNaWElOQ2p3OEwxTnBlbVVnT0RBdlVtOXZkQ0F4SURBZ1VpOUpibVp2SURJeElEQWdVaTlKUkZzOE5rTXlRa0ZDTnpJNFJEQTVOalUwT0RreFJqazBRekZGUVRVM01EZEJPVU0rUERaRE1rSkJRamN5T0VRd09UWTFORGc1TVVZNU5FTXhSVUUxTnpBM1FUbERQbDBnTDFCeVpYWWdPRFF5T0RVdldGSmxabE4wYlNBNE16ZzJORDQrRFFwemRHRnlkSGh5WldZTkNqZzJNRFF5RFFvbEpVVlBSZz09fHx8fHx8Rnx8fDIwMTUwMjA4MDUyODE3LjAwMCsxMTowMHx8DQ==',
            },
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: {
              'com.mirth.connect.plugins.rulebuilder.RuleBuilderRule': [
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.5']['MSH.5.1'].toString()\" equals 'RIS'",
                  sequenceNumber: 0,
                  enabled: true,
                  field: "msg['MSH']['MSH.5']['MSH.5.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RIS'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.6']['MSH.6.1'].toString()\" equals 'HOSP1'",
                  sequenceNumber: 1,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.6']['MSH.6.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'HOSP1'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.1'].toString()\" equals ORU",
                  sequenceNumber: 2,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: 'ORU',
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.2'].toString()\" equals R01",
                  sequenceNumber: 3,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.2'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: 'R01',
                  },
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'PID\'].toString()" exists',
                  sequenceNumber: 4,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['PID'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'OBR\'].toString()" exists',
                  sequenceNumber: 5,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['OBR'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['OBX']['OBX.5']['OBX.5.5'].toString()\" exists",
                  sequenceNumber: 6,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['OBX']['OBX.5']['OBX.5.5'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
              ],
            },
          },
          transportName: 'Channel Reader',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'HOSP1 RIS ORU Feed',
            properties: {
              '@class':
                'com.mirth.connect.connectors.tcp.TcpDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: true,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              transmissionModeProperties: {
                '@class':
                  'com.mirth.connect.plugins.mllpmode.MLLPModeProperties',
                pluginPointName: 'MLLP',
                startOfMessageBytes: '0B',
                endOfMessageBytes: '1C0D',
                useMLLPv2: false,
                ackBytes: '06',
                nackBytes: 15,
                maxRetries: 2,
              },
              serverMode: false,
              remoteAddress: '127.0.0.1',
              remotePort: 6660,
              overrideLocalBinding: false,
              localAddress: '0.0.0.0',
              localPort: 0,
              sendTimeout: 5000,
              bufferSize: 65536,
              maxConnections: 10,
              keepConnectionOpen: false,
              checkRemoteHost: false,
              responseTimeout: 10000,
              ignoreResponse: false,
              queueOnResponseTimeout: true,
              dataTypeBinary: false,
              charsetEncoding: 'DEFAULT_ENCODING',
              template: '${message.encodedData}',
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'TCP Sender',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274139281,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '28eda82e-7385-4be1-b540-ed4505f81192',
                name: 'HOSP1',
                channelIds: {
                  string: [
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '42e730bb-0721-435e-8dcf-d25d6d5d1dc6',
                    '688e7bf7-8024-4d38-81c8-6b32299577b8',
                    'e3f95224-23d7-4cdf-a0ba-966a4b233507',
                    '254e0bd3-4f5a-48de-a94b-7ee0f1db9d3b',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'e678dbf5-f021-43dc-84ae-967500d5c31a',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 0,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '13e403bb-cc6d-43ae-ba6c-beb0b2dcb9d3',
                name: 'RIS',
                channelIds: {
                  string: [
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: 'e3f95224-23d7-4cdf-a0ba-966a4b233507',
        nextMetaDataId: 2,
        name: 'TO_HOSP1_RIS_JSON',
        description: null,
        revision: 2,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.vm.VmReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'None',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: null,
          },
          transportName: 'Channel Reader',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'Destination 1',
            properties: {
              '@class':
                'com.mirth.connect.connectors.http.HttpDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              host: 'https:',
              useProxyServer: false,
              proxyAddress: null,
              proxyPort: null,
              method: 'post',
              headers: {
                '@class': 'linked-hash-map',
              },
              parameters: {
                '@class': 'linked-hash-map',
              },
              useHeadersVariable: false,
              headersVariable: null,
              useParametersVariable: false,
              parametersVariable: null,
              responseXmlBody: false,
              responseParseMultipart: true,
              responseIncludeMetadata: false,
              responseBinaryMimeTypes:
                'application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*',
              responseBinaryMimeTypesRegex: true,
              multipart: false,
              useAuthentication: false,
              authenticationType: 'Basic',
              usePreemptiveAuthentication: false,
              username: null,
              password: null,
              content: null,
              contentType: 'text/plain',
              dataTypeBinary: false,
              charset: 'UTF-8',
              socketTimeout: 30000,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'HTTP Sender',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274096663,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: {
              id: '28eda82e-7385-4be1-b540-ed4505f81192',
              name: 'HOSP1',
              channelIds: {
                string: [
                  'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                  '26c66487-229b-433a-8c37-b18afd854fd7',
                  '42e730bb-0721-435e-8dcf-d25d6d5d1dc6',
                  '688e7bf7-8024-4d38-81c8-6b32299577b8',
                  'e3f95224-23d7-4cdf-a0ba-966a4b233507',
                  '254e0bd3-4f5a-48de-a94b-7ee0f1db9d3b',
                  '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                  'e678dbf5-f021-43dc-84ae-967500d5c31a',
                  '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                ],
              },
              backgroundColor: {
                red: 0,
                green: 255,
                blue: 0,
                alpha: 255,
              },
            },
          },
        },
      },
      {
        '@version': '4.4.2',
        id: 'e1b3ea63-2971-4191-a4e0-439cc7535275',
        nextMetaDataId: 2,
        name: 'TO_RAD_PACS_DICOM',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.vm.VmReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'None',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: null,
          },
          transportName: 'Channel Reader',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'RAD_UAT_PACS',
            properties: {
              '@class':
                'com.mirth.connect.connectors.dimse.DICOMDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              host: '90.70.64.41',
              port: 5152,
              applicationEntity: 'AGNA',
              localHost: null,
              localPort: null,
              localApplicationEntity: null,
              template: '${DICOMMESSAGE}',
              acceptTo: 5000,
              async: 0,
              bufSize: 1,
              connectTo: 0,
              priority: 'med',
              passcode: null,
              pdv1: false,
              rcvpdulen: 16,
              reaper: 10,
              releaseTo: 5,
              rspTo: 60,
              shutdownDelay: 1000,
              sndpdulen: 16,
              soCloseDelay: 50,
              sorcvbuf: 0,
              sosndbuf: 0,
              stgcmt: false,
              tcpDelay: true,
              ts1: false,
              uidnegrsp: false,
              username: null,
              keyPW: null,
              keyStore: null,
              keyStorePW: null,
              noClientAuth: true,
              nossl2: true,
              tls: 'notls',
              trustStore: null,
              trustStorePW: null,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'DICOM Sender',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706364082388,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '517f380c-bd32-4011-88e8-4f333470f116',
                name: 'RAD',
                channelIds: {
                  string: [
                    '04d11dd3-ec87-4ad2-b3f4-85026f4e1dfa',
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'e1b3ea63-2971-4191-a4e0-439cc7535275',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 0,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '4875d699-c14d-4b33-b2b0-56fa611b06cc',
                name: 'PACS',
                channelIds: {
                  string: [
                    'e1b3ea63-2971-4191-a4e0-439cc7535275',
                    '688e7bf7-8024-4d38-81c8-6b32299577b8',
                  ],
                },
                backgroundColor: {
                  red: 0,
                  green: 102,
                  blue: 255,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: 'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
        nextMetaDataId: 4,
        name: 'TO_RAD_RIS_HL7_ADT',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.vm.VmReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'None',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundTemplate: {
              '@encoding': 'base64',
              $: 'TVNIfF5+XCZ8QUNNRXxBQ0V8R0VOT1ZJQ3xHT1N8MjAyMzAyMjYxMzM1Mzd8fEFEVF5BMjheQURUX0EwNXw5ODl8VHwyLjQKUElEfDF8fDAwMDExMTJeXl5BQ01FXk1STnx8U1FVQVJFXkhPTUVSXl5eXl58fDE5NzgwMjI4fE18fHwxMjMgUE9TVCBSRF5eTUVMQk9VUk5FXlZJQ14zMDAwXkFVU15IXl58fHx8RU5HfE1BUlJJRUR8fHx8fHx8fHx8fHx8fE4KQ09OfDF8TUhSX0NPTlNFTlR8MDAwMTExMnxNSFJ8TUhSIENvbnNlbnQgUkVDRUlWRUQgaW4gUEFTfHx8fHx8UmVjZWl2ZWR8fHx8MjEwMDAxMDEKTlRFfDF8fENsaW5pY2FsIG5vdGVzOi0+dGhlcmFwZXV0aWMgY2xleGFuZXx8fDIwMjIwMjA4MTUwNDI1',
            },
            outboundTemplate: {
              '@encoding': 'base64',
            },
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: {
              'com.mirth.connect.plugins.rulebuilder.RuleBuilderRule': [
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.3']['MSH.3.1'].toString()\" equals 'RIS'",
                  sequenceNumber: 0,
                  enabled: true,
                  field: "msg['MSH']['MSH.3']['MSH.3.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RIS'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.4']['MSH.4.1'].toString()\" equals 'HOSP1'",
                  sequenceNumber: 1,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.4']['MSH.4.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'HOSP1'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.1'].toString()\" equals 'ADT'",
                  sequenceNumber: 2,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'ADT'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.2'].toString()\" equals 'A08' or 'A23' or 'A28' or 'A29' or 'A31' or 'A18' or 'A30' or 'A34' or 'A35' or 'A36' or 'A39' or 'A40'",
                  sequenceNumber: 3,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.2'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: [
                      "'A08'",
                      "'A23'",
                      "'A28'",
                      "'A29'",
                      "'A31'",
                      "'A18'",
                      "'A30'",
                      "'A34'",
                      "'A35'",
                      "'A36'",
                      "'A39'",
                      "'A40'",
                    ],
                  },
                },
              ],
            },
          },
          transportName: 'Channel Reader',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 2,
            name: 'Destination 1',
            properties: {
              '@class':
                'com.mirth.connect.connectors.vm.VmDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              channelId: 'none',
              channelTemplate: '${message.encodedData}',
              mapVariables: null,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'Channel Writer',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274313945,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '517f380c-bd32-4011-88e8-4f333470f116',
                name: 'RAD',
                channelIds: {
                  string: [
                    '04d11dd3-ec87-4ad2-b3f4-85026f4e1dfa',
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'e1b3ea63-2971-4191-a4e0-439cc7535275',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 0,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '13e403bb-cc6d-43ae-ba6c-beb0b2dcb9d3',
                name: 'RIS',
                channelIds: {
                  string: [
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
        nextMetaDataId: 2,
        name: 'TO_RAD_RIS_HL7_ORM',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.vm.VmReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'None',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundTemplate: {
              '@encoding': 'base64',
              $: 'TVNIfF5+XFwmfEVwaWN8MTMzNHxNSF9BdXNsYWJ8MTMzNHwyMDIyMDQwNjE2MTI1OHwxMTg4NHxPUk1eTzAxfDI2MTc1Mzh8UHwyLjQKUElEfDF8fDgzMTU1OV5eXjEzMzReTVJ+RTI2NDExMTheXl5FUElDXk1STnx8Qk5BTUVeVk5BTUVeXl5NUy58fDE5NDIwNTI4MDAwMDAwfEZ8fHwzNiBGYWtlIFJEXl5UVUxMQU1BUklORV5WSUNeMzA0M15BVVNUUkFMSUFeTHx8MDQwMyA5OTkgOTk5XlBeUEheXl5eMDQwMzk5OTk5OX5eTkVUXkludGVybmV0XmZha2VfZW1haWxAeTdtYWlsLmNvbXx8fDJ8fDc1MDcwNzh8MzEwNjg2OTU0MTF8fHx8fE58fHx8fHxOClBWMXx8SXxDSElIXkNISUgtMDA5XkNISUgtMDA5XlJNSENeXl5eODleXl5FUElDfHx8fEtBTktVXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI3NDY3MjVZXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5QUk9WfHwyMTQyNDIySF5QTmFtZV5KTmFtZV5eXl5eXjEzMzReXl5eUFJPVn5QQVBKXlBOYW1lXkpOYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI5OTA3NDJBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5QUk9WfkNBTURBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5NQUlOfEhIVXx8fHx8fHxLQU5LVV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eTUFJTn4yNzQ2NzI1WV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eUFJPVnx8NzUwNzA3OHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwyMDIyMDQwMzE3NTAwMHx8fHx8fDcxNTkxMTIwCk9SQ3xOV3wyMDE0NjI5NzBeRVBDfHw3MTU5MTEyMHx8fF5Ob3deXjIwMjIwNDA2MTMwMDAwXjIwMjIwNDA2XlJeXlN0YW5kaW5nXl5eXjF8fDIwMjIwNDA2OTk5MDMzfFRSSVBBWUFeRkFLRW5hbWVeU0lMTFluYW1lfHw1NTY3ODYxWF5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXlBST1Z+VFJJQV5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXk1BSU58NTA5MTAwMDY0Xl5eMjA5MV5eXl5eUk1IQyBISVRIfHx8fHxNSDQwOTc2XlJNSC1DLUwxLUhJVEgtT0ZGLVdTMDJeXjUwOTEwMDA2NF5STUhDIEhJVEh8fHx8fHwzMDUgR3JhdHRhbiBTdHJlZXReXk1FTEJPVVJORV5WSUNeMzAwMF5BVVNUUkFMSUFeQ3x8fHx8SQpPQlJ8MXwyMDE0NjI5NzBeRVBDfHxYQV5BTlRJIFhBXkFVU0xBQl5eQU5USSBYQXx8MjAyMjA0MDYxMzAwMDB8MjAyMjA0MDYxNjEyMDB8fHxGYWtlS1JeRmFrZV5GYWxzZUZOYW1lfFdhcmQgQ29sbGVjdHx8fHxCbG9vZCZCbG9vZF5eXlZFJkJsb29kLCBWZW5vdXN8NTU2Nzg2MVheRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5QUk9WflRSSUFeRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5NQUlOfHx8fE0yMjEyMzA1MjNCWnx8fHxMYWJ8fHxeTm93Xl4yMDIyMDQwNjEzMDAwMF4yMDIyMDQwNl5SXl5TdGFuZGluZ15eXl4xfHx8fHx8fHx8MjAyMjA0MDYxMzAwMDAKTlRFfDF8fFBsZWFzZSBzcGVjaWZ5IHR5cGUgb2YgaGVwYXJpbiBiZWluZyBhZG1pbmlzdGVyZWQgLSBVRkggKFN0YW5kYXJkIEhlcGFyaW4pIG9yIExNV0ggKENsZXhhbmUsIEZyYWdtaW4gZXRjLiktPmNsZXhhbmUKTlRFfDJ8fENsaW5pY2FsIG5vdGVzOi0+dGhlcmFwZXV0aWMgY2xleGFuZQpOVEV8M3x8SXMgdGhpcyBmb3IgcmVzZWFyY2g/LT5Obw==',
            },
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: {
              'com.mirth.connect.plugins.rulebuilder.RuleBuilderRule': [
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.3']['MSH.3.1'].toString()\" equals 'RIS'",
                  sequenceNumber: 0,
                  enabled: true,
                  field: "msg['MSH']['MSH.3']['MSH.3.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RIS'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.4']['MSH.4.1'].toString()\" equals 'HOSP1'",
                  sequenceNumber: 1,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.4']['MSH.4.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'HOSP1'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.1'].toString()\" equals 'ORM'",
                  sequenceNumber: 2,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'ORM'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.2'].toString()\" equals 'O01'",
                  sequenceNumber: 3,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.2'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'O01'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'PID\'].toString()" exists',
                  sequenceNumber: 4,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['PID'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'ORC\'].toString()" exists',
                  sequenceNumber: 5,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['ORC'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'OBR\'].toString()" exists',
                  sequenceNumber: 6,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['OBR'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
              ],
            },
          },
          transportName: 'Channel Reader',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'TO_RAD_UAT_RIS_HL7',
            properties: {
              '@class':
                'com.mirth.connect.connectors.tcp.TcpDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: true,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              transmissionModeProperties: {
                '@class':
                  'com.mirth.connect.plugins.mllpmode.MLLPModeProperties',
                pluginPointName: 'MLLP',
                startOfMessageBytes: '0B',
                endOfMessageBytes: '1C0D',
                useMLLPv2: false,
                ackBytes: '06',
                nackBytes: 15,
                maxRetries: 2,
              },
              serverMode: false,
              remoteAddress: '192.168.2.58',
              remotePort: 7018,
              overrideLocalBinding: false,
              localAddress: '0.0.0.0',
              localPort: 0,
              sendTimeout: 5000,
              bufferSize: 65536,
              maxConnections: 10,
              keepConnectionOpen: false,
              checkRemoteHost: false,
              responseTimeout: 5000,
              ignoreResponse: false,
              queueOnResponseTimeout: true,
              dataTypeBinary: false,
              charsetEncoding: 'DEFAULT_ENCODING',
              template: '${message.encodedData}',
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'TCP Sender',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274285841,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '517f380c-bd32-4011-88e8-4f333470f116',
                name: 'RAD',
                channelIds: {
                  string: [
                    '04d11dd3-ec87-4ad2-b3f4-85026f4e1dfa',
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'e1b3ea63-2971-4191-a4e0-439cc7535275',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 0,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '13e403bb-cc6d-43ae-ba6c-beb0b2dcb9d3',
                name: 'RIS',
                channelIds: {
                  string: [
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
        nextMetaDataId: 3,
        name: 'TO_RAD_RIS_JSON',
        description: null,
        revision: 2,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.vm.VmReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'None',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundDataType: 'JSON',
            outboundDataType: 'JSON',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.json.JSONDataTypeProperties',
              '@version': '4.4.2',
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.json.JSONBatchProperties',
                '@version': '4.4.2',
                splitType: 'JavaScript',
                batchScript: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.json.JSONDataTypeProperties',
              '@version': '4.4.2',
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.json.JSONBatchProperties',
                '@version': '4.4.2',
                splitType: 'JavaScript',
                batchScript: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: null,
          },
          transportName: 'Channel Reader',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'POST_SESSION',
            properties: {
              '@class':
                'com.mirth.connect.connectors.http.HttpDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              host: 'http://192.168.2.58:8181/jris/portal/v2/session',
              useProxyServer: false,
              proxyAddress: null,
              proxyPort: null,
              method: 'post',
              headers: {
                '@class': 'linked-hash-map',
              },
              parameters: {
                '@class': 'linked-hash-map',
                entry: [
                  {
                    string: 'System',
                    list: {
                      string: 'LeniaHealth',
                    },
                  },
                  {
                    string: 'Accept',
                    list: {
                      string: 'application/json',
                    },
                  },
                  {
                    string: 'portal_api',
                    list: {
                      string: 'Wz@<5JaVHqY_y_pvg1KuhBw$Pd<*,[f75KW{TcQN',
                    },
                  },
                ],
              },
              useHeadersVariable: false,
              headersVariable: null,
              useParametersVariable: false,
              parametersVariable: null,
              responseXmlBody: false,
              responseParseMultipart: true,
              responseIncludeMetadata: false,
              responseBinaryMimeTypes:
                'application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*',
              responseBinaryMimeTypesRegex: true,
              multipart: false,
              useAuthentication: false,
              authenticationType: 'Basic',
              usePreemptiveAuthentication: false,
              username: null,
              password: null,
              content: '${message.rawData}',
              contentType: 'application/json',
              dataTypeBinary: false,
              charset: 'UTF-8',
              socketTimeout: 30000,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'JSON',
              outboundDataType: 'JSON',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.json.JSONDataTypeProperties',
                '@version': '4.4.2',
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.json.JSONBatchProperties',
                  '@version': '4.4.2',
                  splitType: 'JavaScript',
                  batchScript: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.json.JSONDataTypeProperties',
                '@version': '4.4.2',
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.json.JSONBatchProperties',
                  '@version': '4.4.2',
                  splitType: 'JavaScript',
                  batchScript: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'JSON',
              outboundDataType: 'JSON',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.json.JSONDataTypeProperties',
                '@version': '4.4.2',
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.json.JSONBatchProperties',
                  '@version': '4.4.2',
                  splitType: 'JavaScript',
                  batchScript: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.json.JSONDataTypeProperties',
                '@version': '4.4.2',
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.json.JSONBatchProperties',
                  '@version': '4.4.2',
                  splitType: 'JavaScript',
                  batchScript: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'HTTP Sender',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706273911952,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: '517f380c-bd32-4011-88e8-4f333470f116',
                name: 'RAD',
                channelIds: {
                  string: [
                    '04d11dd3-ec87-4ad2-b3f4-85026f4e1dfa',
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'e1b3ea63-2971-4191-a4e0-439cc7535275',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 0,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '13e403bb-cc6d-43ae-ba6c-beb0b2dcb9d3',
                name: 'RIS',
                channelIds: {
                  string: [
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'a93a784d-d0a5-43f3-8cce-cc03538542b8',
                    '26c66487-229b-433a-8c37-b18afd854fd7',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    '2d7dc73d-334a-4273-a664-c54bebbe07a2',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                    '4a9058ab-508f-4bf0-a25d-9c8da82ac747',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 255,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
      {
        '@version': '4.4.2',
        id: '04d11dd3-ec87-4ad2-b3f4-85026f4e1dfa',
        nextMetaDataId: 2,
        name: 'TO_RAD_VR_HL7_ORM',
        description: null,
        revision: 3,
        sourceConnector: {
          '@version': '4.4.2',
          metaDataId: 0,
          name: 'sourceConnector',
          properties: {
            '@class': 'com.mirth.connect.connectors.vm.VmReceiverProperties',
            '@version': '4.4.2',
            pluginProperties: null,
            sourceConnectorProperties: {
              '@version': '4.4.2',
              responseVariable: 'None',
              respondAfterProcessing: true,
              processBatch: false,
              firstResponse: false,
              processingThreads: 1,
              resourceIds: {
                '@class': 'linked-hash-map',
                entry: {
                  string: ['Default Resource', '[Default Resource]'],
                },
              },
              queueBufferSize: 1000,
            },
          },
          transformer: {
            '@version': '4.4.2',
            elements: null,
            inboundTemplate: {
              '@encoding': 'base64',
              $: 'TVNIfF5+XFwmfEVwaWN8MTMzNHxNSF9BdXNsYWJ8MTMzNHwyMDIyMDQwNjE2MTI1OHwxMTg4NHxPUk1eTzAxfDI2MTc1Mzh8UHwyLjQKUElEfDF8fDgzMTU1OV5eXjEzMzReTVJ+RTI2NDExMTheXl5FUElDXk1STnx8Qk5BTUVeVk5BTUVeXl5NUy58fDE5NDIwNTI4MDAwMDAwfEZ8fHwzNiBGYWtlIFJEXl5UVUxMQU1BUklORV5WSUNeMzA0M15BVVNUUkFMSUFeTHx8MDQwMyA5OTkgOTk5XlBeUEheXl5eMDQwMzk5OTk5OX5eTkVUXkludGVybmV0XmZha2VfZW1haWxAeTdtYWlsLmNvbXx8fDJ8fDc1MDcwNzh8MzEwNjg2OTU0MTF8fHx8fE58fHx8fHxOClBWMXx8SXxDSElIXkNISUgtMDA5XkNISUgtMDA5XlJNSENeXl5eODleXl5FUElDfHx8fEtBTktVXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI3NDY3MjVZXkRSX1NuYW1lXkRSX0ZuYW1lXl5eXl5eMTMzNF5eXl5QUk9WfHwyMTQyNDIySF5QTmFtZV5KTmFtZV5eXl5eXjEzMzReXl5eUFJPVn5QQVBKXlBOYW1lXkpOYW1lXl5eXl5eMTMzNF5eXl5NQUlOfjI5OTA3NDJBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5QUk9WfkNBTURBXkNOYW1lXkROYW1lXl5eXl5eMTMzNF5eXl5NQUlOfEhIVXx8fHx8fHxLQU5LVV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eTUFJTn4yNzQ2NzI1WV5EUl9TbmFtZV5EUl9GbmFtZV5eXl5eXjEzMzReXl5eUFJPVnx8NzUwNzA3OHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwyMDIyMDQwMzE3NTAwMHx8fHx8fDcxNTkxMTIwCk9SQ3xOV3wyMDE0NjI5NzBeRVBDfHw3MTU5MTEyMHx8fF5Ob3deXjIwMjIwNDA2MTMwMDAwXjIwMjIwNDA2XlJeXlN0YW5kaW5nXl5eXjF8fDIwMjIwNDA2OTk5MDMzfFRSSVBBWUFeRkFLRW5hbWVeU0lMTFluYW1lfHw1NTY3ODYxWF5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXlBST1Z+VFJJQV5GQUtFbmFtZV5TSUxMWW5hbWVeXl5eXl4xMzM0Xl5eXk1BSU58NTA5MTAwMDY0Xl5eMjA5MV5eXl5eUk1IQyBISVRIfHx8fHxNSDQwOTc2XlJNSC1DLUwxLUhJVEgtT0ZGLVdTMDJeXjUwOTEwMDA2NF5STUhDIEhJVEh8fHx8fHwzMDUgR3JhdHRhbiBTdHJlZXReXk1FTEJPVVJORV5WSUNeMzAwMF5BVVNUUkFMSUFeQ3x8fHx8SQpPQlJ8MXwyMDE0NjI5NzBeRVBDfHxYQV5BTlRJIFhBXkFVU0xBQl5eQU5USSBYQXx8MjAyMjA0MDYxMzAwMDB8MjAyMjA0MDYxNjEyMDB8fHxGYWtlS1JeRmFrZV5GYWxzZUZOYW1lfFdhcmQgQ29sbGVjdHx8fHxCbG9vZCZCbG9vZF5eXlZFJkJsb29kLCBWZW5vdXN8NTU2Nzg2MVheRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5QUk9WflRSSUFeRkFLRW5hbWVeU0lMTFluYW1lXl5eXl5eMTMzNF5eXl5NQUlOfHx8fE0yMjEyMzA1MjNCWnx8fHxMYWJ8fHxeTm93Xl4yMDIyMDQwNjEzMDAwMF4yMDIyMDQwNl5SXl5TdGFuZGluZ15eXl4xfHx8fHx8fHx8MjAyMjA0MDYxMzAwMDAKTlRFfDF8fFBsZWFzZSBzcGVjaWZ5IHR5cGUgb2YgaGVwYXJpbiBiZWluZyBhZG1pbmlzdGVyZWQgLSBVRkggKFN0YW5kYXJkIEhlcGFyaW4pIG9yIExNV0ggKENsZXhhbmUsIEZyYWdtaW4gZXRjLiktPmNsZXhhbmUKTlRFfDJ8fENsaW5pY2FsIG5vdGVzOi0+dGhlcmFwZXV0aWMgY2xleGFuZQpOVEV8M3x8SXMgdGhpcyBmb3IgcmVzZWFyY2g/LT5Obw==',
            },
            inboundDataType: 'HL7V2',
            outboundDataType: 'HL7V2',
            inboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
            outboundProperties: {
              '@class':
                'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
              '@version': '4.4.2',
              serializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                '@version': '4.4.2',
                handleRepetitions: true,
                handleSubcomponents: true,
                useStrictParser: false,
                useStrictValidation: false,
                stripNamespaces: false,
                segmentDelimiter: '\\r',
                convertLineBreaks: true,
              },
              deserializationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                '@version': '4.4.2',
                useStrictParser: false,
                useStrictValidation: false,
                segmentDelimiter: '\\r',
              },
              batchProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                '@version': '4.4.2',
                splitType: 'MSH_Segment',
                batchScript: null,
              },
              responseGenerationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                '@version': '4.4.2',
                segmentDelimiter: '\\r',
                successfulACKCode: 'AA',
                successfulACKMessage: null,
                errorACKCode: 'AE',
                errorACKMessage: 'An Error Occurred Processing Message.',
                rejectedACKCode: 'AR',
                rejectedACKMessage: 'Message Rejected.',
                msh15ACKAccept: false,
                dateFormat: 'yyyyMMddHHmmss.SSS',
              },
              responseValidationProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                '@version': '4.4.2',
                successfulACKCode: 'AA,CA',
                errorACKCode: 'AE,CE',
                rejectedACKCode: 'AR,CR',
                validateMessageControlId: true,
                originalMessageControlId: 'Destination_Encoded',
                originalIdMapVariable: null,
              },
            },
          },
          filter: {
            '@version': '4.4.2',
            elements: {
              'com.mirth.connect.plugins.rulebuilder.RuleBuilderRule': [
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.3']['MSH.3.1'].toString()\" equals 'RADRIS'",
                  sequenceNumber: 0,
                  enabled: true,
                  field: "msg['MSH']['MSH.3']['MSH.3.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RADRIS'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.4']['MSH.4.1'].toString()\" equals 'RADUAT'",
                  sequenceNumber: 1,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.4']['MSH.4.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'RADUAT'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.1'].toString()\" equals 'ORM'",
                  sequenceNumber: 2,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.1'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'ORM'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: "Accept message if \"msg['MSH']['MSH.9']['MSH.9.2'].toString()\" equals 'O01'",
                  sequenceNumber: 3,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['MSH']['MSH.9']['MSH.9.2'].toString()",
                  condition: 'EQUALS',
                  values: {
                    string: "'O01'",
                  },
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'PID\'].toString()" exists',
                  sequenceNumber: 4,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['PID'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'ORC\'].toString()" exists',
                  sequenceNumber: 5,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['ORC'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
                {
                  '@version': '4.4.2',
                  name: 'Accept message if "msg[\'OBR\'].toString()" exists',
                  sequenceNumber: 6,
                  enabled: true,
                  operator: 'AND',
                  field: "msg['OBR'].toString()",
                  condition: 'EXISTS',
                  values: null,
                },
              ],
            },
          },
          transportName: 'Channel Reader',
          mode: 'SOURCE',
          enabled: true,
          waitForPrevious: true,
        },
        destinationConnectors: {
          connector: {
            '@version': '4.4.2',
            metaDataId: 1,
            name: 'Destination 1',
            properties: {
              '@class':
                'com.mirth.connect.connectors.vm.VmDispatcherProperties',
              '@version': '4.4.2',
              pluginProperties: null,
              destinationConnectorProperties: {
                '@version': '4.4.2',
                queueEnabled: false,
                sendFirst: false,
                retryIntervalMillis: 10000,
                regenerateTemplate: false,
                retryCount: 0,
                rotate: false,
                includeFilterTransformer: false,
                threadCount: 1,
                threadAssignmentVariable: null,
                validateResponse: false,
                resourceIds: {
                  '@class': 'linked-hash-map',
                  entry: {
                    string: ['Default Resource', '[Default Resource]'],
                  },
                },
                queueBufferSize: 1000,
                reattachAttachments: true,
              },
              channelId: 'none',
              channelTemplate: '${message.encodedData}',
              mapVariables: null,
            },
            transformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            responseTransformer: {
              '@version': '4.4.2',
              elements: null,
              inboundDataType: 'HL7V2',
              outboundDataType: 'HL7V2',
              inboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
              outboundProperties: {
                '@class':
                  'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties',
                '@version': '4.4.2',
                serializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties',
                  '@version': '4.4.2',
                  handleRepetitions: true,
                  handleSubcomponents: true,
                  useStrictParser: false,
                  useStrictValidation: false,
                  stripNamespaces: false,
                  segmentDelimiter: '\\r',
                  convertLineBreaks: true,
                },
                deserializationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties',
                  '@version': '4.4.2',
                  useStrictParser: false,
                  useStrictValidation: false,
                  segmentDelimiter: '\\r',
                },
                batchProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties',
                  '@version': '4.4.2',
                  splitType: 'MSH_Segment',
                  batchScript: null,
                },
                responseGenerationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties',
                  '@version': '4.4.2',
                  segmentDelimiter: '\\r',
                  successfulACKCode: 'AA',
                  successfulACKMessage: null,
                  errorACKCode: 'AE',
                  errorACKMessage: 'An Error Occurred Processing Message.',
                  rejectedACKCode: 'AR',
                  rejectedACKMessage: 'Message Rejected.',
                  msh15ACKAccept: false,
                  dateFormat: 'yyyyMMddHHmmss.SSS',
                },
                responseValidationProperties: {
                  '@class':
                    'com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties',
                  '@version': '4.4.2',
                  successfulACKCode: 'AA,CA',
                  errorACKCode: 'AE,CE',
                  rejectedACKCode: 'AR,CR',
                  validateMessageControlId: true,
                  originalMessageControlId: 'Destination_Encoded',
                  originalIdMapVariable: null,
                },
              },
            },
            filter: {
              '@version': '4.4.2',
              elements: null,
            },
            transportName: 'Channel Writer',
            mode: 'DESTINATION',
            enabled: true,
            waitForPrevious: true,
          },
        },
        preprocessingScript:
          '// Modify the message variable below to pre process data\nreturn message;',
        postprocessingScript:
          '// This script executes once after a message has been processed\n// Responses returned from here will be stored as "Postprocessor" in the response map\nreturn;',
        deployScript:
          '// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        undeployScript:
          '// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;',
        properties: {
          '@version': '4.4.2',
          clearGlobalChannelMap: true,
          messageStorageMode: 'DEVELOPMENT',
          encryptData: false,
          encryptAttachments: false,
          encryptCustomMetaData: false,
          removeContentOnCompletion: false,
          removeOnlyFilteredOnCompletion: false,
          removeAttachmentsOnCompletion: false,
          initialState: 'STARTED',
          storeAttachments: true,
          metaDataColumns: {
            metaDataColumn: [
              {
                name: 'SOURCE',
                type: 'STRING',
                mappingName: 'mirth_source',
              },
              {
                name: 'TYPE',
                type: 'STRING',
                mappingName: 'mirth_type',
              },
            ],
          },
          attachmentProperties: {
            '@version': '4.4.2',
            type: 'None',
            properties: null,
          },
          resourceIds: {
            '@class': 'linked-hash-map',
            entry: {
              string: ['Default Resource', '[Default Resource]'],
            },
          },
        },
        exportData: {
          metadata: {
            enabled: true,
            lastModified: {
              time: 1706274247658,
              timezone: 'Etc/UTC',
            },
            pruningSettings: {
              archiveEnabled: true,
              pruneErroredMessages: false,
            },
            userId: 1,
          },
          dependentIds: null,
          dependencyIds: null,
          channelTags: {
            channelTag: [
              {
                id: 'ce1881b1-87f7-46e8-a5e9-4f6c855b46d6',
                name: 'VR',
                channelIds: {
                  string: '04d11dd3-ec87-4ad2-b3f4-85026f4e1dfa',
                },
                backgroundColor: {
                  red: 102,
                  green: 102,
                  blue: 0,
                  alpha: 255,
                },
              },
              {
                id: '517f380c-bd32-4011-88e8-4f333470f116',
                name: 'RAD',
                channelIds: {
                  string: [
                    '04d11dd3-ec87-4ad2-b3f4-85026f4e1dfa',
                    '52d03a89-acf2-4584-99e3-8eb1c02a5ff3',
                    'e1b3ea63-2971-4191-a4e0-439cc7535275',
                    '1d4478ec-d5c5-4193-99e9-26ab3902c58b',
                    '0df46292-7a4c-41de-a6a9-c679fec2d543',
                    '074f2a8a-93bb-4b3a-8571-4fdd5f0d6e51',
                    'a4faa8f1-1c1f-462b-a895-3cb5e68297e8',
                  ],
                },
                backgroundColor: {
                  red: 255,
                  green: 0,
                  blue: 0,
                  alpha: 255,
                },
              },
            ],
          },
        },
      },
    ],
  },
};
