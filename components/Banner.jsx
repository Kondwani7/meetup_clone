import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';


const Banner = () => {
  return (
    <>
      <header>
        <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
          <Box>
            <Image boxSize="70px" src="meetup-brand-logo.svg" alt="logo"/>
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">Login</Button>
            <Button  colorScheme="gray.600" fontSize="sm" variant="link">Sign Up</Button>
          </Box>
        </Box>
      </header>
      <Box>
          {/* main punch text */}
      </Box>
    </>
    
  )
}

export default Banner