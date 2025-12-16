import React, { useState } from 'react';
import {Stack, Container, Box, Typography} from '@mui/material';

import {colors} from '../../constants/colors';
import {Category} from '../index';

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');

    const selectedCategoryHandler = (event) => {
        console.log(event.currentTarget.value);
        setSelectedCategory(event.currentTarget.value);
    }

    return (
        <Stack>
            <Category selectedCategoryHandler={selectedCategoryHandler} />
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectedCategory} <span style={{color: colors.secondary}}>
                            videos
                        </span>
                    </Typography>
                    Videos
                </Container>
            </Box>
        </Stack>
    );
}

export default Main;