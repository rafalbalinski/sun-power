import { computed, Injectable, signal } from '@angular/core';
import { Malfunction } from '@malfunction/interfaces/malfunction';
import { MALFUNCTION } from '@database/malfunction';

export interface MalfunctionState {
  malfunction: Malfunction;
}

@Injectable({
  providedIn: 'root',
})
export class MalfunctionStorageService {
  private readonly state = signal<MalfunctionState>({
    malfunction: MALFUNCTION,
  });

  public readonly malfunction = computed(() => this.state().malfunction);
}
