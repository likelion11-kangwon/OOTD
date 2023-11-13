import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import Card from '../../components/board/Card';
import Header from '../../components/header/BoardHeader';
import '../../styles/board.scss';

const BoardList_dev = () => {
    const [boardList, setBoardList] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    //paging
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    let navigate = useNavigate();

    const getBoardList = async (search, page) => {
        await axios
            .get('/api/post/pages', {
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
        </div>
    );
};

export default BoardList_dev;
