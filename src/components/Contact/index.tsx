import { Box, Flex,Text,Image, Icon, Button } from "@chakra-ui/react"


export const Contact = () =>{
      
    return(
        <Flex
            flexDirection={{base: 'column', md:'row'}}
            align="center"
            justify='space-around'
            my='5rem'
            px='1.5rem'
        >
            <Box
               
            >
                <Text 
                    as='h2'
                    fontWeight='700'
                    fontSize='30px' 
                    color='gray.600'
                    lineHeight='39px'
                    my='2rem'   
                    >Entre em contato com a gente!</Text>
                <Box
                     d='flex'
                     alignItems='center'
                     my='1rem'
                     gap='.7rem'
                    >
                   <Image src="/image/map.svg"/>
                   <Text fontWeight='400' fontSize='16px' color='gray.600'as='p'>R.Joao Joaca Assuncao, 111</Text>
                </Box>
                <Box
                    d='flex'
                    alignItems='center'
                    my='1rem'
                    gap='.7rem'    
                >
                    <Image src="/image/mail.svg"/>
                    <Text as='p'fontWeight='400' fontSize='16px' color='gray.600'>contato@beautysalon.com</Text>
                </Box>
                <Button 
                    bg='green.700'
                    color='gray.200'
                    p='1.7rem 1.5rem'
                    my='1rem'
                    _hover={{
                        bg:'green.600'
                    }}
                >
                    <Image src="/image/whatsapp.svg" alt='whatsApp' mr='.7rem'/>
                    AGENDE SUA CONSULTA
                </Button>
            </Box>
            <Box my='3rem' > 
                <Image w='400px' src="/image/contact.png"/>
            </Box>
        </Flex>
    )    

}