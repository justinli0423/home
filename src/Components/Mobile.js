import React from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';
import Data from './Data/CommandPrompt';

const Mobile = () => (
  <Wrapper>
    <Title>
      Justin Li
    </Title>
    <Link
      target="_blank"
      href={Data.npmGit[1]}
    >
      Github
    </Link>
    <Link
      target="_blank"
      href={Data.npmLinkedIn[1]}
    >
      LinkedIn
    </Link>
    <Link
      target="_blank"
      href={Data.npmResume[1]}
    >
      Resume
    </Link>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  text-transform: uppercase;
`;

const Title = styled.h1`
  color: ${Colors.white};
  padding-bottom: .2em;
  font-size: 10vw;
  margin: 0 auto;

  @media (min-width: 1023px) {
    font-size: 7em;
  }
`;

const Link = styled.a`
  margin: 0 auto;
  padding: 1.5em 0 .5em;
  font-size: 6vw;
  text-decoration: none;
  color: ${Colors.white};
  transition: .2s all linear;
  border-bottom: 2px solid ${Colors.transparent};
  &:focus, &:active, &:visited {
    outline: none;
  }

  &:hover {
    border-bottom: 2px solid ${Colors.translucentGreyLight};
  }

  @media (min-width: 1023px) {
    font-size: 3em;
  }
`;

export default Mobile;
