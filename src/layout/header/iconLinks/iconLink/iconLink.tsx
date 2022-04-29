import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import * as Styles from './iconLink.styles';

interface IconLinkProps {
  href: string;
  src: StaticImageData;
  alt: string;
  title: string;
}

export const IconLink: FC<IconLinkProps> = ({ src, href, alt, title }) => (
  <Styles.IconLink href={href} target="_blank" rel="noreferrer">
    <Image src={src} width={32} height={32} alt={alt} title={title} />
  </Styles.IconLink>
);
