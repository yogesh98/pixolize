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
  import { useRef, useState, useEffect } from 'react'
  import { useAuth } from 'pocketbase-react';
  import { useNavigate } from "react-router-dom";
  
const Signup = () => {
      const navigate = useNavigate();
      const inviteCodeRef = useRef(null)
      const usernameRef = useRef(null)
      const passwordRef = useRef(null)
      const passwordRef2 = useRef(null)
      const { actions, isSignedIn } = useAuth()
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState("")
  
      useEffect(() => {
        if(isSignedIn){
          navigate("/dashboard");
        }
      }, [isSignedIn])
  
      const handleSubmit = async () => {
        try {
          setLoading(true)
          await actions.signinWithEmail(usernameRef?.current?.value, passwordRef?.current?.value);
        } catch (error) {
          setError("Incorrect username or password. Please try again.")
          setLoading(false)
        }
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
                    Sign up for an account
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
                        <FormLabel htmlFor="invite_code">Invite Code</FormLabel>
                        <Input id="invite_code" type="text" ref={inviteCodeRef} />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input id="username" type="username" ref={usernameRef} />
                      </FormControl>
                      <PasswordField ref={passwordRef} />
                      <PasswordField isRepeat={true} ref={passwordRef2} />
                      <Button type="submit" disabled={loading} variant="solid" onClick={handleSubmit}>Sign in</Button>
                    </Stack>
                  </form>
                  <Stack spacing="6">
                    <HStack justify="center">
                        <Text>Have an account?</Text>
                        <Button variant="link" colorScheme="blue" onClick={() => navigate('/login')}>
                            Log In
                        </Button>
                    </HStack>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Container>
      )
  }
  
  export default Signup