import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/comment.scss';

function Comment() {
    const [comments, setComments] = useState([]);
    const [contents, setContents] = useState('');
    const postId = useParams().postId;

    const handleCommentSubmit = () => {
        axios
            .post(
                `/api/comment`,
                {
                    postId: postId,
                    contents: contents,
                },
                { withCredentials: true },
            )
            .then(response => {
                const newComment = response.data.comment;
                setComments([...comments, newComment]);
                setContents('');
            })
            .catch(error => {
                console.error('Error adding comment:', error);
            });
    };

    useEffect(() => {
        axios
            .get(`/api/post/${postId}`, { withCredentials: true })
            .then(response => {
                setComments(response.data.comments);
                console.log(Comment);
            })
            .catch(error => {
                console.error('Error fetching postId:', error);
            });
    }, []);
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
                {comments.map((comment, id) => (
                    <div key={id}>
                        <p>
                            {comment.username}: {comment.contents}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment;
