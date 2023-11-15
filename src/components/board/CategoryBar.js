import React, { useState, useEffect } from 'react';
import '../../styles/categoryBar.scss';

const CategoryBar = ({ onSelectCategory }) => {
    const categories = ['all', 'clothes', 'shoes', 'acc'];

    const handleCategoryClick = async category => {
        onSelectCategory(category);
    };

    return (
        <div className="category-section">
            <div className="category-buttons-wrap">
                <ul>
                    {categories.map(category => (
                        <li key={category}>
                            <button
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryBar;
