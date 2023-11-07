import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/header/postDetailHeader';
import CommentWrite from '../../components/comment/CommentWrite';
import CommentList from '../../components/comment/CommentList';

//상세페이지
function BoardDetail() {
    // state
    const [postDetail, setPostDetail] = useState([]);
    const [postId, setPostId] = useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    // const [content, setConTent] = useState('');

    const getPostDetail = async () => {
        await axios
            .get(`http://localhost:8090/posts`)
            .then(resp => {
                // console.log(params);
                // console.log(postId);
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
                        {/*<tr>*/}
                        {/*    <th>내용</th>*/}
                        {/*    <td>*/}
                        {/*        /!*<span>{comment}</span>*!/*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                    </tbody>
                </table>
                <CommentList postId={postId} />
                <CommentWrite postId={postId} />
            </div>
        </div>
    );
}

export default BoardDetail;
