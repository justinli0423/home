import React, { Component } from 'react';
import styled from 'styled-components';
import Name from './Name';

import Colors from './Data/Colors';
import RoundButton from './Modules/RoundButton';
import Title from './Title';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
    };
  }

  pageUp() {
    const { pageNum } = this.state;
    this.setState({
      pageNum: pageNum + 1 > 3 ? 1 : pageNum + 1,
    });
  }

  pageDown() {
    const { pageNum } = this.state;
    this.setState({
      pageNum: pageNum - 1 < 1 ? 3 : pageNum - 1,
    });
  }

  renderFrontPage() {
    return (
      <div></div>
    );
  }

  render() {
    const { pageNum } = this.state;
    console.log(pageNum);
    return (
      <BigContainer
        className="absolute w-100 h-100 mt4"
      >
        <WrapperName
          className="fl h-75 w-30 relative"
        >
          <Name />
        </WrapperName>
        <ButtonWrapper
          className="absolute flex flex-column"
        >
          <RoundButton
            up
            onClick={this.pageUp.bind(this)}
          />
          <RoundButton
            down
            onClick={this.pageDown.bind(this)}
          />
        </ButtonWrapper>
        <WrapperContent
          className="fl h-75 w-70"
        >
          <Title
            title="Welcome"
            caption="Self-Proclaimed web developer, bubble Tea Addict, Badminton Fanatic."
          />
        </WrapperContent>
      </BigContainer>
    );
  }
}

const WrapperName = styled.div`
  border-right: 1px solid ${Colors.darkGrey};
  opacity: .7;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    height: 15%;
    width: 10px;
    margin-right: -2px;
    background-color: ${Colors.background};
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 20%;
    width: 10px;
    z-index: 1000;
    margin-right: -2px;
    background-color: ${Colors.background};
  }
`;

const WrapperContent = styled.div`
`;

const BigContainer = styled.div``;

const BtnWrap = styled.div`
  width: 4em;
  height: 4em;
`;

const ButtonWrapper = styled.div`
  left: 30%;
  top: 70%;
  transform: translate(-50%, -50%);
`;
