import React from 'react';
import styled from 'styled-components';
import { Icon, Modal } from '@react95/core';
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
`;

export default function index(props) {
  const { name, iconName, target } = props.item;
  return (
    <Root
      onClick={() => {
        console.log(name);
      }}
    >
      <Icon name={iconName} />
      <div>{name}</div>
    </Root>
  );
}
