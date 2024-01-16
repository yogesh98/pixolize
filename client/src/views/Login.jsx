import {
  Box,
  Button,
//   Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'

import { PasswordField } from '../components/PasswordField/PasswordField'
import { useRef, useState } from 'react'

export const Login = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const handleSubmit = () => {

    }
    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
          <Stack spacing={8}>
            <Stack spacing="6">
              <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <Flex alignItems={"center"} justifyContent="center">
                  <Image mr={'2'} maxH={'100px'} src="/pixolize_logo_white.png"/>
                  <Heading size={useBreakpointValue({ base: '2xl', md: '4xl' })}>
                      Pixolize.
                  </Heading>
                </Flex>
                <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })}>
                  Log in to your account
                </Heading>
              </Stack>
            </Stack>
            <Box
              py={{ base: '0', sm: '8' }}
              px={{ base: '4', sm: '10' }}
              bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
              boxShadow={{ base: 'none', sm: useColorModeValue('lg', 'dark-lg') }}
              borderRadius={{ base: 'none', sm: 'xl' }}
            >
              <Stack spacing="6">
                {error ? <Text color="red.400">{error}</Text> : null}
                <form onSubmit={handleSubmit}>
                  <Stack spacing="5">
                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input id="email" type="email" ref={emailRef} />
                    </FormControl>
                    <PasswordField ref={passwordRef} />
                    <Button type="submit" disabled={loading} variant="solid" onClick={handleSubmit}>Sign in</Button>
                  </Stack>
                </form>
                {error ? <HStack justify="end">
                  <Button onClick={() => navigate('/forgot-password')} variant="link" colorScheme="blue" size="sm">
                    Forgot password?
                  </Button>
                </HStack> : null}
                <Stack spacing="6">
                  <HStack>
                    <Divider />
                    <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                      or continue with
                    </Text>
                    <Divider />
                  </HStack>
                  <HStack spacing="1" justify="center">
                    <Text>Don't have an account?</Text>
                    <Button variant="link" colorScheme="blue">
                      <Link to="/signup">Sign up</Link>
                    </Button>
                  </HStack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
    )
}
