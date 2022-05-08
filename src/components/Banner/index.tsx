import { Box, Flex, Link,Text,Image, Button } from "@chakra-ui/react"

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

                  >
                      <Text 
                        as='h4'
                        color='green.600' 
                        fontSize='14px'
                        fontWeight='600' 
                        lineHeight='21px'  
                        >BOAS-VINDAS A DOCTORCARE 👋</Text>
                      <Text 
                        textAlign={{base:'center',lg:'initial'}}
                        as='h1'
                        fontSize={{base:'30px', md:'40px', lg:'50px'}}
                        fontWeight='bold'
                        color='gray.700'
                        
                        
                        >Assistência médica simplificada para todos</Text>
                      <Text 
                        as='p'
                        textAlign={{base:'center',lg:'initial'}}
                        color='gray.500'
                        fontSize='18px'
                        fontWeight='400'
                        lineHeight='27px'
                        mt='24px'
                        mb='32px'
                        >Os médicos da DoctorCare vão além dos sintomas para tratar a causa<br/> raiz de sua doença e proporcionar uma cura a longo prazo.</Text>  

                      <Button 
                            bg='green.700'
                            color='gray.200'
                            p='1.7rem 1.5rem'
                            my='1rem'
                            _hover={{
                                bg:'green.600'
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
                            AGENDE SUA CONSULTA
                        </Button>
                  


                    </Box>  
                    <Box 
                        d='flex'
                        justifyContent='center'
                        alignItems='center'
                        mt={{base:'4rem', md:'4rem', lg:'0'}}
                       
                    >
                        <Image src='/image/image.svg'/>
                    </Box>
            </Flex>
    )
}