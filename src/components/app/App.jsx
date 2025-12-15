import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

import {Navbar, Main, Channel, VideoDetail, Search} from '../index';

const App = () => {
    return (
        <Box>
            <Navbar />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<Channel />} />
                <Route path='/search/:id' element={<Search />} />
            </Routes>
        </Box>
    );
}

export default App;