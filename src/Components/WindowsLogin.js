import React, { Component } from 'react';
import styled from 'styled-components';

import Spinner from './Modules/Spinner';

import Colors from './Data/Colors';
import Services from './Service/Services';

export default class WindowsLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: '00:00',
      currentDate: 'Mon, 1 Jan',
    };
  }

  componentDidMount() {
    this.setState({
      currentTime: Services.getCurrentTime().loginTime,
      currentDate: Services.getCurrentTime().loginDate,
    });

    setInterval(() => this.setState({
      currentTime: Services.getCurrentTime().loginTime,
      currentDate: Services.getCurrentTime().loginDate,
    }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      currentTime,
      currentDate,
    } = this.state;
    return (
      <Wrapper>
        <Dates>
          <Time>
            { currentTime }
          </Time>
          <Date>
            { currentDate }
          </Date>
        </Dates>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: transparent;
`;

const Dates = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  color: ${Colors.white};
  display: flex;
  flex-direction: column;
`;

const Time = styled.div`
  font-size: 10em;
`;

const Date = styled.div`
  font-size: 7em;
`;
