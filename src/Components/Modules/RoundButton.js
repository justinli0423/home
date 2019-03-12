import React from 'react';
import styled from 'styled-components';

import Colors from '../Data/Colors';

const RoundButton = props => (
  <Wrapper
    className="relative ma2"
  >
    { props.up && <i className="fas fa-chevron-up" /> }
    { props.down && <i className="fas fa-chevron-down" /> }
  </Wrapper>
);

const Wrapper = styled.a`
  width: 4em;
  height: 4em;
  background-color: rgba(161, 162, 161, .3);
  border-radius: 50%;
  transition: all .5s;
  &:hover {
    background-color: rgba(255, 255, 255, .5);
  }
  & i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${Colors.grey};
  }
`;

export default RoundButton;
