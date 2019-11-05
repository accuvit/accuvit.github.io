import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from '@react95/core';
import { WindowsContext } from 'components/WindowContext';
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
  overflow: hidden;
  z-index: 775;
`;
const Tasks = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const TaskUnit = styled.div`
  box-shadow: ${props =>
    props.isFocus
      ? 'inset 1px 1px 0px 1px #000, inset 0 0 0 1px #868a8e, inset 1px 1px 0 0px #000'
      : 'inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e, 1px 1px 0 0px #000'};
  background-color: ${props => (props.isFocus ? '#e4e4e4' : 'inherit')};
  margin: 2px;
  max-width: 200px;
  width: 100%;
  align-items: center;
  display: inline-flex;
  padding: 0 4px;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  div {
    padding: 7px;
  }
  &:active {
    outline-offset: -5px;
    box-shadow: inset 0 0 0 1px #868a8e, 0 0 0 1px #000;
  }
`;

function TaskBar() {
  const [windows, setWindows] = useContext(WindowsContext).windows;
  const { openWindow, closeWindow, focusWindow } = useContext(WindowsContext);
  return (
    <Root>
      <StartButton />
      <Tasks>
        {windows.map((item, index) => (
          <Fragment key={item.key}>
            {item && (
              <TaskUnit
                onClick={() => {
                  focusWindow(item.key);
                }}
                isFocus={item.isFocus}
              >
                <Icon name={item.iconName} width={24} height={24} />
                <div>{item.name}</div>
              </TaskUnit>
            )}
          </Fragment>
        ))}
      </Tasks>
      <TaskBarClock />
    </Root>
  );
}

export default TaskBar;
