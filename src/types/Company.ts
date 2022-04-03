export type Company = {
  id: number,
  name: string,
  description: string,
  logo: string,
  url: string,
  socials: Socials,
  trading: Trading,
  tradingInfo: TradingInfo,
  keyInfo: KeyInfo,
  contacts: Contacts,
}

// TODO: Type nested objects with exact properties
export type Socials = {
  [key: string]: string
};

export type Trading = {
  Symbol: string;
  currency: string;
  Bid: number;
  Ask: number;
  Price: number;
  'Prior Close': number;
  Volume: number;
  'Last Trade': string;
};

export type TradingInfo = {
  Price: string;
  'Bid / Ask': string;
  Volume: number;
  'Prior Close': string;
  'Last Trade': Date;
};
// TODO: Type nested objects with exact properties
export type KeyInfo = {
  [key: string]: string | number | Date;
};
// TODO: Type nested objects with exact properties
export type Contacts = {
  [key: string]: string;
}