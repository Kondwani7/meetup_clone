import React from 'react'
import { Box, Text, Container, Heading, Link, Button, Image, Grid, Avatar, AvatarGroup} from '@chakra-ui/react'
import { BiUpvote } from "react-icons/bi";
const Upcoming = () => {
  return (
    <Box mt="20">
        <Container maxWidth="container.xl">
            <Box display="flex" alignItems="center" justifyContent="space-between" mb="3">
                <Box>
                    <Heading size="lg" alignItems="center" as="h3">
                        Upcoming online events
                    </Heading>
                </Box>
                <Box>
                    <Link fontWeight="semibold" color="teal.500">
                        Explore more events
                    </Link>
                </Box>
            </Box>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {/*image 1*/}
                <Box postion="relative">
                    <Image borderRadius="lg" w="100%" src="/img/upcoming-1.jpg" alt="make new friends"/>
                    <Box mt="3" color="#877457" fontWeight="semibold" mr="20" alignItems="center">
                        Tue, Mar 1 @ 7:00 PM CAT
                    </Box>
                    <Heading mt="5" alignItems="center" size="sm" fontWeight="semibold">
                        NYAGIM Event: Dr Matt Segall
                    </Heading>
                    <Box  mt="5" color="#877457" fontWeight="medium" mr="20" alignItems="center" >
                        New York Area Group for...
                    </Box>
                    <Box display="flex" alignItems="center" mt="10" mb="3">
                        <AvatarGroup size="sm" max={2}>
                            <Avatar name="1" src="/img/avatar-1.jpg"/>
                            <Avatar name="2" src="/img/avatar-2.jpg"/>
                            <Avatar name="3" src="/img/avatar-3.jpg"/>
                        </AvatarGroup>
                        <Text ml="2" color="#877457">270</Text>
                        <Box color="#877457" ml="40"><BiUpvote size={30}/></Box>
                    </Box>
                </Box>
                <Box postion="relative">
                    <Image borderRadius="lg" w="100%" src="/img/upcoming-2.jpg" alt="make new friends"/>
                    <Box mt="3" color="#877457" fontWeight="semibold" mr="20" alignItems="center">
                        Thu, Mar 10 @ 12:00 AM CAT
                    </Box>
                    <Heading mt="5" alignItems="center" size="sm" fontWeight="semibold">
                        Can Artificial Intelligence Help Us Better Project Climate Change?
                    </Heading>
                    <Box  mt="5" color="#877457" fontWeight="medium" mr="20" alignItems="center" >
                        The Artificial Intelligence for Goo....
                    </Box>
                    <Box display="flex" alignItems="center" mt="10" mb="3">
                        <AvatarGroup size="sm" max={2}>
                            <Avatar name="1" src="/img/avatar-1.jpg"/>
                            <Avatar name="2" src="/img/avatar-2.jpg"/>
                            <Avatar name="3" src="/img/avatar-3.jpg"/>
                        </AvatarGroup>
                        <Text ml="2" color="#877457">270</Text>
                        <Box color="#877457" ml="40"><BiUpvote size={30}/></Box>
                    </Box>
                </Box>
                <Box postion="relative">
                    <Image borderRadius="lg" w="100%" src="/img/upcoming-3.jpg" alt="make new friends"/>
                    <Box mt="3" color="#877457" fontWeight="semibold" mr="20" alignItems="center">
                        Sat, Aug 14 @ 9:45 PM NPT
                    </Box>
                    <Heading mt="5" alignItems="center" size="sm" fontWeight="semibold">
                        Mathematics for Data Science
                    </Heading>
                    <Box  mt="5" color="#877457" fontWeight="medium" mr="20" alignItems="center" >
                        BigNumber NY
                    </Box>
                    <Box display="flex" alignItems="center" mt="10" mb="3">
                        <AvatarGroup size="sm" max={2}>
                            <Avatar name="1" src="/img/avatar-1.jpg"/>
                            <Avatar name="2" src="/img/avatar-2.jpg"/>
                            <Avatar name="3" src="/img/avatar-3.jpg"/>
                        </AvatarGroup>
                        <Text ml="2" color="#877457">270</Text>
                        <Box color="#877457" ml="40"><BiUpvote size={30}/></Box>
                    </Box>
                </Box>
                <Box postion="relative">
                    <Image borderRadius="lg" w="100%" src="/img/upcoming-4.jpg" alt="make new friends"/>
                    <Box mt="3" color="#877457" fontWeight="semibold" mr="20" alignItems="center">
                        Sat, Aug 14 @ 9:45 PM NPT
                    </Box>
                    <Heading mt="5" alignItems="center" size="sm" fontWeight="semibold">
                        Mathematics for Data Science
                    </Heading>
                    <Box  mt="5" color="#877457" fontWeight="medium" mr="20" alignItems="center" >
                        BigNumber NY
                    </Box>
                    <Box display="flex" alignItems="center" mt="10" mb="3">
                        <AvatarGroup size="sm" max={2}>
                            <Avatar name="1" src="/img/avatar-1.jpg"/>
                            <Avatar name="2" src="/img/avatar-2.jpg"/>
                            <Avatar name="3" src="/img/avatar-3.jpg"/>
                        </AvatarGroup>
                        <Text ml="2" color="#877457">270</Text>
                        <Box color="#877457" ml="40"><BiUpvote size={30}/></Box>
                    </Box>
                </Box>
                
                
                
              </Grid>
        </Container>
    </Box>
  )
}

export default Upcoming