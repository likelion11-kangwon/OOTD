import '../../styles/myPage.scss';
import Profile from '../../assets/images/profile.png';
import Pencil from '../../assets/images/pencil.svg';
import Heart from '../../assets/images/heart.svg';
import Picture1 from '../../assets/images/picture1.png';
import Picture2 from '../../assets/images/picture2.png';
import Picture3 from '../../assets/images/picture3.png';
import Picture4 from '../../assets/images/picture4.png';

function MyPage() {
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
                        <div className="name">Like Lion</div>
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
                            <div className="new-post-text">New Post</div>
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
                            <div className="my-likes-text">My Likes</div>
                        </div>
                    </div>
                </div>
                <div className="mypost-box">
                    <div className="mypost-count">
                        <div className="mypost-count-text">My Post</div>
                        <div className="mypost-count-number">12</div>
                    </div>
                    <div className="picture-box">
                        <div className="picture-one">
                            <div className="picture-one-image">
                                <img
                                    src={Picture1}
                                    alt="picture1"
                                    className="picture1-img"
                                />
                            </div>
                            <div className="picture-one-edit-del-box">
                                <div className="picture-one-edit-del">
                                    <div className="picture-one-edit-box">
                                        <div className="picture-one-edit">
                                            edit
                                        </div>
                                    </div>
                                    <div className="picture-one-del-box">
                                        <div className="picture-one-del">
                                            del
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="picture-two">
                            <div className="picture-two-image">
                                <img
                                    src={Picture2}
                                    alt="picture2"
                                    className="picture2-img"
                                />
                            </div>
                            <div className="picture-two-edit-del-box">
                                <div className="picture-two-edit-del">
                                    <div className="picture-two-edit-box">
                                        <div className="picture-two-edit">
                                            edit
                                        </div>
                                    </div>
                                    <div className="picture-two-del-box">
                                        <div className="picture-two-del">
                                            del
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="picture-three">
                            <div className="picture-three-image">
                                <img
                                    src={Picture3}
                                    alt="picture3"
                                    className="picture3-img"
                                />
                            </div>
                            <div className="picture-three-edit-del-box">
                                <div className="picture-three-edit-del">
                                    <div className="picture-three-edit-box">
                                        <div className="picture-three-edit">
                                            edit
                                        </div>
                                    </div>
                                    <div className="picture-three-del-box">
                                        <div className="picture-three-del">
                                            del
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="picture-four">
                            <div className="picture-four-image">
                                <img
                                    src={Picture4}
                                    alt="picture4"
                                    className="picture4-img"
                                />
                            </div>
                            <div className="picture-four-edit-del-box">
                                <div className="picture-four-edit-del">
                                    <div className="picture-four-edit-box">
                                        <div className="picture-four-edit">
                                            edit
                                        </div>
                                    </div>
                                    <div className="picture-four-del-box">
                                        <div className="picture-four-del">
                                            del
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mypage-number-box">
                        <div className="mypage-number">
                            <div className="mypage-number-one">
                                <div className="mypage-number-one-text">1</div>
                            </div>
                            <div className="mypage-number-two">
                                <div className="mypage-number-two-text">2</div>
                            </div>
                            <div className="mypage-number-three">
                                <div className="mypage-number-three-text">
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
