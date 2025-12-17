import React, { useEffect, useState } from 'react';
import {Stack, Container, Box, Typography} from '@mui/material';

import {colors} from '../../constants/colors';
import {Category, Videos} from '../index';
import {ApiService} from '../../service/api.service';

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');

    // const selectedCategoryHandler = (event) => {
    //     setSelectedCategory(event.currentTarget.value);
    // }

    const selectedCategoryHandler = (category) => {
        setSelectedCategory(category);
    }

    useEffect(() => {
        ApiService.fetching('search').then(data => console.log(data));
    }, []);

    return (
        <Stack>
            <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} />
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectedCategory} <span style={{color: colors.secondary}}>
                            videos
                        </span>
                    </Typography>
                    <Videos />
                </Container>
            </Box>
        </Stack>
    );
}

export default Main;