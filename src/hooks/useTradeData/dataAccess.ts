import { Trade } from "../../types/Trade";
import TRADES from "../../mocks/trades.json";


async function fetchRequest(path: string) {
  // mocking a server response
  return TRADES
}

export function getMemberTrades(id: number): Promise<Trade[]> {
  return fetchRequest(`/mock/trades/${id}`).then(response => parseTrades(response));
}

function parseTrades(response: any): Trade[] {
  return response.map((trade: Trade) => {
    return {
      ...trade,
      Date: new Date(trade.Date)
    }
  })
}