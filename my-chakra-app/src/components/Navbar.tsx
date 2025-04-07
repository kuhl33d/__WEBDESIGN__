// import React from 'react'
import { Box, Flex, HStack, Link as ChakraLink, Button, useColorMode } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box px={4} shadow="base">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <ChakraLink as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
            YourLogo
          </ChakraLink>
          <HStack spacing={4}>
            <ChakraLink as={RouterLink} to="/">Home</ChakraLink>
          </HStack>
        </HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
      </Flex>
    </Box>
  )
}

export default Navbar