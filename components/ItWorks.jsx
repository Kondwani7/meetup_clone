import {Image, Button, Box,Grid, Container, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const ItWorks = () => {
  return (
    <Box alignItems="center">
        <Container maxWidth="container.xl" my="20">
            <Heading as="h3" size="lg" pb="2" align="center">
                How Meetup Works
            </Heading>
            <Box align="center" maxW="700px" mx="auto" pb="10">
            <Text fontSize="lg">Meet new people who share your interests through online and in-person events. It’s free to create an account. </Text>
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap="6">
                <Box mx="auto" align="center">
                  <Image w="100%" boxSize="160px" src="/img/joinagroup.svg" alt="join group"/>
                  <Button colorScheme="teal" variant="link" align="center" mt="5" fontWeight="bold">
                    Join a Group
                  </Button>
                  <Text>Do what you love, meet others who love it, find your community. The rest is history!</Text>
                </Box>
                <Box mx="auto" align="center">
                  <Image w="100%" boxSize="160px" src="/img/ticket.svg" alt="join group"/>
                  <Button colorScheme="teal" variant="link" align="center" mt="5" fontWeight="bold">
                    Find an event
                  </Button>
                  <Text>Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.</Text>
                </Box>
                <Box mx="auto" align="center">
                  <Image w="100%" boxSize="160px" src="/img/group.svg" alt="join group"/>
                  <Button colorScheme="teal" variant="link" align="center" mt="5" fontWeight="bold">
                    Start a Group
                  </Button>
                  <Text>You don’t have to be an expert to gather people together and explore shared interests.</Text>
                </Box>
            </Grid>
            <Box align="center" mt="20">
                <Button 
                colorScheme="teal" 
                _hover={{ opacity: '0.8' }}
                color="#ffffff"
                fontWeight="normal"
                size="md">
                    Join Meetup
                </Button>
            </Box>
        </Container>
    </Box>
  )
}

export default ItWorks