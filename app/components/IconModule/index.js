import React, { useContext } from 'react';
import styled from 'styled-components';
import { Icon, Modal } from '@react95/core';
import { WindowsContext } from 'components/WindowContext';
/* // ! FOR FUTURE RELEASES
import Draggable from 'react-draggable';
*/

const Root = styled.div`
  display: grid;
  grid-template-rows: 35px 20px;
  width: 70px;
  height: 70px;
  /* background-color: red; */
  font-size: 0.7em;
  justify-items: center;
  text-align: center;
  margin: 10px;

  :hover {
    filter: drop-shadow(100, 100, 1, rgba(0, 0, 255, 0.5));
  }
  user-select: none;
`;

export default function index(props) {
  const [windows, setWindows] = useContext(WindowsContext).windows;
  const { openWindow } = useContext(WindowsContext);
  const { name, iconName, target } = props.item;
  return (
    <Root
      onClick={() => {
        const otherItems = windows.filter(item => item.name !== name);
        openWindow(name);
      }}
    >
      <Icon name={iconName} />
      <div>{name}</div>
    </Root>
  );
}
