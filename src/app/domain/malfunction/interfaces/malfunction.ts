import { Accordion } from '@shared/interfaces/accordion';

export interface Malfunction {
  title: string;
  subTitle: string;
  description: {
    header: string;
    content: string;
  };
  malfunctions: Accordion[];
}
