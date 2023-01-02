import React, { useState } from 'react';
import {
  Text,
  Flex,
  IconButton,
  useColorMode,
  Box
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate()

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  return (

      <Flex flexDirection={"column"} width="full">
        <Flex
      >
        <IconButton mr="10" w={6} h={6} p={5} onClick={toggleColorMode} className='neumo'>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

      </Flex>
    
    <Flex justifyContent={"center"} flexDirection="column" mt="5">
        <Text fontSize={"7xl"} fontWeight="bold" mt="3" textAlign={"center"} mb="0" pb="0" lineHeight={"80px"}>
            Trevor Zou
        </Text>
    </Flex>
    <Flex my="9" justifyContent={"center"}>
        <Text textColor={"gray.500"} fontWeight="bold" fontSize={"2xl"}>
           Full-Stack Software Engineer
        </Text>
    </Flex>
    <Flex justifyContent={"space-around"} mt="5"  py="2" mx="2" borderBottom={"4px solid black"} fontSize="2xl">
    
        <Link className='hoverable' to="/portfolio/projects">
            Projects
        </Link>
        <Link to="/portfolio/about" className='hoverable'>
            About
        </Link>
        <Link to="/portfolio/resume" className='hoverable'>
            Resume
        </Link>
        <Link to="/portfolio/contact" className='hoverable'>
            Contact
        </Link>

    </Flex>

    <Flex  textColor="white" justifyContent={"space-around"} my="8">
        <Box p="2" className='hoverable' onClick={() => window.location.href="https://github.com/tzou2024"}>
            <FaGithub  fontSize={"40px"} color={colorMode === 'light'? 
            "black" : "white"}/>
        </Box>

        <Box p="2" className='hoverable' onClick={() => window.location.href="https://www.linkedin.com/in/trevor-zou/"}>
            <FaLinkedin fontSize={"40px"} color={colorMode === 'light'? 
            "black" : "white"}/>
        </Box>
    </Flex>
    </Flex>
      
  );
};

export default Nav;