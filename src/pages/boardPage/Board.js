// import BoardHeader from '../../components/header/BoardHeader';
import BoardList from '../../components/board/BoardList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/BoardHeader';
import { BiSearchAlt } from 'react-icons/bi';
import axios from 'axios';
import toMyPageIcon from '../../assets/images/iconToMyPage.png';

const Board = () => {
    const [searchVal, setSearchVal] = useState('');
    const [boardList, setBoardList] = useState([]);
    let navigate = useNavigate();

    const changeSearch = e => {
        setSearchVal(e.target.value);
    };
    const search = () => {
        console.log('search value= ' + searchVal);
        navigate('/board');
        getBoardList(searchVal, 1);
    };

    const getBoardList = async () => {
        await axios
            .get('/api/post/pages')
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
        getBoardList();
    }, []);

    return (
        <>
            <div>
                {/*<BoardHeader />*/}
                <div className="board-header">
                    <Header />
                </div>
                <div className="header-section">
                    <div className="header-text">
                        <h2>BOARD</h2>
                    </div>
                    <div className="to-mypage">
                        <img src={toMyPageIcon} />
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
                <BoardList />
            </div>
        </>
    );
};

export default Board;
