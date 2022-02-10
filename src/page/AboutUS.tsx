import { Flex } from "@chakra-ui/react";
import { AboutUSMainSection } from "../components/People/Main";
import { Footer } from "../components/Footer";
import { NavigationBar } from "../components/NavigationBar";

export const AboutUs = () => {
  return (
    <Flex minW={["none","none","none","1900px"]} flexDirection="column">
      <NavigationBar />
      <AboutUSMainSection />
      <Footer />
    </Flex>
  );
};
