import React, { Component } from 'react';
import styled from 'styled-components';

import CommandLine from './CommandLine';
import Colors from './Data/Colors';

import Windows10Maximize from '../img/window-maximize.svg';
import windows10CmdIcon from '../img/console-black.svg';

const frameTitle = 'jli0423@WEBAPP: /mnt/c/Users/jli0423/git/jli0423.github.io';


export default class MainFrame extends Component {
  componentWillMount() {
    this.setState({
    });
  }

  render() {
    return (
      <Wrapper>
        <WindowsNavBarLeft>
          <WindowsToolLeft>
            <WindowsIcon src={windows10CmdIcon} />
            <Title>
              { frameTitle }
            </Title>
          </WindowsToolLeft>
        </WindowsNavBarLeft>
        <WindowsNavBarRight>
          <WindowsTool>
            -
          </WindowsTool>
          <WindowsToolMaximize>
            <img src={Windows10Maximize} alt="max" />
          </WindowsToolMaximize>
          <WindowsToolClose>
            X
          </WindowsToolClose>
        </WindowsNavBarRight>
        <CommandLine />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: 65em;
  height: 50em;
  transform: translate(-50%, -50%);
  background-color: ${Colors.black};
  box-shadow: 1px 5px 3px ${Colors.black};
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
