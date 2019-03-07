import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from './Components/Data/Colors';

export default class MyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTyped: '',
      typedCount: 1,
      typeSpeed: 60,
    };
  }

  componentDidMount() {
    const {
      typeSpeed,
    } = this.state;

    setInterval(() => {
      const {
        typedCount,
      } = this.state;

      const {
        textToType,
      } = this.props;

      if (!!textToType && typedCount <= textToType.length) {
        this.setState({
          textTyped: textToType.substring(0, typedCount),
          typedCount: typedCount + 1,
        });
      }
    }, typeSpeed);
  }

  componentDidUpdate() {
    const {
      typedCount,
    } = this.state;

    const {
      textToType,
    } = this.props;

    if (typedCount === textToType.length) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      textTyped,
    } = this.state;
    return (
      <Wrapper>
        <Caption>
          { textTyped }
        </Caption>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  float: right;
  white-space: nowrap;
  font-family: 'Graduate', cursive;
  clear: both;
`;

const Caption = styled.div`
  font-size: 1em;
  margin: 0 auto;
`;
