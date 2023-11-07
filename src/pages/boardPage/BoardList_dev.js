import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Header from '../../components/header/BoardHeader';

const BoardList_dev = () => {
    const [boardList, setBoardList] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    //paging
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);

    let navigate = useNavigate();

    const getBoardList = async (search, page) => {
        await axios
            .get('http://localhost:8090/posts', {
                params: { search: search, page: page },
            })
            .then(resp => {
                console.log('success :)');
                console.log(resp.data);

                setBoardList([...resp.data]);
                // setTotalCnt()
            })
            .catch(err => {
                console.log('err');
            });
    };
    useEffect(() => {
        getBoardList('', 1);
    }, []);

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
            {/*검색*/}
            <div className="search-box">
                <div className='"search-bar-section'>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="search posts"
                        value={searchVal}
                        onChange={changeSearch}
                    />
                </div>
                <div className="search-button-section">
                    <button type="button" className="btn" onClick={search}>
                        검색
                    </button>
                </div>
            </div>
            <div className="board-container">
                <div className="row">
                    {boardList.map((boardList, postId) => {
                        return (
                            <Link to={`/board/${boardList.id}`}>
                                <Card
                                    id={boardList.id}
                                    title={boardList.title}
                                    author={boardList.author}
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
