import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Headers = styled.header`
  background-image: radial-gradient(ellipse, black, purple);
  height: 60px;
`;

export const Div = styled.div`
  height: 60px;
  max-width: 1216px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  height: 100%;
  list-style-type: none;
  margin-left: 50px;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: #ffff;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;
