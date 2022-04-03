export default function parseCurrency (value: string | number, Ccy: string): string {
  const amount = typeof value === 'string' ? parseFloat(value) : value;
  return (amount/ 100).toLocaleString('en-GB', { style: 'currency', currency: Ccy, minimumFractionDigits: 2 })
}