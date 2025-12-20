import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Avatar, Box, Chip, Stack, Typography} from '@mui/material';
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material';
import ReactPlayer from 'react-player';
import renderHTML from 'react-render-html';

import {ApiService} from '../../service/api.service';
import {Loader} from '../index';

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`);
                
                setVideoDetail(data.items[0]);
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, [id]);

    if (!videoDetail?.snippet) {
        return (
            <Loader />
        );
    }

    // const {
    //     snippet: {title, channelId, channelTitle, description, tags, thumbnails},
    //     statistics: {viewCount, likeCount, commentCount},
    // } = videoDetail;

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display={'flex'}
                sx={{
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: {xs: 'center', md: 'start'}
                }}
            >
                <Box width={'75%'}>
                    <ReactPlayer 
                        src={`https://www.youtube.com/watch?v=${id}`} 
                        className='react-player'
                        controls 
                    />
                    {
                        videoDetail?.snippet?.tags?.map((item, index) => {
                            return (
                                <Chip 
                                    label={item}
                                    key={index}
                                    sx={{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
                                    deleteIcon={<Tag />}
                                    onDelete={() => {}}
                                    variant='outlined'
                                />
                            );
                        })
                    }
                    <Typography variant='h5' fontWeight={'bold'} p={2}>
                        {videoDetail?.snippet?.title}
                    </Typography>
                    <Typography variant='subtitle2' p={2} sx={{opacity: '0.7'}}>
                        {renderHTML(videoDetail?.snippet?.description)}
                    </Typography>
                    <Stack
                        direction={'row'}
                        gap={'20px'}
                        alignItems={'center'}
                        py={1}
                        px={2}
                    >
                        <Stack
                            sx={{opacity: '0.7'}}
                            direction={'row'}
                            alignItems={'center'}
                            gap={'3px'}
                        >
                            <Visibility />
                            {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                        </Stack>
                        <Stack
                            sx={{opacity: '0.7'}}
                            direction={'row'}
                            alignItems={'center'}
                            gap={'3px'}
                        >
                            <FavoriteOutlined />
                            {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                        </Stack>
                        <Stack
                            sx={{opacity: '0.7'}}
                            direction={'row'}
                            alignItems={'center'}
                            gap={'3px'}
                        >
                            <MarkChatRead />
                            {parseInt(videoDetail?.statistics?.commentCount).toLocaleString()} comments
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} py={1} px={2}>
                        <Stack 
                            direction={'row'}
                            alignItems={'center'}
                            gap={'5px'}
                            marginTop={'5px'}
                        >
                            <Avatar 
                                src={videoDetail?.snippet?.thumbnails?.default?.url}
                                alt={videoDetail?.snippet?.channelTitle}
                            />
                            <Typography variant='subtitle2' color='gray'>
                                {videoDetail?.snippet?.channelTitle}
                                <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}} />
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Box width={'25%'}>Suggested videos</Box>
            </Box>
        </Box> 
    );
}

export default VideoDetail;