import React, { Component } from 'react';
import styled from 'styled-components';

import UserInterface from './UserInput';

import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

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
