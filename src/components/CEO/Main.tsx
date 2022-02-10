import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

export const CEOMainSection = () => {
  return (
    <Flex
      flex="1"
      flexDirection="row"
      bgColor="#f4f4f4"
      align="center"
      justify="center"
      paddingX="14"
      paddingY="20"
    >
      <Box
        display="flex"
        flex="1"
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
      >
        <Information />
        <MainImage />
      </Box>
    </Flex>
  );
};

const Information = () => {
  return (
    <Flex flexDirection="column">
      {/* <Logo /> */}
      <Image src="/summit-logo-ver2.png" alt="logo" w={14} h={14} />
      <VStack spacing={0} align="flex-start" mt="5">
        <Text fontSize="2xl">
          국내 최초의{" "}
          <Text fontSize="2xl" fontWeight="bold">
            음악 저작권
          </Text>
        </Text>
        <Text fontSize="2xl">
          <Text fontSize="2xl" fontWeight="bold">
            독점 경매
          </Text>{" "}
          플랫폼{" "}
          <Text fontSize="2xl" color="#ff595a">
            써밋플레이
          </Text>
          입니다
        </Text>
        <Text fontSize="md" color="#3b3b3b" paddingTop="5" textAlign="left">
          국내{" "}
          <Text fontWeight="bold">
            일반인
          </Text>{" "}
          <Text fontWeight="bold">
            대상 최초의 미발매 음원 경매{" "}
          </Text>
          및{" "}
          <Text fontWeight="bold">
            음원발매{" "}
          </Text>{" "}
          플랫폼 써밋플레이(주)입니다.
          <br />
          가수를 꿈꾸었던 이들, 작곡을 꿈꾸었던 이들이 원하는 목표 "명성"
          <br />
          저희 써밋플레이(주)에서 이루어 드리겠습니다.
        </Text>
        <Text fontSize="md" color="#3b3b3b" paddingTop="5" textAlign="left">
          "우리는 소수의 주관적 안목으로 당신이 평가받길 바라지 않습니다.
          <br />
          당신만의 생각과 감정으로 많은 사람들 앞에서 노래하고 그들에게 인정받는
          꿈<br />
          당신의 노래를 통해 사람들이 용기와 희망을 얻고 치유 받는 꿈<br />
          당신만의 노래를 듣고 싶습니다.
          <br />
          우리와 함께 도전해 보지 않겠어요?
          <br />
          우리는 당신의 열정과 재능을 믿습니다."
        </Text>
      </VStack>
      <Text mt="10" fontSize="lg">
        써밋플레이{" "}
        <Text pl="2.5" as="span" fontSize="3xl" fontWeight="bold">
          오 태 현
        </Text>
      </Text>
    </Flex>
  );
};

const MainImage = () => {
  return <Image src="/image/im_ceo.JPG" w="651px" />;
};
