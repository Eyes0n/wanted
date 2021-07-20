import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainSection>MainSection</MainSection>
    </BrowserRouter>
  );
};

export default App;

const MainSection = styled.main`
  height: 100vh;
  padding-top: 50px;
  background-color: yellow;
  @media ${({ theme }) => theme.tablet} {
    padding-top: 57px;
  }
`;
