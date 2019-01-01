/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Colors from './Data/Colors';

const links = {
  github: 'https://github.com/Jli0423',
  linkedin: 'https://www.linkedin.com/in/jli0423/',
  resume: 'https://github.com/Jli0423/Resume/blob/master/JustinLiResume.pdf',
};

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: '',
      job: '',
      typedCount: 1,
      typeSpeed: 60,
      fullEducation: '// University of Waterloo - ECE',
      fullJob: '// Web Applications Developer @ Dejero Labs',
    };
  }

  componentDidMount() {
    const {
      typeSpeed,
      fullEducation,
      fullJob,
    } = this.state;

    setInterval(() => {
      const {
        typedCount,
      } = this.state;

      if (typedCount <= fullJob.length) {
        this.setState({
          job: fullJob.substring(0, typedCount),
          typedCount: typedCount + 1,
        });
      } else {
        this.setState({
          education: fullEducation.substring(0, typedCount - fullJob.length),
          typedCount: typedCount + 1,
        });
      }
    }, typeSpeed);
  }

  componentDidUpdate() {
    const {
      typedCount,
      fullEducation,
      fullJob,
    } = this.state;
    if (typedCount === fullEducation.length + fullJob.length) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      education,
      job,
    } = this.state;
    return (
      <Wrapper>
        <Title>
          Justin Li
        </Title>
        <Caption>
          { job }
        </Caption>
        <Caption>
          { education }
        </Caption>
        <ButtonWrapper>
          <Button
            title="LinkedIn"
            link={links.linkedin}
          />
          <Button
            title="Github"
            link={links.github}
          />
          <Button
            title="Resume"
            link={links.resume}
          />
        </ButtonWrapper>
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

  @media (max-width: 1025px) {
    font-size: 5em;
  }
`;

const Caption = styled.div`
  font-size: 1.5em;
  margin: 0 auto;
  padding: .3em;

  @media (max-width: 1025px) {
    font-size: .8em;
  }
  
  &::after {
    content: 'i';
    color: transparent;
    overflow: hidden;
    font-size: 1px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
