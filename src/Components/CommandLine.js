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
    let { commandCalled } = this.state;
    if (command === 'clear') {
      commandCalled = [];
    }

    commandCalled.push(command);
    this.setState({
      commandCalled,
      userStarted: true,
    });
  }

  renderUserInterface() {
    return <UserInterface commandTrigger={(command) => { this.commandCheck(command); }} />;
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

  renderHelp() {
    const {
      npmHelp,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { npmHelp.map(statement => (
          <span>
            { statement }
            <br />
          </span>
        )) }
      </HelperStatements>
    );
  }

  renderUnknown() {
    const {
      incorrectInput,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { incorrectInput }
      </HelperStatements>
    );
  }

  renderGit() {
    const {
      npmGit,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { npmGit[0] }
        <NpmLink target="_blank" href={npmGit[1]}>
          { npmGit[1] }
        </NpmLink>
      </HelperStatements>
    );
  }

  renderLinkedin() {
    const {
      npmLinkedIn,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { npmLinkedIn[0] }
        <NpmLink target="_blank" href={npmLinkedIn[1]}>
          { npmLinkedIn[1] }
        </NpmLink>
      </HelperStatements>
    );
  }

  renderResume() {
    const {
      npmResume,
    } = CommandPrompt;

    return (
      <HelperStatements>
        { npmResume[0] }
        <NpmLink target="_blank" href={npmResume[1]}>
          { npmResume[1] }
        </NpmLink>
      </HelperStatements>
    );
  }

  renderLanguages() {
    const {
      npmLanguages,
    } = CommandPrompt;

    return (
      <HelperStatements>
        {npmLanguages[0].map(asciiPart => (
          <pre>
            { asciiPart }
          </pre>
        ))
        }
      </HelperStatements>
    );
  }

  renderTools() {
    const {
      npmTools,
    } = CommandPrompt;

    return (
      <HelperStatements>
        {npmTools[0].map(asciiPart => (
          <pre>
            { asciiPart }
          </pre>
        ))
        }
      </HelperStatements>
    );
  }

  renderProjects() {
    const {
      npmProjects,
    } = CommandPrompt;

    return (
      <HelperStatements>
        {npmProjects[0].map(asciiPart => (
          <pre>
            { asciiPart }
          </pre>
        ))
        }
      </HelperStatements>
    );
  }

  renderConditionals(command) {
    switch (command) {
      case 'clear':
        return this.renderCleared();
      case 'help':
        return this.renderHelp();
      case 'unknown':
        return this.renderUnknown();
      case 'git':
        return this.renderGit();
      case 'linkedin':
        return this.renderLinkedin();
      case 'resume':
        return this.renderResume();
      case 'languages':
        return this.renderLanguages();
      case 'tools':
        return this.renderTools();
      case 'projects':
        return this.renderProjects();
      default:
        return this.renderIntroSecondary();
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
        { commandCalled.map(command => this.renderConditionals(command)) }
        { this.renderUserInterface() }
      </Wrapper>
    );
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
