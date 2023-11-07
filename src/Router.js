// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signInPage/signIn';
import Main from './pages/mainPage/main';
import Board from './pages/boardPage/board';
import MyPage from './pages/myPage/myPage';
import NewPost from './pages/newPostPage/newPost';
import PostModify from './pages/postModifyPage/postModify';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/main" element={<Main />} />
                <Route path="/board" element={<Board />} />
                <Route path="/myPage" element={<MyPage />} />
                <Route path="/newPost" element={<NewPost />} />
                <Route path="/postModify/:postId" element={<PostModify />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
