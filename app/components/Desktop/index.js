import React, { Component } from 'react';
import { Modal } from '@react95/core';
import styled from 'styled-components';
import IconModule from '../IconModule';
import list from '../../objects/list';
import ExperiencePage from '../../containers/ExperiencesPage';
import Window from '../Window';

const Root = styled.div`
  padding: 5px;
`;

export class Desktop extends Component {
  render() {
    return (
      <Root>
        {list.objects.map((item, index) => (
          <IconModule item={item} key={index} />
        ))}
        <Window>
          <ExperiencePage />
        </Window>
      </Root>
    );
  }
}

export default Desktop;
