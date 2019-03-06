/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';

// import Name from './Components/Name';
import Menu from './Components/Menu';
import Colors from './Components/Data/Colors';

const App = () => (
  <Wrapper
    className="db"
  >
    <Menu />
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
