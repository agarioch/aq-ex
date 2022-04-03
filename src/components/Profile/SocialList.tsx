import React from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { Socials } from '../../types/Company';

type SocialsProps = {
  socials: Socials;
  style?: React.CSSProperties;
};

const SocialIcons = {
  twitter: 'twitter',
  facebook: 'facebook-f',
  linkedin: 'linkedin',
  github: 'github',
  medium: 'medium',
  instagram: 'instagram',
  youtube: 'youtube',
  discord: 'discord',
  tiktok: 'tiktok',
};

type ValidSocial = keyof typeof SocialIcons;

const SocialList = ({ socials, style }: SocialsProps) => {
  const socialIcons = Object.entries(socials).map(([name, url]) => {
    if (Object.hasOwn(SocialIcons, name)) {
      return (
        <IconButton
          key={name}
          arial-label={name}
          LinkComponent="a"
          href={String(url)}
          style={style}
        >
          <Icon
            baseClassName="fa"
            className={'fa-' + SocialIcons[name as ValidSocial]}
          />
        </IconButton>
      );
    }
    return null;
  });

  return <div>{socialIcons}</div>;
};

export default SocialList;
