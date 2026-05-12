export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Protfolio' },
  { id: 'products', label: 'Products' }
];

/** Section IDs rendered on `/art` (portfolio categories only). */
export const ART_SECTION_IDS = [
  'illustrative',
  'ceramic',
  'painting',
  'photography',
  'typography'
];

export const SECTION_IDS = NAV_LINKS.map(link => link.id);

