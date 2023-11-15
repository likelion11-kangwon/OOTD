import React, { useEffect, useState } from 'react';
import '../../styles/myPage.scss';
import Profile from '../../assets/images/profile.png';
import Pencil from '../../assets/images/pencil.svg';
import Heart from '../../assets/images/heart.svg';
import registrationData from './registrationData ';
import postData from './postData';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function MyPage() {
    const navigator = useNavigate();
    // TODO 유저이름에 따라 get 해주는 api가 없어서 구현 x

    const [currentPage, setCurrentPage] = useState(1);
    const [myPostTotalPage, setMyPostTotalPage] = useState([]);
    const [myLikeTotalPage, setMyLikeTotalPage] = useState([]);

    const [myPage, setMyPage] = useState({
        username: '',
        myPostList: [],
        myLikeList: [],
    });

    const handlePageChange = page => {
        setCurrentPage(page);
    };
    const fillArray = length =>
        new Array(Math.floor((length - 1) / 4) + 1).fill().map((_, i) => i + 1);

    useEffect(() => {
        if (myPage.myPostList?.length > 0) {
            setMyPostTotalPage(fillArray(myPage.myPostList.length));
        }
        if (myPage.myLikeList?.length > 0) {
            setMyLikeTotalPage(fillArray(myPage.myLikeList.length));
        }
    }, [myPage]);

    useEffect(() => {
        axios({
            url: '/api/user/mypage',
            method: 'post',
            withCredentials: true,
        })
            .then(resp => {
                setMyPage(resp.data);
                console.log(myPage);
            })
            .catch(err => {
                setMyPage({
                    username: '',
                    myPosList: [],
                    myLikeList: [],
                });
            });
    }, []);

    return (
        <div className="mypage-frame">
            <div className="mypage-box">
                <div className="myprofile">
                    <div className="profile-name">
                        <div className="profile">
                            <img
                                src={Profile}
                                alt="profile"
                                className="profile-img"
                            />
                        </div>
                        <div className="name">{myPage.username}</div>
                    </div>
                    <div className="post-likes">
                        <div className="new-post">
                            <div className="post-icon">
                                <div className="pencil-icon">
                                    <img
                                        src={Pencil}
                                        alt="pencil"
                                        className="pencil-img"
                                    />
                                </div>
                            </div>
                            <Link className="new-post-text" to="/newPost">
                                New Post
                            </Link>
                        </div>
                        <div className="my-likes">
                            <div className="likes-icon">
                                <div className="heart-icon">
                                    <img
                                        src={Heart}
                                        alt="heart"
                                        className="heart-img"
                                    />
                                </div>
                            </div>
                            <div
                                className="my-likes-text"
                                onClick={() => {
                                    alert(
                                        'My Likes 기능은 아직 구현되지 않았습니다.',
                                    );
                                }}
                            >
                                My Likes
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mypost-box">
                    <div className="mypost-count">
                        <div className="mypost-count-text">My Post</div>
                        <div className="mypost-count-number">
                            {myPage.myPostList.length}
                        </div>
                    </div>
                    <div className="picture-container">
                        {myPage.myPostList
                            .filter(
                                (v, i) => Math.floor(i / 4) === currentPage - 1,
                            )
                            .map((post, index) => (
                                <div className="picture-box" key={index}>
                                    <div className="picture-image">
                                        <img
                                            src={post.imageUrl}
                                            alt={`post-preview-${post.postId}`}
                                            className="post-preview"
                                        />
                                    </div>
                                    {post.title.length >= 10
                                        ? post.title.slice(0, 9) + ' ...'
                                        : post.title}
                                    <div className="picture-edit-del-box">
                                        <div className="picture-edit-del">
                                            <div
                                                className="picture-edit-box"
                                                onClick={() => {
                                                    navigator(
                                                        `/postModify/${post.postId}`,
                                                    );
                                                }}
                                            >
                                                <div className="picture-edit">
                                                    edit
                                                </div>
                                            </div>
                                            <div
                                                className="picture-del-box"
                                                onClick={() => {
                                                    if (
                                                        // eslint-disable-next-line no-restricted-globals
                                                        confirm(
                                                            `"${post.title}" 게시물을 삭제하시겠습니까?`,
                                                        )
                                                    ) {
                                                        axios
                                                            .delete(
                                                                `/api/post/${post.postId}`,
                                                            )
                                                            .then(() => {
                                                                // TODO 포스트 다시 가져오기(get) 밑에 코드로 시도해보려했으나 실패함
                                                                setCurrentPage(
                                                                    currentPage,
                                                                );
                                                            })
                                                            .catch(err => {
                                                                console.log(
                                                                    err,
                                                                );
                                                            });
                                                    }
                                                }}
                                            >
                                                <div className="picture-del">
                                                    del
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="mypage-number-container">
                        <div className="mypage-number-box">
                            {myPostTotalPage.map((page, index) => (
                                <div
                                    className={`mypage-number ${
                                        currentPage === page ? 'active' : ''
                                    }`}
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                >
                                    <div className="mypage-number-text">
                                        {index + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
