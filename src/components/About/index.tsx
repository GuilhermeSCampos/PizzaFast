import { Box,Text,Image, Flex  } from "@chakra-ui/react"



export const About = () => {
    return(

        <Box
            bg="yellow.50" 
            px='1.5rem'
            py='7rem'   
            >
           

            <Flex
               
                flexDirection={{base: 'column', md:'row'}}
                align='center'
                justifyContent='space-between'
                gap='2.4rem'
                
            >
                <Box>

                    <Image w='400px' src="/image/Pic.png"/>
                </Box>
                <Box
                w={{base:'100%',md:'50%'}}
                >
                    <Text 
                as='h4'
                color='green.600'
                fontSize='14px'
                fontWeight='bold'
                lineHeight='24px'
               

                >SOBRE NOS</Text>
            <Text 
                as='h2'
                color='gray.600'
                fontSize='30px'
                fontWeight='700'
                lineHeight='36px'
                py='1.8rem'       
                >Entenda quem somos e por que existimos</Text>    


                <Text 
                    as='p'
                    color='gray.700'
                    fontSize='16px'
                    fontWeight='400'
                    
                >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Text>
                </Box>
            </Flex>
        </Box>

    )
}