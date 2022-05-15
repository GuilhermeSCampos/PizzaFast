import { Box, Flex, Link,Text,Image, Button } from "@chakra-ui/react"
import { Player } from '@lottiefiles/react-lottie-player';


export const Banner = () =>{

   

    return(
        <Flex
            as='section'
            flexDirection={{base:'column', md: 'column', lg:'row'}}
            align="center"
            justify={{base:'center', lg:"space-between"}}
            maxW='1200px'
            w='100%'
            mx='auto'
            pb='4rem'
            mt={{base:'2rem', md:'0'}}
           px='2rem' 
        >
                  <Box
                    d={{ base:'flex',lg:'block'}}
                    flexDirection={{base: 'column', md:'column',lg:'row'}}
                    alignItems="center"
                    justifyContent="center"
                    gap='1.5rem'

                  >
                      <Text 
                        as='h4'
                        color='red.400' 
                        fontSize='14px'
                        fontWeight='600' 
                        lineHeight='21px'  
                        >BOAS-VINDAS A  PIZZAFAST 👋</Text>
                      <Text 
                        textAlign={{base:'center',lg:'initial'}}
                        as='h1'
                        fontSize={{base:'30px', md:'40px', lg:'50px'}}
                        fontWeight='bold'
                        color='yellow.500'
                        
                        
                        >A Pizzaria com a entraga mais rapida da cidade!</Text>
                      <Text 
                        as='p'
                        textAlign={{base:'center',lg:'initial'}}
                        color='yellow.400'
                        fontSize='18px'
                        fontWeight='400'
                        lineHeight='27px'
                        mt='24px'
                        mb='32px'
                        >Faça seu pedido na PizzaFast, a pizzaria com a entrega mais rápida da cidade,<br/> e que oferece +30  sabores de pizzas</Text>  

                      <Button 
                            bg='red.700'
                            color='yellow.400'
                            p='1.7rem 1.5rem'
                            my='1rem'
                            _hover={{
                                bg:'red.600'
                            }}
                           
                            _active={{
                            transform: "scale( 1.05)",
                            borderColor: "green.600",
                            }}
                            _focus={{
                            boxShadow:
                                "0 0 1px 2px green.600, 0 1px 1px rgba(0, 0, 0, .15)",
                            }}
                        >
                            <Image src="/image/whatsapp.svg" alt='whatsApp' mr='.7rem'/>
                            FAÇA SEU PEDIDO
                        </Button>
                  


                    </Box>  
                    <Box 
                        d='flex'
                        justifyContent='center'
                        alignItems='center'
                        mt={{base:'4rem', md:'4rem', lg:'0'}}
                       
                    >
                         <Player
                                autoplay
                                loop
                                src='/animations/home.json'
                                style={{ height: '28rem', width: '28rem' }}
                            >
                                  
                        </Player>
                    </Box>
            </Flex>
    )
}