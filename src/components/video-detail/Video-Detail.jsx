import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Box, Chip} from '@mui/material';
import { Tag } from '@mui/icons-material';
import ReactPlayer from 'react-player';

import {ApiService} from '../../service/api.service';

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

    // const {
    //     snippet: {title, channelId, channelTitle, description, tags, thumbnails},
    //     statistics: {viewCount, likeCount, commentCount},
    // } = videoDetail;

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display={'flex'}>
                <Box width={'75%'}>
                    <ReactPlayer 
                        src={`https://www.youtube.com/watch?v=${id}`} 
                        className='react-player'
                        controls 
                    />
                    {videoDetail?.snippet?.tags?.map((item, index) => (
                        <Chip 
                            label={item}
                            key={index}
                            sx={{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
                            deleteIcon={<Tag />}
                            onDelete={() => {}}
                            variant='outlined'
                        />
                    ))}
                </Box>
                <Box width={'25%'}>Suggested videos</Box>
            </Box>
        </Box> 
    );
}

export default VideoDetail;