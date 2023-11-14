import React from 'react';
import searchIcon from '../../assets/images/searchIcon.png';
import '../../styles/board.scss';

const SearchForm = ({ userValue, onChange, onKeyDown, onClick, onClear }) => {
    // const handleClear = () => {
    //     onClear();
    // };

    return (
        <form className="search" onSubmit={onClick}>
            <input
                type="text"
                placeholder="search posts"
                value={userValue}
                onChange={e => onChange(e.target.value.toLowerCase())}
                onKeyDown={onKeyDown}
            />
            {userValue && (
                <button type="button" onClick={onClear} className="clearButton">
                    Clear
                </button>
            )}
            {/* <button type="button" onClick={onClick}>
                <img
                    src={searchIcon}
                    alt="search-icon"
                    className="search-icon"
                />
            </button> */}
        </form>
    );
};

export default SearchForm;
