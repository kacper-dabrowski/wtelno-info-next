import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface NavigationItemProps {
  level: number;
}

export const NavigationItem = styled.a<NavigationItemProps>`
  display: block;
  font-size: ${({ theme }) => theme.font.size.paragraph.p1};
  border: none;
  color: ${({ theme }) => theme.colors.brightBrown};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.xs} 0;
  ${applyLevelStyles}

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.brightBrown};
    color: ${({ theme }) => theme.colors.white};
  }
`;

interface Props {
  theme: Theme;
  level: number;
}

function applyLevelStyles({ theme, level }: Props) {
  const fontWeight = level === 1 ? theme.font.weight.semiBold : theme.font.weight.normal;
  const fontSize = level === 1 ? theme.font.size.paragraph.p1 : theme.font.size.paragraph.p2;

  return `
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  `;
}
