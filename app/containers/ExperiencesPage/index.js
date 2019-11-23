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
  display: grid;
  grid-template-columns: 150px auto;
  grid-template-rows: 150px auto;
  grid-template-areas:
    'header content'
    'sidebar content';
`;

const Blue = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`;

const Red = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  grid-row-end: span 2;
`;

const Green = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
`;

const Purple = styled.div`
  background-color: purple;
  width: 100%;
  height: 100%;
`;

export default function ExperiencesPage() {
  return (
    <Root>
      <Green className="header">green</Green>
      <Red className="content">red</Red>
      <Blue className="sidebar">blue</Blue>
    </Root>
  );
}
