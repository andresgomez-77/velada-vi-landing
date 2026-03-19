export interface Fighter {
  name: string;
  image?: string;
}

export interface Fight {
  id: number;
  fighter1: Fighter;
  fighter2: Fighter;
  title: string;
  isMainEvent?: boolean;
}

export const fights: Fight[] = [
  {
    id: 1,
    fighter1: { name: 'Edu Aguirre' },
    fighter2: { name: 'Gastón Edul' },
    title: 'Creadores vs Periodistas',
  },
  {
    id: 2,
    fighter1: { name: 'Fabiana Sevillano' },
    fighter2: { name: 'La Parce' },
    title: 'Latinas',
  },
  {
    id: 3,
    fighter1: { name: 'Clerss' },
    fighter2: { name: 'Natalia MX' },
    title: 'Mexicanas',
  },
  {
    id: 4,
    fighter1: { name: 'Lit Killah' },
    fighter2: { name: 'Kidd Keo' },
    title: 'Raperos',
  },
  {
    id: 5,
    fighter1: { name: 'Alondrissa' },
    fighter2: { name: 'Angie Velasco' },
    title: 'Streamers',
  },
  {
    id: 6,
    fighter1: { name: 'Gero Arias' },
    fighter2: { name: 'Viruzz' },
    title: 'Gaming',
  },
  {
    id: 7,
    fighter1: { name: 'Rivers' },
    fighter2: { name: 'Roro' },
    title: 'Creadores',
  },
  {
    id: 8,
    fighter1: { name: 'Marta Díaz' },
    fighter2: { name: 'Tati' },
    title: 'Creadoras',
  },
  {
    id: 9,
    fighter1: { name: 'Fernanfloo' },
    fighter2: { name: 'Plex' },
    title: 'YouTubers Latam',
  },
  {
    id: 10,
    fighter1: { name: 'IlloJuan' },
    fighter2: { name: 'TheGrefg' },
    title: 'MAIN EVENT',
    isMainEvent: true,
  },
];

export const eventInfo = {
  date: '25 de julio de 2026',
  time: '20:00H CET',
  location: 'Estadio de La Cartuja, Sevilla',
  ticketsSoldOut: true,
};
