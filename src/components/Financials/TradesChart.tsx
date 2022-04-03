import React from 'react';
import { useTradeData } from '../../hooks/';

const TradesChart = ({ id }: { id: number }) => {
  const { trades, isLoading, isError } = useTradeData(id);

  return <pre>{JSON.stringify(trades)}</pre>;
};

export default TradesChart;
