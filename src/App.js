import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import MainFrame from './Components/MainFrame';
import WindowsBar from './Components/WindowsBar';
import WindowsBootup from './Components/WindowsBootup';
// import WindowsLogin from './Components/WindowsLogin';

import Colors from './Components/Data/Colors';

function starCreator(num) {
  const starArray = [];
  for (let i = 0; i < num; i += 1) {
    starArray.push(i);
  }

  return starArray.map(() => <ParallaxStar />);
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingState: 'startup',
    };
  }

  startUpFinished(startupPercentage) {
    if (startupPercentage === 150) {
      this.setState({
        loadingState: 'login',
      });
    }
    if (startupPercentage === true) {
      this.setState({
        loadingState: 'mainScreen',
      });
    }
  }

  render() {
    const { loadingState } = this.state;
    return (
      <Wrapper>
        {loadingState === 'startup'
        && <WindowsBootup loadingStateFunc={(loadPercentage) => { this.startUpFinished(loadPercentage); }} />}
        {/* {loadingState === 'login'
        && <WindowsLogin loadingStateFunc={(loggedIn) => { this.startUpFinished(loggedIn); }} />} */}
        { starCreator(5) }
        {loadingState === 'login'
        && <MainFrame /> }
        <WindowsBar />
      </Wrapper>
    );
  }
}

const parallaxStarsZoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    animation-timing-function: ease-in;
  } 
  85% {
    opacity: 1;
    transform: scale(2.5);
    animation-timing-function: linear;
  }
  100% {
    opacity: 0;
    transform: scale(3);
  }
`;

const Wrapper = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, ${Colors.spaceBlue} 0%, ${Colors.spaceBlack} 100%);
`;

const ParallaxStar = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: 
    radial-gradient(1px 1px at 2em 3em, ${Colors.lightGrey}, ${Colors.transparent}),
    radial-gradient(1px 1px at 4em 7em, ${Colors.white}, ${Colors.transparent}),
    radial-gradient(1px 1px at 5em 16em, ${Colors.lightGrey2}, ${Colors.transparent}),
    radial-gradient(1px 1px at 9em 4em, ${Colors.white}, ${Colors.transparent}),
    radial-gradient(1px 1px at 13em 8em, ${Colors.white}, ${Colors.transparent}),
    radial-gradient(1px 1px at 16em 12em, ${Colors.lightGrey2}, ${Colors.transparent});
  background-repeat: repeat;
  background-size: 20em 20em;
  animation: ${parallaxStarsZoom} 9s infinite;
  opacity: 0;

  &:nth-child(1) {
  background-position: 50% 50%;
  animation-delay: 0s;
  }

  &:nth-child(2) {
    background-position: 20% 60%;
    animation-delay: 1s;
  }

  &:nth-child(3) {
    background-position: -20% -30%;
    animation-delay: 2s;
  }

  &:nth-child(4) {
    background-position: 40% -80%;
    animation-delay: 3s;
  }

  &:nth-child(5) {
    background-position: -20% 30%;
    animation-delay: 4s;
  }
`;
