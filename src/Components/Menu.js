import React, { Component } from 'react';
import styled from 'styled-components';

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

  render() {
    return (
      <div>
        <span
          className="dib ml5 mt5 f3"
          onClick={() => this.menuStateChanged(this)}
        >
          { this.isMenuActive() }
        </span>
      </div>
    );
  }
}