import React from 'react'
import { 
    Box,
    Image,
    Badge,
    useMediaQuery,
    Flex,
    Spacer,
    Text,
    Link,
    ListItem,
    UnorderedList,
    Button
 } from '@chakra-ui/react'
 import Moda from './Moda'

const Cardo = ({proj}) => {

  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  const badgeMap = proj.tags.map((dat, ind) => {
      return (
          <Badge mx="1" my="1" fontSize={"lg"}
            colorScheme="teal" key={ind}>
                {dat}
          </Badge>
      )
  })

  const bulletsMap = proj.bullets.map((dat, ind) => {
    return (
        <ListItem fontSize={"2xl"} my="1">
          {dat}
        </ListItem>
    )
})

  const linklist = Object.keys(proj.repos).map((ell, ind) => {
    return (
      <Box>
        <Link href={proj.repos[ell]} color="blue" key={ind} isExternal mx="3" fontSize={"lg"}>
        {ell}
      </Link>
      </Box>
      
    )
  })

  // const bullets = proj.bullets.map((ell, ind) => {
  //   return (
  //     ""
  //   )
  // })

  return (
    <Flex
      width="full"
      // minHeight="70vh"
      alignItems="center"
      px={isLargerThanLG ? '16' : '6'}
      py="5"
      // backgroundColor={"#F5F5F5"}
      my={isLargerThanLG?"5vh":"8vh"}
      // borderBottom={"3px solid grey"}
      justifyContent="center"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        mb={isLargerThanLG ? '0' : '6'}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={proj.img} alt="Chakra Team" w="full" />
      </Flex>
      <Spacer />
      <Flex
        w={isLargerThanLG ? '60%' : 'full'}
        flexDirection="column"
        ml={isLargerThanLG ? '7' : '0'}
      >
        <Text fontSize={isLargerThanLG ? '5xl' : '4xl'} fontWeight="bold">
          {proj.name}
        </Text>

        <Text opacity="0.8" fontSize={'2xl'}>
          {proj.description}
        </Text>

        <Flex my="5">
          <UnorderedList fontSize={"xl"} >
          {bulletsMap}
          </UnorderedList>
          
        </Flex>

        <Box>
        {badgeMap}
        </Box>
        
        <Flex my="5">
          {linklist}
        </Flex>
        
      </Flex>
    </Flex>
    
  )
}

export default Cardo

