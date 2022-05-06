import { Box, Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import { useState } from "react"




export const Menu = () => {
    const [colorHeader, setColorHeader] = useState(false)
   

    const NavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorHeader(true)
        } else{
            setColorHeader(false)
        }   
    }

    window.addEventListener('scroll', NavbarColor)

    return(
        <>
        <Box as='nav'>
                <UnorderedList
                    fontSize={{base:'20px', md:'18px',lg:'20px'}}
                    fontWeight='500'
                    styleType='none'
                    color={ {base:'gray.200', md:'green.500'}}
                    
                    d='flex'
                    flexDirection={{base: 'column', md:'row'}}
                    gap={{base:'4rem', md:'1rem', lg:'2rem'}}
                    alignItems='center'
                    mt={{base:'3rem', md:'0'}}
                >
                    <ListItem color={colorHeader ? 'gray.200':''}>Inicio</ListItem>
                    <ListItem color={colorHeader ? 'gray.200':''}>Sobre</ListItem>
                    <ListItem color={colorHeader ? 'gray.200':''}>Servicos</ListItem>
                    <ListItem color={colorHeader ? 'gray.200':''}>Depoimentos</ListItem>
                    </UnorderedList>     
                </Box> 
                <Flex 
                    align="center"
                    justify="center"
                 >
                    <Button
                        
                        mt={{base: '5rem', md:'0px'}}
                        fontSize={{md: '13px', lg:'16px'}}
                        w={{md: '9rem', lg:'11rem'}}
                        bg={{base:'gray.200',md:'transparent'}}
                        border={{base:'0px',md:'2px solid'}}
                        color={colorHeader ? 'gray.100':'green.600'}
                        borderColor={colorHeader ? 'gray.200':'green.600'}
                        _hover={{ bg: "transparent" }}
                        _active={{
                        transform: "scale( 1.05)",
                        borderColor: "green.600",
                        }}
                        _focus={{
                        boxShadow:
                            "0 0 1px 2px green.600, 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                    >
                        AGENDAR CONSULTA
                    </Button>
                </Flex>         
        </>

    )
}