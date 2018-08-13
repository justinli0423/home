import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faRocket } from '@fortawesome/free-solid-svg-icons';

import CommandLine from './CommandLine';
import Colors from './Data/Colors';

const frameTitle = 'jli0423@WEBAPP: /mnt/c/Users/jli0423/git/jli0423.github.io';

export default class MainFrame extends Component {
  componentWillMount() {
    this.setState({
      FrameClicked: false,
    });
  }

  render() {
    return (
      <Wrapper>
        <WindowsNavBarLeft>
          <WindowsToolLeft>
            <FontAwesomeIcon icon={faRocket} />
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
            <FontAwesomeIcon icon={faWindowMaximize} />
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

const WindowsNavBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  height: 2.5em;
  background-color: ${Colors.white};  
`;

const WindowsNavBarRight = WindowsNavBar.extend`
  justify-content: flex-end;
  width: 25%;
  right: 0;
`;

const WindowsNavBarLeft = WindowsNavBar.extend`
  justify-content: flex-start;
  width: 75%;
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
  margin-left: -2.5em;
  &:hover {
    background-color: ${Colors.transparent};
  }
`;

const Title = styled.span`
  font-size: .7em;
  width: 100%;
  margin-left: .5em;
`;
