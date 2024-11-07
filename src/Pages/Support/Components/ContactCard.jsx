import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
      <Card p="6" borderRadius="1rem">
        <Stack spacing="6">
          <Text fontWeight="medium" fontSize="sm">
            you will receive response within 24 hr of time of submit.
          </Text>

          <HStack
            flexDir={{
              base: "column",
              md: "row",
            }}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter your name" type='text' />
            </FormControl>

            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input type='text' placeholder="Enter your surname" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder="Enter your email" />
          </FormControl>

          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your message" />
          </FormControl>

          <Checkbox defaultChecked>
            <Text fontSize="xs">
              I agree with
              <Box as="span" color="p.purple">
                {" "}
                Terms & Conditions.
              </Box>
            </Text>
          </Checkbox>

          <Stack>
            <Button fontSize="sm">Send a Message</Button>
            <Button fontSize="sm" colorScheme="gray">
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
      </Card>
  );
};

export default ContactCard;
