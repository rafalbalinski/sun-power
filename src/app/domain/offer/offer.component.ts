import { Component, inject } from '@angular/core';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title.component';
import { OfferStorageService } from '@offer/data-access/offer-storage.service';
import { OfferElementComponent } from '@offer/ui/offer-element/offer-element.component';

@Component({
  selector: 'app-offer',
  imports: [SectionTitleComponent, OfferElementComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  protected readonly offerStorage = inject(OfferStorageService);
}
