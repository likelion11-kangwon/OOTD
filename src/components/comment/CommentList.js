import axios from 'axios';
import { useState, useEffect } from 'react';

function CommentList(postId) {
    // Paging
    const [page, setPage] = useState(1);
    const [commentList, setCommentList] = useState([]);

    const getCommentList = async () => {
        await axios
            .get(`http://localhost:8090/posts`)
            .then(resp => {
                console.log('getPostDetail () success:)');
                console.log(resp.data[0].comments);
                setCommentList([...commentList, resp.data[0].comments]);
            })
            .catch(err => {
                console.log('getCommentList () error :<');
                console.log('err');
            });
    };

    useEffect(() => {
        getCommentList(postId);
    }, []);

    return (
        <>
            <div className="justify-content-center">
                <h5>
                    <i className="fas fa-paperclip"></i>
                    댓글 목록
                </h5>
            </div>

            {commentList.map(function (commentList) {
                return (
                    <div className="my-5" key={postId}>
                        {commentList}
                    </div>
                );
            })}
        </>
    );
}

export default CommentList;
