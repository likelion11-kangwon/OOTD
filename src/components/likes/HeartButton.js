import react, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Heart = styled.img`
    
    `;
const HeartButton = ( { like, onClick }) => {
    return(
        <Heart src={like?HeartIcon:EmptyHeartIcon} onClick={onClick} />
    );
};

export default HeartButton;
