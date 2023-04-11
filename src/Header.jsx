import { Button, ButtonGroup, Stack,Box, Flex } from '@chakra-ui/react'
function Header(){
    return(
        <Flex  height="100vh" alignItems = "stretch" justifyContent="center" align="center" >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width={"100%"}
                py={20}
                bgImage="url('https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/temas/elegir-bicicleta-perfecta.jpg')"
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
                backgroundSize="cover"
            >
                <ButtonGroup gap='4'>
                    <Button colorScheme='whiteAlpha'>Boton 1</Button>
                    <Button colorScheme='blackAlpha'>Boton 2</Button>
                </ButtonGroup>
            </Box>

        </Flex>
    )
}

export default Header