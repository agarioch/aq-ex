export type Company = {
  id: number,
  name: string,
  description: string,
  logo: string,
  url: string,
  socials: Socials,
  trading: Trading,
  keyInfo: KeyInfo,
}

// TODO: Type nested objects with exact properties
export type Socials = {
  [key: string]: string
};

export type Trading = {
  [key: string]: string | number | Date
};

export type KeyInfo = {
  [key: string]: string | number | Date
};