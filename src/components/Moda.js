import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Image,
  Text,
  ModalCloseButton,
  Link,
  Box,
  Button
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'


const Moda = ({proj}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const linklist = Object.keys(proj.repos).map((ell, ind) => {
    return (
      <Box>
        <Link href={proj.repos[ell]} color="blue" key={ind} isExternal>
        {ell}
      </Link>
      </Box>
      
    )
  })

  console.log("linklist: ", linklist)

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">{proj.name}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{proj.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image src={proj.img} w="100%"/>
          <Text py="2">
          {proj.name} {" is "}
          {proj.description}
          </Text>
          
          {linklist ? linklist : ""}
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}

export default Moda
