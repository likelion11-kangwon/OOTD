import axios from 'axios';
import { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';

const CommentList = props => {
    const seq = props.seq;
    // Paging
    const [page, setPage] = useState(1);
    const [commentList, setCommentList] = useState([]);

    const getCommentList = async () => {
        await axios
            .get(`http://localhost:8090/comments`, {
                params: { boardSeq: seq, page: page },
            })
            .then(resp => {
                console.log('getCommentList () success:)');
                console.log(resp.data);
                setCommentList([...resp.data]);
            })
            .catch(err => {
                console.log('getCommentList () error :<');
                console.log('err');
            });
    };

    const changePage = page => {
        setPage(page);
        getCommentList(page);
    };
    useEffect(() => {
        getCommentList(1);
    }, []);

    return (
        <>
            <div className="justify-content-center">
                <h5>
                    <i className="fas fa-paperclip"></i>
                    댓글 목록
                </h5>
            </div>
            <Pagination
                activePage={page}
                itemsCountPerPage={4}
                // totalItemsCount={totalCnt}
                pageRangeDisplayed={4}
                prevPageText={'‹'}
                nextPageText={'›'}
                onChange={changePage}
            />

            {commentList.map(function (comments, id) {
                return (
                    <div className="my-5" key={id}>
                        {commentList[id].content}
                    </div>
                );
            })}
        </>
    );
};

export default CommentList;
