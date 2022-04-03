import { Company } from "../../types/Company";
import parseCurrency from "../../utils/parseCurrency";

export default function parseData (response: any): Company {
  const currency = response.trading.currency;
  return {
    ...response,
    tradingInfo: {
      Price: parseCurrency(response.trading.Price, currency),
      'Bid / Ask': `${parseCurrency(response.trading.Bid, currency)} / ${parseCurrency(response.trading.Ask, currency)}`,
      Volume: parseInt(response.trading.Volume).toLocaleString('en-GB'),
      'Prior Close': parseCurrency(response.trading['Prior Close'], currency),
      'Last Trade': new Date(response.trading['Last Trade']),
    }
  }
}

