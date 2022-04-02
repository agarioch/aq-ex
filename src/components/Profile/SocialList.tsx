import React from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { Socials } from '../../types/Company';

type SocialsProps = {
  socials: Socials;
  style?: React.CSSProperties;
};

const SocialList = ({ socials, style }: SocialsProps) => {
  const socialIcons = Object.entries(socials).map(([name, url]) => {
    return (
      <IconButton
        key={name}
        arial-label={name}
        LinkComponent="a"
        href={String(url)}
        style={style}
      >
        <Icon baseClassName="fa" className={'fa-' + name} />
      </IconButton>
    );
  });

  return <div>{socialIcons}</div>;
};

export default SocialList;
