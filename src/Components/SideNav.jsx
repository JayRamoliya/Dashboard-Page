import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();

  // console.log(location);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  // this array for side navbar show icon and name
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/TransactionPage",
    },
  ];

  return (
    // stack provide a display flex and flex directions prop... , used to stack elements in the vertical direction
    <Stack
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
      bg="white"
      textAlign="center"
      justify="space-between"
    >
      <Box mt="6" mx="3">
        <Heading fontSize="20px" as="h1" textAlign="center" pt="3.5rem">
          Jay Ramoliya
        </Heading>

        <Box mt="6" mx="3" textAlign="center">
          {navLinks.map((nav) => (
            // hstack provide a display flex and align item center prop... , used to stack elements in the horizontal direction
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                  cursor: "pointer",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink('/support') ? "#F3F3F7" : "transparent"}
            color={isActiveLink('/support') ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
              cursor: "pointer",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
