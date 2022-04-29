import { StaticImageData } from 'next/image';
import { FC } from 'react';
import cameraIcon from '../../../../public/assets/icons/ar-camera.png';
import facebookIcon from '../../../../public/assets/icons/facebook.png';
import pinIcon from '../../../../public/assets/icons/pin.png';
import { IconLink } from './iconLink/iconLink';
import * as Styles from './iconLinks.styles';

interface IconLinkConfig {
  image: StaticImageData;
  altText: string;
  title: string;
  href: string;
}

const iconLinksList: IconLinkConfig[] = [
  {
    image: cameraIcon,
    altText: 'Ikona aparatu',
    title: 'Powietrzny kadr',
    href: 'https://www.facebook.com/powietrznykadr',
  },
  {
    image: facebookIcon,
    altText: 'Ikona facebooka',
    title: 'Nasz profil na facebooku',
    href: 'https://www.facebook.com/wtelno.info',
  },
  {
    image: pinIcon,
    altText: 'Ikonaa pinezki',
    title: 'Lokalizacja wsi Wtelno',
    href: 'https://www.google.com/maps/place/86-011+Wtelno,+Poland/@53.2382118,17.8823626,14z/data=!3m1!4b1!4m5!3m4!1s0x47030f6d8ede1a59:0x720e28b7354a6156!8m2!3d53.2382136!4d17.8998722',
  },
];

export const IconLinks: FC = () => (
  <Styles.Container>
    {iconLinksList.map(({ image, altText, title, href }) => (
      <IconLink key={href} src={image} alt={altText} title={title} href={href} />
    ))}
  </Styles.Container>
);
