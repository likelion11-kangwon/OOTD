import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/header/postDetailHeader';
import Comment from '../../components/comment/Comment';
import Heart from '../../components/likes/HeartButton';

//상세페이지
function BoardDetail() {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const postId = useParams().postId;
    const getPostDetail = async () => {
        await axios
            .get(`http://localhost:8090/posts/${postId}`)
            .then(resp => {
                console.log('getPostDetail() success:)');
                console.log(resp.data);
                setTitle(resp.data.title);
                setUsername(resp.data.username);
                setContents(resp.data.content);
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
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="board-detail">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th className="col-3">작성자</th>
                            <td>
                                <span>{username}</span>
                                {/*<p>{params.id}</p>*/}
                            </td>
                        </tr>

                        <tr>
                            <th>제목</th>
                            <td>
                                <span>{title}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <span>{contents}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Heart />
                <Comment />
            </div>
        </div>
    );
}

export default BoardDetail;
