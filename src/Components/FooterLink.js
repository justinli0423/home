import React from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';

const FooterLink = props => (
  <Wrapper
    href={props.href}
    target="_blank"
    className="dib ma3 link relative"
  >
    { props.caption }
  </Wrapper>
);

const Wrapper = styled.a`
  color: ${Colors.darkGrey};
  &:last-child {
    margin-right: 0;
  }
  &::before {
    content: '';
    position: absolute;
    top: 1.4em;
    left: 25%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 2px;
    opacity: 0;
    z-index: 1;
    border-radius: 50%;
    background-color: ${Colors.darkGrey};
    transition: all .5s;
  }
  &:active,
  &:focus,
  &:visited, {
    border: none;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover&::before {
    opacity: 1;
    left: 78%;
  }
`;

export default FooterLink;
