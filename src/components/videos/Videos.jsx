import React from 'react';
import { Box, Grid } from '@mui/material';

import {VideoCard, ChannelCard, Loader} from '../index';

const Videos = ({videos}) => {
    if (!videos.length) {
        return (
            <Loader />
        );
    }

    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <Grid container spacing={2}
                justifyContent={'center'}
                alignItems={'center'}
            >
                {
                    videos.map((item, index) => {
                        return (
                            <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={index}>
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