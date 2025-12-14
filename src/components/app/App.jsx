import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Container, Box} from '@mui/material';

import {Navbar, Main, Channel, VideoDetail, Search} from '../index';

const App = () => {
    return (
        <Container>
            <Box>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/channel/:id' element={<Channel />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/search/:id' element={<Search />} />
                </Routes>
            </Box>
        </Container>
    );
}

export default App;