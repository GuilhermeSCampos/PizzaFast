import { Box,Flex, Text } from "@chakra-ui/react";

export const Description = () => {
  return (
        
        <Box 
            zIndex="10" 
            maxW="1200px" 
            position="relative"
            right="0"
            left="0"
            bottom={{base:'5rem',md:"5rem"}}
            mx="auto" 
              
            >
      <Flex
        
        flexDirection={{base: 'column', md:'row'}}
       
        mx='1rem'
        bg="yellow.50"
        align="center"
        justify="center"
        p="3rem 1rem "
        gap='2rem'
        borderRadius='5px'
      >
        <Box 
            d='flex'
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRight={{base:'', md:'2px solid'}}
            borderColor='green.200'
            
            w='100%'
        >
          <Text
            fontSize='48px'
            fontWeight='bold'
            color='gray.600'
          >+3.500</Text>
          
            <Text  as="span" color="green.500" fontWeight='500'>Pacientes atendidos</Text>
            
        </Box>
        <Box
            d='flex'
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRight={{base:'', md:'2px solid'}}
            borderColor='green.200'
            w='100%'

        >
          <Text fontSize='48px'
            fontWeight='bold'
            color='gray.600'>+15</Text>
          <Text as="span" color="green.500" fontWeight='500'>Especialistas disponíveis</Text>
        </Box>
        <Box
            d='flex'
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            
            
            w='100%'
        >
          <Text fontSize='48px'
            fontWeight='bold'
            color='gray.600'>+10</Text>
          <Text as="span" color="green.500" fontWeight='500'>Anos no mercado</Text>
        </Box>
      </Flex>
    </Box>
  );
};
