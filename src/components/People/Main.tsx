import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState, } from 'react'
import { findOrder, changeProfile } from "./Function";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar,A11y, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const AboutUSMainSection = () => {
  const addr: string = "/image/";
  const [people, setPeople] = useState([ "person0", "person1", "person2", "person3", "person4", "person5"])
  const [who, setWho] = useState("person0");
  const [imgAdress, changeImgAdress] = useState("/image/person0.jpg");
  const [display, setDisplay] = useState(["flex","none","none","none","none","none"]);
  const [mobDisplay, setMobDisplay] = useState(["flex","none","none","none","none","none"]);
  function MainImgClick(){
    changeImgAdress(addr+who+".jpg");
  };
  function SubImgClick(e:string){
    let changeWho = e;
    //changeProfile
    setDisplay(changeProfile(changeWho));
    // changeImgs
    let newPeople = people;
    const distNum = findOrder(who, people);
    const targetNum = findOrder(changeWho, people);
    newPeople[distNum] = changeWho;
    newPeople[targetNum] = who; 
    setPeople(newPeople);
    setWho(changeWho);
    changeImgAdress(addr+people[0]+".jpg");
  };
  function SetMobProfile(e: any){
    return setMobDisplay(changeProfile(people[e]));
  }
  return (
    <>
      {/* Webmode */}
      <Flex display={['none', 'none', 'flex', 'flex']} w="100%" h={["auto","auto","auto",784]} flexDirection="row" justifyContent="center" marginTop="100px">
        {/* <LeftSection/> */}
        <Flex >
          <Box as="button"
          w="342px"
          h={784} 
          marginRight={35}  
          onClick={function (e:any){
            e.preventDefault();
            MainImgClick();
          }}>
            <Box
            backgroundImage={imgAdress} 
            h="784px" 
            backgroundPosition="50% 50%" 
            backgroundSize="cover"  />
          </Box>
        </Flex>
        {/* <RightSection/> */}
        <Flex  w={['none','none','400px','800px']}  flexDirection="column" justify="center">
          {/* <Information /> */}
          <Flex display={display[0]} flexDirection="column" justifyContent="space-between" h={585} paddingTop={30} >            
            <VStack w="100%" spacing="-1.33px" align="flex-start" h={168}>
              <Text w="100%" fontSize="3xl" textAlign="left" fontWeight="bold" color="black">
                음악하는 학생들에게 꿈을 포기하지 않는
                <br/>놀이터를 만들고 싶어요.
                <br/>그 놀이터가 써밋플레이입니다.     
              </Text>
            </VStack>
            <VStack align="flex-start" h={228} marginBottom={100} textAlign="left">
              <Text fontSize="3xl" fontWeight="bold" marginBottom={5}>
                오 태 현
                <Text fontSize='lg' fontWeight="bold">
                  CEO
                </Text>
              </Text>
              <Text  lineHeight="2" fontWeight="bold" >
                <br/>한국문화예술명인회 자문위원
                <br/>NH투자증권 선물 차세대 프로젝트 
                <br/>국민대학교 성악과 졸업
                <br/>숭문고등학교 졸업        
                <br/>The Heritage School in Newnan,GA 
              </Text>
            </VStack>
          </Flex>
          <Flex display={display[1]} flexDirection="column" justifyContent="space-between" h={585} paddingTop={30} >
            <VStack spacing="-1.33px" align="flex-start" h={168}>
              <Text fontSize="3xl" fontWeight="bold">
                디지털로 이어진 음원 커뮤니티 플랫폼, 
                <br/>써밋플레이에서 우리의 꿈을 나눌 수 있다고 생각합니다.       
              </Text>
            </VStack>
            <VStack align="flex-start" h={228} marginBottom={100}>
              <Text as="span" fontSize="3xl" fontWeight="bold" marginBottom={5}>
                이 원
                <Text fontSize='lg' fontWeight="bold">
                  CFO
                </Text>
              </Text>
              <Text lineHeight="2" fontWeight="bold" >
                <br/>윈웨이시스템 금융공학팀
                <br/>한국스탠다드차타드증권 주식부 
                <br/>유안타증권 OTC운용팀
                <br/>신한금융투자 OTC운용팀        
                <br/>서울대학교 금융공학 석사
                <br/>서울대학교 산업공학 학사
              </Text>
            </VStack>
          </Flex>
          <Flex display={display[2]} flexDirection="column" justifyContent="space-between" h={585} paddingTop={30} >
            <VStack spacing="-1.33px" align="flex-start" h={168}>
              <Text fontSize="3xl" fontWeight="bold">
                기술과 예술이 만나는 그 접점에 써밋플레이가 되도록 하겠습니다.
              </Text>
            </VStack>
            <VStack align="flex-start" h={228} marginBottom={100}>
              <Text as="span" fontSize="3xl" fontWeight="bold">
                김 중 학
                <Text fontSize='lg' fontWeight="bold">
                  Lead Server Developer
                </Text>
              </Text>
              <Text lineHeight="2" fontWeight="bold"> 
                <br/>한국도로공사 통합 시스템 구축 / 백엔드 개발 (역할)
                <br/>DGB 기술신용평가 시스템 구축 / 백엔드 개발 (역할)
                <br/>MK교육 중국어/영어 LMS 시스템 구축 / 시스템 아키텍쳐 (역할)
                <br/>영남이공대학교 졸업
              </Text>
            </VStack>
          </Flex> 
          <Flex display={display[3]} flexDirection="column" justifyContent="space-between" h={585} paddingTop={30} >
            <VStack spacing="-1.33px" align="flex-start" h={168}>
              <Text fontSize="3xl" fontWeight="bold">
                저희 써밋플레이로 꿈과 열정을 자유롭게 펼치고 전세계가 음악으로 소통할 수 있는 서비스를 제공하고 싶습니다.
              </Text>
            </VStack>
            <VStack align="flex-start" h={228} marginBottom={100}>
              <Text as="span" fontSize="3xl" fontWeight="bold">
                엄 홍 인
                <Text fontSize='lg' fontWeight="bold">
                  Lead Front Developer
                </Text>
              </Text>
              <Text lineHeight="2" fontWeight="bold"> 
                <br/>입맛분석 SNS 포스트잇 개발총괄
                <br/>퀘스천 개발총괄
                <br/>헤이넛츠 개발팀장
                <br/>고캠퍼스 개발총괄
                <br/>대구 경북대학교 졸업
              </Text>
            </VStack>
          </Flex> 
          <Flex display={display[4]} flexDirection="column" justifyContent="space-between" h={585} paddingTop={30} >
            <VStack spacing="-1.33px" align="flex-start" h={168}>
              <Text fontSize="3xl" fontWeight="bold">
                써밋플레이는 기술과 음악이만나는 조심스럽고 아름다운 곳입니다, 
                <br/>그런 아름다운곳을 꾸미고 관리하는 모험은 매일매일 저에게 단순한 개발을 넘어 감동을 주는 곳입니다.
              </Text>
            </VStack>
            <VStack align="flex-start" h={228} marginBottom={100}>
              <Text as="span" fontSize="3xl" fontWeight="bold">
                윤 상 준
                <Text fontSize='lg' fontWeight="bold">
                  Fornt & Server Developer
                </Text>
              </Text>
              <Text lineHeight="2" fontWeight="bold"> 
                <br/>고려대학교 컴퓨터학과 졸업
                <br/>포산고등학교 졸업
              </Text>
            </VStack>
          </Flex>
          <Flex display={display[5]} flexDirection="column" justifyContent="space-between" h={585} paddingTop={30} >
            <VStack spacing="-1.33px" align="flex-start" h={168}>
              <Text fontSize="3xl" fontWeight="bold">
                써밋플레이의 서비스가 많은 음악인들에게 기회가 되었으면 하는 바람입니다. 
                <br/>더욱 나아가 현대 음악 문화에 르네상스와 같은 변화를 이끌어 낼 수 있도록 정진하겠습니다. 
              </Text>
            </VStack>
            <VStack align="flex-start" h={228} marginBottom={100}>
              <Text as="span" fontSize="3xl" fontWeight="bold">
                권 지 우
                <Text fontSize='lg' fontWeight="bold">
                  planer .Lead
                </Text>
              </Text>
              <Text lineHeight="2" fontWeight="bold"> 
                <br/>국민대학교 예술대학 음악학부 성악전공
                <br/>이화여자대학교 교육대학원 교육학과 음악교육전공
              </Text>
            </VStack>
          </Flex>
          {/* right bottom  */}
          <Flex display={['none', 'none', 'flex', 'flex']}  w={["none","none","100%","800"]} h={200} flexDirection="row" justifyContent="space-between">
            <Box 
            as="button" 
            w={150} 
            backgroundImage={"/image/"+people[1]+".jpg"}
            backgroundPosition="center" 
            backgroundSize="cover"
            onClick={function (e:any){
              e.preventDefault();
              SubImgClick(people[1]);
            }}
            />
            <Box 
            as="button" 
            w={150} 
            backgroundImage={"/image/"+people[2]+".jpg"}
            backgroundPosition="center" 
            backgroundSize="cover"
            onClick={function (e:any){
              e.preventDefault();
              SubImgClick(people[2]);
            }}
            />
            <Box 
            as="button" 
            w={150} 
            backgroundImage={"/image/"+people[3]+".jpg"}
            backgroundPosition="center" 
            backgroundSize="cover"
            onClick={function (e:any){
              e.preventDefault();
              SubImgClick(people[3]);
            }}
            />
            <Box 
            as="button" 
            w={150} 
            backgroundImage={"/image/"+people[4]+".jpg"}
            backgroundPosition="center" 
            backgroundSize="cover"
            onClick={function (e:any){
              e.preventDefault();
              SubImgClick(people[4]);
            }}
            />            
            <Box 
            as="button" 
            w={150} 
            backgroundImage={"/image/"+people[5]+".jpg"}
            backgroundPosition="center" 
            backgroundSize="cover"
            onClick={function (e:any){
              e.preventDefault();
              SubImgClick(people[5]);
            }}
            />
          </Flex>
        </Flex>
      </Flex>
      {/* Mobile/Tablet mode */}
      <Box display={["box","box","none","none"]}>
      <div>     
      <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={function (e:any) {
        SetMobProfile(e.activeIndex);}}
      >
        <SwiperSlide>            
          <Image w={["592px","100%","none","none"]} h={["480px","480px","none","none"]} objectFit="cover" src="/image/person0.jpg" position="relative" alt="no-img"/>
          <VStack w="100%" position="absolute" top={["70%","70%","0","0"]} spacing="-1.33px" h={168}>
            <Text w="100%" fontSize={["xs","md","none","none"]} textAlign="center" fontWeight="bold" color="white">
              음악하는 학생들에게 꿈을 포기하지 않는
              <br/>놀이터를 만들고 싶어요.
              <br/>그 놀이터가 써밋플레이입니다.     
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>            
          <Image w={["592px","100%","none","none"]} h={["480px","480px","none","none"]} objectFit="cover"src="/image/person1.jpg" position="relative" alt="no-img"/>
          <VStack w="100%" position="absolute" top={["70%","70%","0","0"]} spacing="-1.33px" h={168}>
            <Text w="100%" fontSize={["xs","md","none","none"]} textAlign="center" fontWeight="bold" color="white">
              디지털로 이어진 음원 커뮤니티 플랫폼, 
              <br/>써밋플레이에서 우리의 꿈을 나눌 수 있다고 생각합니다.     
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>            
          <Image w={["592px","100%","none","none"]} h={["480px","480px","none","none"]} objectFit="cover" src="/image/person2.jpg" position="relative" alt="no-img"/>
          <VStack w="100%" position="absolute" top={["70%","70%","0","0"]} spacing="-1.33px" h={168}>
            <Text w="100%" fontSize={["xs","md","none","none"]} textAlign="center" fontWeight="bold" color="white">
              기술과 예술이 만나는 그 접점에 써밋플레이가 되도록 하겠습니다.     
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>            
          <Image w={["592px","100%","none","none"]} h={["480px","480px","none","none"]} objectFit="cover" src="/image/person3.jpg" position="relative" alt="no-img"/>
          <VStack w="100%" position="absolute" top={["70%","70%","0","0"]} spacing="-1.33px" h={168}>
            <Text w="100%" fontSize={["xs","md","none","none"]} textAlign="center" fontWeight="bold" color="white">
              저희 써밋플레이로 꿈과 열정을 자유롭게 펼치고 
              <br/>전세계가 음악으로 소통할 수 있는 서비스를 제공하고 싶습니다.     
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>            
          <Image w={["592px","100%","none","none"]} h={["480px","480px","none","none"]} objectFit="cover" src="/image/person4.jpg" position="relative" alt="no-img"/>
          <VStack w="100%" position="absolute" top={["70%","70%","0","0"]} spacing="-1.33px" h={168}>
            <Text w="100%" fontSize={["xs","md","none","none"]} textAlign="center" fontWeight="bold" color="white">
              써밋플레이는 기술과 음악이만나는 조심스럽고 아름다운 곳입니다, 
              <br/>그런 아름다운곳을 꾸미고 관리하는 모험은 
              <br/>매일매일 저에게 단순한 개발을 넘어 감동을 주는 곳입니다.   
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>            
          <Image w={["592px","100%","none","none"]} h={["480px","480px","none","none"]} objectFit="cover" src="/image/person5.jpg" position="relative" alt="no-img"/>
          <VStack w="100%" position="absolute" top={["70%","70%","0","0"]} spacing="-1.33px" h={168}>
            <Text w="100%" fontSize={["xs","md","none","none"]} textAlign="center" fontWeight="bold" color="white">
              써밋플레이의 서비스가 많은 음악인들에게 기회가 되었으면 하는 바람입니다. 
              <br/>더욱 나아가 현대 음악 문화에 르네상스와 같은 변화를 이끌어 낼 수 있도록 정진하겠습니다.  
            </Text>
          </VStack>
        </SwiperSlide>
      </Swiper>
      </div>
      </Box>

      <Flex
      w="100%"
      display={["flex","flex","none","none"]}
      align="center"
      justify="center"
      >
      <VStack display={mobDisplay[0]} align="center" h={228} textAlign="center">
        <Text fontSize="xl" fontWeight="bold" marginTop={5} marginBottom={1}>
          오 태 현
          <Text fontSize='sm' fontWeight="bold">
            CEO
          </Text>
        </Text>
        <Text fontSize='sm' lineHeight="2">
        <br/>한국문화예술명인회 자문위원
          <br/>NH투자증권 선물 차세대 프로젝트 
          <br/>국민대학교 성악과 졸업
          <br/>숭문고등학교 졸업        
          <br/>The Heritage School in Newnan,GA 
        </Text>
      </VStack>          
      <VStack display={mobDisplay[1]} align="center" h={228} textAlign="center">
        <Text fontSize="xl" fontWeight="bold" marginTop={5} marginBottom={1}>
          이 원
          <Text fontSize='sm' fontWeight="bold">
            CFO
          </Text>
        </Text>
        <Text fontSize='sm' lineHeight="2" >
        <br/>윈웨이시스템 금융공학팀
          <br/>한국스탠다드차타드증권 주식부 
          <br/>유안타증권 OTC운용팀
          <br/>신한금융투자 OTC운용팀        
          <br/>서울대학교 금융공학 석사
          <br/>서울대학교 산업공학 학사
        </Text>
      </VStack>
      <VStack display={mobDisplay[2]} align="center" h={228} textAlign="center">
        <Text fontSize="xl" fontWeight="bold" marginTop={5} marginBottom={1}>
          김 중 학
          <Text fontSize='sm' fontWeight="bold">
            Lead Server Developer
          </Text>
        </Text>
        <Text fontSize='sm' lineHeight="2" >
        <br/>한국도로공사 통합 시스템 구축 / 백엔드 개발 (역할)
            <br/>DGB 기술신용평가 시스템 구축 / 백엔드 개발 (역할)
            <br/>MK교육 중국어/영어 LMS 시스템 구축 / 시스템 아키텍쳐 (역할)
            <br/>영남이공대학교 졸업
        </Text>
      </VStack>
      <VStack display={mobDisplay[3]} align="center" h={228} textAlign="center">
        <Text fontSize="xl" fontWeight="bold" marginTop={5} marginBottom={1}>
          엄 홍 인
          <Text fontSize='sm' fontWeight="bold">
            Lead Front Developer 
          </Text>
        </Text>
        <Text fontSize='sm' lineHeight="2" >
            <br/>입맛분석 SNS 포스트잇 개발총괄
            <br/>퀘스천 개발총괄
            <br/>헤이넛츠 개발팀장
            <br/>고캠퍼스 개발총괄
            <br/>대구 경북대학교 졸업
        </Text>
      </VStack>
      <VStack display={mobDisplay[4]} align="center" h={228} textAlign="center">
        <Text fontSize="xl" fontWeight="bold" marginTop={5} marginBottom={1}>
          윤 상 준
          <Text fontSize='sm' fontWeight="bold">
            Fornt & Server Developer
          </Text>
        </Text>
        <Text fontSize='sm' lineHeight="2" >
          <br/>고려대학교 컴퓨터학과 졸업 
          <br/>포산고등학교 졸업
        </Text>
      </VStack>
      <VStack display={mobDisplay[5]} align="center" h={228} textAlign="center">
        <Text fontSize="xl" fontWeight="bold" marginTop={5} marginBottom={1}>
          권 지 우
          <Text fontSize='sm' fontWeight="bold">
            planer .Lead
          </Text>
        </Text>
        <Text fontSize='sm' lineHeight="2" >
          <br/>국민대학교 예술대학 음악학부 성악전공 
          <br/>이화여자대학교 교육대학원 교육학과 음악교육전공
        </Text>
      </VStack>
    </Flex>
      <Partners/>
    </>
  );
};


const Partners = () =>{
  return(
    <Flex flex="2" flexDirection="column" margin="0 auto" textAlign="center" h={585} lineHeight={30} marginTop={["100","100","300","300"]} marginBottom={["50","100","100","200"]}>
      <Text paddingBottom={50} fontSize={["xl","3xl","4xl","4xl"]} fontWeight="bold" background="none">Our Partners</Text>
      <Image w={["250px","300px","824px","824px"]} src="/image/partners.png" alt="partners"/>
    </Flex>
  );
};

