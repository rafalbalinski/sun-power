import { computed, Injectable, signal } from '@angular/core';
import { AboutUs } from '../interfaces/about-us';
import { ABOUT_US } from '@database/about-us';

export interface AboutUsState {
  aboutUs: AboutUs;
}

@Injectable({
  providedIn: 'root',
})
export class AboutUsStorageService {
  private readonly state = signal<AboutUsState>({
    aboutUs: ABOUT_US,
  });

  public readonly aboutUs = computed(() => this.state().aboutUs);
}
