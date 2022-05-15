import { Box, Flex,Text,Image } from "@chakra-ui/react"


export const Footer = () =>{
    return(
        <Flex
            flexDirection={{base: 'column', md:'row'}}
            bg='gray.900'
            justify={{base:'flex-start', md:'space-between'}}
            align={{base:'flex-start', md:'center'}}
            px='3rem'
            gap='1rem'
            h='270px'
        >

            <Box 
                
                d='flex'
                flexDirection='column'
                justifyContent='center'
                mt={{base:'2rem',md:'0'}}
                >
                <Text as='h2' fontSize='32px' color='red.500'>Pizza<Text color='yellow.400' as='strong'>Fast</Text></Text>
                <Text as='span'>©2021 Beautysalon.</Text>
                <Text as='p' mt='1rem'>Todos os direitos reservados.</Text>
            </Box>
            <Flex
                align="center"
                mt={{base:'2rem', md:'0'}}
                gap="1.5rem"
                
            >
                <Image src="/image/instagram.svg"/>
                <Image src="/image/facebook.svg"/>
                <Image src="/image/youtube.svg"/>
            </Flex>

        </Flex>
    )
}