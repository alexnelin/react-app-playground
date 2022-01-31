//TODO: modify global <Loader /> to use like this
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = ({ color }) => {
  const items = Array.from(Array(12)).map((_item, i) => <div key={i} />);
  return (
    <Wrapper>
      <Spinner color={color}>{items}</Spinner>
    </Wrapper>
  );
};
const animation = keyframes`  
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

const Spinner = styled.div`
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  width: 80px;
  height: 80px;
  --loader-color: ${(props) => props.color};
  div {
    transform-origin: 40px 40px;
    animation: ${animation} 1.2s linear infinite;
    :after {
      content: ' ';
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: var(--loader-color);
    }
    :nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    :nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    :nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    :nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    :nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    :nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    :nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    :nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    :nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    :nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    :nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    :nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
  }
`;

export default Loader;
