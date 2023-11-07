import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import Card from '../../components/board/Card';
import Header from '../../components/header/BoardHeader';
import '../../styles/board.scss';
import postData from '../myPage/postData';

const BoardList_dev = () => {
    const [boardList, setBoardList] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    //paging
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    let navigate = useNavigate();
    const totalPages = postData.length;
    const pages = Array.from({ length: totalPages }, (_, i) => i);

    const getBoardList = async (search, page) => {
        await axios
            .get('http://localhost:8090/posts', {
                params: { search: search, page: page },
            })
            .then(resp => {
                console.log('success :)');
                console.log(resp.data);

                setBoardList([...resp.data]);
            })
            .catch(err => {
                console.log('err');
            });
    };
    useEffect(() => {
        getBoardList('', 1);
    }, []);

    //검색
    const changeSearch = e => {
        setSearchVal(e.target.value);
    };
    const search = () => {
        console.log('search value= ' + searchVal);
        navigate('/board');
        getBoardList(searchVal, 1);
    };
    const changePage = page => {
        setPage(page);
        getBoardList(searchVal, page);
    };

    //페이지네이션
    const currentPosts =
        pages[currentPage] !== undefined
            ? postData[pages[currentPage]].filter(post => post !== null)
            : [];

    const handlePageChange = page => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <div className="board-header">
                <Header />
            </div>
            <div className="header-section">
                <div className="header-text">
                    <h2>BOARD</h2>
                </div>
                {/*검색*/}
                <div className="search-box">
                    <form className="search">
                        <input
                            type="text"
                            placeholder="search posts"
                            value={searchVal}
                            onChange={changeSearch}
                        />
                        <button type="button" onClick={search}>
                            <BiSearchAlt />
                        </button>
                    </form>
                </div>
            </div>
            <div className="board-container">
                <div className="row">
                    {boardList.map((boardList, id) => {
                        return (
                            <Link to={`/board/${boardList.id}`}>
                                <Card
                                    id={boardList.id}
                                    title={boardList.title}
                                    username={boardList.username}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
            {/*<div className="mypage-number-container">*/}
            {/*    <div className="mypage-number-box">*/}
            {/*        {pages.map((page, index) => (*/}
            {/*            <div*/}
            {/*                className={`mypage-number ${*/}
            {/*                    currentPage === page ? 'active' : ''*/}
            {/*                }`}*/}
            {/*                key={page}*/}
            {/*                onClick={() => handlePageChange(page)}*/}
            {/*            >*/}
            {/*                <div className="mypage-number-text">*/}
            {/*                    {index + 1}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default BoardList_dev;
