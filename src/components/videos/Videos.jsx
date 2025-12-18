import React from 'react';
import { Stack, Box } from '@mui/material';

import {VideoCard, ChannelCard} from '../index'

const Videos = ({videos}) => {
    console.log(videos);

    return (
        <Stack 
            width={'100%'} 
            direction={'row'} 
            flexWrap={'wrap'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
        >  
            {
                videos.map((item) => {
                    return (
                        <Box key={item.id.videoId}>
                            {
                                item.id.videoId && <VideoCard video={item} />
                            }
                            {
                                item.id.channelId && <ChannelCard video={item} />
                            }
                        </Box>
                    );
                })
            }
        </Stack>
    );
}

export default Videos;