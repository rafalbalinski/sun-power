import { Component } from '@angular/core';
import { NavigationComponent } from '@navigation/navigation.component';
import { OfferComponent } from '@offer/offer.component';
import { ContactComponent } from '@contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, OfferComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
