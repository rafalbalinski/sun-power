import { computed, Injectable, signal } from '@angular/core';
import { FooterShortcut } from '@footer/interfaces';
import { FOOTER_SHORTCUTS } from '@database/footer-shortcuts';

export interface FooterState {
  footerShortcuts: FooterShortcut[];
}

@Injectable({
  providedIn: 'root',
})
export class FooterStorageService {
  private readonly state = signal<FooterState>({
    footerShortcuts: FOOTER_SHORTCUTS,
  });

  public readonly footerShortcuts = computed(
    () => this.state().footerShortcuts,
  );
}
