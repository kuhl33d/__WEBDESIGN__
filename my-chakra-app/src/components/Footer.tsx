import { Box, Text, Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box py={4} borderTop="1px" borderColor="gray.200">
      <Container maxW="container.xl">
        <Text textAlign="center">© {new Date().getFullYear()} Your Website. All rights reserved.</Text>
      </Container>
    </Box>
  )
}

export default Footer