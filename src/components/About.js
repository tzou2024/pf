import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const About = ({isLargerThanLG}) => {
  return (
    <Box 
    mb="2"
    >
        <Text fontSize={"4xl"} py="4">
            Hi! I'm Trevor.
        </Text>
        <Text fontSize={"xl"} py="4" >
        I'm an aspiring backend developer passionate about providing accessible technology that improves the lives of others. </Text>
        <Text fontSize={"xl"} py="4">
        My background experience in Public Interest Technology through collaborative design gives me skills in analyzing stakeholder needs and creating efficient and organized code to address them. I am communicative, hard-working, and motivated by social impact.
        </Text>
        <Text fontSize={"xl"} py="4">
        Outside of backend work, I also have experience in React, Datascience, and Machine Learning.
        </Text>
        <Text fontSize={"xl"} py="4">
        I grew up in Nashville, TN, and am studying Engingeering with Computing at <b>Olin College of Engineering</b> in Needham, MA. If I'm not coding, odds are I'm either running, rockclimbing, powerlifting, or sitting at the piano :)
        </Text>
        <Text fontSize={"xl"} py="4">
        In the spring of 2023, I will be studying abroad at University College Cork in Cork, Ireland. I will be focusing on digital music production and music technologies. I will still be available, and am looking for an internship in summer '23.
        </Text>
        <Text fontSize={"5xl"} py="4">
            Let's make something great.
        </Text>
    </Box>
  )
}

export default About
