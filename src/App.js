/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';

// import Name from './Components/Name';
import Menu from './Components/Menu';
import Colors from './Components/Data/Colors';
import MyInfo from './Components/MyInfo';
import FooterLink from './Components/FooterLink';

const myInfo = {
  education: '// University of Waterloo - ECE',
  currentJob: '// Web Applications Developer @ Dejero Labs',
};

const App = () => (
  <Wrapper
    className="db"
  >
    <Menu />
    <span
      className="dib mr5 mt5 f5 fr"
    >
      <MyInfo
        textToType={myInfo.education}
      />
      <MyInfo
        textToType={myInfo.currentJob}
      />
    </span>

    <div
      className="dib mr5 mb5 f7 fr absolute right-0 bottom-0"
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
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.darkBrown};
  /* add after */
  /* background-image: url('./img/background.png'); */
`;

export default App;
