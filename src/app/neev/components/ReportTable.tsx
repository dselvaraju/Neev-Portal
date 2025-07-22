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
} from '@chakra-ui/react';
// Custom components
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
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
  referredBy: string;
  date: string;
  netCharges: string;
  profFees: string;
  message: string;
  visitId: string;
  patient: string;
  service: string;
  branch: string;
  status: string;
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

export default function ReportTable(props: {
  tableData: RowObj[];
  handleFiltersChange: any;
  clearFilters: any;
}) {
  const { tableData, handleFiltersChange, clearFilters } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const brandColor = useColorModeValue('brand.500', 'brand.400');
  const paleGray = useColorModeValue('secondaryGray.400', 'whiteAlpha.100');
  const statusValues = ['Completed', 'Pending', 'Scheduled']; // TODO: remove hard coded values. Get from API/Constants
  const referredByValues = [
    'Dr. Smith',
    'Dr. Johnson',
    'Dr. Lee',
    'Dr. Garcia',
    'Dr. Kim',
    'Dr. Patel',
    'Dr. Wong',
    'Dr. Martinez',
    'Dr. Nguyen',
    'Dr. Hernandez',
  ]; // TODO: remove hard coded values. Get from API/Constants
  const branchValues = [
    'Main Hospital',
    'Clinic A',
    'Clinic B',
    'Clinic C',
    'Clinic D',
    'Clinic E',
    'Clinic F',
    'Clinic G',
    'Clinic H',
    'Clinic I',
    'Clinic J',
    'Clinic K',
    'Clinic L',
    'Clinic M',
    'Clinic N',
    'Clinic O',
    'Clinic P',
    'Clinic Q',
    'Clinic R',
    'Clinic S',
    'Clinic T',
    'Clinic U',
    'Clinic V',
    'Clinic W',
    'Clinic X',
  ]; // TODO: remove hard coded values. Get from API/Constants

  const [selectedState, setSelectedState] = React.useState('All');
  const [selectedBranch, setSelectedBranch] = React.useState('All');
  const [selectedReferrer, setSelectedReferrer] = React.useState('All');
  const [selectedPeriod, setSelectedPeriod] = React.useState('Daily');

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = React.useState('');
  const columnHelper = createColumnHelper<RowObj>();
  const columns = [
    columnHelper.accessor('referredBy', {
      id: 'referredBy',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Referred By
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
    columnHelper.accessor('visitId', {
      id: 'visitId',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Visit ID
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('branch', {
      id: 'branch',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Branch
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('patient', {
      id: 'patient',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Patient
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('service', {
      id: 'service',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Service
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Date
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {new Date(info.getValue()).toDateString()}
        </Text>
      ),
    }),
    columnHelper.accessor('netCharges', {
      id: 'netCharges',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Net Charges
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('profFees', {
      id: 'profFees',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Prof. Fees
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
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
    if (table.getState().columnFilters[0]?.id === 'referredBy') {
      if (table.getState().sorting[0]?.id !== 'referredBy') {
        table.setSorting([{ id: 'referredBy', desc: false }]);
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
          <Select
            value={selectedReferrer}
            placeholder="Select Referrer"
            w="200px"
            onChange={(e) => {
              setSelectedReferrer(e.target.value);
              handleFiltersChange(e, 'referredBy');
            }}
          >
            {referredByValues.map((status) => (
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
            value={selectedState}
            placeholder="Select State"
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
            value={selectedBranch}
            placeholder="Select Branch"
            w="200px"
            onChange={(e) => {
              setSelectedBranch(e.target.value);
              handleFiltersChange(e, 'branch');
            }}
          >
            {/* TODO: remove hard coded values. Get from API/Constants */}
            {branchValues.map((type) => (
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
              setSelectedReferrer('All');
              setSelectedBranch('All');
              setGlobalFilter('');
              clearFilters();
            }}
          >
            Clear Filters
          </Button>
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
            bg={brandColor}
          >
            Download
          </Button>
        </Flex>
      </Flex>
      <Flex
        align={{ sm: 'flex-start', lg: 'flex-start' }}
        justify={{ sm: 'flex-end', lg: 'flex-end' }}
        w="100%"
        px="22px"
        mb="36px"
      >
        <Button
          w="max-content"
          backdropFilter="blur(11px)"
          mt="auto"
          fontSize="sm"
          color="white"
          fontWeight="bold"
          onClick={() => {
            setSelectedPeriod('Daily');
          }}
          bg={selectedPeriod === 'Daily' ? brandColor : ''}
        >
          Daily
        </Button>
        <VSeparator
          mx="5px"
          bg={paleGray}
          display={{ base: 'none', xl: 'flex' }}
        />
        <Button
          w="max-content"
          backdropFilter="blur(11px)"
          mt="auto"
          fontSize="sm"
          color="white"
          fontWeight="bold"
          onClick={() => {
            setSelectedPeriod('Weekly');
          }}
          bg={selectedPeriod === 'Weekly' ? brandColor : ''}
        >
          Weekly
        </Button>
        <VSeparator
          mx="5px"
          bg={paleGray}
          display={{ base: 'none', xl: 'flex' }}
        />
        <Button
          w="max-content"
          backdropFilter="blur(11px)"
          mt="auto"
          fontSize="sm"
          color="white"
          fontWeight="bold"
          onClick={() => {
            setSelectedPeriod('Monthly');
          }}
          bg={selectedPeriod === 'Monthly' ? brandColor : ''}
        >
          Monthly
        </Button>
        <VSeparator
          mx="5px"
          bg={paleGray}
          display={{ base: 'none', xl: 'flex' }}
        />
        <Button
          w="max-content"
          backdropFilter="blur(11px)"
          mt="auto"
          fontSize="sm"
          color="white"
          fontWeight="bold"
          onClick={() => {
            setSelectedPeriod('Quarterly');
          }}
          bg={selectedPeriod === 'Quarterly' ? brandColor : ''}
        >
          Quarterly
        </Button>
        <VSeparator
          mx="5px"
          bg={paleGray}
          display={{ base: 'none', xl: 'flex' }}
        />
        <Button
          w="max-content"
          backdropFilter="blur(11px)"
          mt="auto"
          fontSize="sm"
          color="white"
          fontWeight="bold"
          onClick={() => {
            setSelectedPeriod('Yearly');
          }}
          bg={selectedPeriod === 'Yearly' ? brandColor : ''}
        >
          Yearly
        </Button>
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
