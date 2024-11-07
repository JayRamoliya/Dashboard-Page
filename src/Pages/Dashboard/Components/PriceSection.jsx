import {
  Stack,
  Text,
  HStack,
  Icon,
  Button,
  Flex,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import { CustomeCard } from "../../../Chakra/CustomeCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:55 PM", "8:55 PM", "6:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomeCard>
      <Flex justify="space-between" align="start">

        <Stack p="6">
          <HStack color="black.80 ">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>

          <HStack
            spacing={2}
            flexDir={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              sm: "center",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>
            Sell
          </Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded" colorScheme="green">

        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                key={tab}
                _selected={{ bg: "white" }}
                fontSize="sm"
                p="6px"
                borderRadius="4">
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </CustomeCard>
  );
};

export default PriceSection;
