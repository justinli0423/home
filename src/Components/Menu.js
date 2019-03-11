/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  isMenuActive() {
    const { clicked } = this.state;
    if (clicked) {
      return <i className="fas fa-caret-down" />;
    }
    return <i className="fas fa-bars" />;
  }

  menuStateChanged() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
    });
  }

  renderMenu() {
    const { clicked } = this.state;
    if (clicked) {
      return (
        <select>
          <option>Github</option>
          <option>Projects</option>
          <option>Experiences</option>
          <option>LinkedIn</option>
        </select>
      );
    }
    return null;
  }

  render() {
    return (
      <Wrapper>
        <span
          className="dib f3"
          role="button"
          onClick={() => this.menuStateChanged(this)}
        >
          { this.isMenuActive() }
          { this.renderMenu() }
        </span>
      </Wrapper>
    );
  }
}

const Wrapper = styled.span`
  color: ${Colors.darkGrey};
`;
