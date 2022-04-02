import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { Company } from '../../types/Company';

type DetailsProps = {
  member: Company;
};

const Details = ({ member }: DetailsProps) => {
  return (
    <DetailsWrapper>
      <Typography variant="h1">{member.name}</Typography>
      <Typography
        variant="body1"
        style={{ whiteSpace: 'pre-line', marginTop: '8px' }}
      >
        {member.description}
      </Typography>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Details;
