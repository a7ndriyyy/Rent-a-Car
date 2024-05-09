import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 16px 36px;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 8px;

  background-color: rgb(36, 39, 40);
  background-image: linear-gradient(90deg, purple 25%, black 75%);

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  p {
    font-size: 14px;
    color: #fefacc;
    letter-spacing: 1.1px;
  }
`;
