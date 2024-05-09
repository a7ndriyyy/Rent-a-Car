import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% {
    transform: translateY(-1%);
  }
  100% {
    transform: translateY(3%);
  }
`;

const line = keyframes`
  0% {
    stroke-dashoffset: 22;
  }
  
  25% {
    stroke-dashoffset: 22;
  }
  
  50% {
    stroke-dashoffset: 0;
  }
  
  51% {
    stroke-dashoffset: 0;
  }
  
  80% {
    stroke-dashoffset: -22;
  }
  
  100% {
    stroke-dashoffset: -22;
  }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarSvg = styled.svg`
  .car__body {
    animation: ${shake} 0.2s ease-in-out infinite alternate;
  }

  .car__line {
    transform-origin: center right;
    stroke-dasharray: 22;
    animation: ${line} 0.8s ease-in-out infinite;
    animation-fill-mode: both;

    &--top {
      animation-delay: 0s;
    }

    &--middle {
      animation-delay: 0.2s;
    }
    &--bottom {
      animation-delay: 0.4s;
    }
  }
`;
