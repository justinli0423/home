import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CommandLine from './CommandLine';
import Colors from './Data/Colors';

import Windows10Maximize from '../img/window-maximize.svg';
import windows10CmdIcon from '../img/console-black.svg';

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
      relativeX: 0,
      relativeY: 0,
      mouseX: 0,
      mouseY: 0,
      offsetX: 0,
      offsetY: 0,
      mouseDown: false,
    });
  }

  getMousePosition(event) {
    const {
      mouseDown,
    } = this.state;
    // console.log(`mouse: ${event.clientX}, ${event.clientY}`);
    if (mouseDown) {
      this.setState({
        mouseX: event.clientX,
        mouseY: event.clientY,
      });
    }
  }


  mouseClicked(event) {
    const {
      mouseX,
      mouseY,
    } = this.state;
    const positionObject = this.positionRef.getClientRects()[0];
    const prevX = positionObject.left;
    const prevY = positionObject.top;
    console.log(`offset: ${mouseX - positionObject.left}, ${mouseY - positionObject.top}`);
    this.setState({
      mouseDown: true,
      offsetX: event.clientX - prevX,
      offsetY: event.clientY - prevY,
    });
  }

  mouseUnclicked(event) {
    const {
      mouseDown,
      mouseX,
      mouseY,
    } = this.state;
    const positionObject = this.positionRef.getClientRects()[0];
    const prevX = positionObject.left;
    const prevY = positionObject.top;
    // console.log(`x: ${positionObject.left}, y: ${positionObject.top}`);
    console.log(`Moved Distance (${mouseX - positionObject.left}, ${mouseY - positionObject.top})`);
    if (mouseDown) {
      // console.log(`X: ${mouseX}, Y: ${mouseY}`);
      return this.setState({
        mouseDown: false,
        relativeX: mouseX || 0,
        relativeY: mouseY || 0,
      });
    }

    return this.setState({
      mouseDown: false,
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
    } = this.state;

    return (
      <TransparentBackground
        onMouseUp={position => this.mouseUnclicked(position)}
        onMouseMove={position => this.getMousePosition(position)}
      >
        <Wrapper
          id="cmdWrapper"
          positionX={relativeX}
          positionY={relativeY}
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
            <WindowsTool onClick={() => { this.closeCmd(); }}>
            -
            </WindowsTool>
            <WindowsToolMaximize>
              <img src={Windows10Maximize} alt="max" />
            </WindowsToolMaximize>
            <WindowsToolClose onClick={() => { this.closeCmd(); }}>
            X
            </WindowsToolClose>
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
  top: ${(props) => {
    const {
      positionY,
    } = props;
    return `calc(${positionY}px)`;
  }};
  left: ${(props) => {
    const {
      positionX,
    } = props;
    return `calc(${positionX}px)`;
  }};
  width: 65em;
  height: 50em;
  background-color: ${Colors.black};
  box-shadow: 1px 5px 3px ${Colors.black};
  cursor: default;
  border: .5px solid ${Colors.lightGrey2};
`;

const WindowsIcon = styled.img`
  vertical-align: middle;
  width: 1.5em;
  height: 1em;
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
  width: 25%;
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

const WindowsToolClose = WindowsTool.extend`
  &:hover {
    background-color: ${Colors.red};
  }
`;

const WindowsToolMaximize = WindowsTool.extend`
  vertical-align: center;
  transform: scale(.83);
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
