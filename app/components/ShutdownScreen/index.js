import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: #f18229;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  text-align: center;
  flex-direction: column;
`;

const SmallFont = styled.span`
  font-size: x-small;
`;

export const ShutdownScreen = () => (
  <Root>
    <span>
      It's now safe to turn off
      <br />
      your computer.
    </span>
    <SmallFont>(or, you know, just refresh the page)</SmallFont>
  </Root>
);
