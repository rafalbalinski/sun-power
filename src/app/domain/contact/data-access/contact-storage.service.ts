import { computed, Injectable, signal } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { CONTACT } from '@database/contact';

export interface ContactState {
  contact: Contact;
}

@Injectable({
  providedIn: 'root',
})
export class ContactStorageService {
  private readonly state = signal<ContactState>({
    contact: CONTACT,
  });

  public readonly contact = computed(() => this.state().contact);
}
