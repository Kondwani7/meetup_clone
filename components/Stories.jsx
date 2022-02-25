import React from 'react'
import { Box, Container, Heading, Image, Link,Grid} from '@chakra-ui/react'

const Stories = () => {
  return (
    <Box mt="20">
        <Container maxW="container.xl">
            <Box d="flex" alignItems="center" justifyContent="space-between" mb="5">
                <Box align="center" w="100%">
                    <Heading alignItems="center" as="h3" size="lg" mb="3">Stories from Meetup</Heading>
                    <Box color="#383737" fontWeight="medium" maxW="700px">
                        People on Meetup have fostered community, learned new skills, started businesses, and made life-long friends. Learn how.
                    </Box>
                </Box>
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <Box width="100%" align="left" mt="5">
                    <Link>
                        <Image borderRadius="lg" w="100%" _hover={{ opacity: '0.8' }} mr="15px" src="/img/story-one.jpg" alt="make new friends" mb="2.5"/>
                        <Heading as="h4" size="md" mb="3">
                            Three Ways To Make Coworker Friendships While Working From Home
                        </Heading>
                    </Link>
                    <Box color="#8f8b8b">
                        Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues.
                    </Box>
                </Box>
                <Box width="100%" align="left" mt="5">
                    <Link>
                        <Image borderRadius="lg" w="100%" src="/img/story-two.jpg" alt="make new friends" mb="2.5"/>
                        <Heading as="h4" size="md" mb="3">
                            Three Ways To Make Coworker Friendships While Working From Home
                        </Heading>
                    </Link>
                    <Box color="#8f8b8b">
                        Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues.
                    </Box>
                </Box>
                <Box width="100%" align="left" mt="5">
                    <Link>
                        <Image borderRadius="lg" w="100%" src="/img/story-three.jpg" alt="make new friends" mb="2.5"/>
                        <Heading as="h4" size="md" mb="3">
                            Three Ways To Make Coworker Friendships While Working From Home
                        </Heading>
                    </Link>
                    <Box color="#8f8b8b">
                        Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues.
                    </Box>
                </Box>
            </Grid>
        </Container>
    </Box>
  )
}

export default Stories