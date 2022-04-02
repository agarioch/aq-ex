import { Company } from "../../types/Company";

export default function parseData (response: any): Company {
  return {
    ...response,
    trading: {
      ...response.trading,
      Bid: parseCurrency(response.trading.Bid),
      Price: parseCurrency(response.trading.Price),
      Ask: parseCurrency(response.trading.Ask),
      Volume: parseInt(response.trading.Volume).toLocaleString('en-GB'),
      'Prior Close': parseCurrency(response.trading['Prior Close']),
      'Last Trade': new Date(response.trading['Last Trade']),
    }
  }
}

function parseCurrency (value: string): string {
  return (parseFloat(value) / 100).toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2 })
}