import React from 'react';
import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../AquisLogo.svg';
import { COLORS } from '../../theme';
import { PAGES } from '../../mocks/mock';

const Header = () => {
  return (
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
};

const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${COLORS.gray[700]};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 70px;
  justify-content: space-between;
  max-height: 70px;
  padding: 16px 24px;
  position: sticky;
  top: 0;
  width: 100%;
`;
const HeaderLogo = styled.img`
  /* visual alignment adjustment */
  margin-top: 10px;
`;
const HeaderNav = styled.nav`
  color: ${COLORS.white};
`;
const HeaderNavMenu = styled.ul`
  display: flex;
`;

export default Header;
