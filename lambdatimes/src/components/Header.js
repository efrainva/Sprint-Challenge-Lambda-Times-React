import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const WrapperDiv = styled.div`
color: grey;
background-color:pink;
border-radius:30px;
height:160px;
border:10px solid black;
border-width: 25px 1px 5px 1px;

`;



const Header = () => {
  return (
    <div className="header">
      <span className="date">SMARCH 32, 2018</span>
      <WrapperDiv>
      <h1>Lambda Times</h1>
      </WrapperDiv>
      <span className="temp">98°</span>
    </div>
  )
}

export default Header