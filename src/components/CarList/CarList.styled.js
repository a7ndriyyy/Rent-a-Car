import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1216px;
  margin: 40px auto;
  padding: 0 16px;
`;

export const SectionCatalog = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  color: var(--primary-color-blue);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  &:hover {
    color: var(--active-color-blue);
  }
`;
