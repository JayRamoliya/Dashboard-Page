import React from "react";
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./Components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const tabs = [
  {
    name: "All",
    count: 349,
  },
  {
    name: "Deposit",
    count: 114,
  },
  {
    name: "Withdraw",
    count: 55,
  },
  {
    name: "Trade",
    count: 58,
  },
];

const TransactionPage = () => {
  return (
    <>
      <DashboardLayout title="Transactions">
        <Flex justify="end" mt="2" mb={3}>
          <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
        </Flex>

        <Card borderRadius="4">
          <Tabs>
            <TabList
              py="4"
              display="flex"
              w="full"
              justifyContent="space-between"
            >
              <HStack>
                {tabs.map((tab) => (
                  <Tab key={tab.name} display="flex" gap="2" pb="4">
                    {tab.name}{" "}
                    <Tag colorScheme="gray" borderRadius="full">
                      {tab.count}
                    </Tag>
                  </Tab>
                ))}
              </HStack>

              <InputGroup maxWidth="200px" pr="6">
                <InputLeftElement pointerEvents="none">
                  <Icon as={BsSearch} />
                </InputLeftElement>
                <Input type="tel" placeholder="Search here " />
              </InputGroup>
            </TabList>

            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>

              <TabPanel>
                <TransactionTable />
              </TabPanel>

              <TabPanel>
                <TransactionTable />
              </TabPanel>

              <TabPanel>
                <TransactionTable />
              </TabPanel>
              
            </TabPanels>
          </Tabs>
        </Card>
      </DashboardLayout>
    </>
  );
};

export default TransactionPage;
