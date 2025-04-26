import { Component, inject } from '@angular/core';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NavigationStorageService } from '@navigation/data-access/navigation-storage.service';

@Component({
  selector: 'app-navigation',
  imports: [NavbarComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  protected readonly navigationStorage = inject(NavigationStorageService);
}
