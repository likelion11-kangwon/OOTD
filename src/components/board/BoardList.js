import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { PictureBox, NumberBox } from '../paging';
import '../../styles/board.scss';

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();
    const getBoardList = async () => {
        await axios
            .get('/api/post/pages', { withCredentials: true })
            .then(resp => {
                setBoardList(resp.data.postsSimple);
            })
            .catch(err => {
                console.log('err');
            });
    };

    useEffect(() => {
        getBoardList();
    }, []);

    return (
        <div>
            <div className="board-container">
                <div className="picture-container">
                    {boardList.map((posts, idx) => {
                        if (currentPage === idx) {
                            return (
                                <>
                                    {posts.map((post, index) => {
                                        return (
                                            <PictureBox
                                                key={index}
                                                postId={post.postId}
                                                imageUrl={post.imageUrl}
                                                title={post.title}
                                                navigate={navigate}
                                            />
                                        );
                                    })}
                                </>
                            );
                        }
                    })}
                </div>
                <div className="number-container">
                    {boardList.map((_, idx) => {
                        return (
                            <NumberBox
                                key={idx}
                                idx={idx}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BoardList;
