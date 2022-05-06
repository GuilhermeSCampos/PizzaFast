import { Text,Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, IconButton, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { Menu } from './Menu'


export const NavBar = () => {
    const { isOpen, onOpen,onClose } = useDisclosure()
   
        const [colorHeader, setColorHeader] = useState(false)
       
    
        const NavbarColor = () =>{
            if(window.scrollY >= 80){
                setColorHeader(true)
            } else{
                setColorHeader(false)
            }   
        }
    
        window.addEventListener('scroll', NavbarColor)
   
    const isWide = useBreakpointValue({
            base: true,
            md: false
    })

    if(isWide) {
        return (
            <>
              <IconButton
                aria-label='Open navigation'
                icon={<Icon as={RiMenuLine} h='100%' color={colorHeader ?'gray.200':'green.500'}  />}
                variant='unstyled'
                fontSize='28px'
                onClick={onOpen}
              />  

              <Drawer isOpen={isOpen} placement='right' onClose={onClose}>

                <DrawerOverlay>
                        <DrawerContent bg='green.900'>
                            <DrawerCloseButton mt={2} color='gray.200'/>
                            <DrawerHeader 
                                borderBottomWidth='2px'
                                borderColor='green.300'>
                                    Doctor<Text as='strong' color='green.200'>Care</Text>
                            </DrawerHeader>
                               <DrawerBody>
                                   <Menu/>
                                </DrawerBody> 

                        </DrawerContent>
                </DrawerOverlay>

             </Drawer>
            </>
        )
    }
   
    return <Menu/>
}