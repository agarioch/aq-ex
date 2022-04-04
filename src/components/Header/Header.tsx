import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../AquisLogo.svg';
import { PAGES } from '../../mocks/mock';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderNavMenu,
} from './styles';

const Header = () => (
  <HeaderContainer>
    <HeaderLogo src={logo} alt="logo" />
    <HeaderNav>
      <HeaderNavMenu>
        {PAGES.map((page) => (
          <MenuItem key={page}>{page}</MenuItem>
        ))}
      </HeaderNavMenu>
    </HeaderNav>
  </HeaderContainer>
);

export default Header;
