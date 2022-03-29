import Link from 'next/link';
import { FC } from 'react';
import * as Styles from './navigationItem.styles';

interface NavigationItemProps {
  level?: number;
  to: string;
}

export const NavigationItem: FC<NavigationItemProps> = ({ level = 1, to, children }) => (
  <Link href={to} passHref>
    <Styles.NavigationItem level={level}>{children}</Styles.NavigationItem>
  </Link>
);
