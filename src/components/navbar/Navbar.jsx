import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';

import logo from '../../logo.png';
import {colors} from '../../constants/colors';
import {SearchBar, Profile} from '../index';

const Navbar = () => {
    return (
        <Stack 
            direction={'row'} 
            alignItems={'center'} 
            justifyContent={'space-between'} 
            p={2}
            sx={{
                height: '10vh',
                position: 'sticky', 
                top: 0, 
                zIndex: 999, 
                background: colors.primary
            }}
        >
            <Link to={'/'}>
                <img src={logo} className='logo' alt="This is Logo" width={200} />
            </Link>
            <SearchBar />
            <Box />
            <Profile />
        </Stack>
    );
}

export default Navbar;