// @flow
import React from 'react';
import styled from 'styled-components';

import GistEmbedding from './GistEmbedding';
import fromMyFriends from '../algorithms/fromMyFriends';

const Container = styled.div`
  width: 90%;
  margin-left: 25px;
`;
const Description = styled.p`
  margin-left: 7px;
  font-weight: 600;
`;
const LinkToPlayground = styled.a`
  margin-left: 7px;
  text-decoration: none;
  color: #eeeeee;
  background-color: lightslategray;
`;

export default function DisplayRustGist() {
  return (
    <Container>
      {fromMyFriends.map(item => [
        <Description key={item.description}>{item.description}</Description>,
        <LinkToPlayground key={item.playground} href={item.playground}>
          Goto Playground
        </LinkToPlayground>,
        <GistEmbedding key={item.gist} id={item.gist} />,
      ])}
    </Container>
  );
}
