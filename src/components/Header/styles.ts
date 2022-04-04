import styled from '@emotion/styled';
import { COLORS, QUERIES } from '../../theme';

export const HeaderContainer = styled.header`
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
export const HeaderLogo = styled.img`
  /* visual alignment adjustment */
  margin-top: 10px;
`;
export const HeaderNav = styled.nav`
  color: ${COLORS.white};
  @media ${QUERIES.tabletAndSmaller} {
    // Out of scope: implement responsive navigation on smaller screens
    display: none;
  }
`;
export const HeaderNavMenu = styled.ul`
  display: flex;
`;