import React, { Component } from 'react';
import styled from 'styled-components';

import UserInterface from './UserInterface';

import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

const welcome = CommandPrompt.welcomeStatement[0];
const introduction = CommandPrompt.welcomeStatement[1];
// lower the number = faster the speed
const typingSpeed = 40;

export default class CommandLine extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      welcomeCount: 1,
      introCount: 1,
      welcomeStatement: '',
      introStatement: '',
      commandCalled: null,
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

  commandCheck(command) {
    this.setState({
      commandCalled: command,
    });
  }

  renderUserInterface() {
    return (
      <UserInterface commandTrigger={(command) => { this.commandCheck(command); }} />
    );
  }

  renderIntro() {
    const {
      welcomeStatement,
      introStatement,
    } = this.state;

    return (
      <Wrapper>
        <HelperStatements>
          { welcomeStatement }
          <br />
          { introStatement }
        </HelperStatements>
      </Wrapper>
    );
  }

  renderIntroSecondary() {
    const {
      welcomeStatement,
      introStatement,
    } = this.state;

    return (
      <Wrapper>
        <HelperStatements>
          { welcomeStatement }
          <br />
          { introStatement }
        </HelperStatements>
        { this.renderUserInterface() }
      </Wrapper>
    );
  }

  renderCleared() {
    return (
      <WrapperUserInterface>
        { this.renderUserInterface() }
      </WrapperUserInterface>
    );
  }

  renderHelp() {
    const {
      npmHelp,
    } = CommandPrompt;

    return (
      <Wrapper>
        <HelperStatements>
          { npmHelp.map(statement => (
            <span>
              { statement }
              <br />
            </span>
          )) }
        </HelperStatements>
        { this.renderUserInterface() }
      </Wrapper>
    );
  }

  renderGit() {
    const {
      npmGit,
    } = CommandPrompt;

    return (
      <Wrapper>
        <HelperStatements>
          { npmGit[0] }
          <NpmLink target="_blank" href={npmGit[1]}>
            { npmGit[1] }
          </NpmLink>
        </HelperStatements>
        { this.renderUserInterface() }
      </Wrapper>
    );
  }

  renderLinkedin() {
    const {
      npmLinkedIn,
    } = CommandPrompt;

    return (
      <Wrapper>
        <HelperStatements>
          { npmLinkedIn[0] }
          <NpmLink target="_blank" href={npmLinkedIn[1]}>
            { npmLinkedIn[1] }
          </NpmLink>
        </HelperStatements>
        { this.renderUserInterface() }
      </Wrapper>
    );
  }

  renderResume() {
    const {
      npmResume,
    } = CommandPrompt;

    return (
      <Wrapper>
        <HelperStatements>
          { npmResume[0] }
          <NpmLink target="_blank" href={npmResume[1]}>
            { npmResume[1] }
          </NpmLink>
        </HelperStatements>
        { this.renderUserInterface() }
      </Wrapper>
    );
  }

  renderComponent() {
    const {
      introCount,
      commandCalled,
    } = this.state;

    if (introCount < 45) {
      return this.renderIntro();
    }

    if (introCount > 45 && commandCalled === 'clear') {
      return this.renderCleared();
    }

    if (introCount > 45 && (commandCalled === 'help' || commandCalled === 'unknown')) {
      return this.renderHelp();
    }

    if (introCount > 45 && commandCalled === 'git') {
      return this.renderGit();
    }

    if (introCount > 45 && commandCalled === 'linkedin') {
      return this.renderLinkedin();
    }

    if (introCount > 45 && commandCalled === 'resume') {
      return this.renderResume();
    }

    return this.renderIntroSecondary();
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

const HelperStatements = styled.div`
  display: block;
  margin-top: 2.5em;
  font-size: 1.2em;
  color: ${Colors.white};
  background-color: ${Colors.transparent};
`;

const NpmLink = styled.a`
  color: ${Colors.white};
  &:hover {
    color: ${Colors.lightGrey2};
  }
`;
