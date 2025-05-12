import { Component, computed, inject } from '@angular/core';
import { ContactStorageService } from '@contact/data-access/contact-storage.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly contactStorage = inject(ContactStorageService);

  protected readonly contact = computed(() => this.contactStorage.contact());
}
