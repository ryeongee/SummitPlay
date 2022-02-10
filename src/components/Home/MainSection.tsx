import { Image, Text, Box, VStack, HStack, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ReactComponent as Chart } from "../../assets/svg/Chart.svg";
import styled from "@emotion/styled";

export const MainSection = () => {
  return (
    <Wrapper>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </Wrapper>
  );
};

const Wrapper: FC = ({ children }) => {
  return (
    <Flex flexDirection="column" w="100%" maxW="1920px" margin="0 auto" bg="#f4f4f4">
      {children}
    </Flex>
  );
};

const SectionOne = () => {
  return (
    <HStack w="100%" spacing={0} align={["center","center","center","flex-start"]} flexDirection={["column","column","column","row"]}>
      <Image
        display={["none","none","none",'flex']}
        src="/image/hero-2.png"
        srcSet="/image/hero-2@2x.png 2x,
             /image/hero-2@3x.png 3x"
        ml={["0","5","10","16"]}
        mr={["0","5","10","16"]}
      />
      <Flex flexDirection="column">
        <Text fontSize={["3xl","3xl","4xl","4xl"]} fontWeight="bold" textAlign="center" pt={["20","20","20","44"]}>
          미발매 음원 듣고,
          <br />
          원하는 곡 선택
          <br />
          발매하고{" "}
          <Text as="span" fontSize={["3xl","3xl","4xl","4xl"]} fontWeight="bold" color="#ff595a">
            수익창출
          </Text>
          로 스타까지
        </Text>
        <Flex mt="28" ml="-28" display={['none','none','none','flex']}>
          <Chart />
        </Flex>
        <Flex display={['flex','flex','flex','none']} margin="0 auto">
          <Chart width={300} />
        </Flex>
      </Flex>
    </HStack>
  );
};

const SectionTwo = () => {
  return (
    <HStack w="100%" spacing={0} justify="center" flexDirection={["column","column","column","row"]} mt={["0","0","0","-24"]}>
      <VStack spacing={0} align={["center","center","center","flex-start"]} mt="10">
        <Text fontSize="3xl" fontWeight="bold">
          누구나 경매를 통해
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          미발매 음원{" "}
          <Text as="span" fontSize="4xl" fontWeight="bold" color="#ff595a">
            판매
          </Text>{" "}
          및{" "}
          <Text as="span" fontSize="4xl" fontWeight="bold" color="#ff595a">
            구매
          </Text>
        </Text>
        <Text fontSize="lg" color="#3b3b3b" paddingTop="5" textAlign={['center','center','center','left']}>
          누구나 경매를 통해서 미발매된 음악의 저작권을 소유할 수 있습니다.
          <br />
          써밋플레이를 통해서 마음에 드는 음원을 듣고
          <br />
          경매를 통해 구매하여 가수가 되어보세요!
        </Text>
      </VStack>
      <Image
        display={['none','none','none','flex']}
        paddingLeft="16"
        objectFit="cover"
        w="288px"
        h="300px"
        objectPosition="0 0"
        src="/image/hero-a.png"
        srcSet="/image/hero-a@2x.png 2x,
             /image/hero-a@3x.png 3x"
      />
    </HStack>
  );
};

const SectionThree = () => {
  return (
    <Flex
      display='flex'
      flexDirection={["column","column","column","row"]}
      w="100%"
      spacing={0}
      justify="center"
      align="center"
      paddingTop="14"
    >
      <Image
        src="/image/hero-4.png"
        srcSet="/image/hero-4@2x.png 2x,
             /image/hero-4@3x.png 3x"
        objectFit="contain"
        mr="32"
      />
      <VStack spacing={0} align={["center","center","center","flex-start"]}>
        <Text fontSize="3xl" fontWeight="bold" textAlign={['center','center','center','right']}>
          음원발매를 위한
          <br />
          <Text as="span" fontSize="4xl" fontWeight="bold">
            모든{" "}
            <Text as="span" fontSize="4xl" fontWeight="bold" color="#ff595a">
              가이드
            </Text>{" "}
            제공
          </Text>
        </Text>
        <Text
          fontSize="lg"
          as="span"
          color="#3b3b3b"
          paddingTop="5"
          textAlign={['center','center','center','right']}
        >
          음원발매에 필요한 부분을
          <br />내 근처에서 선택하고 의뢰하세요
        </Text>
      </VStack>
    </Flex>
  );
};

