import { useTheme } from '@emotion/react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import React, { FC, useMemo, useState } from 'react';
import logo from '../../../public/assets/wtelno-tree.svg';
import { config } from '../../../shared/config';
import { Backdrop } from './backdrop/backdrop';
import * as Styles from './navigation.styles';
import { NavigationItem } from './navigationItem/navigationItem';

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
  const hamburgerColor = isActive ? colors.brightBrown : colors.white;

  return (
    <>
      <Backdrop onClick={hideSideDrawer} show={isActive} />
      <Styles.HamburgerWrapper>
        <Hamburger onToggle={toggleSideDrawer} toggled={isActive} color={hamburgerColor} />
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
