import { FC, MouseEventHandler } from 'react';
import * as Styles from './backdrop.styles';

interface BackdropProps {
  show: boolean;
  onClick: MouseEventHandler;
}

export const Backdrop: FC<BackdropProps> = ({ show, onClick }) => {
  return show ? <Styles.Backdrop onClick={onClick} /> : null;
};
