import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { COLORS, QUERIES } from '../../theme';
import DataTable from '../DataTable/DataTable';

type NewsProps = {
  style: React.CSSProperties;
};

const News = ({ style }: NewsProps) => {
  return (
    <NewsWrapper style={style}>
      <article style={{ flex: 1 }}>
        <Typography variant="h2" sx={{ mb: '0.5rem' }}>
          Announcements
        </Typography>
        <DataTable data={{ test: 'hi', 'another test': 'something' }} />
      </article>
      <article style={{ flex: 1 }}>
        <Typography variant="h2" sx={{ mb: '0.5rem' }}>
          Research
        </Typography>
        <DataTable data={{ test: 'hi' }} />
      </article>
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  background-color: ${COLORS.gray[200]};
  display: flex;
  gap: 32px;
  padding: 32px 64px;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 24px 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px 16px;
  }
`;

export default News;
