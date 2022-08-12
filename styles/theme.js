import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        yellow: '#FFBA08',
        black: '#000000',
        gray: {
            900: '#1D1D1D',
            600: '#47585B',
            400: '#999999',  
            100: '#DADADA',
            50: '#F5F8FA'         
        },
        white: '#FFFFFF'
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            heading: {
                fontWeight: 500,
                size: 9
            },
            body: {
                fontWeight: 400,
                color: 'gray.600',
                size: 5
            },
            h1: {
                fontWeight: 500
            }
        },
    },
});
