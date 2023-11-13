import React from 'react';

// 헤더에 mainView로 이동하는 back button
const Header = ({ onBackClick }) => {
    return (
        <header>
            <a href="/">back</a>
            <hr />
        </header>
    );
};

export default Header;
