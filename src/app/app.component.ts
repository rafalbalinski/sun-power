import { Component } from '@angular/core';
import { NavigationComponent } from '@navigation/navigation.component';
import { OfferComponent } from '@offer/offer.component';
import { ContactComponent } from '@contact/contact.component';
import { MalfunctionComponent } from '@malfunction/malfunction.component';
import { FooterComponent } from '@footer/footer.component';
import { AboutUsComponent } from '@about-us/about-us.component';

@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    OfferComponent,
    ContactComponent,
    MalfunctionComponent,
    FooterComponent,
    AboutUsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
