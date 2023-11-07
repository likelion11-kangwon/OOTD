import React from 'react';
import { useState, useEffect } from 'react';
import HeartButton from './HeartButton';
const Likes = () => {
    const [like, setLike] = useState(false);

    useEffect( async () => {
        await axios
            .get(`http//localhost:8090/posts`)
            .then( resp => {
                console.log('success to get');
                if(resp.data.type === 'liked') setLike(true)
            })
    }, []);

    const toggleLike = async (e) => {
        await axios
            .post('http//localhost:8090/posts')
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
