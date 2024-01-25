import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Flex, Spinner, Stack, useColorModeValue } from '@chakra-ui/react'
import LoaderComponent from "../components/Loader/LoaderComponent";
import { useAppContent, useClientContext } from "@yogeshp98/pocketbase-react";


export default function Gallery() {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { records: images, actions } = useAppContent('images', true);
    const pb = useClientContext();

    useEffect(() => {
        if(images) setLoading(false)
    }, [images]);
    console.log(pb.files.getUrl(images[0], images[0].image));
    if(loading){
        return (
            <>
                <Flex
                    borderRadius={'15px'} 
                    borderColor={useColorModeValue('gray.200', 'whitealpha.300')} 
                    borderWidth={4}
                    bg={useColorModeValue('gray.100', 'gray.900')}
                    h={'100%'}
                    alignItems={'center'} 
                    justifyContent={'center'}
                >
                    <Spinner size={'xl'}/>
                </Flex>
            </>
        )
    }

	return (
    <>
        <Flex
                borderRadius={'15px'} 
                borderColor={useColorModeValue('gray.200', 'whitealpha.300')} 
                borderWidth={4}
                bg={useColorModeValue('gray.100', 'gray.900')}
                h={'100%'}
                alignItems={'center'} 
                justifyContent={'center'}
            >
                Hello
        </Flex>
    </>
  	);
}