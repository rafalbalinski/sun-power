import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NavigationStorageService } from '@navigation/data-access/navigation-storage.service';
import { SidebarComponent } from '@navigation/ui/sidebar/sidebar.component';

@Component({
  selector: 'app-navigation',
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  protected readonly navigationStorage = inject(NavigationStorageService);

  protected readonly isSidebarActive = signal(false);
}
