import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import axios from 'axios';
import toMyPageIcon from '../../assets/images/iconToMyPage.png';
import Header from '../../components/header/BoardHeader';
import BoardList from '../../components/board/BoardList';
import Card from '../../components/board/Card';

const Board = () => {
    const [boardList, setBoardList] = useState([]);
    const [userValue, setUserValue] = useState('');
    const [searched, setSearched] = useState([]);
    const [searching, setSearching] = useState(false);

    let navigate = useNavigate();

    const getValue = e => {
        setUserValue(e.target.value.toLowerCase());
    };

    const handleSearch = e => {
        e.preventDefault(); // Prevent form submission, which causes the page to reload
        setSearching(true);
    };

    const handleOnClick = e => {
        if (e.key === 'Enter') {
            setSearching(true);
        }
    };

    useEffect(() => {
        const getBoardList = async () => {
            try {
                const resp = await axios.get('http://localhost:8090/posts', {
                    withCredentials: true,
                });
                setBoardList([...resp.data]);
            } catch (err) {
                console.log('Error fetching data:', err);
            }
        };

        getBoardList();
    }, []);

    useEffect(() => {
        if (searching) {
            const result = boardList.filter(item =>
                item.title.toLowerCase().includes(userValue),
            );
            setSearched(result);
            setSearching(false);
        }
    }, [searching, userValue, boardList]);

    const handleBackClick = () => {
        // Reset the search results and clear the search input
        setSearched([]);
        setUserValue('');
    };

    return (
        <>
            <div>
                <div className="board-header">
                    <Header />
                </div>
                <div className="header-section">
                    <div className="header-text">
                        <h2>BOARD</h2>
                    </div>
                    <div className="search-box">
                        <form className="search" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="search posts"
                                value={userValue}
                                onChange={getValue}
                                onKeyDown={handleOnClick}
                            />
                            <button type="button" onClick={handleOnClick}>
                                <BiSearchAlt />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="search-results">
                    {searched.length > 0
                        ? searched.map(post => (
                              <Card
                                  key={post.id}
                                  title={post.title}
                                  {...post}
                              />
                          ))
                        : boardList.map(post => <BoardList />)}
                </div>
            </div>
        </>
    );
};

export default Board;
