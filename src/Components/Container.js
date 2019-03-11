import React from 'react';
import styled from 'styled-components';
import Name from './Name';

const Container = () => (
  <BigContainer
    className="absolute w-100 h-100 mt4"
  >
    <WrapperName
      className="fl h-75 w-30"
    >
      <Name />
    </WrapperName>
    <WrapperContent
      className="fl h-75 w-70"
    />
  </BigContainer>
);

const WrapperName = styled.div`
`;

const WrapperContent = styled.div`
`;

const BigContainer = styled.div``;

export default Container;
