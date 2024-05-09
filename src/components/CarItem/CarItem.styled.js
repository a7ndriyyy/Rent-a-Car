import styled from 'styled-components';

export const Div = styled.div`
  border-radius: 8px;
  :hover :focus {
    box-shadow: 0px 0px 60px 0px purple;
  }
  transition: box-shadow 0.5s;
  transform: 0.5;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 274px;
  height: 426px;
  :hover {
    box-shadow: 0px 0px 60px 0px purple;
    transform: scale(1.01);
  }
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 274px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
  overflow: hidden;
  &:last-child {
    border-right: none;
    padding-right: 0;
  }
  &:first-child {
    padding-left: 0;
  }
`;

export const Option = styled.span`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  padding: 0 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  white-space: nowrap;
`;

export const Button = styled.button`
  width: 274px;
  height: 44px;
  margin-top: 28px;
  background-color: var(--primary-color-blue);
  color: var(--primary-color-white);
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    background-color: var(--active-color-blue);
  }
`;

export const ButtonFav = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 14px;
  right: 14px;
  svg {
    stroke: var(--primary-color-white);
  }
  svg:hover {
    stroke: var(--primary-color-blue);
  }
`;

export const ButtonFavActive = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 14px;
  right: 14px;
  svg {
    stroke: var(--primary-color-blue);
    fill: var(--primary-color-blue);
  }
  &:hover svg {
    fill: transparent;
  }
`;
