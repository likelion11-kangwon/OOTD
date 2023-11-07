import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Comment() {
    const [comment, setComment] = useState([]);
    const [username, setUsername] = useState('');
    const [contents, setContents] = useState('');
    const postId = useParams().postId;

    const handleCommentSubmit = () => {
        axios
            .post('http://localhost:8090/comments', {
                username,
                contents,
            })
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
            .get(`http://localhost:8090/posts/${postId}`)
            .then(response => {
                setComment(response.data.comments);
                setUsername(response.data.username);
            })
            .catch(error => {
                console.error('Error fetching postId:', error);
            });
    }, [postId]);
    return (
        <div className="App">
            <h1>Comments for Post {postId}</h1>
            {/*<CommentList comments={comment} />*/}
            {/*<CommentForm*/}
            {/*    postId={postId}*/}
            {/*    onCommentSubmit={handleCommentSubmit}*/}
            {/*/>*/}
            <textarea
                placeholder="Add a comment"
                value={contents}
                onChange={e => setContents(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>Add Comment</button>
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
