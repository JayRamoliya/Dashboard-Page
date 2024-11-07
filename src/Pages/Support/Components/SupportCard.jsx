import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex gap={6}
      ml="100px"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={icon} boxSize="26" color="p.purple" />
        <Text fontWeight="medium" as="h1" textStyle="h1">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;