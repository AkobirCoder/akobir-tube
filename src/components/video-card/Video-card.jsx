import React, { Fragment } from 'react';
import {Avatar, Card, CardContent, CardMedia, Stack, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import moment from 'moment/moment';

import {colors} from '../../constants/colors';

const VideoCard = ({video}) => {
    return (
        <Card 
            sx={{
                width: {xs: '340px', sm: '350px', md: '100%'},
                boxShadow: 'none',
                borderRadius: 0
            }}
        >
            <CardMedia 
                image={video?.snippet?.thumbnails?.high?.url} 
                alt={video?.snippet?.title}
                sx={{
                    width: {xs: '340px', sm: '350px', md: '100%'},
                    height: '180px'
                }} 
            />
            <CardContent 
                sx={{
                    background: colors.primary,
                    height: '200px',
                    position: 'relative'
                }}
            >
                <Fragment>
                    <Typography my={'5px'} sx={{opacity: '0.4'}}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant='subtitle1' fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant='subtitle2' sx={{opacity: '0.6'}}>
                        {video?.snippet?.description.slice(0, 70)}
                    </Typography>
                </Fragment>
                <Fragment>
                    <Stack 
                        direction={'row'} 
                        position={'absolute'}
                        bottom={'10px'}
                        alignItems={'center'}
                        gap={'5px'}
                    >
                        <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                        <Typography variant='subtitle2' color='gray'>
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}} />
                        </Typography>
                    </Stack>
                </Fragment>
            </CardContent>
        </Card>
    );
}

export default VideoCard;