import React from "react";
import { Box, Stack, useColorModeValue, Button } from '@chakra-ui/react'
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
    <>
        <Stack bg={useColorModeValue('gray.100', 'gray.900')} m={2} borderRadius={'15px'} w={200} spacing={0}>
            <Button 
                borderTopRadius={'15px'} 
                borderBottomRadius={0} 
                h={'100%'} 
                w={'100%'} 
                variant='ghost' 
                isActive={location.pathname === '/dashboard/gallery'} 
                size={'lg'} 
                onClick={() => navigate("gallery")}
            >
                Gallery
            </Button>
            <Button 
                borderTopRadius={0} 
                borderBottomRadius={'15px'} 
                h={'100%'} 
                w={'100%'} 
                variant='ghost' 
                isActive={location.pathname === '/dashboard/edit'} 
                size={'lg'} 
                onClick={() => navigate("edit")}>
                Edit
            </Button>
        </Stack>
    </>
  	);
}