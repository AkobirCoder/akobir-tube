import React from 'react';
import {Stack, Container, Box, Typography} from '@mui/material';

const Main = () => {
    return (
        <Stack>
            Category
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>

                    </Typography>
                </Container>
            </Box>
        </Stack>
    );
}

export default Main;