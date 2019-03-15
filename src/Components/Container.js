import React, { Component } from 'react';
import styled from 'styled-components';
import Name from './Name';

import Colors from './Data/Colors';
import RoundButton from './Modules/RoundButton';
import Title from './Title';
import Experience from './Experience';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 2,
    };
  }

  pageUp() {
    const { pageNum } = this.state;
    this.setState({
      pageNum: pageNum + 1 > 2 ? 1 : pageNum + 1,
    });
  }

  pageDown() {
    const { pageNum } = this.state;
    this.setState({
      pageNum: pageNum - 1 < 1 ? 2 : pageNum - 1,
    });
  }

  renderFrontPage() {
    return (
      <Title
        title="Welcome"
        caption="Self-Proclaimed web developer, bubble Tea Addict, Badminton Fanatic."
      />
    );
  }

  // renderProjectsPage() {
  //   return (
  //     <Title
  //       title="Projects"
  //     />
  //   );
  // }

  renderJobsPage() {
    return (
      <div
        className="w-100 h-100 relative"
      >
        <Title
          title="Experience"
        />
        <Experience />
      </div>
    );
  }

  render() {
    const { pageNum } = this.state;
    return (
      <BigContainer
        className="absolute w-100 h-100 mt4"
      >
        <WrapperName
          className="fl h-75 w-25 relative"
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
          className="fl h-75 w-75"
        >
          { pageNum === 1 && this.renderFrontPage()}
          {/* { pageNum === 2 && this.renderProjectsPage()} */}
          { pageNum === 2 && this.renderJobsPage()}
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

const ButtonWrapper = styled.div`
  left: 25%;
  top: 70%;
  transform: translate(-50%, -50%);
`;
