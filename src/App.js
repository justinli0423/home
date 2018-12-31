import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import Mobile from './Components/Mobile';
import Colors from './Components/Data/Colors';

function starGenerator(amount, blur) {
  let stars = '';
  for(let i = 0; i < amount; i++) {
    let polarity = -1;
    polarity = Math.pow(polarity, i);
    console.log(polarity);
    stars += `${Math.floor(Math.random()*2000)}px ${Math.floor(Math.random()*2000)*polarity}px ${blur}px ${Colors.white}, `;
  }
  return stars.slice(0, stars.length - 2);
}

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <ParallaxStarSmall />
        <ParallaxStarMedium />
        <ParallaxStarLarge />
        <WrapperMobile>
          <Mobile />
        </WrapperMobile>
      </Wrapper>
    );
  }
}

const shootingStars = keyframes`
  from {
    transform: translate(0px);
  }
  
  to {
    transform: translate(-1000px, 1000px);
  }
`;

const Wrapper = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(143deg, #000e3b 1%, #210779 48%, #903897 94%), linear-gradient(#1e2652,#1e2652);
`;

const ParallaxStar = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0%;
  left: 0%;
  color: transparent;
`;

const ParallaxStarSmall = ParallaxStar.extend`
  width: 1px;
  height: 1px;
  box-shadow: ${starGenerator(3000, 0)};
  animation: ${shootingStars} 80s linear infinite;
`;

const ParallaxStarMedium = ParallaxStar.extend`
  width: 3px;
  height: 3px;
  box-shadow: ${starGenerator(500, 1)};
  animation: ${shootingStars} 50s linear infinite;
`;

const ParallaxStarLarge = ParallaxStar.extend`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: ${starGenerator(100, 0)};
  animation: ${shootingStars} 25s linear infinite;
`;

const WrapperMobile = Wrapper.extend`
  overflow: hidden;
  @media (min-width: 1025px) {
    display: none;
  }
`;
