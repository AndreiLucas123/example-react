import React, { useContext } from 'react';
import { routerContext } from '../providers-context';
import styled from 'styled-components';

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

export default function NotFound() {
  const { pushRoute } = useContext(routerContext);

  return (
    <NotFoundContainer>
      NotFound
      <NotFoundHomeButton onClick={() => pushRoute('/')}>
        Go to Home
      </NotFoundHomeButton>
    </NotFoundContainer>
  );
}
