import { useEffect, useState } from 'react';
import { Trade } from '../../types/Trade';
import { getMemberTrades } from './dataAccess';

const useTradeData = (id: number) => {
  const [trades, setTrades] = useState<Trade[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMemberTrades(id)
      .then((data) => {
        setTrades(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { trades, isLoading, isError };
};
export default useTradeData;
