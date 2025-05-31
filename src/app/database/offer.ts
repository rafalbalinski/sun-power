import { Offer } from '@offer/interfaces/offer';

export const OFFER: Offer[] = [
  {
    title: 'Badanie (do 10 paneli)',
    description:
      'Kompleksowa diagnostyk małej instalacji fotowoltaicznej od 1 do 10 paneli',
    price: '500,00 zł',
    icon: 'solar-panel-inspection.png',
  },
  {
    title: 'Badanie (11–30 paneli)',
    description:
      'Kompleksowa diagnostyk instalacji fotowoltaicznej od 11 do 30 paneli',
    price: '700,00 zł',
    selected: true,
    icon: 'solar-panel-inspection.png',
  },
  {
    title: 'Badanie (powyżej 30 paneli)',
    description:
      'Kompleksowa diagnostyk instalacji fotowoltaicznej od 11 do 30 paneli',
    price: 'wycena indywidualna',
    icon: 'solar-panel-inspection.png',
  },
  {
    title: 'Przegląd po burzy',
    description:
      'Kontrola uszkodzeń po burzach, gradobiciu lub innych ekstremalnych warunkach pogodowych – szybka ocena stanu technicznego',
    price: '550,00 zł',
    icon: 'solar-panel-lightning.png',
  },
];
