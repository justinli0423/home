import React from 'react';
import styled, { keyframes } from 'styled-components';

import Colors from '../Data/Colors';

const Spinner = () => (
  <SpinnerLoad>
    <ChasingDots>
      <ChildDotOne />
      <ChildDotTwo />
    </ChasingDots>
  </SpinnerLoad>
);

const ChasingDotsBounce = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

const ChasingDotsRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerLoad = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10em;
  height: 10em;
`;

const ChasingDots = styled.div`
  margin: 4em auto;
  width: 4em;
  height: 4em;
  position: relative;
  text-align: center;
  animation-fill-mode: forwards;
  animation: ${ChasingDotsRotate} 3s infinite cubic-bezier(0.39, 0.575, 0.565, 1);
`;

const ChildDotOne = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: ${Colors.grey};
  border-radius: 50%;
  animation: ${ChasingDotsBounce} 2s infinite ease-in-out;
`;

const ChildDotTwo = ChildDotOne.extend`
  top: auto;
  bottom: 0;
  animation-delay: -1s;
`;

export default Spinner;
