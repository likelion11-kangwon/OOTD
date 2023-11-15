import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HeartButton from './HeartButton';

const Likes = () => {
    const [isLiked, setLiked] = useState(false);
    const postId = useParams().postId;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`api/post/${postId}/like`, {
                    withCredentials: true,
                });
                console.log('success to get');
                if (response.data.isLiked === 'liked') setLiked(true);
            } catch (error) {
                console.error('Error fetching like status:', error);
            }
        };

        fetchData();
    }, [postId]);

    const toggleLike = async () => {
        try {
            if (isLiked) {
                // Unlike
                await axios.delete(`api/post/${postId}/like`, {
                    withCredentials: true,
                });
            } else {
                // Like
                await axios.post(`api/post/${postId}/like`, null, {
                    withCredentials: true,
                });
            }
            console.log('success to toggle like');
            setLiked(!isLiked);
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };

    return <HeartButton like={isLiked} onClick={toggleLike} />;
};

export default Likes;
