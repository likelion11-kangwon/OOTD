import react, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeartImg from '../../assets/images/heart.png';
import EmptyHeartImg from '../../assets/images/empty-heart.png';

const Heart = styled.img`
    height: 20px;
    width: 20px;
`;
const HeartButton = ({ like, onClick }) => {
    return <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />;
};

export default HeartButton;
