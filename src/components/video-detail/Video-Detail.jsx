import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Avatar, Box, Chip, Stack, Typography} from '@mui/material';
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material';
import ReactPlayer from 'react-player';
import renderHTML from 'react-render-html';

import {ApiService} from '../../service/api.service';
import {Loader, Videos} from '../index';
import {colors} from '../../constants/colors';

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState([]);
    const [relatedVideo, setRelatedVideo] = useState([]);
    const [showMoreDiscription, setShowMoreDiscription] = useState(false);
    const {id} = useParams();

    const description = videoDetail?.snippet?.description || '';
    const shortDescription = `${description.slice(0, 200)}...`;

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`);

                setVideoDetail(data.items[0]);

                const relatedData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`);

                setRelatedVideo(relatedData.items);
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

    const descriptionHandler = () => {
        setShowMoreDiscription((prevState) => {
            return !prevState;
        });
    }

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display={'flex'}
                sx={{
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: {xs: 'center', md: 'start'}
                }}
            >
                <Box width={{xs: '100%', md: '75%'}}>
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
                        {renderHTML(showMoreDiscription ? description : shortDescription)}
                        {
                            description.length > 200 && (
                                <span
                                    style={{
                                        cursor: 'pointer',
                                        color: colors.secondary,
                                        fontWeight: 'bold',
                                        paddingLeft: '5px'
                                    }}
                                    onClick={descriptionHandler}
                                >
                                    {showMoreDiscription ? 'Less' : 'More'}
                                </span>
                            )
                        }
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
                <Box 
                    width={{xs: '100%', md: '25%'}}
                    px={2}
                    py={{xs: 5, md: 0}}
                    justifyContent={'center'}
                    alignItems={'center'}
                    overflow={'scroll'}
                    maxHeight={'120vh'}
                >
                    <Videos videos={relatedVideo} direction={'column'} />
                </Box>
            </Box>
        </Box> 
    );
}

export default VideoDetail;