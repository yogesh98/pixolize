import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Icon,
} from '@chakra-ui/react'

import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useAuth } from 'pocketbase-react'


const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const {actions, user} = useAuth()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} m={2} borderRadius={'15px'}>
        <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
          <Stack h={'100%'} alignItems={'center'} direction={'row'} spacing={2}>
            <Image h={'60%'} src={useColorModeValue("/pixolize_logo_black.png", "/pixolize_logo_white.png")}/>
            <Text>Pixolize.</Text>
          </Stack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={2}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button onClick={actions.signOut}>Logout</Button>
              {/* <Menu>
                <MenuButton
                  as={Flex}
                  cursor={'pointer'}
                  alignItems={'center'}
                  minW={0}>
                    <Icon as={HamburgerIcon} boxSize={7}/>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <Center>
                    {user?.username}
                  </Center>
                  <MenuDivider />
                  <MenuItem onClick={actions.signOut}>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}