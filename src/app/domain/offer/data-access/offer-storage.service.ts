import { computed, Injectable, signal } from '@angular/core';
import { Offer } from '@offer/interfaces/offer';
import { OFFER } from '@database/offer';

export interface OfferState {
  offer: Offer[];
}

@Injectable({
  providedIn: 'root',
})
export class OfferStorageService {
  private readonly state = signal<OfferState>({
    offer: OFFER,
  });

  public readonly offer = computed(() => this.state().offer);
}
