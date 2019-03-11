import React from 'react';
import styled from 'styled-components';
import Name from './Name';

import Colors from './Data/Colors';

const Container = () => (
  <BigContainer
    className="absolute w-100 h-100 mt4"
  >
    <WrapperName
      className="fl h-75 w-30 relative"
    >
      <Name />
    </WrapperName>
    <WrapperContent
      className="fl h-75 w-70"
    />
  </BigContainer>
);

const WrapperName = styled.div`
  border-right: 1px solid ${Colors.darkGrey};
  opacity: .7;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    height: 15%;
    width: 10px;
    z-index: 1000;
    margin-right: -2px;
    background-color: ${Colors.background};
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 20%;
    width: 10px;
    z-index: 1000;
    margin-right: -2px;
    background-color: ${Colors.background};
  }
`;

const WrapperContent = styled.div`
`;

const BigContainer = styled.div``;

export default Container;
