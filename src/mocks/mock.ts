import { Company } from "../types/Company";

export const PAGES = [
  'About',
  'Exchange',
  'Stock Exchange',
  'Technologies',
  'Investors',
  'News',
  'Contact',
];

const rootUrl = 'https://www.aquis.eu/';
export const PATH = [
  {name: 'Stock Exchange', path: `${rootUrl}/aquis-stock-exchange`, pageId: 0}, 
  {name: 'Investors', path: `${rootUrl}/aquis-stock-exchange/for-investors`, pageId: 1}, 
  {name: 'Companies', path: `${rootUrl}/aquis-stock-exchange/companies-and-prices`, pageId: 2}, 
  {name: 'Adnams', path: `#`, pageId: 3},
]

export const COMPANY: Company = {
  id: 0,
  name: 'Adnams plc',
  description: "Adnams is a brewer, distiller, pub owner and retailer based in Southwold on the Suffolk coast.\nIt is a company defined by its values which can be summarized as \"doing things right\". It has been brewing for over 140 years and produces a range of award winning cask and bottled beers, which are available in pubs and supermarkets nationwide. The Company has unlisted 'A' Ordinary Shares and its 'B' Ordinary Shares are traded on AQSE Growth Market.",
  logo: 'https://www.aquis.eu/wp-content/uploads/2019/05/adnams-logo.png',
  url: 'www.adnams.com',
}