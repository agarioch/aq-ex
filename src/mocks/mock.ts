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

export const COMPANY = {
  id: 0,
  name: 'Adnams plc',
  description: "Adnams is a brewer, distiller, pub owner and retailer based in Southwold on the Suffolk coast.\n\nIt is a company defined by its values which can be summarized as \"doing things right\". It has been brewing for over 140 years and produces a range of award winning cask and bottled beers, which are available in pubs and supermarkets nationwide. The Company has unlisted 'A' Ordinary Shares and its 'B' Ordinary Shares are traded on AQSE Growth Market.",
  logo: '/assets/adnams.svg',
  url: 'www.adnams.com',
  socials: {
    facebook: 'https://www.facebook.com/adnams',
    twitter: 'https://twitter.com/adnams',
    instagram: 'https://www.instagram.com/adnams',
  },
  trading: {
    Symbol: 'ADB',
    currency: 'GBP',
    Bid: 8900,
    Ask: 9400,
    Price: 9150,
    'Prior Close': 9100,
    Volume: 1,
    'Last Trade': '2022-04-01T12:00:00Z',
  },
  keyInfo: {
    'Market Cap': '£26,154,543',
    ISIN: 'GB0000075845',
    Par: 100,
    'Instrument Type': 'B Ordinary',
    'MFID Status': 'MFT',
    'Securities in Issue': '285,842',
    Sector: 'Beverages'
  },
  contacts: {
    'Business Address': 'Adnams plc, Sole Bay Brewery, Southwold, Suffolk, IP18 6JW, United Kingdom.',
    Email: 'info@adnams.co.uk',
    Phone: '01502 727200',
    'Registered Address': 'Sole Bay Brewery, Southwold, Suffolk, IP18 6JW, United Kingdom.',
    'Corporate Adviser': 'No information',
    'Registrar': 'Link Group, 10th Floor, Central Square, 29 Wellington Street, Leeds, LS1 4DL, England.'
  },
  announcements: [
    {
      id: 0,
      date: '2022-04-01T12:00:00Z',
      title: 'Adnams PLC - Director/PDMR Shareholding',
      type: 'Officers',
      content: null
    },
    {
      id: 1,
      date: '2022-04-01T12:00:00Z',
      title: 'Adnams PLC - Interim Dividend',
      type: 'Dividend',
      content: null
    },
    {
      id: 2,
      date: '2022-04-01T12:00:00Z',
      title: 'Adnams PLC - Interim Dividend',
      type: 'Dividend',
      content: null
    },
    {
      id: 3,
      date: '2022-04-01T12:00:00Z',
      title: 'Adnams PLC - Interim Dividend',
      type: 'Dividend',
      content: null
    },
  ]
}
