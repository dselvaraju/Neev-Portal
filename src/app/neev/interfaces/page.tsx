'use client';

import { Fragment, useEffect, useState } from 'react';
import {
  Box,
  DarkMode,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import InterfaceTable from '../components/InterfaceTable';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [interfaces, setInterfaces] = useState([]);
  const [interfaceMessageStats, setInterfaceMessageStats] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let config = {
      method: 'get',
      url: `/${process.env.NEXT_PUBLIC_API_BASE_PATH}/interfaces`,
    };

    axios
      .request(config)
      .then((response) => {
        const { channels, channelsResponse } = response?.data || {};

        console.log(channels);
        console.log(channelsResponse);

        //setInterfaces(channels);
        setInterfaces(channelsResponse);
        setFilteredMessages(channelsResponse);
        setInterfaceMessageStats(channelsResponse);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const [filters, setFilters] = useState({});
  const handleFiltersChange = (e, filter) => {
    const localFilters = { ...filters, [filter]: e.target.value };

    (!e?.target?.value || e?.target?.value === 'All') &&
      delete localFilters[filter];

    setFilters({ ...localFilters });
    const filterKeys = Object.keys(localFilters);

    const filteredData = interfaces.filter((message) => {
      let selected = true;
      filterKeys.forEach((filter) => {
        if (message[filter] != localFilters[filter]) {
          selected = false;
        }
      });

      return selected;
    });

    setFilteredMessages(filteredData);
  };

  const clearFilters = () => {
    setFilters({});
    setFilteredMessages(interfaces);
  };

  const exportData = () => {
   const worksheet = XLSX.utils.json_to_sheet(filteredMessages);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "Interfaces_DataSheet.xlsx");
  };

  loading && <p>Loading...</p>;

  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <InterfaceTable
        tableData={filteredMessages}
        handleFiltersChange={handleFiltersChange}
        clearFilters={clearFilters}
        exportData={exportData}
      />
    </Flex>
  );
}
