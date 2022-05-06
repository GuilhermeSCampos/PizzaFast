import { extendTheme} from "@chakra-ui/react";

const colors = {
    blue:{
        900: '#010319',
        200: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,25,1,1) 0%, rgba(0,212,255,0.3) 0%, rgba(163,224,165,0.3) 50%);'
    }


}

const font = {
    headings: 'Poppins',
    body:'Poppins'
}

const styles = {
    global: {
        body:{
            bg: 'gray.200',
            color: 'gray.300',
        }
    }
}


export const theme = extendTheme({colors,font,styles})