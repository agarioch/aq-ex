import { Trade } from "../../types/Trade";
import TRADES from "../../mocks/trades.json";


async function fetchRequest(path: string) {
  // mocking a server response
  return TRADES
}

export function getMemberTrades(id: number): Promise<Trade[]> {
  return fetchRequest(`/mock/trades/${id}`).then(response => parseTrades(response)).then(response => response.sort((a, b) => a.Timestamp - b.Timestamp));
}

function parseTrades(response: any): Trade[] {
  return response.map((trade: any) => {
    return {
      Volume: parseInt(trade.Volume),
      Price: parseFloat(trade.Price),
      Date: new Date(trade.Date),
      Timestamp: new Date(trade.DateTime).getTime()
    }
  })
}