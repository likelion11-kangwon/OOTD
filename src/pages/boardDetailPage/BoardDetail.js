import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//상세페이지

const BoardDetail = () => {
    const params = useParams().id;
    const navigate = useNavigate();

    // state
    const [detailBoardData, setDetailBoardData] = useState([]);
    const [boardCommentData, setBoardCommentData] = useState([]);

    const sendComment(e) {
        e.preventDefault();
        console.log(comment)
        if(comment === ""){
            alert("write your commment")
        } else{
            const userData ={
                id: sessionStorage.getItem("id"),
                comment: comment,
                title: location.state.props.title
            }
            axios.post("http://localhost:8080/api/user/comment", userData) //user/comment에서 가져옴
                // .then((response) => {
                //     if( response.status === 200 )
                //         window.location.reload()
                // })
        }
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8080/post/${params}`) //params: postId로 게시글 가져옴
            .then(response => {
                setDetailBoardData(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/post/comment/${location.state.props.title}`)
            .then(response => {
                response.json()
            })
            .then(data => {
                setBoardCommentData(data)
            });
    }, []);


    return (
        <div className="board-detail">
            <div className="title">{detailBoardData.title}</div>

            <div className="board-wrapper">
                <div className="board-header">
                    <p>작성자: {detailBoardData.userId}</p>
                </div>

                <div className="board-content">
                    <p>{detailBoardData.content}</p>
                    <p>{detailBoardData.postImageUrl}</p>
                </div>
            </div>

            <div className='comment-box'>
                <h4 className='comment-box-header'>
                    Comment box
                </h4>
                <div className='comment-box-body'>
                    <Table>
                        <thead>
                        <tr>
                            <th>작성자</th>
                            <th>댓글</th>
                        </tr>
                        </thead>
                        <tbody>
                        { comments ? comments.map(co => {
                            return( <Comment
                                id = {co.id}
                                comment={c.comments}>
                            </Comment> );
                        })};
                        </tbody>
                    </Table>
                    <h3>comments</h3>
                    <input type="text" value={comment} onChange={handleComment}> </input>
                    <Button onClick = {sendComment}>댓글 submit</Button>
                </div>

            </div>
        </div>
    );
};

export default BoardDetail;
