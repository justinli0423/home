/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      typedCount: 1,
      typeSpeed: 60,
      fullCaption: '// University of Waterloo - ECE',
    };
  }

  componentDidMount() {
    const {
      typeSpeed,
      fullCaption,
    } = this.state;
    setInterval(() => {
      const {
        typedCount,
      } = this.state;
      this.setState({
        caption: fullCaption.substring(0, typedCount),
        typedCount: typedCount + 1,
      });
    }, typeSpeed);
  }

  componentDidUpdate() {
    const {
      typedCount,
      fullCaption,
    } = this.state;
    if (typedCount === fullCaption.length) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { caption } = this.state;
    return (
      <Wrapper>
        <Title>
          Justin Li
        </Title>
        <Caption>
          { caption }
        </Caption>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-family: 'Graduate', cursive;
  color: ${Colors.white};
`;

const Title = styled.div`
  font-size: 14em;
`;

const Caption = styled.div`
  font-size: 2em;
  margin: 0 auto;
`;
