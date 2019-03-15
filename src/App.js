/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';

import Menu from './Components/Menu';
import Colors from './Components/Data/Colors';
import MyInfo from './Components/MyInfo';
import FooterLink from './Components/FooterLink';
import Container from './Components/Container';

const myInfo = {
  education: '// University of Waterloo - ECE',
  currentJob: '// Web Applications Developer @ Dejero Labs',
};

const App = () => (
  <Wrapper
    className="db relative"
  >
    <Row
      className="fl mt5 ml5 mr5 w-90 h-100 relative"
    >
      <Menu />
      <span
      className="dib f5 fr"
      >
        <MyInfo
        textToType={myInfo.education}
        />
        <MyInfo
        textToType={myInfo.currentJob}
        />
      </span>
      <Container />
      <FooterContainer
      className="flex mb5 f7 w-100 absolute flex-row bottom-2 justify-end"
      >
        <FooterLink
        caption="Github"
        href="https://github.com/Jli0423"
        />
        <FooterLink
        caption="Resume"
        href="https://github.com/Jli0423/Resume/blob/master/JustinLiResume.pdf"
        />
        <FooterLink
        caption="Linkedin"
        href="https://www.linkedin.com/in/jli0423/"
        />
      </FooterContainer>
    </Row>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.background};
  /* maybe add after */
  /* background-image: url(./img/noiseBackground.png); */
`;

const FooterContainer = styled.div`

`;

const Row = styled.div`

`;

export default App;
