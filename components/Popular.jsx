import React from 'react'
import {Box, Link, Heading, Container, Image, Divider, Grid} from '@chakra-ui/react'
const Popular = () => {
  return (
    <Box mt="20">
        <Container maxW="container.xl">
            <Box d="flex" alignItems="center" justifyContent="space-between" mb="12">
                <Box>
                    <Heading size="lg" alignItems="center" as="h3">
                        Popular Groups
                    </Heading>
                </Box>
                <Box>
                    <Link fontWeight="semibold" color="teal.500">
                        Explore more groups
                    </Link>
                </Box>
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <Box
                    border="1px"
                    borderColor="gray.200"
                    p="15px"
                    width="100%"
                    align="left"
                    mb="3"
                >
                    <Box d="flex" alignItems="center">
                        <Image
                            position="relative"
                            w="50px"
                            src="/img/popular-image.jpg"
                            alt="brand"
                            mr="15px"
                        />
                        <Heading
                            alignItems="center"
                            as="h6"
                            fontweights="black"
                            size="md"
                        >
                            World Virtual Travelers: Archeology, Art and
                        </Heading>
                    </Box>
                    <Divider my="3" mb="2" />
                    <Box
                    py="2"
                    color="#877457"
                    fontWeight="bold"
                    >
                    Mon, Aug 16 @ 10:45 PM NPT
                    </Box>
                    <Box fontWeight="semibold" color="#212121">
                    FREE - Michelangelo in Rome. A Virtual Experience
                    </Box>
                </Box>
                <Box
                    border="1px"
                    borderColor="gray.200"
                    p="15px"
                    width="100%"
                    align="left"
                    mb="3"
                >
                    <Box d="flex" alignItems="center">
                        <Image
                            position="relative"
                            w="50px"
                            src="/img/popular-image.jpg"
                            alt="brand"
                            mr="15px"
                        />
                        <Heading
                            alignItems="center"
                            as="h6"
                            fontweights="black"
                            size="md"
                        >
                            World Virtual Travelers: Archeology, Art and
                        </Heading>
                    </Box>
                    <Divider my="3" mb="2" />
                    <Box
                    py="2"
                    color="#877457"
                    fontWeight="bold"
                    >
                    Mon, Aug 16 @ 10:45 PM NPT
                    </Box>
                    <Box fontWeight="semibold" color="#212121">
                    FREE - Michelangelo in Rome. A Virtual Experience
                    </Box>
                </Box>
                <Box
                    border="1px"
                    borderColor="gray.200"
                    p="15px"
                    width="100%"
                    align="left"
                    mb="3"
                >
                    <Box d="flex" alignItems="center">
                        <Image
                            position="relative"
                            w="50px"
                            src="/img/popular-image.jpg"
                            alt="brand"
                            mr="15px"
                        />
                        <Heading
                            alignItems="center"
                            as="h6"
                            fontweights="black"
                            size="md"
                        >
                            World Virtual Travelers: Archeology, Art and
                        </Heading>
                    </Box>
                    <Divider my="3" mb="2" />
                    <Box
                    py="2"
                    color="#877457"
                    fontWeight="bold"
                    >
                    Mon, Aug 16 @ 10:45 PM NPT
                    </Box>
                    <Box fontWeight="semibold" color="#212121">
                    FREE - Michelangelo in Rome. A Virtual Experience
                    </Box>
                </Box>


            </Grid>
        </Container>
    </Box>
  )
}

export default Popular