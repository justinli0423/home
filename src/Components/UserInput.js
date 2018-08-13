import React from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

const UserInterface = () => (
  <UserInputFields>
    <UserInputLabelUser htmlFor="UserInput">
      { CommandPrompt.initializeStatement[0] }
    </UserInputLabelUser>
    <UserInputLabelLocation htmlFor="UserInput">
      { CommandPrompt.initializeStatement[1] }
    </UserInputLabelLocation>
    <UserInput name="userInput" id="UserInput" autoFocus />
  </UserInputFields>
);

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
