import { Flex } from "@chakra-ui/react";
import { ContentsMainSection } from "../components/News/Main";
import { Footer } from "../components/Footer";
import { NavigationBar } from "../components/NavigationBar";

export const Contents = () => {
  return (
    <Flex flexDirection="column">
      <NavigationBar />
      <ContentsMainSection />
      <Footer />
    </Flex>
  );
};
