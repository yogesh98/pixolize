import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, Flex } from '@chakra-ui/react'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Navbar/Sidebar";

export default function DashboardLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if(location.pathname === '/dashboard/'){
            navigate("gallery")
        }
    }, [location.pathname]);
	return (
    <>
    <Flex id="dashbaord_bounding_box" maxH={'100%'} flexDir={'column'}>
        <Box w="100vw" >
            <Navbar/>
        </Box>
    	<Flex flexGrow={1} overflow={'auto'}>
            <Sidebar/>
            <Box m={2} flexGrow={1}>
    			<Outlet />
            </Box>
		</Flex>
    </Flex>
    </>
  	);
}