import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Card, CardBody, Flex, Grid, Heading, Image, Spinner, Stack, useColorModeValue } from '@chakra-ui/react'
import LoaderComponent from "../components/Loader/LoaderComponent";
import { useAppContent, useClientContext } from "@yogeshp98/pocketbase-react";


export default function Gallery() {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [currentImg, setCurrentImg] = useState();
    const { records: images, actions } = useAppContent('images', true);
    const pb = useClientContext();

    useEffect(() => {
        if(images) setLoading(false)
    }, [images]);

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
        h={'100%'}
        borderRadius={'15px'} 
        borderColor={useColorModeValue('gray.200', 'whitealpha.300')} 
        borderWidth={4}
        bg={useColorModeValue('gray.100', 'gray.900')}
    >
        <Box
            overflow={'auto'}
            borderRightWidth={4}
        >
            {images.map((img) => <Image 
                key={img.id}
                m={2}
                borderRadius={'7.5px'}
                src={pb.files.getUrl(img, img.image, {thumb:'100x100'})} 
                onClick={() => setCurrentImg(img)}
            />)}
        </Box>
        <Box
            key={currentImg?.id}
            p={2}
            flexGrow={1}
            bgImg={currentImg ? pb.files.getUrl(currentImg, currentImg.image) : null}
            bgSize={'contain'}
            bgRepeat={'no-repeat'}
            bgPosition={'center'}
        />   
    </Flex>
    </>
  	);
}