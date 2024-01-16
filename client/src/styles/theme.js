import { extendTheme } from '@chakra-ui/react'
  
const config = {
    styles: {
        global: {
            body: {
                margin:0,
                display: "flex",
                placeItems: "center",
                minHeight: "100vh",
                minWidth: "320px",
                margin: 0,
            }
        }
    },
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme(config)

export default theme