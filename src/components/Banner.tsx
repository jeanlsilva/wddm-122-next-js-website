import { Box, Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";

export default function Banner() {
    const [minWidth1160] = useMediaQuery("(min-width: 1160px)");
    const [minWidth1024] = useMediaQuery("(min-width: 1024px)");
    const [minWidth425] = useMediaQuery("(min-width: 425px)");
    return (
        <Flex h={368.21}>
            <Flex
                bgImage="url('/Background.svg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                justify="center"
                h="335"
                w="100%"
            >
                <Flex w={minWidth1024 ? 1160 : '100%'} justify={minWidth1024 ? "space-between" : "center"} align="center">
                    <Box w={minWidth1160 ? 1160 : '80%'} color="gray.50">
                        <Text as="h1" fontSize={minWidth425 ? "4xl" : "3xl"} maxWidth={426}>5 Continentes,<br /> infinitas possibilidades.</Text>
                        <Text as="h2" fontSize={minWidth425 ? "lg" : "md"} maxWidth={524}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                    </Box>
                    <Box>
                        {minWidth1024 && (
                            <Image
                                src="/Airplane.svg"
                                alt="Airplane"
                                pos="relative"
                                transform="rotate(3deg)"
                                top="55" 
                            />
                        )}
                    </Box>
                </Flex>            
            </Flex>
        </Flex>        
    );
}