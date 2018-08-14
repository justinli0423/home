import React, { Component } from 'react';
import styled from 'styled-components';

import UserInterface from './UserInterface';

import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

const welcome = CommandPrompt.welcomeStatement[0];
const introduction = CommandPrompt.welcomeStatement[1];
// lower the number = faster the speed
const typingSpeed = 60;

export default class CommandLine extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      welcomeCount: 1,
      introCount: 1,
      welcomeStatement: '',
      introStatement: '',
    });
  }

  componentDidMount() {
    setInterval(() => {
      const {
        welcomeCount,
        introCount,
      } = this.state;

      this.setState({
        welcomeStatement: welcome.substring(0, welcomeCount),
        welcomeCount: welcomeCount + 1,
      });

      // pause between 2 statements
      if (welcomeCount > 13) {
        this.setState({
          introStatement: introduction.substring(0, introCount),
          introCount: introCount + 1,
        });
      }
    }, typingSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderComponent() {
    const {
      welcomeStatement,
      introStatement,
      introCount,
    } = this.state;

    if (introCount < 45) {
      return (
        <Wrapper>
          <IntroStatements>
            { welcomeStatement }
            <br />
            { introStatement }
          </IntroStatements>
        </Wrapper>
      );
    }
    if (introCount > 55) {
      return (
        <WrapperUserInterface>
          <UserInterface />
        </WrapperUserInterface>
      );
    }
    return <Wrapper />;
  }

  render() {
    return this.renderComponent();
  }
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 5px;
`;

const WrapperUserInterface = Wrapper.extend`
  margin-top: 2.5em;
`;

const IntroStatements = styled.div`
  display: block;
  margin-top: 2.5em;
  font-size: 1.2em;
  color: ${Colors.white};
  background-color: ${Colors.transparent};
`;
