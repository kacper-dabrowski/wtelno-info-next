import styled from '@emotion/styled';
import Image from 'next/image';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  place-content: center;
  position: relative;
  height: 60vh;
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5));
`;

export const HeaderImage = styled(Image)`
  position: absolute;
  z-index: -1;
`;

export const HeaderTitle = styled.h1`
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
  font-size: 4rem;
  color: white;
  z-index: 2;

  @media (min-width: 850px) {
    font-size: 5rem;
  }
`;

export const HeaderParagraph = styled.p`
  font-size: 2rem;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-align: center;
  z-index: 2;

  @media (min-width: 850px) {
    font-size: 3rem;
  }
`;
