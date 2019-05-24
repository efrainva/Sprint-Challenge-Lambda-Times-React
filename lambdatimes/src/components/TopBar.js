import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const WrapperDiv = styled.div`
color: grey;
background-color:lightblue;
border-radius:15px;
width:25%;
border:10px solid black;
border-width: 25px 1px 5px 1px;

`;


const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
      <WrapperDiv>
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        </WrapperDiv>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>

        <div className="container-right">
          <span>LOG IN</span>
        </div>
        
      </div>
    </div>
  )
}

export default TopBar;