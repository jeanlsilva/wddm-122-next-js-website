import { Grid, Center, Image, Text, useMediaQuery, Flex, Box } from '@chakra-ui/react';

export function TravelTypes() {
  const [minWidth1024] = useMediaQuery("(min-width: 1024px)");
  const [maxWidth425] = useMediaQuery("(max-width: 425px)");

    return (
      maxWidth425 ? (
        <Flex flexWrap="wrap" justify="center" mt="11px">
          <Flex flexDir="row" w="50%" justify="center" mt="27px">
              <Image src="/Ellipse.svg" alt="Cocktail" mr={5} w="8px" />
              <Text fontSize="lg">nightlife</Text>
          </Flex>
          <Flex flexDir="row" w="50%" justify="center" mt="27px">
              <Image src="/Ellipse.svg" alt="Surf" mr={5} w="8px" />
              <Text fontSize="lg">beach</Text>
          </Flex>
          <Flex flexDir="row" w="50%" justify="center" mt="27px">
              <Image src="/Ellipse.svg" alt="Building" mr={5} w="8px" />
              <Text fontSize="lg">modern</Text>
          </Flex>
          <Flex flexDir="row" w="50%" justify="center" mt="27px">
              <Image src="/Ellipse.svg" alt="Museum" mr={5} w="8px" />
              <Text fontSize="lg">classic</Text>
          </Flex>
          <Flex flexDir="row" w="50%" justify="center" mt="27px">
              <Image src="/Ellipse.svg" alt="Earth" mr={5} w="8px" />
              <Text fontSize="lg">and more...</Text>
          </Flex>
        </Flex>
      ) : (
        <Grid 
          templateColumns={minWidth1024 ? "repeat(5, 1fr)" : "repeat(2, 1fr)"} 
          mt="114px">
            <Center flexDir="column">
              <Image src="/Cocktail.svg" alt="Cocktail" />
              <Text fontSize="lg" fontWeight="600" mt={6}>nightlife</Text>
            </Center>
            <Center flexDir="column">
              <Image src="/Surf.svg" alt="Surf" />
              <Text fontSize="lg" fontWeight="600" mt={6}>beach</Text>
            </Center>
            <Center flexDir="column">
              <Image src="/Building.svg" alt="Building" mr={5} />
              <Text fontSize="lg" fontWeight="600" mt={6}>modern</Text>
            </Center>
            <Center flexDir="column">
              <Image src="/Museum.svg" alt="Museum" />
              <Text fontSize="lg" fontWeight="600" mt={6}>classic</Text>
            </Center>
            <Center flexDir="column">
              <Image src="/Earth.svg" alt="Earth" />
              <Text fontSize="lg" fontWeight="600" mt={6}>and more...</Text>
            </Center>
          </Grid>
      )
    );
}