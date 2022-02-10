import { Text, VStack, HStack, StackDivider } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Wrapper>
      <Navigation />
      <SubInformation />
    </Wrapper>
  );
};

const Wrapper: FC = ({ children }) => {
  return (
    <VStack w="100%" bg="#3b3b3b">
      {children}
    </VStack>
  );
};

const Navigation = () => {
  return (
    <HStack
      mt="28"
      mb="8"
      spacing={["2","3","4","5"]}
      divider={<StackDivider borderColor="gray.200" />}
    >
      <Link to="/">
        <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
          회사소개
        </Text>
      </Link>
      <Link to="/policy.pdf" reloadDocument>
        <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
          이용약관
        </Text>
      </Link>
      <Link to="/privacy.pdf" reloadDocument>
        <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
          개인정보처리방침
        </Text>
      </Link>
      <Link to="/">
        <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
          고객센터
        </Text>
      </Link>
    </HStack>
  );
};

const SubInformation = () => {
  return (
    <VStack paddingBottom="24">
      <HStack w="100%" display={["stack","stack","flex","flex"]} spacing={["1","3","4","5"]} divider={<StackDivider borderColor="gray.200" />}>
        <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="light">
          <Text as="span" fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
            대표{" "}
          </Text>
          오태현
        </Text>
        <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="light">
          <Text as="span" fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
            E-mail{" "}
          </Text>
          summitplay@summit-play.com
        </Text>
        <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="light">
          <Text as="span" fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
            전화문의{" "}
          </Text>
          02-786-2913
        </Text>
      </HStack>
      <HStack w="100%" display={["stack","stack","flex","flex"]} spacing={["2","3","4","5"]} divider={<StackDivider borderColor="gray.200" />}>
        <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="light">
          <Text as="span" fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
            사업자등록번호{" "}
          </Text>
          443-86-02024
        </Text>
        <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="light">
          <Text as="span" fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
            통신판매업신고{" "}
          </Text>
          2022-서울서초-0262호
        </Text>
      </HStack>
      <Text fontSize={["sm","md","md","md"]} color="white" fontWeight="light">
        <Text as="span" fontSize={["sm","md","md","md"]} color="white" fontWeight="bold">
          주소{" "}
        </Text>
        서울시 서초구 반포대로13길 7 401호 (서초동, 제이라인빌딩) 써밋플레이(주)
      </Text>
    </VStack>
    
  );
};
