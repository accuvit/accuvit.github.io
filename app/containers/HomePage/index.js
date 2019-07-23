/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import Desktop from 'components/Desktop';
import TaskBar from '../../components/TaskBar';

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #2c8081;
  display: grid;
  grid-template-rows: auto 30px;
`;

export default function HomePage() {
  return (
    <Main>
      <Desktop />
      <TaskBar />
    </Main>
  );
}
