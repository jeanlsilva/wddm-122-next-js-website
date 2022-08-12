import Link from 'next/link';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Flex, Heading, Text, Box, useMediaQuery } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Continent {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    countries: number;
    languages: number;
    cidades100: string[];
    image: string;
  }

interface ContinentsSlideProps {
    continents: Continent[];
}

SwiperCore.use([Navigation, Pagination]);

export function ContinentsSlide({ continents }: ContinentsSlideProps) {
    const [minWidth1240] = useMediaQuery("(min-width: 1240px)");
    const [maxWidth375] = useMediaQuery("(max-width: 375px)");

    const width = minWidth1240 ? 1240 : '100%';

    return (
        <Swiper 
            style={{ width, height:450, marginTop:58, marginBottom:40 }} 
            navigation
            pagination={{ clickable: true }}
        >
            {continents.map(continent => {
                return (
                    <SwiperSlide key={continent.id} style={{
                        background: `url(${continent.image}) no-repeat`, 
                        backgroundSize: 'cover',
                    }}>
                        <Flex flexDir="column" align="center" justify="center" h="100%">
                            <Link href={`continent/${continent.id}`}>
                                <a>
                                    <Heading align="center" fontSize="5xl" fontWeight="700" color="#dadada">{continent.title}</Heading>
                                    <Text
                                        w={minWidth1240 ? 1240 : '75%'} 
                                        align="center"
                                        m="0 auto" 
                                        fontSize="2xl" 
                                        fontWeight="700" 
                                        color="#dadada" 
                                        mt="1rem"
                                    >
                                        {continent.subtitle}
                                    </Text>
                                </a>                                
                            </Link>                            
                        </Flex>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}