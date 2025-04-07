// src/pages/Home.tsx
import {
    Box,
    Button,
    Container,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    Icon,
  } from '@chakra-ui/react'
  import { FiArrowRight } from 'react-icons/fi'
  
  const Home = () => {
    return (
      <Box>
        {/* Hero Section */}
        <Stack spacing={8} textAlign="center" py={20}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Welcome to{' '}
            <Text as={'span'} color={'blue.400'}>
              Your Website
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} mx="auto">
            This is a sample homepage built with Chakra UI and TypeScript.
            Customize this section to match your website's main message.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              colorScheme={'blue'}
              bg={'blue.400'}
              rounded={'full'}
              px={6}
              rightIcon={<FiArrowRight />}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
  
        {/* Features Section */}
        <Box py={20}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {[1, 2, 3].map((item) => (
              <Box key={item} p={6} boxShadow="lg" borderRadius="lg">
                <Heading size="md" mb={4}>
                  Feature {item}
                </Heading>
                <Text color="gray.600">
                  Description for feature {item}. Add your content here.
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    )
  }
  
  export default Home