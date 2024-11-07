import React from "react";
import DashboardLaout from "../../Components/DashboardLayout";
import SupportCard from "./Components/SupportCard";
import { Stack } from "@chakra-ui/react";

import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import ContactCard from "./Components/ContactCard";
import InfoCard from "../Dashboard/Components/InfoCard";

const Support = () => {
  return (
    <DashboardLaout title="Support">
      <Stack spacing="5rem">
        <SupportCard
          leftComponent={<ContactCard />}
          icon={IoMdMail}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />

        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Chatbot"
              imgUrl="/grid_bg.svg"
              text="Chat with us now"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />

      </Stack>
    </DashboardLaout>
  );
};

export default Support;
