import {
    Flex,
    Spacer,
    Text,
    Button,
    useMediaQuery,
  } from '@chakra-ui/react';
import Nav from './Nav';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Resume from './Resume';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import '../Styles.css'
  
  const Main = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    
    return (
      <Flex
        width="full"
        minHeight="50em"
        // alignItems="center"
        px={isLargerThanLG ? '16' : '6'}
        py="5"
        justifyContent="center"
        flexDirection={isLargerThanLG ? 'row' : 'column'}
      >
        <Flex
          w={isLargerThanLG ? '40%' : 'full'}
          mb={isLargerThanLG ? '0' : '6'}
          minHeight="30em"
        //   alignItems="center"
          justifyContent="center"
          borderBottom={!isLargerThanLG ?"4px solid gray":""}
          h={!isLargerThanLG ?"70vh":""}
        >
          <Nav />
        </Flex>
        <Spacer />
        <Flex
        w={isLargerThanLG ? '60%' : 'full'}
        flexDirection="column"
        ml={isLargerThanLG ? '7' : '0'}
      >
        <Routes>
          <Route
            path="/portfolio"
            element={<Home isLargerThanLG={isLargerThanLG}/>}
          />
          <Route
            path="/portfolio/projects"
            element={<Projects isLargerThanLG={isLargerThanLG}/>}
          />
          <Route
            path="/portfolio/about"
            element={<About isLargerThanLG={isLargerThanLG}/>}
          />
          <Route
            path="/portfolio/resume"
            element={<Resume isLargerThanLG={isLargerThanLG}/>}
          />
          <Route
            path="/portfolio/contact"
            element={<Contact isLargerThanLG={isLargerThanLG}/>}
          />
        </Routes>
        </Flex>
      </Flex>
    );
  };
  
  export default Main;