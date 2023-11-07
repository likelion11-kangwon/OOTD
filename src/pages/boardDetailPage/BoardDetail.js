import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//상세페이지

const BoardDetail = () => {
    const params = useParams().postId;
    const navigate = useNavigate();

    // state
    const [detailBoardData, setDetailBoardData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/post/${params}`)
            .then(response => {
                setDetailBoardData(response.data);
            })

            .catch(function (error) {
                console.log(error);
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
        </div>
    );
};

export default BoardDetail;
