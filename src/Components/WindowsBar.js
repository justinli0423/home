import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import windows10Logo from '../img/windows-brands.svg';
import windows10Cortana from '../img/circle-regular.svg';
import windows10Microphone from '../img/microphone-solid.svg';
import windows10Notification from '../img/comment-alt-regular.svg';
import windows10WifiOn from '../img/wifi-solid-on.svg';
// import windows10WifiOff from '../img/wifi-solid-off.svg';
import windows10Mute from '../img/volume-off-solid.svg';
import windows10Cmd from '../img/console-white.svg';

import Services from './Service/Services';
import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

class WindowsBar extends Component {
  static propTypes = {
    onLoadCmd: PropTypes.func.isRequired,
    cmdToggleStatus: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTime: '00:00',
      currentDate: '2000-00-00',
      cmdStatus: false,
    };
  }

  componentDidMount() {
    this.setState({
      currentTime: Services.getCurrentTime().time,
      currentDate: Services.getCurrentTime().date,
    });

    setInterval(() => this.setState({
      currentTime: Services.getCurrentTime().time,
      currentDate: Services.getCurrentTime().date,
    }), 1000);
  }

  componentDidUpdate(prevProps) {
    const { cmdToggleStatus } = this.props;
    if (prevProps.cmdToggleStatus && !cmdToggleStatus) {
      this.setState({
        cmdStatus: false,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleCmdStatus() {
    const { cmdStatus } = this.state;
    const {
      onLoadCmd,
    } = this.props;
    onLoadCmd();
    this.setState({
      cmdStatus: !cmdStatus,
    });
  }

  toggleCmdDisplay() {
    const { cmdStatus } = this.state;
    if (!cmdStatus) {
      return (
        <WindowsCmd
          src={windows10Cmd}
          onClick={() => this.toggleCmdStatus(this)}
          alt="cmd"
        />
      );
    }
    return (
      <WindowsCmdEnabled
        src={windows10Cmd}
        onClick={() => this.toggleCmdStatus(this)}
        alt="cmd"
      />
    );
  }

  render() {
    const {
      currentTime,
      currentDate,
      cmdStatus,
    } = this.state;

    return (
      <Wrapper>
        <Windows src={windows10Logo} alt="windows" />
        <SearchBar>
          <WindowsCortana src={windows10Cortana} alt="circle" />
          <SearchLabel>
            { CommandPrompt.windowsNavbar[0] }
          </SearchLabel>
          <WindowsPullRight src={windows10Microphone} alt="mic" />
        </SearchBar>
        { this.toggleCmdDisplay() }
        <WindowsPullRight src={windows10Notification} alt="comment" />
        <Dates>
          <Time>
            { currentTime }
          </Time>
          <div>
            { currentDate }
          </div>
        </Dates>
        <Language>
          { CommandPrompt.windowsNavbar[1] }
        </Language>
        <WindowsPullRight src={windows10Mute} />
        {/* future: toggle wifi will disable cmd */}
        <WindowsPullRightEnd src={cmdStatus ? windows10WifiOn : windows10WifiOn} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4em; 
  background-color: ${Colors.translucentBlack};
`;

const Dates = styled.div`
  float: right;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  color: ${Colors.white};
`;

const Language = styled.div`
  float: right;
  font-size: 1.2em;
  margin-right: 1.5em;
  margin-top: 1em;
  color: ${Colors.white};
`;

const Time = styled.div`
  padding: .55em;
  margin-right: .5em;
`;

const Windows = styled.img`
  display: inline-block;
  padding: 1em 1.5em;
  width: 2em;
  height: calc(2em - 3px);
  border-bottom: 3px solid ${Colors.transparent};
`;

const WindowsPullRight = Windows.extend`
  float: right;
  font-size: 1em;
`;

const WindowsCmd = Windows.extend`
  font-size: 1em;
  &:hover {
    background-color: ${Colors.translucentGrey};
  }
`;

const WindowsCmdEnabled = WindowsCmd.extend`
  background-color: ${Colors.translucentGrey};
  border-bottom: 3px solid ${Colors.windowsLightBlue};
`;

const WindowsPullRightEnd = WindowsPullRight.extend`
  padding: 1em 0;
`;

const WindowsCortana = Windows.extend`
  padding: 1em;
`;

const SearchBar = styled.span`
  display: inline-block;
  height: 100%;
  width: 35em;
  background-color: ${Colors.white};
`;

const SearchLabel = styled.span`
  display: inline-block;
  height: 4em;
  font-size: 1.5em;
  margin-top: .5em;
  vertical-align: middle;
`;

export default WindowsBar;
