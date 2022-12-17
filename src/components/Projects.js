import React from 'react'
import data from "../data/projects"
import { 
  Flex,
  Link

 } from '@chakra-ui/react'
import Cardo from './card'

const Projects = () => {
  console.log(data)
  
  const projMap = data.map((ell, ind) => {
    return (
      <Cardo key={ind} proj={ell}/>
    )
  })

  return (
    <>
    <Flex wrap={"wrap"}>
      {projMap}
    </Flex>
    This portion is still a work in progress!
    <Link href="https://tzou2024.github.io/"isExternal textColor="blue">In the meantime, checkout my old portfolio site.</Link>
    </>
    
  )
}

export default Projects
