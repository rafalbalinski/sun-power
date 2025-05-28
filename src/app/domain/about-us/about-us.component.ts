import { Component, computed, inject } from '@angular/core';
import { AboutUsStorageService } from '@about-us/data-access/about-us-storage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  protected readonly aboutUsStorage = inject(AboutUsStorageService);

  protected readonly aboutUs = computed(() => this.aboutUsStorage.aboutUs());
}
