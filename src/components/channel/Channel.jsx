import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Button} from '@mui/material';

const Channel = () => {
    const params = useParams();

    return (
        <Link to={'/'}>
            <Button>Main</Button>
        </Link>
    );
}

export default Channel;