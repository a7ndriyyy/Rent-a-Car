import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;
  padding: 14px 18px;
`;

export const ListWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 272px;
  padding: 8px;
  background-color: #ffffff;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  left: 0;
  top: 52px;
  z-index: 100;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 6px 10px;
`;

export const Item = styled.li`
  color: rgba(18, 20, 23, 0.2);
  cursor: pointer;
  line-height: 20px;
  margin-bottom: 8px;
  &:hover {
    color: #121417;
  }
`;
