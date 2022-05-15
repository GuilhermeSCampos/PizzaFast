import { Box,Flex, Text } from "@chakra-ui/react";

export const Description = () => {
  return (
        
        <Box 
            zIndex="10" 
            w='100%' 
            
            bottom={{base:'5rem',md:"5rem"}}
            mx="auto" 
              
            >
      <Flex
        
        flexDirection={{base: 'column', md:'row'}}
       
        
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
            borderColor='red.600'
            
            w='100%'
        >
          <Text
            fontSize='48px'
            fontWeight='bold'
            color='gray.900'
          >+8.500</Text>
          
            <Text  as="span" color="red.600" fontWeight='500'>Clientes atendidos</Text>
            
        </Box>
        <Box
            d='flex'
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRight={{base:'', md:'2px solid'}}
            borderColor='red.600'
            w='100%'

        >
          <Text fontSize='48px'
            fontWeight='bold'
            color='gray.900'>+15</Text>
          <Text as="span" color="red.600" fontWeight='500'>Entregadores disponíveis</Text>
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
            color='gray.900'>+10</Text>
          <Text as="span" color="red.600" fontWeight='500'>Anos no mercado</Text>
        </Box>
      </Flex>
    </Box>
  );
};
