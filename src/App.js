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
  padding-top: 50px;

  @media ${({ theme }) => theme.tablet} {
    padding-top: 57px;
  }
`;
