import { HStack, Text, Flex, Button, Box } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as MainLogo } from "../assets/svg/ColorLogo.svg";

export const NavigationBar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <>
      <HStack
      w="100%"
      h="18"
      paddingX={["0","0","0","40"]}
      marginY="6"
      justify="space-between"
      align="center"
      >
        <Link to="/">
          <MainLogo height={32} />
        </Link>
        <HStack spacing="10" display={['none', 'none', 'none', 'flex']}>
          <NavLink to="/">
            {({ isActive }) => (
              <Text
                fontSize="md"
                color="black"
                fontWeight={isActive ? "bold" : "normal"}
              >
                Home
              </Text>
            )}
          </NavLink>
          <NavLink to="/about">
            {({ isActive }) => (
              <Text
                fontSize="md"
                color="black"
                fontWeight={isActive ? "bold" : "normal"}
              >
                About us
              </Text>
            )}
          </NavLink>
          <NavLink to="/contents">
            {({ isActive }) => (
              <Text
                fontSize="md"
                color="black"
                fontWeight={isActive ? "bold" : "normal"}
              >
                Contents
              </Text>
            )}
          </NavLink>
        </HStack>
        {/* HamburgerIcon */}
        <Flex  display={['flex','flex','flex','none']}>
          <Button onClick={(e)=>changeDisplay("flex")} variant="unstyled" position="relative" display="block" w="1.5rem" h="40px" marginTop={1} marginRight={1} backgroundColor="rgba(0,0,0,0)">
            <Text as='span' position="absolute" left={2} top={2} w="1.5rem" h={1} borderRadius={2} backgroundColor="rgba(0,0,0,0.6)">&nbsp;</Text>
            <Text as='span' position="absolute" left={2} top={4} w="1.5rem" h={1} borderRadius={2} backgroundColor="rgba(0,0,0,0.6)">&nbsp;</Text>
            <Text as='span' position="absolute" left={2} top={6} w="1.5rem" h={1} borderRadius={2} backgroundColor="rgba(0,0,0,0.6)">&nbsp;</Text>
          </Button>
        </Flex>
      </HStack>
      {/* PhoneTabletMenuBar */}
      <Flex flex={1} position="relative" top="-62px" z-index="1" w="100%" backgroundColor="white" display={display} align="center" flexDirection="column">
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
        <NavLink to="/">
          {({ isActive }) => (
            <Text
            h="100px" 
            lineHeight="100px" 
            marginLeft={5} 
            fontSize="xl" 
            color="black"
            fontWeight={isActive ? "bold" : "normal"}
            >
              Home
            </Text>
          )}
        </NavLink>
        <NavLink to="/about">
          {({ isActive }) => (
            <Text
            h="100px" 
            lineHeight="100px" 
            marginLeft={5} 
            fontSize="xl" 
            color="black"
            fontWeight={isActive ? "bold" : "normal"}
            >
              About us
            </Text>
          )}
        </NavLink>
        <NavLink to="/contents">
          {({ isActive }) => (
            <Text
              h="100px" 
              lineHeight="100px" 
              marginLeft={5} 
              fontSize="xl" 
              color="black"
              fontWeight={isActive ? "bold" : "normal"}
            >
              Contents
            </Text>
          )}
        </NavLink>
      </Flex>
    </>
  );
};
