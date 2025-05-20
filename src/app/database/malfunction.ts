import { Malfunction } from '@malfunction/interfaces/malfunction';

export const MALFUNCTION: Malfunction = {
  title: 'Typowe usterki',
  subTitle: 'Co wykrywa badanie termowizyjne?',
  description: {
    header: 'Dlaczego badanie termowizyjne jest ważne?',
    content:
      'Każdego roku w Polsce dochodzi do kilkuset pożarów związanych z instalacjami fotowoltaicznymi, głównie na skutek wadliwych połączeń, mikropęknięć czy przegrzewających się hot-spotów. Regularne badania termowizyjne pozwalają na wczesne wykrycie potencjalnych problemów, co znacząco zmniejsza ryzyko pożaru. Ponadto, wykrycie i usunięcie drobnych usterek wydłuża żywotność paneli, poprawiając ich wydajność nawet o kilkanaście procent.',
  },
  malfunctions: [
    {
      header: 'Hot-spoty',
      content:
        'Hot-spoty to przegrzewające się punkty na panelach fotowoltaicznych, które mogą prowadzić do ich uszkodzenia. Wysoka temperatura w tych miejscach może stopniowo niszczyć ogniwa, prowadząc do trwałego spadku wydajności. Długotrwałe występowanie hot-spotów może również wywołać efekt pożarowy.',
    },
    {
      header: 'Mikropęknięcia',
      content:
        'Mikropęknięcia powstają najczęściej na skutek transportu, montażu lub ekstremalnych warunków pogodowych. Na początku mogą być niewidoczne, ale z czasem prowadzą do znacznego spadku wydajności panelu. Niekontrolowane mikropęknięcia mogą rozszerzać się, powodując większe uszkodzenia i skrócenie żywotności instalacji.',
    },
    {
      header: 'Uszkodzone połączenia elektryczne',
      content:
        'Problemy z przewodzeniem prądu w panelach często wynikają z luźnych lub przepalonych połączeń. Takie usterki mogą prowadzić do spadków napięcia oraz wzrostu temperatury, co dodatkowo przyspiesza degradację systemu fotowoltaicznego. Regularne badania termowizyjne pozwalają na ich wykrycie i naprawę zanim spowodują większe straty.',
    },
    {
      header: 'Ślimacze ścieżki',
      content:
        'Ślimacze ścieżki to niewłaściwie wykonane ścieżki elektryczne w panelach fotowoltaicznych, które mogą powodować nieprawidłową pracę systemu i zmniejszyć jego wydajność.',
    },
    {
      header: 'Uszkodzenia powstałe w wyniku działania zjawisk atmosferycznych',
      content:
        'Zjawiska atmosferyczne, takie jak grad, deszcz, a także zmienne temperatury mogą powodować powstawanie pęknięć i uszkodzeń w panelach. Badanie termowizyjne pozwala szybko wykryć takie uszkodzenia, zapobiegając ich rozwojowi.',
    },
  ],
};
