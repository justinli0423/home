import React from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';

const opentextSVG = 'https://www.opentext.com/file_source/OpenText/en_US/SVG/opentext-logo-dark.svg';
const DejeroPNG = 'https://www.dejero.com/assets/images/interface/logo-w.png';

const Experience = () => (
  <Wrapper
    className="h-75 relative"
  >
    <Opentext
      className="mt5 relative"
    >
      <img
        className="w-30 mt6 ml3"
        src={opentextSVG}
        alt="Opentext"
      />
    </Opentext>
    <Opentext
      className="absolute bottom-1 left-0 ml3"
    >
      <img
        className="w-20 mt6 ml3"
        src={DejeroPNG}
        alt="Opentext"
      />
    </Opentext>
  </Wrapper>
);

const Wrapper = styled.div`

`;

const Opentext = styled.span`
`;

export default Experience;
