import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Company } from '../../types/Company';

type ProfileProps = {
  style: React.CSSProperties;
  member: Company;
};

const Profile = ({ member, style }: ProfileProps) => {
  return (
    <Wrapper style={style}>
      <div></div>
      <div>
        <Typography variant="h1">{member.name}</Typography>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
`;

export default Profile;
