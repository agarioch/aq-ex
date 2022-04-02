import React from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

const Socials = () => {
  return (
    <div>
      <IconButton aria-label="facebook">
        <Icon baseClassName="fa" className="fa-facebook-f" />
      </IconButton>
      <IconButton aria-label="twitter">
        <Icon baseClassName="fa" className="fa-twitter" />
      </IconButton>
      <IconButton aria-label="instagram">
        <Icon baseClassName="fa" className="fa-instagram" />
      </IconButton>
    </div>
  );
};

export default Socials;
