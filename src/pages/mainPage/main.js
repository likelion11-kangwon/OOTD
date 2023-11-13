import { Route, Routes, useNavigate } from 'react-router-dom';
import Board from '../../components/board/BoardList';
import React from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import toMypageIcon from '../../assets/images/iconToMyPage.png';
import '../../styles/main.scss';

const Main = () => {
    const navigate = useNavigate();
    const navigateToBoard = () => {
        navigate('/board');
    };
    const navigateToMyPage = () => {
        navigate('/myPage');
    };
    const navigateToMain = () => {
        navigate('/main');
    };

    return (
        <div>
            <header>
                <div className="logo">
                    <button onClick={navigateToMain} className="logo-icon">
                        <h1>WIYO¿</h1>
                    </button>
                </div>
                <button onClick={navigateToMyPage} className="move-to-mypage">
                    <img src={toMypageIcon} className="tomypage" />
                </button>
            </header>
            <body>
                <section className="main-top-section">
                    <div className="one">
                        <h1>Put on</h1>
                    </div>
                    <div className="two">
                        <h1>
                            <p>&share</p>
                        </h1>
                    </div>
                    <div className="three">
                        <h1>your ootd</h1>
                    </div>
                    <h3>
                        <a>ootd:</a>outfit of the day
                    </h3>
                    <h3>다양하고 색다른 ootd를 한 곳에서</h3>
                </section>
                <div className="board-bar">
                    <div className="board-bar-text">
                        <h2>BOARD</h2>
                    </div>
                    <div className="move-to-board">
                        <button onClick={navigateToBoard}>
                            <MdOutlineNavigateNext
                                size="40"
                                color="#A431B9FF"
                                className="logo"
                            />
                        </button>
                    </div>
                </div>
                <section className="board-list">
                    <div className="viewBoard">
                        <Board />
                    </div>
                </section>
            </body>
        </div>
    );
};

export default Main;
