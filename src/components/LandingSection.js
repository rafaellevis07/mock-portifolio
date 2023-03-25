import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7" />
    <VStack spacing={2} mt={4}>
      <Heading color="white" size="sm" mt={1}>
        {greeting}
      </Heading>
      <Heading color="white" size="2xl">
        <br />
        {bio1}
        <br />
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
