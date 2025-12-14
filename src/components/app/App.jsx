import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Stack, Button, Container, Box} from '@mui/material';

import {Main, Channel} from '../index';

const App = () => {
    return (
        <Container>
            <Stack spacing={2} direction={'row'}>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Box>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/channel' element={<Channel />} />
                </Routes>
            </Box>
        </Container>
    );
}

export default App;