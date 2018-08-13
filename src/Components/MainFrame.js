import React from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';

const MainFrame = () => (
  <Wrapper> </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 70%;
  transform: translate(-50%, -50%);
  background-color: ${Colors.translucentWhite};
`;

export default MainFrame;
