import { Flex, Box, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { api } from "../../../services/api";
import Header from "../../components/Header";

export default function Continent({ continent }) {
    return (
        <>
            <Header />
            <Flex w="100%" h={500} bg={`url('${continent.image}') no-repeat`} bgSize="cover" align="flex-end" justify="center">
                <Box w={1160} mb="59px">
                    <Heading fontSize="5xl" fontWeight="600" color="#fff">{continent.title}</Heading>
                </Box>
            </Flex>
            <Flex w={1160} m="0 auto" mt="80px">
                <Box w="50%">
                    <Text fontSize="2xl" textAlign="justify" lineHeight="36px">
                        {continent.description}
                    </Text>
                </Box>
                <Flex w="50%" align="center" justify="space-around">
                    <Box>
                        <Heading fontSize="5xl" fontWeight="600" color="#ffba08">{continent.countries}</Heading>
                        <Text fontSize="lg" fontWeight="600">countries</Text>
                    </Box>
                    <Box>
                        <Heading fontSize="5xl" fontWeight="600" color="#ffba08">{continent.languages}</Heading>
                        <Text fontSize="lg" fontWeight="600">languages</Text>
                    </Box>
                    <Box>
                        <Heading fontSize="5xl" fontWeight="600" color="#ffba08">{continent.cidades100.length}</Heading>
                        <Text fontSize="lg" fontWeight="600">cities +100</Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={1160} m="0 auto" mt="80px" mb="35px" flexDir="column">
                <Heading fontSize="4xl" fontWeight="500">Cities +100</Heading>
                <Grid templateColumns="repeat(4, 1fr)" gap={12} mt="40px">
                    {continent.cidades100.map(city => {
                        return (
                            <GridItem key={city.id}>
                                <Image src={city.image} alt="city" h="171.63px" w="100%"/>
                                <Flex justify="space-between" align="center" border="1px solid #ffba08" borderTop="0" padding="25px 24px">
                                    <Box>
                                        <Heading fontFamily="Barlow" fontSize="xl">{city.name}</Heading>
                                        <Text fontFamily="Barlow" fontSize="md" color="#999" mt="12px">{city.country}</Text>
                                    </Box>
                                    <Image src={city.flag} alt="city" w="30px" h="30px"/>
                                </Flex>                        
                            </GridItem>
                        );
                    })}
                </Grid>
            </Flex>
        </>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params }) => {
    
    const { data } = await api.get('continents', {
        params: {
            id: params.continent,
        }
    });

    const obj = data[0];

    const continent = {
        id: obj.id,
        title: obj.title,
        subtitle: obj.subtitle,
        description: obj.description,
        countries: obj.countries,
        languages: obj.languages,
        cidades100: obj.cidades100,
        image: obj.image,
    }

    // console.log(obj);

    return {
        props: {
            continent,
        },
        revalidate: 60 * 60 * 24,
    }
}