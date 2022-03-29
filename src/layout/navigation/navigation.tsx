import React, { FC, useMemo, useState } from 'react';
import { Backdrop } from './backdrop/backdrop';
import * as Styles from './navigation.styles';
import { NavigationItem } from './navigationItem/navigationItem';
import logo from '../../../assets/wtelno-tree.svg';
import Hamburger from 'hamburger-react';
import { useTheme } from '@emotion/react';
import { config } from '../../../shared/config';
import Link from 'next/link';

export const NavigationBar: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { colors } = useTheme();

  const hideSideDrawer = () => {
    setIsActive(false);
  };

  const toggleSideDrawer = () => {
    setIsActive((currentState) => !currentState);
  };

  const mappedRoutes = useMemo(mapRoutesToLinks, []);

  return (
    <>
      <Backdrop onClick={hideSideDrawer} show={isActive} />
      <Styles.HamburgerWrapper>
        <Hamburger onToggle={toggleSideDrawer} toggled={isActive} color={colors.brightBrown} />
      </Styles.HamburgerWrapper>
      <Styles.SideDrawer isActive={isActive}>
        <Link href="/" passHref>
          <Styles.LogoWrapper>
            <Styles.Logo layout="responsive" src={logo} width={48} height={48} alt="Wtelno.info" />
          </Styles.LogoWrapper>
        </Link>
        <Styles.ItemsWrapper>{mappedRoutes}</Styles.ItemsWrapper>
      </Styles.SideDrawer>
    </>
  );
};

function mapRoutesToLinks(): JSX.Element[] {
  return config.routes.map(({ path, level, title }) => (
    <NavigationItem key={path} to={path} level={level}>
      {title}
    </NavigationItem>
  ));
}
