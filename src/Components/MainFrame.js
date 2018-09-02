import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CommandLine from './CommandLine';
import Colors from './Data/Colors';

import windows10CmdIcon from '../img/console-black.svg';
import Windows10Minimize from '../img/windows-minimize.svg';
import Windows10Exit from '../img/windows-exit.svg';
import Windows10Square from '../img/windows-square.svg';

const frameTitle = 'jli0423@WEBAPP: /mnt/c/Users/jli0423/git/jli0423.github.io';


export default class MainFrame extends Component {
  static propTypes = {
    exitFunction: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.positionRef = React.createRef();
    this.getMousePosition = this.getMousePosition.bind(this);
    this.mouseClicked = this.mouseClicked.bind(this);
    this.mouseUnclicked = this.mouseUnclicked.bind(this);
  }

  componentWillMount() {
    this.setState({
      initialState: true,
      // relative position from last box position
      relativeX: 0,
      relativeY: 0,
      // where current mouse lies
      currentMouseX: 0,
      currentMouseY: 0,
      // difference between click and cmd position
      offsetX: 0,
      offsetY: 0,
      mouseDown: false,
      registerOldPosition: false,
      fullScreen: false,
    });
  }

  getMousePosition(event) {
    const {
      mouseDown,
      registerOldPosition,
      fullScreen,
      currentMouseX,
      currentMouseY,
      offsetX,
      offsetY,
    } = this.state;
    const cmdPosition = this.positionRef.getClientRects()[0];
    if (mouseDown && registerOldPosition && !fullScreen) {
      this.setState({
        registerOldPosition: false,
        offsetX: event.clientX - cmdPosition.left,
        offsetY: event.clientY - cmdPosition.top,
      });
    } else {
      // unsure why first click does not change position while dragging
      // will find a fix another time
      if (mouseDown && !fullScreen) {
        this.setState({
          relativeX: currentMouseX - offsetX || 0,
          relativeY: currentMouseY - offsetY || 0,
        });
      }
      this.setState({
        currentMouseX: event.clientX,
        currentMouseY: event.clientY,
      });
    }
  }

  mouseClicked(event) {
    const positionObject = this.positionRef.getClientRects()[0];
    const prevX = positionObject.left;
    const prevY = positionObject.top;
    const { fullScreen } = this.state;
    if (!fullScreen) {
      this.setState({
        mouseDown: true,
        registerOldPosition: true,
        offsetX: event.clientX - prevX,
        offsetY: event.clientY - prevY,
      });
    }
  }

  mouseUnclicked() {
    const {
      mouseDown,
      currentMouseX,
      currentMouseY,
      offsetX,
      offsetY,
    } = this.state;
    if (mouseDown) {
      return this.setState({
        registerOldPosition: false,
        mouseDown: false,
        initialState: false,
        relativeX: currentMouseX - offsetX || 0,
        relativeY: currentMouseY - offsetY || 0,
      });
    }

    return this.setState({
      mouseDown: false,
    });
  }

  toggleFullScreen() {
    const { fullScreen } = this.state;
    this.setState({
      fullScreen: !fullScreen,
    });
  }

  closeCmd() {
    const { exitFunction } = this.props;
    exitFunction();
  }

  render() {
    const {
      relativeX,
      relativeY,
      fullScreen,
      initialState,
    } = this.state;

    return (
      <TransparentBackground
        onMouseUp={() => this.mouseUnclicked()}
        onMouseMove={position => this.getMousePosition(position)}
      >
        <Wrapper
          positionX={relativeX}
          positionY={relativeY}
          fullScreenToggle={fullScreen}
          initialState={initialState}
          innerRef={(position) => { this.positionRef = position; }}
        >
          <WindowsNavBarLeft
            onMouseDown={position => this.mouseClicked(position)}
          >
            <WindowsToolLeft>
              <WindowsIcon src={windows10CmdIcon} />
              <Title>
                { frameTitle }
              </Title>
            </WindowsToolLeft>
          </WindowsNavBarLeft>
          <WindowsNavBarRight>
            <WindowsIconRightGrey
              onClick={() => { this.closeCmd(); }}
              src={Windows10Minimize}
            />
            <WindowsIconRightGreySquare
              src={Windows10Square}
              onClick={() => { this.toggleFullScreen(); }}
            />
            <WindowsIconRightRed
              src={Windows10Exit}
              onClick={() => { this.closeCmd(); }}
            />
          </WindowsNavBarRight>
          <CommandLine />
        </Wrapper>
      </TransparentBackground>
    );
  }
}

