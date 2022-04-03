import React from 'react';
import styled from '@emotion/styled';
import Kpi from './Kpi';
import parseCurrency from '../../utils/parseCurrency';
import { QUERIES } from '../../theme';
import { Company } from '../../types/Company';

type FinancialsProps = {
  member: Company;
};
const Financials = ({ member }: FinancialsProps) => {
  const percentageChange = calculatePercentageChange(
    member.trading.Price,
    member.trading['Prior Close']
  );
  return (
    <KpiWrapper>
      <Kpi label="Price" value={member.tradingInfo.Price} />
      <Kpi label="Prior Close" value={member.tradingInfo['Prior Close']} />
      <Kpi
        label="Vs. Prior %"
        value={formatPercentageChange(percentageChange)}
        status={percentageChange >= 0 ? 'success' : 'warning'}
      />
      <Kpi
        label="Bid"
        value={parseCurrency(
          member.trading.Bid as number,
          member.trading.currency as string
        )}
      />
      <Kpi
        label="Ask"
        value={parseCurrency(
          member.trading.Ask as number,
          member.trading.currency as string
        )}
      />
    </KpiWrapper>
  );
};

const KpiWrapper = styled.div`
  align-items: start;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-template-rows: 100%;
  grid-auto-rows: 0px;
  overflow-y: hidden;
  width: 100%;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

function calculatePercentageChange(current: number, previous: number): number {
  return ((current - previous) / previous) * 100;
}

function formatPercentageChange(percentage: number): string {
  return `${percentage.toFixed(2)}%`;
}

export default Financials;
