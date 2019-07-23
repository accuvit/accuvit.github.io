import React from 'react';
import styled from 'styled-components';
import StartButton from '../StartButton';
import TaskBarClock from '../TaskBarClock';

const Root = styled.div`
  height: 30px;
  width: 100vw;
  background-color: #c3c7cb;
  position: absolute;
  bottom: 0px;
  display: grid;
  grid-template-columns: 80px auto 100px;
`;

function TaskBar() {
  return (
    <Root>
      <StartButton />
      <div />
      <TaskBarClock />
    </Root>
  );
}

export default TaskBar;
