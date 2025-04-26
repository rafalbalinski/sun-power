import { Component, input } from '@angular/core';
import { NavigationItem } from '@navigation/interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public readonly navigationItems = input<NavigationItem[]>();
  public readonly hasNavigationBoxShadow = input<boolean>(false);
  public readonly currentFragment =
    input.required<NavigationItem['fragment']>();
}
