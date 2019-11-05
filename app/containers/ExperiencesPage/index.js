import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from '@react95/core';
import stone from '../../images/stone.gif';

const Root = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 10px;
`;

export default function ExperiencesPage() {
  return (
    <Root>
      <img src={stone} />
      <Button>Stone Pagamentos</Button>
    </Root>
  );
}
