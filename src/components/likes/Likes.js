import React from 'react';
import { useState, useEffect } from 'react';
import HeartButton from './HeartButton';
const Likes = () => {
    const [like, setLike] = useState(false);
    const postId = useParams().postId;

    useEffect( async () => {
        await axios
            .get(`api/post/${postId}/like`)
            .then( resp => {
                console.log('success to get');
                if(resp.data.isLiked === 'liked') setLike(true)
            })
    }, []);

    const toggleLike = async (e) => {
        // TODO 좋아요 포스트 없음
        await axios
            .post(`api/post/${postId}`)
            .then( resp => {
                console.log('success to post');
                setLike(!like);
            })
    }
    return(
        <>
            <HeartButton like={like} onClick={toggleLike} />
        </>
    )
}
