import { Component } from '@angular/core';
import { NavigationComponent } from '@navigation/navigation.component';
import { OfferComponent } from '@offer/offer.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, OfferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
