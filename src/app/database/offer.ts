import { Offer } from '@offer/interfaces/offer';

export const OFFER: Offer[] = [
  {
    title: 'Badanie (1–10 paneli)',
    description:
      'Kompleksowa diagnostyk małej instalacji fotowoltaicznej od 1 do 10 paneli',
    price: 300,
    icon: 'solar-panel-inspection.png',
  },
  {
    title: 'Badanie (11–30 paneli)',
    description:
      'Kompleksowa diagnostyk instalacji fotowoltaicznej od 11 do 30 paneli',
    price: 500,
    selected: true,
    icon: 'solar-panel-inspection.png',
  },
  {
    title: 'Przegląd po burzy',
    description:
      'Kontrola uszkodzeń po burzach, gradobiciu lub innych ekstremalnych warunkach pogodowych – szybka ocena stanu technicznego',
    price: 350,
    icon: 'solar-panel-lightning.png',
  },
];
