import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6" justify="space-between"
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >

      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack color="black.80 ">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">$ 112,312.24</Text>
        </Stack>

        <Stack>
          <HStack color="black.80 ">
            <Text fontSize="sm">Wallet Balances</Text>
        </HStack>

          <HStack spacing={3}
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
              <Text textStyle="h2" fontWeight="medium">22.39401000</Text><Tag  fontWeight="medium">BTC</Tag>
            </HStack>

            <HStack>
              <Text textStyle="h2" fontWeight="medium">₹ 1,300.00</Text><Tag>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
