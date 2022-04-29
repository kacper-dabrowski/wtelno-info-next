import { FC } from 'react';
import headerImage from '../../../public/assets/main.jpg';
import { HeaderImage, HeaderParagraph, HeaderTitle, HeaderWrapper } from './header.styles';
import { IconLinks } from './iconLinks/iconLinks';

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderImage src={headerImage} layout="fill" objectFit="cover" placeholder="blur" />
      <HeaderTitle>Wtelno</HeaderTitle>
      <HeaderParagraph>Oficjalna strona internetowa</HeaderParagraph>
      <IconLinks />
    </HeaderWrapper>
  );
};
