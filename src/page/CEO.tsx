import { Flex } from "@chakra-ui/react";
import { CEOMainSection } from "../components/CEO/Main";
import { Footer } from "../components/Footer";
import { NavigationBar } from "../components/NavigationBar";

export const CEO = () => {
  return (
    <Flex minW="1900px" flexDirection="column">
      <NavigationBar />
      <CEOMainSection />
      <Footer />
    </Flex>
  );
};
