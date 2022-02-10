import { Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Home/Header";
import { MainSection } from "../components/Home/MainSection";

export const Home = () => {
  return (
    <Flex flexDirection="column" justifyContent ="center">
      <Header />
      <MainSection />
      <Footer />
    </Flex>
  );
};