const SectionFour = () => {
  return (
    <Flex w="100%" align="center" mt="16">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={["center","center","center","flex-end"]}
        alignItems="center"
        borderLeftRadius="full"
        bgColor="#707071"
        ml={['0','0','0',"32"]}
        h="500"
        w="100%"
      >
        <Flex flexDirection="column" align={['center','center','center',"left"]} mr={['0','0','0',"32"]}>
          <Text fontSize="3xl" fontWeight="bold" color="white">
            누구나 쉽고 저렴하게!
          </Text>
          <Text fontSize="4xl" fontWeight="bold" color="white">
            음원{" "}
            <Text as="span" fontSize="4xl" fontWeight="bold" color="#ff595a">
              발매
            </Text>
          </Text>
          <Text fontSize="lg" color="white" paddingTop="5" textAlign="left">
            음원 발매는 복잡하고 비싸다는 편견, 이제는 NO!
            <br />
            써밋플레이에서는 쉽고 간단하게 저렴한 가격으로
            <br />
            음원을 발매할 수 있어요. 기회를 놓치지 마세요!
          </Text>
        </Flex>
        <Image
          display={['none','none','none','flex']}
          src="/image/hero-5.png"
          srcSet="/image/hero-5@2x.png 2x,
             /image/hero-5@3x.png 3x"
          mr="44"
        />
      </Box>
    </Flex>
  );
};

const SectionFive = () => {
  return (
    <Flex flexDirection={['column','column','column','row']} w="100%" align="center" justify="center" mt="20">
      <Image
        src="/image/hero-6.png"
        srcSet="/image/hero-6@2x.png 2x,
           /image/hero-6@3x.png 3x"
        mr={['0','0','0',"44"]}
      />
      <Flex flexDirection="column" mr={['0','0','0',"32"]}>
        <Text fontSize="3xl" fontWeight="bold" textAlign={['center','center','center',"right"]}>
          취미로 가수가 되는 플랫폼
          <br />
          <Text as="span" fontSize="4xl" fontWeight="bold">
            <Text as="span" fontSize="4xl" fontWeight="bold" color="#ff595a">
              독점
            </Text>{" "}
            수익 OK
          </Text>
        </Text>
        <Text fontSize="lg" paddingTop="5" textAlign={['center','center','center',"right"]}>
          나도 가수다? 음원을 직접 발매해 보세요!
          <br />
          저작권을 독점하여 내가 좋아하는 음원도 간직하고
          <br />
          덤으로 수익도 함께 챙겨가세요!
        </Text>
      </Flex>
    </Flex>
  );
};

const SectionSix = () => {
  return (
    <>
      <Flex display={['none','none','none','flex']}>
        <BGImage w="100%" h="560px">
          <Box paddingX={["0","0","0","480px"]} marginY={["50px","50px","50px","150px"]}>
            <Text textAlign={['center','center','center',"left"]} fontSize="3xl" fontWeight="bold">
              일반인도 가수!
            </Text>
            <Text textAlign={['center','center','center',"left"]} fontSize="4xl" fontWeight="bold">
              내 노래가{" "}
              <Text as="span" fontSize="4xl" fontWeight="bold" color="#ff595a">
                노래방
              </Text>
              에
            </Text>
            <Text fontSize="lg" color="#3b3b3b" paddingTop="5" textAlign={['center','center','center',"left"]}>
              평범한 나도 써밋플레이만 있다면
              <br />
              직접 노래를 발매할 수 있어요
              <br />
              노래방에서 내 노래가 흘러나오는 특별한 경험!
            </Text>
          </Box>
        </BGImage>
      </Flex>
      <Flex w="100%" display={['flex','flex','flex','none']} justify="center">
        <Box paddingX={["0","0","0","480px"]} marginY={["50px","50px","50px","150px"]}>
          <Text textAlign={['center','center','center',"left"]} fontSize="3xl" fontWeight="bold">
            일반인도 가수!
          </Text>
          <Text textAlign={['center','center','center',"left"]} fontSize="4xl" fontWeight="bold">
            내 노래가{" "}
            <Text as="span" fontSize="4xl" fontWeight="bold" color="#ff595a">
              노래방
            </Text>
            에
          </Text>
          <Text fontSize="lg" color="#3b3b3b" paddingTop="5" textAlign={['center','center','center',"left"]}>
            평범한 나도 써밋플레이만 있다면
            <br />
            직접 노래를 발매할 수 있어요
            <br />
            노래방에서 내 노래가 흘러나오는 특별한 경험!
          </Text>
        </Box>
      </Flex>
    </>
  );
};

