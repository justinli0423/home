import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

class UserInterface extends Component {
  constructor(props) {
    super(props);
    // creating reference to input
    this.autoFocusRef = React.createRef();
  }

  componentDidMount() {
    this.autoFocusRef.focus();
  }

  render() {
    return (
      <UserInputFields>
        <UserInputLabelUser htmlFor="UserInput">
          { CommandPrompt.initializeStatement[0] }
        </UserInputLabelUser>
        <UserInputLabelLocation htmlFor="UserInput">
          { CommandPrompt.initializeStatement[1] }
        </UserInputLabelLocation>
        <UserInput
          innerRef={(focus) => { this.autoFocusRef = focus; }}
          type="text"
          name="userInput"
          id="UserInput"
        />
      </UserInputFields>
    );
  }
}

const UserInputFields = styled.div`
  display: block;
  width: 100%;
  height: auto;
  margin-top: 2em;
  color: ${Colors.white};
  font-size: 1.2em;
  padding-left: 5px;
`;

const UserInput = styled.input`
  outline: none;
  background-color: ${Colors.transparent};
  border: none;
  color: ${Colors.white};
  &::-ms-clear {
    display: none;
  }
`;

const UserInputLabelLocation = styled.span`
  color: ${Colors.darkBlue};
`;
const UserInputLabelUser = styled.span`
  color: ${Colors.green};
`;


export default UserInterface;
