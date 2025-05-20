import { Component, computed, inject } from '@angular/core';
import { MalfunctionStorageService } from '@malfunction/data-access/malfunction-storage.service';
import { AccordionComponent, SectionTitleComponent } from '@shared/ui';

@Component({
  selector: 'app-malfunction',
  imports: [SectionTitleComponent, AccordionComponent],
  templateUrl: './malfunction.component.html',
  styleUrl: './malfunction.component.scss',
})
export class MalfunctionComponent {
  protected readonly malfunctionStorage = inject(MalfunctionStorageService);

  protected readonly malfunction = computed(() =>
    this.malfunctionStorage.malfunction(),
  );
}
