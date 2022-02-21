import { Box, Button, Image, Container, Heading } from '@chakra-ui/react';
import React from 'react';


const Banner = () => {
  return (
    <>
      <header>
        <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
          <Box>
            <Image boxSize="70px" src="img/meetup-brand-logo.svg" alt="logo"/>
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">Login</Button>
            <Button  colorScheme="gray.600" fontSize="sm" variant="link">Sign Up</Button>
          </Box>
        </Box>
      </header>
      <Box>
          <Container maxWidth="container.xl">
            <Box d="flex" alignItems="center" py="20" flexDirection="row">
              <Box mr="6">
                <Heading as="h3" size="lg">
                  <Box>Celebrating 20 years of real connections on Meetup</Box>
                </Heading>
                <Box mt="6" fontWeight={400}>
                Whatever you’re looking to do this year, Meetup can help. For 20 years, people have turned to Meetup to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.s
                </Box>
              </Box>
              <Box w="100%">
                <Image w="100%" src="/img/illustration.svg" alt="illustration"/>
              </Box>
            </Box>
          </Container>
      </Box>
    </>
    
  )
}

export default Banner