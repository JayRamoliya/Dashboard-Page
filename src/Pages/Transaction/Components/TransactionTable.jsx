import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";
import React from "react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2022-08-12",
      time: "12:10 PM",
      type: {
        name: "INR Deposite",
        tag: "E-Tranfer",
      },
      amount: "+₹81,123.16",
      status: "Pending",
    },
    {
      id: "HD82NA4H",
      date: "2022-09-12",
      time: "1:10 PM",
      type: {
        name: "BTC Deposite ",
        tag: "Wire Tranfer",
      },
      amount: "+₹81,123",
      status: "Processing",
    },
    {
      id: "HD82NA5H",
      date: "2022-08-8",
      time: "2:10 PM",
      type: {
        name: "INR Whithdrw",
        tag: "",
      },
      amount: "+₹81,123",
      status: "Cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2022-08-12",
      time: "3:10 PM",
      type: {
        name: "Buy",
        tag: "",
      },
      amount: "+₹81,123",
      status: "Completed",
    },
    {
      id: "HD82NA9H",
      date: "2022-08-4",
      time: "8:10 PM",
      type: {
        name: "Sell",
        tag: "",
      },
      amount: "+238,851",
      status: "Completed",
    },
    {
      id: "HD82NA1H",
      date: "2022-08-2",
      time: "9:10 PM",
      type: {
        name: "BTC Whithdrw",
        tag: "",
      },
      amount: "+₹8561,123",
      status: "Completed",
    },
  ];

  const statusColor = {
    Pending: "#797E82",
    Processing: "#F5A50B",
    Completed: "#059669",
    Cancelled: "#DC2626",
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
      
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amout</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>

        <Tbody color="p.black">

          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td>{data.id}</Td>

              <Td>
                <Stack spacing="0">
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  
                  <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text>

                </Stack>
              </Td>

              <Td>
                <Stack spacing="0">
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>

                  <Text fontSize="xs" color="black.60">
                    {data.type?.tag}
                  </Text>

                </Stack>
              </Td>

              <Td fontSize="sm" fontWeight="medium">
                {data.amount}
              </Td>

              <Td fontSize="sm" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {data.status}
                </Tag>
              </Td>

            </Tr>
          ))}

        </Tbody>

      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
