import { Component, input, output } from '@angular/core';
import { NavigationItem } from '@navigation/interfaces';
import { RouterLink } from '@angular/router';
import { SidebarToggleBtnComponent } from '@navigation/ui/sidebar-toggle-btn/sidebar-toggle-btn.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, SidebarToggleBtnComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public readonly navigationItems = input<NavigationItem[]>();
  public readonly hasNavigationBoxShadow = input<boolean>(false);
  public readonly currentFragment =
    input.required<NavigationItem['fragment']>();
  public readonly isSidebarActive = input.required<boolean>();

  public readonly toggleSidebar = output<boolean>();
}
