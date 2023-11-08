import React, { useState } from 'react';
import '../../styles/myPage.scss';
import Profile from '../../assets/images/profile.png';
import Pencil from '../../assets/images/pencil.svg';
import Heart from '../../assets/images/heart.svg';
import registrationData from './registrationData ';
import postData from './postData';
import { Link } from 'react-router-dom';

function MyPage() {
    // TODO 유저이름에 따라 get 해주는 api가 없어서 구현 x
    const username = registrationData.username;
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = postData.length;

    const pages = Array.from({ length: totalPages }, (_, i) => i);
    const currentPosts =
        pages[currentPage] !== undefined
            ? postData[pages[currentPage]].filter(post => post !== null)
            : [];

    const handlePageChange = page => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };

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
                        <div className="name">{username}</div>
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
                            {postData.reduce(
                                (acc, page) => acc + (page ? page.length : 0),
                                0,
                            )}
                        </div>
                    </div>
                    <div className="picture-container">
                        {currentPosts.map((post, index) => (
                            <div className="picture-box" key={index}>
                                <div className="picture-image">
                                    <img
                                        src={post.postImageUrl}
                                        alt={`post-preview-${post.postId}`}
                                        className="post-preview"
                                    />
                                </div>
                                <div className="picture-edit-del-box">
                                    <div className="picture-edit-del">
                                        <div className="picture-edit-box">
                                            <div className="picture-edit">
                                                edit
                                            </div>
                                        </div>
                                        <div className="picture-del-box">
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
                            {pages.map((page, index) => (
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
