/**
 *
 * StartButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@react95/core';

const Wrapper = styled.div`
  width: 70px;
  height: 100%;
  padding: 2px;
`;

const Button = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: #f00;
  width: 100%;
  align-items: center;
  background-color: #c3c7cb;
  padding: 5px 5px;
  border: none;

  font-size: 12px;

  box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
    1px 1px 0 0px #000;

  &:disabled {
    color: #868a8e;
  }

  &:focus {
    outline: none;
    box-shadow: inset 1px 1px 0px 1px #ffffff,
      inset -0.5px -0.5px 0px 1px #868a8e, 1px 1px 0 1px #000;
    outline: 1px dotted #000;
    outline-offset: -5px;
  }

  &:active {
    padding: 4px 4px;
    outline-offset: -5px;

    box-shadow: inset 0 0 0 1px #868a8e, 0 0 0 1px #000;
  }
`;

const Text = styled.span`
  font-family: sans-serif;
  font-weight: 500;
  user-select: none;
`;

function StartButton() {
  return (
    <Wrapper>
      <Button>
        <Icon name="logo" height={15} width={15} />
        <Text>Start</Text>
      </Button>
    </Wrapper>
  );
}

StartButton.propTypes = {};

export default StartButton;
