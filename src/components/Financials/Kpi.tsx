import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { COLORS } from '../../theme';

const statusColors = {
  normal: COLORS.blue[700],
  success: COLORS.green[700],
  warning: COLORS.red[700],
};

type KpiProps = {
  label: string;
  value: number | string | Date;
  status?: 'normal' | 'success' | 'warning';
};

const Kpi = ({ label, value, status = 'normal' }: KpiProps) => {
  const color = statusColors[status];
  return (
    <KpiCard>
      <Typography variant="h3" color={color}>
        {value}
      </Typography>
      <Typography variant="subtitle2" color={COLORS.gray[500]}>
        {label}
      </Typography>
    </KpiCard>
  );
};

const KpiCard = styled.div`
  /* background-color: ${COLORS.white}; */
  border: 1px solid ${COLORS.gray[200]};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

export default Kpi;
