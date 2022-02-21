import {Text, FormControl, Box, Input, Button, Image, Container,Grid, Heading, Badge, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineArrowRight, AiOutlineSearch} from 'react-icons/ai'
import {IoIosPin} from 'react-icons/io'
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
                <Heading as="h3" size="2xl">
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
            {/*Three image boxes*/}
            <Container maxWidth="container.xl" mt="10">
              <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {/*image 1*/}
                <Box>
                  <Image borderRadius="lg" w="100%" src="/img/image-one.jpg" alt="make new friends"/>
                  <Button colorScheme="teal" variant="link" mt="5">
                    Make New Friends
                    <Box ml="2"><AiOutlineArrowRight/></Box>
                  </Button>
                </Box>
                <Box>
                  <Image borderRadius="lg" w="100%" src="/img/image-two.jpg" alt="make new friends"/>
                  <Button colorScheme="teal" variant="link" mt="5">
                    Explore Outdoors
                    <Box ml="2"><AiOutlineArrowRight/></Box>
                  </Button>
                </Box>
                <Box>
                  <Image borderRadius="lg" w="100%" src="/img/image-three.jpg" alt="make new friends"/>
                  <Button colorScheme="teal" variant="link" mt="5">
                    Connect over Tech
                    <Box ml="2"><AiOutlineArrowRight/></Box>
                  </Button>
                </Box>
              </Grid>
            </Container>
            {/*pills*/}
            <Container maxW="container.xl">
              <Box direction="row" justifyContent="space-between" flexWrap="wrap" display="flex">
                <Badge 
                  borderRadius="3xl" px={4} py={2} mr="4" mb="4" mt="10"
                  textTransform="normal" color="#ffff" bg="teal.500" fontWeight="normal">
                    <Text fontSize="md">Boost your  career</Text>
                   </Badge>
                <Badge 
                  borderRadius="3xl" px={4} py={2} mr="4" mb="4" mt="10"
                  textTransform="normal" color="#ffff" bg="teal.500" fontWeight="normal">
                    <Text fontSize="md">Find your zen</Text>
                </Badge>
                <Badge 
                  borderRadius="3xl" px={4} py={2} mr="4" mb="4" mt="10"
                  textTransform="normal" color="#ffff" bg="teal.500" fontWeight="normal">
                    <Text fontSize="md">Get moving</Text>
                </Badge>
                <Badge 
                  borderRadius="3xl" px={4} py={2} mr="4" mb="4" mt="10"
                  textTransform="normal" color="#ffff" bg="teal.500" fontWeight="normal">
                    <Text fontSize="md">Share language + culture</Text>
                </Badge>
                <Badge 
                  borderRadius="3xl" px={4} py={2} mr="4" mb="4" mt="10"
                  textTransform="normal" color="#ffff" bg="teal.500" fontWeight="normal">
                    <Text fontSize="md">Read with friends</Text>
                </Badge>
                <Badge 
                  borderRadius="3xl" px={4} py={2} mr="4" mb="4" mt="10"
                  textTransform="normal" color="#ffff" bg="teal.500" fontWeight="normal">
                    <Text fontSize="md">Write with friends</Text>
                </Badge>
                <Badge 
                  borderRadius="3xl" px={4} py={2} mr="4" mb="4" mt="10"
                  textTransform="normal" color="#ffff" bg="teal.500" fontWeight="normal">
                    <Text fontSize="md">Hone your craft</Text>
                </Badge>
              </Box>
            </Container>
            {/*last section*/}
            <Container maxW="container.xl">
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Box>
                  <Heading as="h3" size="lg" mb="7" mt="20">
                    What do you want to do?
                  </Heading>
                  <Box d="flex" alignItems="center">
                    <Box flexBasis={'50%'} mr="2">
                      <FormControl id="email">
                      <Box pos="relative" color="gray.500">
                          <InputGroup>
                          <InputLeftElement
                            className="InputLeft"
                            pointerEvents="none"
                            children={<AiOutlineSearch className='searchIcon'/>}
                            size="xs"/>
                            <Input type="text" pl="8" placeholder="Search for 'tennis'"/>
                          </InputGroup>
                        </Box>
                      </FormControl>
                    </Box>
                    <Box flexBasis={'50%'} ml="2">
                      <FormControl id="email">
                      <Box pos="relative" color="gray.500">
                          <InputGroup>
                          <InputLeftElement
                            className="InputLeft"
                            pointerEvents="none"
                            children={<IoIosPin className='searchIcon'/>}
                            size="xs"/>
                            <Input type="text" pl="8" placeholder="Location"/>
                          </InputGroup>
                        </Box>
                      </FormControl>
                    </Box>
                  </Box>
                  {/*search button large*/}
                  <Button                 
                    _hover={{opacity:".8"}}
                    mt="5"
                    pt="6"
                    pb="6"
                    w="100%"
                    color="#ffffff"
                    bg="red.500"
                    fontSize="lg"
                    mb="4">
                      <Text fontSize="medium">Search</Text>
                    </Button>
                </Box>
                {/* part 2 of grid*/}
                <Box>
                  <Heading as="h3" size="lg" mb="7" mt="20">
                    See what's happening
                  </Heading>
                  <Badge 
                    borderRadius="3xl" px={5} py={2} mr="4" mb="4" 
                    color="#ffff" textTransform="normal" bg="teal.500">
                      <Text fontSize="md">Starting soon</Text>
                  </Badge>
                  <Badge 
                    borderRadius="3xl" px={5} py={2} mr="4" mb="4" 
                    color="#ffff" textTransform="normal" bg="teal.500">
                      <Text fontSize="md">Today</Text>
                  </Badge>
                  <Badge 
                    borderRadius="3xl" px={5} py={2} mr="4" mb="4" 
                    color="#ffff" textTransform="normal" bg="teal.500">
                      <Text fontSize="md">Tomorrow</Text>
                  </Badge>
                  <Badge 
                    borderRadius="3xl" px={5} py={2} mb="4" ml="2" 
                    color="#ffff" textTransform="normal" bg="teal.500">
                      <Text fontSize="md">This week</Text>
                  </Badge>
                  <Badge 
                    borderRadius="3xl" px={5} py={2} mr="4" mb="4" 
                    color="#ffff" textTransform="normal" bg="teal.500">
                      <Text fontSize="md">Online</Text>
                  </Badge>
                  <Badge 
                    borderRadius="3xl" px={5} py={2} mr="4" mb="4" 
                    color="#ffff" textTransform="normal" bg="teal.500">
                      <Text fontSize="md">In person</Text>
                  </Badge>
                  <Badge 
                    borderRadius="3xl" px={5} py={2} mr="4" mb="4" 
                    color="#ffff" textTransform="normal" bg="teal.500">
                      <Text fontSize="md">Trending Near you</Text>
                  </Badge>
                </Box>
              </Grid>
            </Container>
      </Box>
    </>
    
  )
}

export default Banner