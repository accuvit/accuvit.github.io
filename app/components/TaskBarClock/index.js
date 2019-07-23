import React, { Component } from 'react';
import styled from 'styled-components';
import { setTimeout } from 'timers';

const Wrapper = styled.div`
  margin: 4px;
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  border-left: 2px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: auto auto;
`;

// * I would include the date part to this but oh well
const TimeDateContainer = styled.div`
  font-size: 0.9em;
`;

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.startTime(),
    };
  }

  tick() {
    this.setState({
      time: this.startTime(),
    });
  }

  checkTime(i) {
    return i < 10 ? `0${i}` : `${i}`;
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  startTime() {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    m = this.checkTime(m);
    return `${h}:${m}`;
  }

  render() {
    return (
      <Wrapper>
        <div />
        <TimeDateContainer>{this.state.time}</TimeDateContainer>
      </Wrapper>
    );
  }
}

export default index;
