import React, { Component } from 'react';
import styled from 'styled-components';

import UserInterface from './UserInterface';

import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

function introduction() {
  const introStatement = CommandPrompt.welcomeStatement;
}

export default class CommandLine extends Component {
  componentDidMount() {
    this.setState({
      userExperience: true,
    });
  }

  render() {
    return (
      <UserInterface />
    );
  }
}
