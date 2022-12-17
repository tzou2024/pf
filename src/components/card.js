import React from 'react'
import { 
    Box,
    Image,
    Badge
 } from '@chakra-ui/react'
 import Moda from './Moda'

const Cardo = ({proj}) => {
  const badgeMap = proj.tags.map((dat, ind) => {
      return (
          <Badge mx="1"
            colorScheme="teal" key={ind}>
                {dat}
            </Badge>
      )
  })
  return (
    <Box maxW='30%' borderWidth='2px' borderColor="black" borderRadius='lg' overflow='hidden' p="2" position={"relative"} bg="gray.100" m="2">
    <Image src={proj.img} w="100%" height="80%" opacity={".5"}/>
    <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          position="absolute"
          top="40%"
          left={"50%"}
          transform="translate(-50%, -50%)"
          fontSize={"2xl"}
        //   bg="bisque"
          width={"100%"}
          textAlign="center"
          py="3"
          textColor={"black"}
          
        >
        {/* {proj.name} */}
        <Moda proj={proj} />
    </Box>
    {/* <Box as='span' fontSize='sm'>
            {proj.description}
    </Box> */}
    <Box>
    {badgeMap}
    </Box>
    </Box>
  )
}

export default Cardo
