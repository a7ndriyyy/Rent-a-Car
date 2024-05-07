import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  position: relative;
  margin-top: 0%;
  font-size: 90px;
  font-weight: 600;
  background-image: radial-gradient(ellipse, white, black);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  z-index: 2;
`;
export const SplineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
export const Content = styled.div``;

export const Button = styled(NavLink)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  border-radius: 8px;
  bottom: 100px;
  left: 80%;
  transform: translateX(-50%);
  background-image: radial-gradient(ellipse, white, black);
  box-shadow: 3px 3px rgba(128, 0, 128), -1em 0 0.6em rgb(128, 0, 128);
  padding: 10px 16px;
  font-size: 16px;
  text-decoration: none;
  &:hover {
    background-color: #fff;
  }
`;
