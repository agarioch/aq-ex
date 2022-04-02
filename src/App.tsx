import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import { Header } from './components/';
import { Member } from './pages/';
import { QUERIES } from './theme';

function App() {
  return (
    <>
      <Header />
      <Main>
        {/* Routing here */}
        <Member />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 32px 32px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 24px 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px 16px;
  }
`;

export default App;
