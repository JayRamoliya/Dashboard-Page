import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import React from "react";
import { FaUserTie } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px={4} bg="white">
      <HStack
        fontWeight="medium"
        maxW="70rem"
        h="16"
        justify="space-between"
        // px="32"
        mx="auto"
      >
        <Icon as={FaBars} onClick={onOpen}
          display={{
            base:"block",
            lg:"none"
          }}
        />
        <Heading fontSize="28px" fontWeight="medium">{title}</Heading>
        <Menu>
          <MenuButton>
            {/* aaya fontsize hatu ane aave fontSize */}
            <Icon as={FaUserTie} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>

  );
};

export default TopNav;
