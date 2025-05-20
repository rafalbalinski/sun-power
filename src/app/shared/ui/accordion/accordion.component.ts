import { Component, input } from '@angular/core';
import { Accordion } from '../../interfaces/accordion';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  public readonly accordions = input.required<Accordion[]>();

  protected activeIndexes: number[] = [];

  protected toggleAccordion(index: number) {
    if (this.activeIndexes.includes(index)) {
      this.activeIndexes = this.activeIndexes.filter(
        (activeIndex) => activeIndex !== index,
      );
      return;
    }

    this.activeIndexes.push(index);
  }
}
