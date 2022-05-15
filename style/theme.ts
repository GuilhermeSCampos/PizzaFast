import { extendTheme} from "@chakra-ui/react";

const colors = {
    blue:{
        900: '#010319',
        
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