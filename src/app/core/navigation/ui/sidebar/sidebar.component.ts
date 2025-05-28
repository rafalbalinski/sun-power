import { Component, input, output } from '@angular/core';
import { NavigationItem } from '@navigation/interfaces';
import { RouterLink } from '@angular/router';
import { SidebarToggleBtnComponent } from '@navigation/ui/sidebar-toggle-btn/sidebar-toggle-btn.component';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, SidebarToggleBtnComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public readonly isSidebarActive = input.required<boolean>();
  public readonly navigationItems = input<NavigationItem[]>();

  public readonly closeSidebar = output<void>();
}
