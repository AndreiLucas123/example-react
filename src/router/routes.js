import React from 'react';
import Home from '../components/Home';
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
`;

export default {
  notfound: () => <NotFoundContainer>NotFound</NotFoundContainer>,
  '/': Home,
};
