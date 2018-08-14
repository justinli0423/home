import React, { Component } from 'react';
import styled from 'styled-components';

import Service from './Service/Services';
import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

// put all wanted commands here
// current:
// - cls/clear (clears screen)
// future:
// - npm help (list all commands)
// - npm start git
// - npm start linkedin
// - npm start resume
// - npm show languages (show languages)
// - npm show tools (shows tools)
// - exit/logout/logoff (closes 'program')
// - windows run logoff  (logs user off -> will show login screen)
// - windows run shutdown (simulates shutdown and potentially close tab)

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

  componentDidUpdate(prevProp, prevState) {
    const { lineInputAmounts } = this.state;
    if (prevState.lineInputAmounts > lineInputAmounts) {
      this.setState({
        lineInputAmounts: 1,
      });
    }
  }

  inputCreator(num) {
    const promptArray = [];
    for (let i = 0; i < num; i += 1) {
      promptArray.push(i);
    }

    return promptArray.map(() => (
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
          onClick={obj => this.userCommandInput(obj)}
        />
      </UserInputFields>
    ));
  }

  // override default onSubmit so page does not refresh
  userCommandInput(e) {
    e.preventDefault();
    const { lineInputAmounts } = this.state;

    Service.commandValidator(this.autoFocusRef.value)
      .then((status) => {
        if (status === 'clear') {
          this.setState({
            lineInputAmounts: 0,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // this is always here to create next line
    // not sure why .finally() isn't working...
    this.setState({
      lineInputAmounts: lineInputAmounts + 1,
    });
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
