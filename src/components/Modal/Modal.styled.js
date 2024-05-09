import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: var(--backdrop-color-black);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  width: 541px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: var(--primary-color-white);
  border-radius: 24px;

  @media only screen and (max-width: 560px) {
    width: 95%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  &:hover {
    fill: var(--active-color-blue);
  }
`;

export const ModalImage = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  object-fit: cover;
  margin-bottom: 14px;

  @media only screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: var(--primary-color-black);
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Model = styled.span`
  color: var(--primary-color-blue);
`;

export const OptionsWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
  overflow: hidden;
  & :last-child {
    border-right: none;
    padding-right: 0;
  }
  & :first-child {
    padding-left: 0;
  }
`;

export const Option = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--secondary-color-black);
  padding: 0 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  white-space: nowrap;
`;

export const Description = styled.p`
  margin-top: 14px;
  color: var(--primary-color-black);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const OptionsTitle = styled.h4`
  margin-top: 24px;
  margin-bottom: 8px;
  color: var(--primary-color-black);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const ConditionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const ConditionsItem = styled.span`
  height: 32px;
  padding: 7px 14px 7px 14px;
  border-radius: 35px;
  background: rgb(249, 249, 249);
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -2%;
  white-space: nowrap;
`;

export const Span = styled.span`
  font-weight: 600;
  color: var(--primary-color-blue);
`;
export const Link = styled.a`
  text-decoration: none;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 44px;
  margin-top: 24px;
  border: none;
  border-radius: 12px;
  color: var(--primary-color-white);
  background-color: var(--primary-color-blue);
  &:hover {
    background-color: var(--active-color-blue);
  }
`;
