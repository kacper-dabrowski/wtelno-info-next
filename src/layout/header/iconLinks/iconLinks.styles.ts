import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 300px;
  max-width: 500px;
  display: flex;
  place-content: center;
  justify-content: space-around;
  margin: ${({ theme }) => theme.spacing.md} auto;
`;
