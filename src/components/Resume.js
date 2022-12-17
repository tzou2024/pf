import { 
    Box,
    Text,
    Flex
 } from '@chakra-ui/react'
import {useSate} from 'react'
import res1 from './Resume1024_1.jpg'
import res2 from './Resume1024_2.jpg'
import resu from './Resume.pdf'

const Resume = () => {
  return (
    <Box height="90vh">
        <object data={resu} type="application/pdf" width="100%" height="100%">

        </object>


        {/* <Text fontSize={"3xl"} fontWeight="bold">Technical Skills</Text>
        <Box>
            <Flex justifyContent={"space-between"} p="3" color={"gray.600"} fontSize="lg">
                <Text>
                Front-End
                </Text>
                <Text>
                HTML | CSS | JavaScript | ReactJS | Python | SQL
                </Text>
            </Flex>
            <Flex justifyContent={"space-between"} p="3" color={"gray.600"} fontSize="lg">
                <Text>
                Back-End
                </Text>
                <Text>
                ExpressJ JS| Django | MongoDB | PostgreSQL| 
                </Text>
            </Flex>
            <Flex justifyContent={"space-between"} p="3" color={"gray.600"} fontSize="lg">
                <Text>
                Misc.
                </Text>
                <Text>
                Matlab | Go | C | Github | SolidWorks | Latex
                </Text>
            </Flex>
        </Box>

        <Text fontSize={"3xl"} fontWeight="bold">Education</Text>
        <Box>
            <Flex p="3" color={"gray.600"} fontSize="lg">
                <Text w="45%">
                Olin College of Eningeering
                </Text>
                <Text w="50%">
                B.S in Engineering with Computing <br /> Recipient of 50% tuition merit scholarship <br /> Grad. May 2024
                </Text>
                
            </Flex>

            <Flex p="3" color={"gray.600"} fontSize="lg">
                <Text w="45%">
                General Assembly
                </Text>
                <Text w="50%">
                Software Engineering Immersive <br /> May 2022
                </Text>
                
            </Flex>
            
        </Box> */}

    </Box>
  )
}

export default Resume
