import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import { Company } from '../../types/Company';
import SocialList from './SocialList';
import Details from './Details';

type ProfileProps = {
  style: React.CSSProperties;
  member: Company;
};

const Profile = ({ member, style }: ProfileProps) => {
  return (
    <Wrapper style={style}>
      <LinksWrapper>
        <a href={member.url}>
          <Card elevation={1} sx={logoStyle}>
            <img src={member.logo} alt={`${member.name} logo`} />
          </Card>
        </a>
        <Link href={member.url} underline="hover">
          {member.url}
        </Link>
        <SocialList socials={member.socials} />
      </LinksWrapper>
      <Details member={member} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
`;
const LinksWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const logoStyle = {
  alignItems: 'center',
  display: 'flex',
  height: '200px',
  justifyContent: 'center',
  objectFit: 'contain',
  marginRight: '16px',
  width: '200px',
};

export default Profile;
