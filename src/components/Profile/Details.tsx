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
      <DetailsParagraph>{member.description}</DetailsParagraph>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsParagraph = styled.p`
  display: -webkit-box;
  text-overflow: ellipsis;
  margin-top: 8px;
  overflow: hidden;
  white-space: pre-line;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

export default Details;
