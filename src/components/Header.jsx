import Link from 'next/link';
import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex h={100} align="center" justify="center" >
            <Link href="/">
                <a>
                    <Image src="/Worldtrip.svg" alt="Worldtrip" />
                </a>
            </Link>            
        </Flex>
    );
}