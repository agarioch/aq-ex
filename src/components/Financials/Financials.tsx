import React from 'react';
import styled from '@emotion/styled';
import Kpi from './Kpi';
import { Company } from '../../types/Company';

type FinancialsProps = {
  member: Company;
  style?: React.CSSProperties;
};
const Financials = ({ member, style }: FinancialsProps) => {
  return (
    <section style={style}>
      <KpiWrapper>
        <Kpi label="Price" value={member.trading.Price} />
        <Kpi label="Prior Close" value={member.trading['Prior Close']} />
        <Kpi label="Bid" value={member.trading.Bid} />
        <Kpi label="Ask" value={member.trading.Ask} />
      </KpiWrapper>
    </section>
  );
};

const KpiWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default Financials;
