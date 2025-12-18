import React from 'react';
import {Card, CardMedia} from '@mui/material';

const VideoCard = ({video}) => {
    console.log(video);

    return (
        <Card 
            sx={{
                width: '320px',
                boxShadow: 'none',
                borderRadius: 0
            }}
        >
            <CardMedia image={video?.snippet?.thumbnails?.high?.url} />
        </Card>
    );
}

export default VideoCard;