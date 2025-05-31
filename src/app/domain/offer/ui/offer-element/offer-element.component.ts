import { Component, input } from '@angular/core';
import { Offer } from '@offer/interfaces/offer';

@Component({
  selector: 'app-offer-element',
  imports: [],
  templateUrl: './offer-element.component.html',
  styleUrl: './offer-element.component.scss',
})
export class OfferElementComponent {
  public readonly offerElement = input.required<Offer>();
}
