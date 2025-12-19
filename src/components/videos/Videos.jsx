import React from 'react';
import { Box, Grid } from '@mui/material';

import {VideoCard, ChannelCard} from '../index'

const Videos = ({videos}) => {
    console.log(videos);

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}
                justifyContent={'center'}
                alignItems={'center'}
            >
                {
                    videos.map((item) => {
                        return (
                            <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={item.id.videoId}>
                                {
                                    item.id.videoId && <VideoCard video={item} />
                                }
                                {
                                    item.id.channelId && <ChannelCard video={item} />
                                }
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    );
}

export default Videos;