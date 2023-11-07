// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signInPage/signIn';
import SignUp from './pages/signUpPage/signUp';
import Main from './pages/mainPage/main';
import BoardList from './pages/boardPage/BoardList_dev';
import BoardDetail from './pages/boardDetailPage/BoardDetail';
import MyPage from './pages/myPage/myPage';
import NewPost from './pages/newPostPage/newPost';
import PostModify from './pages/postModifyPage/postModify';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/main" element={<Main />} />
                <Route path="/board" element={<BoardList />} />
                <Route path="/board/:postId" element={<BoardDetail />} />
                <Route path="/myPage" element={<MyPage />} />
                <Route path="/newPost" element={<NewPost />} />
                <Route path="/postModify/:postId" element={<PostModify />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
