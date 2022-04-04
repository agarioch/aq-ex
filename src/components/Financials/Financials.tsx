import React from 'react';
import Kpis from './Kpis';
import { Company } from '../../types/Company';
import TradesChart from './TradesChart';

type FinancialsProps = {
  member: Company;
  style?: React.CSSProperties;
};
const Financials = ({ member, style }: FinancialsProps) => (
  <section style={style}>
    <Kpis member={member} />
    <TradesChart id={member.id} />
  </section>
);

export default Financials;
