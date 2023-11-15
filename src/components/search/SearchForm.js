import React from 'react';
import '../../styles/board.scss';
import ClearButton from '../../assets/images/x-button.png';

const SearchForm = ({ userValue, onChange, onKeyDown, onClick }) => {
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
                <button type="button" onClick={onClick} className="clearButton">
                    <img
                        src={ClearButton}
                        alt="clear-button"
                        className="clear-button"
                    />
                </button>
            )}
        </form>
    );
};

export default SearchForm;
