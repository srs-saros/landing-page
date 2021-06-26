import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './assets/logo.svg';

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const rotatingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledImg = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotatingAnimation} infinite 20s linear;
  }
`;

export const App: React.FC = () => (
  <StyledDiv>
    <StyledHeader>
      <StyledImg src={logo} alt="logo" />
      <p>Hello world from {process.env.REACT_APP_COUNTRY}</p>
    </StyledHeader>
  </StyledDiv>
);

export default App;
