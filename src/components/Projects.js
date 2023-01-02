import React from 'react'
import data from "../data/projects"
import { 
  Flex,
  Link,
  useMediaQuery

 } from '@chakra-ui/react'
import Cardo from './card'

const Projects = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  
  const projMap = data.map((ell, ind) => {
    return (
      <Cardo key={ind} proj={ell}/>
    )
  })

  return (
    <>
    <Flex wrap={"wrap"} overflowY={isLargerThanLG ? "scroll" :""} height={isLargerThanLG ? "90vh":""}>
      {projMap}
    </Flex>
    </>
    
  )
}

export default Projects