const SectionSeven = () => {
  return (
    <SectionSevenBG w="100%" h={["auto","auto","800px","520px"]} bgColor={["#ff7072","none","none","none"]} paddingBottom={["50px","none","none","none"]}>
      <Flex 
      flexDirection={['column','column','column',"row"]} 
      align="center" 
      justify="center" 
      mt={["0","0","12","12"]}>
        <Image
          src="/image/hero-8.png"
          srcSet="/image/hero-8@2x.png 2x,
             /image/hero-8@3x.png 3x"
        />
        <Flex flexDirection="column" align={['center','center','center',"left"]} mr={["0","0","0","32"]} ml={["0","0","0","52"]}>
          <Text fontSize="4xl" fontWeight="bold">
            2월 말 오픈예정
          </Text>
          <Text fontSize="2xl" paddingTop="4" fontWeight="bold">
            '써밋플레이 APP' 다운로드 해 보세요!
          </Text>
          <HStack marginY={5}>
            <Image
              display={['none','none','none','flex']}
              src="/image/ic-3.png"
              srcSet="/image/ic-3@2x.png 2x,
             /image/ic-3@3x.png 3x"
            />
            <Image display={['image','image','image','none']} width="150px" src="/image/ic-3.png"/>
            <Image
              display={['none','none','none','flex']}
              src="/image/ic-4.png"
              srcSet="/image/ic-4@2x.png 2x,
             /image/ic-4@3x.png 3x"
            />
            <Image display={['image','image','image','none']} width="150px" src="/image/ic-4.png"/>
          </HStack>
          <Text fontSize={["sm","xl","xl","xl"]} paddingTop="4" fontWeight="medium">
            Enjoy with Summit Play,
            <br /> the best playground that makes your dreams come true
          </Text>
        </Flex>
      </Flex>
    </SectionSevenBG>
  );
};

const BGImage = styled(Box)`
  background-image: url(/image/hero-7.png);
  background-image: -webkit-image-set(
    url(/image/hero-7.png) 1x,
    url(/image/hero-7@2x.png) 2x,
    url(/image/hero-7@3x.png) 3x
  );
  background-image: image-set(
    url(/image/hero-7.png) 1x,
    url(/image/hero-7@2x.png) 2x,
    url(/image/hero-7@3x.png) 3x
  );
`;

const SectionSevenBG = styled(Box)`
  background-image: url(/image/edc5706b8a6dbc4d18255a0fe99cf2d5.png);
  background-image: -webkit-image-set(
    url(/image/edc5706b8a6dbc4d18255a0fe99cf2d5@3x.png) 1x,
    url(/image/edc5706b8a6dbc4d18255a0fe99cf2d5@3x.png) 2x,
    url(/image/edc5706b8a6dbc4d18255a0fe99cf2d5@3x.png) 3x
  );
  background-image: image-set(
    url(/image/edc5706b8a6dbc4d18255a0fe99cf2d5@3x.png) 1x,
    url(/image/edc5706b8a6dbc4d18255a0fe99cf2d5@3x.png) 2x,
    url(/image/edc5706b8a6dbc4d18255a0fe99cf2d5@3x.png) 3x
  );
`;
