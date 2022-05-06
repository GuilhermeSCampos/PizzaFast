import { Box,Flex,Grid,GridItem,Text,Image } from "@chakra-ui/react"


const cardsService=[

    {
        title: 'Problemas digestivos',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'

    },
    {
       title: 'Saúde Hormonal', 
       description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'    
    },
   {
       title: 'Bem-estar mental', 
       description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
   },
   {
       title: 'Cuidados Pediátricos', 
       description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
   },
   {
       title: 'Autoimune e Inflamação', 
       description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
   },
   {
       title: 'Saúde do Coração', 
       description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
   }
]


export const Services = () => {
    return(

         <Box 
            as='section'
             mt='5rem' 
             pb='4rem'  
            >
             <Box
                d='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                mb='3rem'    
             >
                 <Text 
                 as='h4'
                 color='green.500'
                 fontSize='14px'
                 fontWeight='bold'
                 lineHeight='21px'

                    >SERVIÇOS</Text>
                 <Text 
                    as='h2'
                    fontWeight='bold'
                    fontSize='30px'
                    color='gray.600'
                    textAlign='center'
                    mb='3rem'
                    >Como podemos ajudá-lo a se sentir melhor?</Text>
             </Box>
             <Flex
               
                align='center'
                justify='center'

             >
                <Grid 
                    gap='5'
                    templateColumns={{
                        sm:'repeat(auto-fit, minmax(300px, 1fr))',
                        lg:'repeat(3,1fr)'
                    }}
                >
                
                    {cardsService.map(card =>(
                      <GridItem key={card.title}>
                          
                                <Box
                                bg='white'
                                d='flex'
                                flexDirection='column'
                                w='320px'
                                p='1.2rem'
                                borderRadius='5px'
                                mb='.5rem'
                                
                            >
                                <Image w='25px' py='1rem' src='/image/group.svg'/>
                                    <Text 
                                        as='h3'
                                        color='gray.600'
                                        fontSize='22px'
                                        fontWeight='bold'
                                    >{card.title}</Text>
                                    <Text 
                                        as='p'
                                        color='gray.500'
                                        mt='.7rem'
                                        fontSize='16px'
                                        fontWeight='400'
                                    >{card.description}</Text>
                            </Box>
                      </GridItem>
                    ))}
                </Grid>    
             </Flex>
         </Box>   

    )
}