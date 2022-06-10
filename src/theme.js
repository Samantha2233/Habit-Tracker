
import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config })


const colorTheme =  {
  colors: {
    greyDark:'#191919',
    greyMedium: '#252525',
    greyLight: '#F6F5F1'
  }
}

export default theme