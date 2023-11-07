import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { HttpHeadersContext } from "../context/HttpHeadersProvider';

function CommentWrite(props) {
    const id = localStorage.getItem('id');
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    const changeContent = e => {
        setContent(e.target.value);
    };

    const createComment = async () => {
        const req = {
            id: id,
            content: content,
        };
        await axios
            .post(`http://localhost:8090/posts`, req)
            .then(resp => {
                console.log('createComment() success :D');
                console.log(resp.data);
            })
            .catch(err => {
                console.log('createComment() error :<');
                console.log(err);
            });
        window.location.reload();
    };

    return (
        <>
            {/* 상단 영역 (프로필 이미지, 댓글 작성자) */}
            <div className="my-1 d-flex justify-content-center">
                <div className="col-1">
                    <img
                        src="/images/profile-placeholder.png"
                        alt="프로필 이미지"
                        className="profile-img"
                    />
                </div>

                <div className="col-7">
                    <span className="comment-id">{id}</span>
                </div>
                <div className="col-2 my-1 d-flex justify-content-end">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={createComment}
                    >
                        댓글 추가
                    </button>
                </div>
            </div>
            {/* 하단 영역 (댓글 내용) */}
            <div className="my-3 d-flex justify-content-center">
                <textarea
                    className="col-10"
                    rows="5"
                    value={content}
                    onChange={changeContent}
                />
            </div>
        </>
    );
}

export default CommentWrite;
