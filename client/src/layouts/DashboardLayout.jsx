import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import Navbar from "../components/Navbar/Navbar";

export default function DashboardLayout() {
	return (
    <>
        <Box w="100vw" >
            <Navbar/>
        </Box>
    	<Flex h={'100%'}>
            <Stack bg={useColorModeValue('gray.100', 'gray.900')} px={4} m={2} borderRadius={'15px'} w={200}>
                <Box>
                    hello
                </Box>
            </Stack>
            <Box flexGrow={1}>
    			<Outlet />
            </Box>
		</Flex>
    </>
  	);
}