import { Component, inject } from '@angular/core';
import { FooterStorageService } from '@footer/data-access/footer-storage.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected footerStorage = inject(FooterStorageService);

  protected readonly currentYear: number = new Date().getFullYear();
}
