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
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'

import { PasswordField } from '../components/PasswordField/PasswordField'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from 'pocketbase-react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const logo = useColorModeValue("/pixolize_logo_black.png", "/pixolize_logo_white.png")
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate = useNavigate()
    const { actions, isSignedIn } = useAuth()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
      if(isSignedIn){
        navigate("/dashboard")
      }
    })
    const handleSubmit = async () => {
      try {
        await actions.signInWithEmail(emailRef?.current?.value, passwordRef?.current?.value)
      } catch (error) {
        if(error.message === "Please verify your email first."){
          setError("Please ask Server Owner to verify your account before logging in.")
        } else {
          setError("Username or Password is incorrect. Please try again.")
        }
      }
    }
    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
          <Stack spacing={8}>
            <Stack spacing="6">
              <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <Flex alignItems={"center"} justifyContent="center">
                  <Image mr={'2'} maxH={'100px'} src={logo}/>
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
                      <FormLabel htmlFor="email">Username</FormLabel>
                      <Input id="email" type="email" ref={emailRef} />
                    </FormControl>
                    <PasswordField ref={passwordRef} />
                    <Button type="submit" disabled={loading} variant="solid" onClick={handleSubmit}>Sign in</Button>
                  </Stack>
                </form>
                <Stack spacing="6">
                  <HStack justify="center">
                    <Text>Don't have an account?</Text>
                    <Button variant="link" colorScheme="blue" onClick={() => navigate('/signup')}>
                            Sign Up
                    </Button>
                  </HStack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
    )
}
