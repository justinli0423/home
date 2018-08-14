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

  componentWillMount() {
    this.setState({
      lineInputAmounts: 1,
    });
  }

  componentDidMount() {
    this.autoFocusRef.focus();
  }

  inputCreator(num) {
    const starArray = [];
    for (let i = 0; i < num; i += 1) {
      starArray.push(i);
    }

    return starArray.map(() => (
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
        <UserSubmit
          onClick={this.userCommandInput.bind(this)}
        />
      </UserInputFields>
    ));
  }

  // override default onSubmit so page does not refresh
  userCommandInput(e) {
    const { lineInputAmounts } = this.state;
    this.setState({
      lineInputAmounts: lineInputAmounts + 1,
    });
    e.preventDefault();
  }

  render() {
    const { lineInputAmounts } = this.state;
    return (
      <Wrapper>
        { this.inputCreator(lineInputAmounts) }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
`;

const UserInputFields = styled.form`
  display: block;
  width: 100%;
  height: auto;
  color: ${Colors.white};
  font-size: 1.2em;
`;

const UserInput = styled.input`
  outline: none;
  width: calc(100% - 24.5em);
  text-overflow: 1;
  background-color: ${Colors.transparent};
  border: none;
  color: ${Colors.white};
  &::-ms-clear {
    display: none;
  }
`;

const UserSubmit = styled.button`
  display: none;
`;

const UserInputLabelLocation = styled.span`
  color: ${Colors.darkBlue};
`;

const UserInputLabelUser = styled.span`
  color: ${Colors.green};
`;


export default UserInterface;
