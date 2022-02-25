import React from 'react'
import { Container,Box,Image, Heading} from '@chakra-ui/react';

const Connected = () => {
  return (
    <Container mt="52" maxW="container.xl" >
        <Box d="flex" pos="relative" justifyContent="space-between" alignItems="center">
            <Box>
                <Image w="100%" src="/img/device-left.webp" alt="device left"/>
            </Box>
            <Box align="center" mx="auto" pos="relative">
                <Image w="80px" src="/img/meetup-mini-logo.png" alt="meetup small logo"/>
                <Heading as="h5" my="7" size="sm">Stay connected. Download the app</Heading>
            </Box>
            <Box>
                <Image w="100%" src="/img/device-right.webp" alt="device left"></Image>
            </Box>
        </Box>
    </Container>
  )
}

export default Connected