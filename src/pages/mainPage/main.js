import { Route, Routes } from 'react-router-dom';
import BoardPage from '../boardPage/boardList';
import React from 'react';

function Main() {
    return (
        <div>
            <Routes>
                <Route path="/board" element={<BoardPage />} />
            </Routes>
            <h1>홈 화면입니다.</h1>
        </div>
    );
}

export default Main;
