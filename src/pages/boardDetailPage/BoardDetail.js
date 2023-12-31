import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../../components/header/postDetailHeader';
import Comment from '../../components/comment/Comment';
import heartImg from '../../assets/images/heart.svg';
import profileImg from '../../assets/images/profile.png';
import '../../styles/boardDetail.scss';
import Likes from '../../components/likes/Likes';

//상세페이지
function BoardDetail() {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [imageUrl, setImageUrl] = useState();
    const postId = useParams().postId;
    const getPostDetail = async () => {
        await axios
            .get(`/api/post/${postId}`, { withCredentials: true })
            .then(resp => {
                console.log('getPostDetail() success:)');
                console.log(resp.data);
                setTitle(resp.data.title);
                setUsername(resp.data.username);
                setContents(resp.data.contents);
                setImageUrl(resp.data.imageUrl);
            })
            .catch(err => {
                console.log('getPostDetail() error :<');
                console.log('err');
            });
    };

    useEffect(() => {
        getPostDetail();
    }, []);

    return (
        <div className="boardDetail">
            <div className="header">
                <Header />
            </div>
            <div className="boardDetail">
                <div className="postCard">
                    <div className="postCardH">
                        <img src={profileImg} alt="profile image" />
                        <div>{username}</div>
                    </div>
                    <img
                        className="postCardImg"
                        src={imageUrl}
                        alt="post image"
                    />
                    <div className="postCardT">
                        <div>{title}</div>
                        {/* <img src={heartImg} alt="like" /> */}
                        <Likes />
                    </div>
                    <div>{contents}</div>
                </div>
                <Comment />
            </div>
        </div>
    );
}

export default BoardDetail;
