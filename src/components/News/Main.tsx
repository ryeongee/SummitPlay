import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import { FC } from "react";

export const ContentsMainSection = () => {
  return (
    <Flex w="100vw" flexDirection="column" align="center">
        <TextSection/>
        <NewsSection/>
    </Flex>
  );
};

const TextSection = () =>{
    return(
        <>
            <Flex width={["300px","450px","585px","auto"]} margin="0 auto">
                <Text paddingBottom={50} fontSize={["2xl","4xl","5xl","5xl"]} textAlign="center" fontWeight="bold" background="none" marginTop={100}>
                    <Text as="span" color="#ff3e46">써밋플레이</Text>
                    의 다양한 뉴스를 만나보실 수 있습니다.
                </Text>
            </Flex>
        </>
    );
};

const NewsSection = () =>{
  return(
    <Wrapper>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        {/* <SectionFour/>
         */}
    </Wrapper>
  );
};

const Wrapper: FC = ({ children }) => {
    return (
        <>
            <Flex flexDirection={["column","column","row","row"]} flexFlow={["no-wrap","no-wrap","wrap","wrap"]}  maxW={["none","600px","800px","1200px"]} w={["100%","90%","100%","70%"]} paddingBottom={100} align="center" justify={["center","center","center","center"]} bg="#f4f4f4" >
                {children}
            </Flex>  
        </>
    );
};
const SectionTwo = () => {
    return (
        <>
            <Box w={400}>
                <Link href="https://www.gokorea.kr/news/articleView.html?idxno=717559" isExternal>
                    <Flex flexDirection="column" w={300} margin="0 auto">
                        <Image src="https://cdn.gokorea.kr/news/photo/202112/717559_30423_454.jpg" alt="No-img" margin="0 auto" w={300}></Image>
                        <Flex marginTop={1} justify="space-between">
                            <Text as="span" fontWeight="bold">공감신문</Text>
                            <Text>2021.12.30</Text>
                        </Flex>
                        <Text marginTop={3} fontSize="2xl" fontWeight="bold">
                            미발매 음원 저작권 독점 옥션 및 일반인 가수되는 앱 ‘써밋플레이’ 출시
                        </Text>
                        <Text marginTop={5} marginBottom={5}>
                            써밋플레이는 옥션을 통해서 누구나 자유롭게 미발매된 곡을 판매하고 구매할 수 있으며, 음원 발매에 필요한 모든 업체를 한곳에 모은 플랫폼이다.
                            <br/>써밋플레이에서는 미발매 음원을 최종 구매 시 곡뿐만 아니라 저작권까지 구매하는 방법으로 누구나 음원 발매를 통해 수익까지 창출해 낼 수 있다.
                        </Text> 
                    </Flex>  
                </Link>
            </Box>
        </>
    );
};


const SectionOne = () => {
    return (
        <>
            <Box w={400}>
                <Link href="https://www.dailysecu.com/news/articleView.html?idxno=133020" isExternal>
                    <Flex flexDirection="column" w={300} margin="0 auto">
                        <Image src="https://www.dailysecu.com/news/photo/202112/133020_156376_3835.png" alt="No-img" margin="0 auto" w={300}></Image>
                        <Flex marginTop={1} justify="space-between">
                            <Text as="span" fontWeight="bold">데일리시큐</Text>
                            <Text>2021.12.29</Text>
                        </Flex>
                        <Text marginTop={3} fontSize="2xl" fontWeight="bold">
                            써밋플레이, 작곡가·가수 꿈 돕는 미발매 음원 발매 어플리케이션 출시 예정
                        </Text>
                        <Text marginTop={5} marginBottom={5}>
                            써밋플레이는 일반인도 쉽게 음원을 발매할 수 있는 ‘써밋플레이 모바일 어플리케이션(앱)’을 출시한다고 밝혔다.
                            <br/>써밋플레이 앱은 작곡가와 가수를 연결해 줌으로써 대중들에게 알려지지 않은 작곡가와 가수들에게 더 많은 기회를 제공하고, 음원 발매의 어려움을 없애고자 음원 발매에 필요한 녹음실, 연습실, 레슨, 작사, 믹싱/마스터링 등을 도와줄 업체를 모아놓아 쉽게 음원 발매를 할 수 있도록 돕는 플랫폼이다. 특히 미발매 음원을 사고 팔고 소유할 수도 있다.
                        </Text> 
                    </Flex>  
                </Link>
            </Box>
        </>
    );
};

const SectionThree = () => {
    return (
        <>
            <Box w={400} >
                <Link href="https://www.chosun.com/economy/industry-company/2022/02/06/RQARTCOGPNBBXCMAXLB5P3XLUE/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news" isExternal>
                    <Flex flexDirection="column" w={300} margin="0 auto">
                        <Image src="/image/person0.jpg" alt="No-img" margin="0 auto" w={300}></Image>
                        <Flex marginTop={1} justify="space-between">
                            <Text as="span" fontWeight="bold">조선일보</Text>
                            <Text>2022.02.05</Text>
                        </Flex>
                        <Text marginTop={3} fontSize="2xl" fontWeight="bold">
                            음원시장 판도 바꾸는 사람들… 
                            <br/>임영웅 대신 전인권 노래 산 이유
                        </Text>
                        <Text marginTop={5} marginBottom={5} whiteSpace="pre-wrap">
                            ◇음원 누구나 사고파는 플랫폼 나오나
                            <br/>작년 9월 설립된 써밋플레이는 정식
                            발매되지 않은 음원IP를 사고팔 수 
                            있는 플랫폼을 준비하고 있다. 
                            음원 판매업체에 등록되지 않은 음원
                            저작권도 시장 가치가 있다고 본 
                            것이다.
                        </Text> 
                    </Flex>  
                </Link>
            </Box>
        </>
    );
};
