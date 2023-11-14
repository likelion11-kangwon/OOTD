import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/comment.scss';

function Comment() {
    const [comment, setComment] = useState([]);
    const [contents, setContents] = useState('');
    const postId = useParams().postId;

    const handleCommentSubmit = () => {
        axios
            .post(`/api/comment`, {
                postId,
                contents,
            }, { withCredentials: true } )
            .then(response => {
                const newComment = response.data.comments;
                setComment([...comment, newComment]);
                setContents('');
            })
            .catch(error => {
                console.error('Error adding comment:', error);
            });
    };

    useEffect(() => {
        axios
            .get(`/api/post/${postId}`,
            { withCredentials: true } )
            .then(response => {
                setComment(response.data.comments);
            })
            .catch(error => {
                console.error('Error fetching postId:', error);
            });
    }, [postId]);
    return (
        <div className="commentComp">
            <div className="commentInput">
                <textarea
                    placeholder="Add a comment"
                    value={contents}
                    onChange={e => setContents(e.target.value)}
                />
                <button onClick={handleCommentSubmit}>Add Comment</button>
            </div>
            <div className="comment-list">
                {comment &&
                    comment.map((comment, id) => (
                        <div key={id}>
                            <p>
                                {comment.username}:{comment.contents}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Comment;
