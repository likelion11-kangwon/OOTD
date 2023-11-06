import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    const [currentPost, setCurrentPost] = useState([]);
    const [page, setPage] = useState(1);

    const postPerPage = 4;
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const handlePageChange = page => {
        setPage(page);
    };

    useEffect(() => {
        axios
            .get('http://localhost:8080/post')
            .then(response => {
                setBoardList([...response.data].reverse());
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    //for pagination
    useEffect(() => {
        setCurrentPost(boardList.slice(indexOfFirstPost, indexOfLastPost));
    }, [boardList, page]);

    return (
        <div className="board-list">
            <Link to="/board/newPost">
                <button className="newPost">글 작성 아이콘</button>
            </Link>

            <table>
                {/*<colgroup>*/}
                {/*    <col width="15%" />*/}
                {/*    <col width="65%" />*/}
                {/*    <col width="20%" />*/}
                {/*</colgroup>*/}
                <tbody>
                    {boardList.map((board, id) => {
                        return (
                            <tr key={id}>
                                <td className="title">
                                    <Link to={`/board/${board.id}`}>
                                        {board.title}
                                    </Link>
                                </td>
                                <td className="contents">
                                    <Link to={`/board/${board.id}`}>
                                        {board.contents}
                                    </Link>
                                </td>
                                <td className="postImage">
                                    <Link to={`/board/${board.id}`}>
                                        {board.postImageUrl}
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                activePage={page}
                itemsCountPerPage={postPerPage}
                totalItemsCount={boardList.length}
                pageRangeDisplayed={4}
                prevPageText="<"
                nextPageText=">"
                onChange={handlePageChange}
            />
        </div>
    );
};

export default BoardList;