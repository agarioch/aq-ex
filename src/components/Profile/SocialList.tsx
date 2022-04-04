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

const SocialList = ({ socials, style }: SocialsProps) => (
  <div>
    {Object.entries(socials).map(([name, url]) =>
      Object.prototype.hasOwnProperty.call(SocialIcons, name) ? (
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
      ) : null
    )}
  </div>
);

export default SocialList;
