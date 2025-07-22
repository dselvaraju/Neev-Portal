'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  DarkMode,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import MessagesTable from '../components/MessagesTable';
import Head from 'next/head';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [message, setMessage] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let config = {
      method: 'get',
      url: `/${process.env.NEXT_PUBLIC_API_BASE_PATH}/messages`,
    };

    axios
      .request(config)
      .then((response) => {
        const { allMessages } = response?.data || {};

        setMessages(allMessages);
        setFilteredMessages(allMessages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const viewMessage = (messageRow) => {
    const { channelId, messageId } = messageRow;

    if (!channelId || !messageId) return;

    axios
      .request({
        method: 'post',
        url: `/${process.env.NEXT_PUBLIC_API_BASE_PATH}/getMessageDetails`,
        data: {
          channelId,
          messageId,
        },
      })
      .then((response) => {
        const message =
          response?.data?.message?.connectorMessages?.entry[1]?.connectorMessage
            ?.sent?.content || '';

        const msg = message.split('<template>')[1].split('</template>')[0];

        setMessage(msg);
        onOpen();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const [filters, setFilters] = useState({});
  const handleFiltersChange = (e, filter) => {
    const localFilters = { ...filters, [filter]: e.target.value };

    (!e?.target?.value || e?.target?.value === 'All') &&
      delete localFilters[filter];

    setFilters({ ...localFilters });
    const filterKeys = Object.keys(localFilters);

    const filteredData = messages.filter((message) => {
      let selected = true;
      filterKeys.forEach((filter) => {
        if (message[filter] !== localFilters[filter]) {
          selected = false;
        }
      });

      return selected;
    });

    setFilteredMessages(filteredData);
  };

  const clearFilters = () => {
    setFilters({});
    setFilteredMessages(messages);
  };

  const exportData = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredMessages);
     const workbook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
     //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
     //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
     XLSX.writeFile(workbook, "Message_DataSheet.xlsx");
   };

  loading && <p>Loading...</p>;

  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <MessagesTable
        tableData={filteredMessages}
        viewMessage={viewMessage}
        handleFiltersChange={handleFiltersChange}
        clearFilters={clearFilters}
        exportData={exportData}
      />
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mx="8px" boxShadow="unset">
            <ModalBody p="0px">
              <Box position="relative" minH="100%" borderRadius="16px">
                <Box
                  position="absolute"
                  top="50%"
                  zIndex="99"
                  h="100%"
                  w="100%"
                  borderRadius="16px"
                />
                <Heading
                  as="h3"
                  size="md"
                  textAlign="center"
                  p="16px"
                  borderBottom="1px solid #E2E8F0"
                >
                  Message Details
                </Heading>
              </Box>
              <div className="message-details">
                <div className="message-details-container">
                  {/* <Textarea
                    value={message.replace(/&#xd;/g, '\n')}
                    placeholder="Here is a sample placeholder"
                    size="sm"
                  /> */}
                  {message.split('&#xd;').map((str, index) => {
                    return <p key={index}>{str}</p>;
                  })}
                </div>
              </div>
            </ModalBody>
            {/* @ts-ignore */}
            <DarkMode>
              <>
                <ModalCloseButton color="white" zIndex="99" />
              </>
            </DarkMode>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
}
