import { Flex, Box, Heading, Text, Grid, GridItem, Image, useMediaQuery } from "@chakra-ui/react";
import { api } from "../../../services/api";
import Header from "../../components/Header";

export default function Continent({ continent }) {
    const [mw1024] = useMediaQuery("(min-width: 1024px)");
    const [mw600] = useMediaQuery("(min-width: 600px)");

    return (
        <>
            <Header />
            <Flex w="100%" h={500} bg={`url('${continent.image}') no-repeat`} bgSize="cover" align="flex-end" justify="center">
                <Box w={mw1024 ? 1160 : '90%'} mb="59px">
                    <Heading fontSize="5xl" fontWeight="600" color="#fff">{continent.title}</Heading>
                </Box>
            </Flex>
            <Flex w={mw1024 ? 1160 : '90%'} m="0 auto" mt="80px" flexDir={mw1024 ? 'row' : 'column'} alignItems={mw1024 ? 'flex-start' : 'center'}>
                <Box w={mw1024 ? "50%" : "90%"}>
                    <Text fontSize="2xl" textAlign="justify" lineHeight="36px">
                        {continent.description}
                    </Text>
                </Box>
                <Flex w={mw1024 ? "50%" : "90%"} align="center" justify={mw600 ? "space-around" : "space-between"} mt={mw600 ? 0 : "20px"}>
                    <Box>
                        <Heading fontSize="5xl" fontWeight="600" color="#ffba08" textAlign={mw600 ? "left" : "center"}>
                            {continent.countries}
                        </Heading>
                        <Text fontSize="lg" fontWeight="600" textAlign={mw600 ? "left" : "center"}>countries</Text>
                    </Box>
                    <Box>
                        <Heading fontSize="5xl" fontWeight="600" color="#ffba08" textAlign={mw600 ? "left" : "center"}>
                            {continent.languages}
                        </Heading>
                        <Text fontSize="lg" fontWeight="600" textAlign={mw600 ? "left" : "center"}>languages</Text>
                    </Box>
                    <Box>
                        <Heading fontSize="5xl" fontWeight="600" color="#ffba08" textAlign={mw600 ? "left" : "center"}>
                            {continent.cidades100
                        .length}</Heading>
                        <Text fontSize="lg" fontWeight="600" textAlign={mw600 ? "left" : "center"}>cities +100</Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={mw1024 ? 1160 : '80%'} m="0 auto" mt="80px" mb="35px" flexDir="column">
                <Heading fontSize="4xl" fontWeight="500">Cities +100</Heading>
                <Grid templateColumns={mw1024 ? "repeat(4, 1fr)" : mw600 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"} gap={12} mt="40px">
                    {continent.cidades100.map(city => {
                        return (
                            <GridItem key={city.id}>
                                <Image src={city.image} alt="city" h={mw600 ? "171.63px" : "auto"} w="100%"/>
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