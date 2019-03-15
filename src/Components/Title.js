import React from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';

const Title = props => (
  <Wrapper
    className="absolute ml4"
  >
    <div
      className="f-subheadline"
    >
      { props.title }
    </div>
    <Caption
      className="f5 ml2"
    >
      { props.caption }
    </Caption>
  </Wrapper>
);

const Wrapper = styled.h1`
  color: ${Colors.white};
  top: 35%;
  font-family: 'Graduate', cursive;
`;

const Caption = styled.div`
  color: ${Colors.grey};
`;

export default Title;
