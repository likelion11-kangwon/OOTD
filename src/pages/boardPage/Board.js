import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header/BoardHeader';
import Card from '../../components/board/Card';
import SearchForm from '../../components/search/SearchForm';
import CategoryBar from '../../components/board/CategoryBar';
// import BoardList from '../../components/board/BoardList';
import '../../styles/board.scss';
import BoardList from '../../components/board/BoardList';

const Board = () => {
    const [allBoardList, setAllBoardList] = useState([]);
    const [boardList, setBoardList] = useState([]);
    const [userValue, setUserValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedCategoryBar, setSelectedCategoryBar] = useState('all');
    const [searched, setSearched] = useState([]);
    const [searching, setSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

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

    const getBoardList = async () => {
        try {
            const resp = await axios.get('/api/post/pages', {
                withCredentials: true,
            });
            setBoardList(...resp.data.postsSimple);
            setAllBoardList(...resp.data.postsSimple);
            console.log('Success fetching data');
        } catch (err) {
            console.log('Error fetching data:', err);
        }
    };

    const handleCategoryBar = async Category => {
        setSelectedCategoryBar(Category);
        setSearched([]);
        setUserValue('');
        try {
            if (Category === 'all') {
                getBoardList();
            } else {
                const response = await axios.post('/api/post/category', {
                    tab: Category,
                });

                const postsForCategory = response.data || [];
                setBoardList(postsForCategory);
                console.log(postsForCategory);
                setHasSearched(false);
            }
        } catch (error) {
            console.error('Error fetching posts by category:', error);
        }
    };

    useEffect(() => {
        getBoardList();
    }, []);

    const searchRequest = async keyword => {
        try {
            const response = await axios.post('/api/post/search', {
                keyword: keyword,
            });
            setSearched(response.data);
            setSearching(false);
            setHasSearched(true);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        // if (searching) {
        //     let filteredList;
        //     console.log('useEff', allBoardList);
        //     if (selectedCategory === 'all') {
        //         filteredList = allBoardList.filter(item =>
        //             item.title.toLowerCase().includes(userValue),
        //         );
        //     } else {
        //         filteredList = allBoardList.filter(
        //             item =>
        //                 item.title.toLowerCase().includes(userValue) &&
        //                 item.category === selectedCategory,
        //         );
        //     }
        //     setSearched(filteredList);
        //     console.log('success to search');
        //     console.log(filteredList);
        //     setSearching(false);
        //     setHasSearched(true);
        // }
        if (searching) searchRequest(userValue);
    }, [searching, userValue, selectedCategory, boardList]);

    return (
        <div className="wrapper">
            <div className="board-header">
                <Header />
            </div>
            <div className="header-section">
                <div className="header-wrapper">
                    <div className="header-text">
                        <h2>BOARD</h2>
                    </div>
                    {/* <div className="category-select"> */}
                    {/* <select
                            className="selects"
                            id="category"
                            value={selectedCategory}
                            onChange={e => handleCategoryChange(e.target.value)}
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select> */}
                    {/* </div> */}
                    <div className="search-box">
                        <div className="search">
                            <SearchForm
                                userValue={userValue}
                                onChange={setUserValue}
                                onKeyDown={handleSearch}
                                onClick={handleClear}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="board-body">
                <div className="category-bar-section">
                    <CategoryBar onSelectCategory={handleCategoryBar} />
                </div>
                <div className="board-container">
                    <div className="row">
                        {hasSearched && searched.length > 0 ? (
                            searched.map(post => {
                                if (post != null) {
                                    return (
                                        <Link to={`/board/${post.postId}`}>
                                            <Card
                                                key={post.postId}
                                                title={post.title}
                                                image={post.imageUrl}
                                                {...post}
                                            />
                                        </Link>
                                    );
                                }
                            })
                        ) : searched.length === 0 && hasSearched ? (
                            <p>No search results found.</p>
                        ) : (
                            boardList.map(post => {
                                if (post != null) {
                                    return (
                                        <Link to={`/board/${post.postId}`}>
                                            <Card
                                                key={post.postId}
                                                title={post.title}
                                                image={post.imageUrl}
                                                {...post}
                                            />
                                        </Link>
                                    );
                                }
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
