import React, { Component } from 'react';
import styled from 'styled-components';

import UserInterface from './UserInterface';

import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

const welcome = CommandPrompt.welcomeStatement[0];
const introduction = CommandPrompt.welcomeStatement[1];
// lower the number = faster the speed
const typingSpeed = 30;

export default class CommandLine extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      welcomeCount: 1,
      introCount: 1,
      welcomeStatement: '',
      introStatement: '',
      commandCalled: [],
      inputHistory: [],
      userStarted: false,
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
    let {
      commandCalled,
      inputHistory,
    } = this.state;
    console.log(command);
    if (command.status === 'clear') {
      commandCalled = [];
      inputHistory = [];
    }

    commandCalled.push(command.status);
    inputHistory.push(command.inputValue);
    this.setState({
      commandCalled,
      inputHistory,
      userStarted: true,
    });
  }

  renderUserInterface() {
    return <UserInterface commandTrigger={(command) => { this.commandCheck(command); }} />;
  }

  renderFakeUserInput(key) {
    const { inputHistory } = this.state;
    return (
      <span>
        <WrapperFakeUserInputUser>
          { CommandPrompt.initializeStatement[0] }
        </WrapperFakeUserInputUser>
        <WrapperFakeUserInputLocation>
          { CommandPrompt.initializeStatement[1] }
        </WrapperFakeUserInputLocation>
        <Input>
          { inputHistory[key] }
        </Input>
      </span>
    );
  }

  renderIntro() {
    const {
      welcomeStatement,
      introStatement,
    } = this.state;

    return (
      <HelperStatements>
        { welcomeStatement }
        <br />
        { introStatement }
      </HelperStatements>
    );
  }

  renderIntroSecondary() {
    const {
      welcomeStatement,
      introStatement,
    } = this.state;

    return (
      <HelperStatements>
        { welcomeStatement }
        <br />
        { introStatement }
      </HelperStatements>
    );
  }

  // returns empty element for padding/margin purposes
  renderCleared() {
    return (
      <HelperStatements />
    );
  }

  renderHelp(key) {
    const {
      npmHelp,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { this.renderFakeUserInput(key) }
        <br />
        { npmHelp.map(statement => (
          <span>
            { statement }
            <br />
          </span>
        )) }
      </HelperStatements>
    );
  }

  renderUnknown(key) {
    const {
      incorrectInput,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { this.renderFakeUserInput(key) }
        <br />
        { incorrectInput }
      </HelperStatements>
    );
  }

  renderGit(key) {
    const {
      npmGit,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { this.renderFakeUserInput(key) }
        <br />
        { npmGit[0] }
        <NpmLink target="_blank" href={npmGit[1]}>
          { npmGit[1] }
        </NpmLink>
      </HelperStatements>
    );
  }

  renderLinkedin(key) {
    const {
      npmLinkedIn,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { this.renderFakeUserInput(key) }
        <br />
        { npmLinkedIn[0] }
        <NpmLink target="_blank" href={npmLinkedIn[1]}>
          { npmLinkedIn[1] }
        </NpmLink>
      </HelperStatements>
    );
  }

  renderResume(key) {
    const {
      npmResume,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { this.renderFakeUserInput(key) }
        <br />
        { npmResume[0] }
        <NpmLink target="_blank" href={npmResume[1]}>
          { npmResume[1] }
        </NpmLink>
      </HelperStatements>
    );
  }

  renderLanguages(key) {
    const {
      npmLanguages,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { this.renderFakeUserInput(key) }
        <br />
        {npmLanguages[0].map(asciiPart => (
          <pre>
            { asciiPart }
          </pre>
        ))
        }
      </HelperStatements>
    );
  }

  renderTools(key) {
    const {
      npmTools,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { this.renderFakeUserInput(key) }
        <br />
        {npmTools[0].map(asciiPart => (
          <pre>
            { asciiPart }
          </pre>
        ))
        }
      </HelperStatements>
    );
  }

  renderProjects(key) {
    const {
      npmProjects,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { this.renderFakeUserInput(key) }
        <br />
        {npmProjects[0].map(asciiPart => (
          <pre>
            { asciiPart }
          </pre>
        ))
        }
      </HelperStatements>
    );
  }

  renderConditionals(command, index) {
    switch (command) {
      case 'clear':
        return this.renderCleared();
      case 'help':
        return this.renderHelp(index);
      case 'unknown':
        return this.renderUnknown(index);
      case 'git':
        return this.renderGit(index);
      case 'linkedin':
        return this.renderLinkedin(index);
      case 'resume':
        return this.renderResume(index);
      case 'languages':
        return this.renderLanguages(index);
      case 'tools':
        return this.renderTools(index);
      case 'projects':
        return this.renderProjects(index);
      default:
        return this.renderIntroSecondary(index);
    }
  }

  renderComponent() {
    const {
      introCount,
      commandCalled,
      userStarted,
    } = this.state;

    if (introCount < 45) {
      return this.renderIntro();
    }

    return (
      <Wrapper>
        { !userStarted && commandCalled.length === 0 && this.renderIntroSecondary() }
        { commandCalled.map((command, index) => this.renderConditionals(command, index)) }
        { this.renderUserInterface() }
      </Wrapper>
    );
  }

  render() {
    return (
      <TopMargin>
        { this.renderComponent() }
      </TopMargin>
    );
  }
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 5px;
`;

const HelperStatements = styled.div`
  display: inline-block;
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

const WrapperFakeUserInputUser = HelperStatements.extend`
  font-size: 1em;
  margin-top: 0;
  margin-right: 5px;
  color: ${Colors.green};
`;

const WrapperFakeUserInputLocation = WrapperFakeUserInputUser.extend`
  color: ${Colors.darkBlue};
`;

const Input = styled.span`
  background-color: ${Colors.transparent};
  color: ${Colors.white};
`;

const TopMargin = styled.div`
  margin-top: 2.5em;
`;
