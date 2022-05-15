import { Box, Flex,Text,Image, Icon, Button } from "@chakra-ui/react"
import { Player } from '@lottiefiles/react-lottie-player';

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
                    color='red.600'
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
                    <Image src="/image/mail.svg" />
                    <Text as='p'fontWeight='400' fontSize='16px' color='gray.600'>contato@beautysalon.com</Text>
                </Box>
                <Button 
                            bg='red.600'
                            color='yellow.400'
                            p='1.7rem 1.5rem'
                            my='1rem'
                            _hover={{
                                bg:'red.500'
                            }}
                           
                            _active={{
                            transform: "scale( 1.05)",
                            borderColor: "green.600",
                            }}
                            _focus={{
                            boxShadow:
                                "0 0 1px 2px red.600, 0 1px 1px rgba(0, 0, 0, .15)",
                            }}
                        >
                            <Image src="/image/whatsapp.svg" alt='whatsApp' mr='.7rem'/>
                            FAÇA SEU PEDIDO
                        </Button>
            </Box>
            <Box my='3rem' > 
                        <Player
                                autoplay
                                loop
                                src='../../../style/animations/delivering.json'
                                style={{ height: '30rem', width: '30rem' }}
                            >
                                  
                        </Player>
            </Box>
        </Flex>
    )    

}