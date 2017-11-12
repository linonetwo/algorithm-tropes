import React, { Component } from 'react';
import styled from 'styled-components';

import DisplayRustGist from './components/DisplayRustGist';

const Container = styled.div`width: 95vw;`;
const Header = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 30px;
`;
const H1 = styled.h1`color: #333333;`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <H1>Algoritms Tropes</H1>
        </Header>
        <DisplayRustGist />
      </Container>
    );
  }
}

export default App;
