import React from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';

const Name = () => (
  <Wrapper
    className="absolute ml5 fl flex flex-row"
  >
    <MyPic
      className="mr2 relative"
    />
    <span
      className="flex flex-column mt3"
    >
      <MyName
        className="f5"
      >
        Justin Li
      </MyName>
      <MyTitle
        className="f8 mt1"
      >
        Web Developer
      </MyTitle>
    </span>
  </Wrapper>
);

const Wrapper = styled.div`
  top: 35%;
  font-family: 'Graduate', cursive;
  color: ${Colors.darkGrey};
`;

const MyName = styled.div`

`;

const MyTitle = styled.div`

`;

const MyPic = styled.img`
  background-color: orange;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid ${Colors.black};
`;

export default Name;
