/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';

const Button = (props) => {
  const {
    title,
    link,
  } = props;
  return (
    <Wrapper
      href={link}
      target="_blank"
    >
      {title}
    </Wrapper>
  );
};

Button.defaultProps = {
  title: '',
};


const Wrapper = styled.a`
  position: relative;
  background: none;
  text-decoration: none;
  color: ${Colors.white};
  margin-top: 5em;
  font-size: 1.5em;

  &::before {
    content: '';
    position: absolute;
    top: 1.4em;
    left: 25%;
    transform: translate(-50%, -50%);
    width: 25%;
    height: 2px;
    opacity: 0;
    z-index: 1;
    overflow: hidden;
    border-radius: 20%;
    background-color: ${Colors.white};
    transition: all .4s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1.4em;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 2px;
    opacity: .8;
    background-color: ${Colors.white};
    transition: all .4s;
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

  &:hover&::after {
    opacity: 0;
  }
`;

export default Button;
