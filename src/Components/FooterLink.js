import React from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';

const FooterLink = props => (
  <Wrapper
    href={props.href}
    target="_blank"
    className="dib ma3 link"
  >
    { props.caption }
  </Wrapper>
);

const Wrapper = styled.a`
  color: ${Colors.darkGrey};
`;

export default FooterLink;
