import React, { Fragment, useContext, useState } from 'react';
import { List } from '@react95/core';
import styled from 'styled-components';
import { WindowsContext } from 'components/WindowContext';
import { ShutdownScreen } from 'components/ShutdownScreen';

import list from '../../objects/list';

const Background = styled.div`
  background-color: transparent;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 776;
`;

const Main = styled(List)`
  z-index: 777;
  position: absolute;
  bottom: 32px;
  left: 0px;
  user-select: none;
`;

const StartBar = props => {
  const [menuOpen, setMenuOpen] = useContext(WindowsContext).menu;
  const [windows, setWindows] = useContext(WindowsContext).windows;
  const { openWindow, closeWindow, focusWindow } = useContext(WindowsContext);
  const [shutdown, setShutdown] = useState(false);
  return (
    <Fragment>
      <Main>
        {list.objects.map((item, index) => (
          <List.Item
            icon={item.iconName}
            key={index}
            onClick={() => {
              setMenuOpen(false);
              openWindow(item.name);
            }}
          >
            {item.name}
          </List.Item>
        ))}
        <List.Divider />
        <List.Item icon="computer_3" onClick={() => setShutdown(true)}>
          Shut Down...
        </List.Item>
      </Main>
      <Background onClick={() => setMenuOpen(false)} />
      {shutdown && <ShutdownScreen />}
    </Fragment>
  );
};

export default StartBar;
