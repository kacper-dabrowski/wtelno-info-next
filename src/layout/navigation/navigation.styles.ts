import styled from '@emotion/styled';
import Image from 'next/image';

interface SideDrawerProps {
  isActive: boolean;
}

export const SideDrawer = styled.nav<SideDrawerProps>`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  z-index: 101;
  background-color: ${({ isActive }) => (isActive ? `white` : `transparent`)};
  padding: 2rem 1rem;
  box-sizing: border-box;
  transition: transform 0.2s ease-in-out;
  transform: ${({ isActive }) => (isActive ? 'translateX(0)' : 'translateX(-100%)')};
  pointer-events: ${({ isActive }) => (isActive ? 'initial' : 'none')};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 500px;
  }
`;

export const Logo = styled(Image)``;
export const LogoWrapper = styled.a`
  width: 48px;
  height: 48px;
`;

export const HamburgerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 102;
`;

export const ItemsWrapper = styled.div`
  width: 80%;
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-left: auto;
  margin-right: auto;
`;
