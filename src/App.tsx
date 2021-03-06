import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import { Header } from './components/';
import { Member } from './pages/';

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

const Main = styled.main``;

export default App;
