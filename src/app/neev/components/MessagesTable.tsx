'use client';
/* eslint-disable */

import {
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Icon,
  Stack,
  Select,
  IconButton,
} from '@chakra-ui/react';
// Custom components
import { MdChevronRight, MdChevronLeft, MdRefresh } from 'react-icons/md';
import * as React from 'react';
// Assets
import { SearchBar } from '../components/searchBar/SearchBar';

import {
  PaginationState,
  createColumnHelper,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  FilterFn,
} from '@tanstack/react-table';

import { rankItem } from '@tanstack/match-sorter-utils';
import { VSeparator } from 'components/separator/Separator';

type RowObj = {
  channelName: string;
  receivedDate: string;
  processedDate: string;
  status: string;
  message: string;
  mrn: string;
  type: string;
  event: string;
  accessionNumber: string;
};

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export default function MessagesTable(props: {
  tableData: RowObj[];
  viewMessage: (messageRow: any) => void;
  handleFiltersChange: any;
  clearFilters: any;
  exportData: any;
}) {
  const { tableData, viewMessage, handleFiltersChange, clearFilters,exportData } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const brandColor = useColorModeValue('brand.500', 'brand.400');
  const paleGray = useColorModeValue('secondaryGray.400', 'whiteAlpha.100');
  const statusValues = ['SENT', 'ERROR']; // TODO: remove hard coded values. Get from API/Constants

  const [selectedState, setSelectedState] = React.useState('All');
  const [selectedType, setSelectedType] = React.useState('All');
  const [selectedEvent, setSelectedEvent] = React.useState('All');

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = React.useState('');
  const columnHelper = createColumnHelper<RowObj>();
  const columns = [
    columnHelper.accessor('channelName', {
      id: 'channelName',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Channel Name
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          <Text color={textColor} fontSize="md" fontWeight="500">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('mrn', {
      id: 'mrn',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          MRN
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('accessionNumber', {
      id: 'accessionNumber',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Accession Number
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('type', {
      id: 'type',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Type
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('event', {
      id: 'event',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Event
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('receivedDate', {
      id: 'receivedDate',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Received Date
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {new Date(info.getValue()).toDateString()}
        </Text>
      ),
    }),
    columnHelper.accessor('processedDate', {
      id: 'processedDate',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Processed Date
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {new Date(info.getValue()).toDateString()}
        </Text>
      ),
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Status
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('message', {
      id: 'message',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Message
        </Text>
      ),
      cell: (info) => (
        <Button
          variant="light"
          fontSize="sm"
          onClick={() => {
            viewMessage(info?.row?.original);
          }}
        >
          View Message
        </Button>
      ),
    }),

    columnHelper.accessor('message', {
      id: 'message',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Reprocess
        </Text>
      ),
      cell: (info) => (
        <IconButton
          variant="light"
          fontSize="sm"
          aria-label="Reprocess"
          icon={<Icon as={MdRefresh} w="16px" h="16px" />}
          onClick={() => {
            viewMessage(info?.row?.original);
          }}
        />
      ),
    }),
  ];

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );
  const table = useReactTable({
    data: tableData,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const createPages = (count: number) => {
    let arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };

  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'channelName') {
      if (table.getState().sorting[0]?.id !== 'channelName') {
        table.setSorting([{ id: 'channelName', desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <Flex
      direction="column"
      w="100%"
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex
        align={{ sm: 'flex-start', lg: 'flex-start' }}
        justify={{ sm: 'space-between', lg: 'space-between' }}
        w="100%"
        px="22px"
        mb="36px"
      >
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={(value) => setGlobalFilter(String(value))}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search..."
        />
         <Flex pt="2px" direction="row" justifyContent="space-between" mb="20px">
        <VSeparator
            mx="20px"
            bg={paleGray}
            display={{ base: 'none', xl: 'flex' }}
          />
        <Button
            w="max-content"
            backdropFilter="blur(11px)"
            borderRadius="70px"
            mt="auto"
            fontSize="sm"
            color="white"
            fontWeight="bold"
            onClick={(e) => {
              exportData();
            }}
          >
            Export
          </Button>
          
          </Flex>
          
        <Flex pt="2px" direction="row" justifyContent="space-between" mb="20px">
        <VSeparator
            mx="20px"
            bg={paleGray}
            display={{ base: 'none', xl: 'flex' }}
          />
          <Select
            value={selectedState}
            placeholder="Select status"
            w="200px"
            onChange={(e) => {
              setSelectedState(e.target.value);
              handleFiltersChange(e, 'status');
            }}
          >
            {statusValues.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </Select>
          <VSeparator
            mx="20px"
            bg={paleGray}
            display={{ base: 'none', xl: 'flex' }}
          />
          <Select
            value={selectedType}
            placeholder="Select Type"
            w="200px"
            onChange={(e) => {
              setSelectedType(e.target.value);
              handleFiltersChange(e, 'type');
            }}
          >
            {/* TODO: remove hard coded values. Get from API/Constants */}
            {['HL7', 'DICOM', 'SR', 'DOC', 'JSON'].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <VSeparator
            mx="20px"
            bg={paleGray}
            display={{ base: 'none', xl: 'flex' }}
          />
          <Select
            value={selectedEvent}
            placeholder="Select Event"
            w="200px"
            onChange={(e) => {
              setSelectedEvent(e.target.value);
              handleFiltersChange(e, 'event');
            }}
          >
            {/* TODO: remove hard coded values. Get from API/Constants */}
            {['ADT', 'ORM', 'ORU', 'MDM', 'SIU'].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <VSeparator
            mx="20px"
            bg={paleGray}
            display={{ base: 'none', xl: 'flex' }}
          />
          <Button
            w="max-content"
            backdropFilter="blur(11px)"
            borderRadius="70px"
            mt="auto"
            fontSize="sm"
            color="white"
            fontWeight="bold"
            onClick={(e) => {
              setSelectedState('All');
              setSelectedType('All');
              setSelectedEvent('All');
              setGlobalFilter('');
              clearFilters();
            }}
          >
            Clear Filters
          </Button>
        </Flex>
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th
                    pe="10px"
                    borderColor={borderColor}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <Flex
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                        justify="space-between"
                        align="center"
                        fontSize={{
                          sm: '10px',
                          lg: '12px',
                        }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: '',
                          desc: '',
                        }[header.column.getIsSorted() as string] ?? null}
                      </Flex>
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Tr px="20px" key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td
                      key={cell.id}
                      fontSize={{ sm: '14px' }}
                      minW={{
                        sm: '150px',
                        md: '200px',
                        lg: 'auto',
                      }}
                      borderColor={borderColor}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex w="100%" justify="space-between" px="20px" pt="10px" pb="5px">
        {/* SET ROW NUMBER */}
        <Text
          fontSize="sm"
          color="gray.500"
          fontWeight="normal"
          mb={{ sm: '24px', md: '0px' }}
        >
          Showing {pageSize * pageIndex + 1} to{' '}
          {pageSize * (pageIndex + 1) <= tableData.length
            ? pageSize * (pageIndex + 1)
            : tableData.length}{' '}
          of {tableData.length} entries
        </Text>
        {/* PAGINATION BUTTONS */}
        <div className="flex items-center gap-2">
          <Stack direction="row" alignSelf="flex-end" spacing="4px" ms="auto">
            <Button
              variant="no-effects"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="transparent"
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'white')}
              display={
                pageSize === 5
                  ? 'none'
                  : table.getCanPreviousPage()
                  ? 'flex'
                  : 'none'
              }
              _hover={{
                bg: 'whiteAlpha.100',
                opacity: '0.7',
              }}
            >
              <Icon as={MdChevronLeft} w="16px" h="16px" color={textColor} />
            </Button>
            {createPages(table.getPageCount()).map((pageNumber, index) => {
              return (
                <Button
                  variant="no-effects"
                  transition="all .5s ease"
                  onClick={() => table.setPageIndex(pageNumber - 1)}
                  w="40px"
                  h="40px"
                  borderRadius="50%"
                  bg={pageNumber === pageIndex + 1 ? brandColor : 'transparent'}
                  border={
                    pageNumber === pageIndex + 1
                      ? 'none'
                      : '1px solid lightgray'
                  }
                  _hover={
                    pageNumber === pageIndex + 1
                      ? {
                          opacity: '0.7',
                        }
                      : {
                          bg: 'whiteAlpha.100',
                        }
                  }
                  key={index}
                >
                  <Text
                    fontSize="sm"
                    color={pageNumber === pageIndex + 1 ? '#fff' : textColor}
                  >
                    {pageNumber}
                  </Text>
                </Button>
              );
            })}
            <Button
              variant="no-effects"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="transparent"
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'white')}
              display={
                pageSize === 5
                  ? 'none'
                  : table.getCanNextPage()
                  ? 'flex'
                  : 'none'
              }
              _hover={{
                bg: 'whiteAlpha.100',
                opacity: '0.7',
              }}
            >
              <Icon as={MdChevronRight} w="16px" h="16px" color={textColor} />
            </Button>
          </Stack>
        </div>
      </Flex>
    </Flex>
  );
}
// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <SearchBar
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      h="44px"
      w={{ lg: '390px' }}
      borderRadius="16px"
    />
  );
}
