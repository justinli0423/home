import React from 'react';
import styled from 'styled-components';

const Container = () => (
  <BigContainer
    className="fl w-100 h-100"
  >
    <WrapperName
      className="fl h-75 w-30"
    />
    <WrapperInfo
      className="fl h-75 w-70"
    />
  </BigContainer>
);

const WrapperName = styled.div`
  background-color: black;
`;

const WrapperInfo = styled.div`
  background-color: red;
`;

const BigContainer = styled.div``;

export default Container;
