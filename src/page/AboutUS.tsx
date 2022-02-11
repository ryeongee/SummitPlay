import { Flex } from "@chakra-ui/react";
import { AboutUSMainSection } from "../components/People/Main";
import { Footer } from "../components/Footer";
import { NavigationBar } from "../components/NavigationBar";

export const AboutUs = () => {
  return (
    <Flex flexDirection="column">
      <NavigationBar />
      <AboutUSMainSection />
      <Footer />
    </Flex>
  );
};
