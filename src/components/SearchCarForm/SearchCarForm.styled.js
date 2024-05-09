import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

export const BrandWrapper = styled.div`
  width: 224px;
`;

export const PriceWrapper = styled.div`
  width: 125px;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 136px;
  height: 48px;
  border-radius: 12px;
  background-color: var(--primary-color-blue);
  color: var(--primary-color-white);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0%;
  border: none;
  margin-top: auto;
  &:hover {
    background-color: var(--active-color-blue);
  }
`;

export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  left: 24px;
  top: 12px;
`;

export const InputFrom = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 160px;
  height: 48px;
  border-radius: 14px 0px 0px 14px;
  background: rgb(247, 247, 251);
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  padding: 14px 24px;
  padding-left: 70px;
  outline: none;
  @media only screen and (max-width: 472px) {
    width: 140px;
  }
`;

export const InputTo = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 160px;
  height: 48px;
  border-radius: 0px 14px 14px 0px;
  background: rgb(247, 247, 251);
  border: none;
  padding: 14px 24px;
  padding-left: 50px;
  outline: none;
  @media only screen and (max-width: 472px) {
    width: 140px;
  }
`;
