import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/header/postDetailHeader';
import CommentWrite from '../../components/comment/CommentWrite';
import CommentList from '../../components/comment/CommentList';

//상세페이지
const BoardDetail = () => {
    const seq = useParams();
    // state
    const [postDetail, setPostDetail] = useState([]);
    const [postId, setPostId] = useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setconTent] = useState('');

    const getPostDetail = async () => {
        await axios
            .get(`http://localhost:8090/posts`, { params: seq })
            // .get(`http://localhost:3000/board/${params}`)
            // .get(`http://localhost:8090/posts/${params}`)
            .then(resp => {
                // console.log(seq);
                console.log('getPostDetail() success:)');
                console.log(resp.data);
                setPostDetail(resp.data);
                setPostId(resp.data[0].id);
                setTitle(resp.data[0].title);
                setAuthor(resp.data[0].author);
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
                                <span>{author}</span>
                                {/*<p>{params.id}</p>*/}
                            </td>
                        </tr>

                        <tr>
                            <th>제목</th>
                            <td>
                                <span>{title}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <CommentList seq={seq} />
                <CommentWrite seq={seq} />
            </div>
        </div>
    );
};

export default BoardDetail;
