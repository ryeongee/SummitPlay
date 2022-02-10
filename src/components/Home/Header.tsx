import { Image, Text, Box, VStack, HStack, Flex, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { ReactComponent as MainLogo } from "../../assets/svg/main.svg";
import { ReactComponent as Title } from "../../assets/svg/Title.svg";

export const Header = () => {
  return (
    <>
      <Wrapper>
        <Box zIndex={100}>
          <NavigationHeader />
        </Box>
        <HStack
          display={['none', 'none', 'none', 'flex']}
          // maxWidth="1920px"
          width="100%"
          position="relative"
          // marginX="40"
          paddingX="40"
          justify="space-between"
          paddingTop="40"
          paddingBottom="20"
        >
          <HeaderBox />
          <MainTitle />
        </HStack>
        <Flex
        display={['flex', 'flex', 'flex', 'none']}
        width="100%"
        position="relative"
        justify="space-between"
        paddingX={["5","10","10","40"]}
        paddingTop={["500px","700px","40","40"]}
        paddingBottom={["30","35","20","20"]}
        >
          <HeaderBox />
          <MainTitle />
        </Flex>
      </Wrapper>
    </>
  );
};

const Wrapper: FC = ({ children }) => {
  return (
    <BackgroundWrapper display="flex" flexDirection="column" w="100vh">
      {children}
    </BackgroundWrapper>
  );
};

const NavigationHeader = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <>
      <Flex
        position="relative"
        w="100%"
        h="18"
        paddingX={["1", "1", "1","40"]}
        marginY="6"
        justify="space-between"
        align="center"
      >
        <Link to="/">
          <MainLogo height={32} />
        </Link>
        <HStack display={['none','none','none','flex']} spacing="10">
          <Text fontSize="md" color="white" fontWeight="bold">
            Home
          </Text>
          <Link to="/about">
            <Text fontSize="md" color="white">
              About us
            </Text>
          </Link>
          <Link to="/contents">
            <Text fontSize="md" color="white">
              Contents
            </Text>
          </Link>
        </HStack>
        {/* HamburgerIcon */}
        <Flex display={['flex','flex','flex','none']}>
          <Button onClick={(e)=>changeDisplay("flex")} variant="unstyled" position="relative" display="block" w="1.5rem" h="40px" marginTop={1} marginRight={1} backgroundColor="rgba(0,0,0,0)">
            <Text as='span' position="absolute" left={2} top={2} w="1.5rem" h={1} borderRadius={2} backgroundColor="rgba(256,256,256,0.6)">&nbsp;</Text>
            <Text as='span' position="absolute" left={2} top={4} w="1.5rem" h={1} borderRadius={2} backgroundColor="rgba(256,256,256,0.6)">&nbsp;</Text>
            <Text as='span' position="absolute" left={2} top={6} w="1.5rem" h={1} borderRadius={2} backgroundColor="rgba(256,256,256,0.6)">&nbsp;</Text>
          </Button>
        </Flex>
      </Flex>
      {/* PhoneTabletMenuBar */}
      <Flex flex={1} position="fixed" top="0" z-index={-1} w="100%" backgroundColor="white" display={display} align="center" flexDirection="column">
        {/* CloseIcon */}
        <Flex width="100%" justify="flex-end" paddingX={2} >
          <Flex w="40px" h="70px" alignItems="center" justifyContent="center">
            <Button onClick={(e)=>changeDisplay('none')} variant="unstyled" display="block" position="relative" w="1.5rem" h="40px"  backgroundColor="rgba(0,0,0,0)" >
                <Box w="40px" h="40px" position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
                  <Text w="33px" h={1} position="absolute" transform="rotate(135deg)" top="50%" translateX="0px" backgroundColor="rgba(0,0,0,0.6)" borderRadius={2} marginLeft={1} marginRight={1}/>
                  <Text w="33px" h={1} position="absolute" transform="rotate(45deg)" top="50%" translateX="0%" backgroundColor="rgba(0,0,0,0.6)" borderRadius={2} marginLeft={1} marginRight={1}/>
                </Box>
              </Button>
          </Flex>
        </Flex>
        <Link to="/">
          <Text h="100px" lineHeight="100px" marginLeft={5} fontSize="xl" color="black" fontWeight="bold">
            Home
          </Text>
        </Link>
        <Link to="/about">
          <Text h="100px" lineHeight="100px" marginLeft={5} fontSize="xl" color="black">
            About us
          </Text>
        </Link>
        <Link to="/contents">
          <Text h="100px" lineHeight="100px" marginLeft={5} fontSize="xl" color="black">
            Contents
          </Text>
        </Link>
      </Flex>
    </>
  );
};

const HeaderBox = () => {
  return (
    <Box paddingX={["2","4","8","16"]} paddingY={["2","4","6","12"]} bgColor="black" borderRadius="2xl">
      <Text fontSize={["2px","xs","sm","3xl"]} color="white" fontWeight="bold" mb="5">
        2월 말 COMING SOON
      </Text>
      <Text fontSize={["1px","xs","sm","lg"]} color="white">
        전세계 최초의 미발매 음원
      </Text>
      <Text maxW={['110px','140px','150px','none']} fontSize={["1px","xs","sm","lg"]} color="white">
        저작권 독점 경매 및 음원 발매 중개 플랫폼
      </Text>
      <HStack mt="4" spacing="5">
        <Image src="/image/Google.png" w={["6","6","6","16"]} h={["6","6","6","16"]} />
        <Image src="/image/Apple.png" w={["6","6","6","16"]} h={["6","6","6","16"]} />
      </HStack>
    </Box>
  );
};

const MainTitle = () => {
  return (
    <VStack align="flex-end">
      <Text fontSize={["1px","sm","sm","4xl"]} color="white" fontWeight="bold">
        꿈을 이루어 드리는 최고의 놀이터
      </Text>
      <Flex display={['none','none','none','flex']}>
        <Title/>
      </Flex>
      <Flex display={['none','none','flex','none']}>
        <Title width="150px"/>
      </Flex>
      <Flex display={['flex','flex','none','none']}>
        <Title width="100px"/>
      </Flex>
    </VStack>
  );
};

const BackgroundWrapper = styled(Box)`
  position: relative;
  width: 100%;
  // justify-content: center;
  background-image: url(/summit-logo-ver2.png);
  background-position: 50% 50%;
  background-color: #ff3e46;
  background-size: contain;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }
`;




