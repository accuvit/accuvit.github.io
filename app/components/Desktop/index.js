import React, { useContext } from 'react';
import styled from 'styled-components';
import { WindowsContext } from 'components/WindowContext';
import StartBar from 'components/StartBar';
import IconModule from '../IconModule';
import list from '../../objects/list';
import Window from '../Window';

const Root = styled.div`
  padding: 5px;
`;

const Desktop = props => {
  const [windows, setWindows] = useContext(WindowsContext).windows;
  const [menuOpen, setMenuOpen] = useContext(WindowsContext).menu;
  return (
    <Root>
      {list.objects.map(item => (
        <IconModule item={item} key={item.name} />
      ))}
      {windows.map((item, index) => (
        <Window item={item} key={index} />
      ))}
      {menuOpen && <StartBar />}
    </Root>
  );
};

export default Desktop;
