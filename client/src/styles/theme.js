import { extendTheme } from '@chakra-ui/react'
  
const config = {
    styles: {
        global: {
            body: {
                margin:0,
                display: "flex",
                minHeight: "100vh",
                minWidth: "320px",
            },
            '#root': {
                padding: '0',
                minWidth:'100%',
            },
            '#gallery_img': {
                objectFit: 'contain',
                maxHeight:'calc(100% - 100px)',
            }
        }
    },
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme(config)

export default theme