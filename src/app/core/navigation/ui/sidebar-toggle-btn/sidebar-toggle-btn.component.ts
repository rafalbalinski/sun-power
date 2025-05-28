import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar-toggle-btn',
  imports: [],
  templateUrl: './sidebar-toggle-btn.component.html',
  styleUrl: './sidebar-toggle-btn.component.scss',
})
export class SidebarToggleBtnComponent {
  public readonly isSidebarActive = input.required<boolean>();

  public readonly toggleSidebar = output<boolean>();
}
