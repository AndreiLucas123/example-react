import React from 'react';
import Home from '../components/Home';
import styled from 'styled-components';
import { pushRoute } from './Navigator';

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 2rem;
  background-color: steelblue;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: column;
`;

const NotFoundHomeButton = styled.button``;

export default {
  notfound: () => (
    <NotFoundContainer>
      NotFound
      <NotFoundHomeButton onClick={() => pushRoute('/')}>
        Go to Home
      </NotFoundHomeButton>
    </NotFoundContainer>
  ),
  '/': Home,
};
