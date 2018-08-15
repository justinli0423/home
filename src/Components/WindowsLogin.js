import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import Colors from './Data/Colors';
import Services from './Service/Services';

export default class WindowsLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: '00:00',
      currentDate: 'Mon, 1 Jan',
      userLoggedIn: false,
    };
  }

  componentWillMount() {
    this.setState({
      userLoggedIn: false,
    });
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

  enterLogin() {
    this.setState({
      userLoggedIn: true,
    });
  }

  userNotLoggedIn() {
    const {
      currentTime,
      currentDate,
    } = this.state;
    return (
      <Wrapper onClick={loggedIn => this.enterLogin(loggedIn)}>
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

  userLoggedIn() {
    const {
      currentTime,
      currentDate,
    } = this.state;
    return (
      <WrapperFlyUp>
        <Dates>
          <Time>
            { currentTime }
          </Time>
          <Date>
            { currentDate }
          </Date>
        </Dates>
      </WrapperFlyUp>
    );
  }

  render() {
    const { userLoggedIn } = this.state;
    return userLoggedIn ? this.userLoggedIn() : this.userNotLoggedIn();
  }
}

const FlyUp = keyframes`
  100% {
    top: -200%;
  }
`;

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

const WrapperFlyUp = Wrapper.extend`
  animation-fill-mode: forwards;
  animation: ${FlyUp} 1s linear;
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
