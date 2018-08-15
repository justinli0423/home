import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Spinner from './Modules/Spinner';

import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

import WindowsLogo from '../img/windows-startup.svg';

const incrementSpeed = 10;

export default class WindowsBootup extends Component {
  static propTypes = {
    loadingState: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loadingPercentage: 0,
      finishedLoad: 100,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { loadingPercentage } = this.state;
      const { loadingState } = this.props;

      if (loadingPercentage < 150) {
        this.setState({
          loadingPercentage: loadingPercentage + 1,
        });
        loadingState(loadingPercentage + 1);
      }
    }, incrementSpeed);
  }

  loadingScreen() {
    const {
      loadingPercentage,
      finishedLoad,
    } = this.state;
    return (
      <Wrapper>
        <Logo src={WindowsLogo} />
        <Spinner />
        <LoadingPhrase>
          { CommandPrompt.startUp }
          { loadingPercentage >= 99 ? finishedLoad : loadingPercentage }
        %
        </LoadingPhrase>
      </Wrapper>
    );
  }

  loadedScreen() {
    const {
      loadingPercentage,
      finishedLoad,
    } = this.state;
    return (
      <WrapperLoaded>
        <Logo src={WindowsLogo} />
        <Spinner />
        <LoadingPhrase>
          { CommandPrompt.startUp }
          { loadingPercentage >= 99 ? finishedLoad : loadingPercentage }
        %
        </LoadingPhrase>
      </WrapperLoaded>
    );
  }

  render() {
    const { loadingPercentage } = this.state;
    return loadingPercentage > 99 ? this.loadedScreen() : this.loadingScreen();
  }
}

const FadeScreen = keyframes`
  100% {
    opacity: 0;
    background-color: ${Colors.transparent};
  }
`;

const Wrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  opacity: 1;
  background-color: ${Colors.black};
`;

const WrapperLoaded = Wrapper.extend`
  animation-fill-mode: forwards;
  animation: ${FadeScreen} 1.5s linear;
`;

const LoadingPhrase = styled.div`
  display: block;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  color: ${Colors.grey};
`;

const Logo = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10em;
  height: 10em;
`;
