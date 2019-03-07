/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';

// import Name from './Components/Name';
import Menu from './Components/Menu';
import Colors from './Components/Data/Colors';
import MyInfo from './MyInfo';

const myInfo = {
  education: '// University of Waterloo - ECE',
  currentJob: '// Web Applications Developer @ Dejero Labs',
};

const App = () => (
  <Wrapper
    className="db"
  >
    <Menu />
    <MyInfo
      textToType={myInfo.education}
    />
    <MyInfo
      textToType={myInfo.currentJob}
    />
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