// used for registering mouse events to avoid
// passing props and states back and forth between app.js
const TransparentBackground = styled.div`
  overflow: hidden;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.transparent};
`;

const Wrapper = styled.div`
  position: absolute;
  display: block;
  background-color: ${Colors.black};
  box-shadow: 1px 5px 3px ${Colors.black};
  cursor: default;
  border: .5px solid ${Colors.lightGrey2};
  border-top: none;
  width: ${(props) => {
    const { fullScreenToggle } = props;
    return fullScreenToggle ? '100%' : '65em';
  }};
  height: ${(props) => {
    const { fullScreenToggle } = props;
    return fullScreenToggle ? 'calc(100% - 4em)' : '50em';
  }};
  top: ${(props) => {
    const {
      positionY,
      initialState,
      fullScreenToggle,
    } = props;
    if (initialState && !fullScreenToggle) {
      return '50%';
    }
    if (fullScreenToggle) {
      return 0;
    }
    return `calc(${positionY}px)`;
  }};
  left: ${(props) => {
    const {
      positionX,
      fullScreenToggle,
      initialState,
    } = props;
    if (initialState && !fullScreenToggle) {
      return '50%';
    }
    if (fullScreenToggle) {
      return 0;
    }
    return `calc(${positionX}px)`;
  }};
  transform: ${(props) => {
    const {
      initialState,
      fullScreenToggle,
    } = props;
    if (fullScreenToggle) {
      return 'translate(0, 0)';
    }
    if (initialState) {
      return 'translate(-50%, -50%)';
    }
    return 'translate(0, 0)';
  }};
`;

const WindowsIcon = styled.img`
  vertical-align: middle;
  width: 1.5em;
  height: 1em;
  -webkit-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
`;

const WindowsIconRightGrey = WindowsIcon.extend`
  height: auto;
  padding: 0 .7em;
  font-size: 1.3em;
  &:hover {
    background-color: ${Colors.grey};
  }
`;

const WindowsIconRightGreySquare = WindowsIconRightGrey.extend`
  font-size: 1.2em;
`;

const WindowsIconRightRed = WindowsIconRightGrey.extend`
  font-size: 1.3em;
  &:hover {
    background-color: ${Colors.red};
  }
`;

const WindowsNavBar = styled.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  top: 0;
  height: 2.5em;
  background-color: ${Colors.lightGrey};
  overflow: none;
  
`;

const WindowsNavBarRight = WindowsNavBar.extend`
  justify-content: flex-end;
  background-color: ${Colors.transparent};
  width: auto;
  right: 0;
`;

const WindowsNavBarLeft = WindowsNavBar.extend`
  justify-content: flex-start;
  width: 100%;
  left: 0;
`;

const WindowsTool = styled.div`
  display: block;
  margin: 0;
  height: 100%;
  padding: 0 .6em;
  font-size: 2em;
  font-weight: 100;
  background-color: ${Colors.transparent};
  transition: .06s all linear;
  &:hover {
    background-color: ${Colors.lightGrey2};
  }
`;

const WindowsToolLeft = WindowsTool.extend`
  transform: scale(.83);
  width: 100%;
  margin-left: -3.0em;
  &:hover {
    background-color: ${Colors.transparent};
  }
`;

const Title = styled.span`
  font-size: .7em;
  width: 100%;
  margin-left: .5em;
`;
