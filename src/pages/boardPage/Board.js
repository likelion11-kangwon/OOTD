import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header/BoardHeader';
import Card from '../../components/board/Card';
import SearchForm from '../../components/search/SearchForm';
import '../../styles/board.scss';

const Board = () => {
    const [boardList, setBoardList] = useState([]);
    const [userValue, setUserValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('category');
    const [searched, setSearched] = useState([]);
    const [searching, setSearching] = useState(false);

    const categories = ['all', 'clothes', 'shoes', 'acc'];

    let navigate = useNavigate();

    const getValue = e => {
        setUserValue(e.target.value.toLowerCase());
    };

    const handleSearch = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setSearching(true);
        }
    };

    const handleClear = () => {
        setUserValue('');
        setSearched([]);
        setSearching(false);
    };

    const handleCategoryChange = newCategory => {
        setSelectedCategory(newCategory);
        setSearched([]);
        setUserValue('');
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

    // useEffect(() => {
    //     const fetchPostsByCategory = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `http://localhost:8090/posts/category/${selectedCategory}`,
    //                 {
    //                     withCredentials: true,
    //                 },
    //             );

    //             setBoardList([...response.data]);
    //         } catch (err) {
    //             console.log('Error fetching posts by category:', err);
    //         }
    //     };

    //     fetchPostsByCategory();
    // }, [selectedCategory]);

    useEffect(() => {
        if (searching) {
            let filteredList;

            if (selectedCategory === 'all') {
                filteredList = boardList.filter(item =>
                    item.title.toLowerCase().includes(userValue),
                );
            } else {
                filteredList = boardList.filter(
                    item =>
                        item.title.toLowerCase().includes(userValue) &&
                        item.category === selectedCategory,
                );
            }

            setSearched(filteredList);
            setSearching(false);
        }
    }, [searching, userValue, selectedCategory, boardList]);

    return (
        <>
            <div>
                <div className="board-header">
                    <Header />
                </div>
                <div className="header-section">
                    <div className="header-wrapper">
                        <div className="header-text">
                            <h2>BOARD</h2>
                        </div>
                        <div className="category-select">
                            <select
                                className="selects"
                                id="category"
                                value={selectedCategory}
                                onChange={e =>
                                    handleCategoryChange(e.target.value)
                                }
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="search-box">
                            <div className="search-box">
                                <SearchForm
                                    userValue={userValue}
                                    onChange={setUserValue}
                                    onKeyDown={handleSearch}
                                    onClick={handleSearch}
                                    onClear={handleClear}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="board-container">
                    <div className="row">
                        {searched.length > 0
                            ? searched.map(post => (
                                  <Card
                                      key={post.id}
                                      title={post.title}
                                      {...post}
                                  />
                              ))
                            : // <BoardList />
                              boardList.map(post => (
                                  <Card
                                      key={post.id}
                                      title={post.title}
                                      {...post}
                                  />
                              ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Board;
