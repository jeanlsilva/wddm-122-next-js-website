import Head from 'next/head'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { api } from '../../services/api';

export default function Home({ continents }) {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <Flex flexDir="column">
          <Header />
          <Banner />          
          <TravelTypes />
          <Flex justify="center" mt={30}>
            <Box h="0.5" mt={30} bg="#47585B" w="90px" d="block"></Box>
          </Flex>
          <Flex textAlign="center" justify="center" mt="52px">
            <Text fontSize="4xl" fontWeight="500">Are you ready?<br/>Then choose your continent</Text>
          </Flex>
          <ContinentsSlide continents={continents} />
      </Flex>
    </>
  )
}

export const getStaticProps = async(context) => {
  const response = await api.get('continents');

  const continents = response.data.map(continent => {
    return {
      id: continent.id,
      title: continent.title,
      subtitle: continent.subtitle,
      description: continent.description,
      countries: continent.countries,
      languages: continent.languages,
      cidades100: continent.cidades100,
      image: continent.image
    }
  });

  return {
      props: {
        continents,
      },
  }
}