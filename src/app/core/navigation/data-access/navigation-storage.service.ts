import { computed, Injectable, signal } from '@angular/core';
import { NavigationItem } from '@navigation/interfaces';
import {
  fromEvent,
  map,
  merge,
  Observable,
  shareReplay,
  startWith,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NAVIGATION_ITEMS } from '@database/navigation-items';

export interface NavigationState {
  navigationItems: NavigationItem[];
  hasNavigationBoxShadow: boolean;
  currentFragment: NavigationItem['fragment'];
}

@Injectable({
  providedIn: 'root',
})
export class NavigationStorageService {
  private readonly state = signal<NavigationState>({
    navigationItems: NAVIGATION_ITEMS,
    hasNavigationBoxShadow: false,
    currentFragment: 'about-us',
  });

  public readonly navigationItems = computed(
    () => this.state().navigationItems,
  );
  public readonly hasNavigationBoxShadow = computed(
    () => this.state().hasNavigationBoxShadow,
  );
  public readonly currentFragment = computed(
    () => this.state().currentFragment,
  );

  private scroll$: Observable<Event> = fromEvent(document, 'scroll').pipe(
    shareReplay(1),
  );

  private hasNavigationBoxShadow$: Observable<boolean> = this.scroll$.pipe(
    startWith(document),
    map(() => document.documentElement.scrollTop !== 0),
  );

  private fragmentChanged$: Observable<NavigationItem['fragment']> =
    this.scroll$.pipe(
      map(() => {
        const fragments: NavigationItem['fragment'][] = [
          'about-us',
          'offer',
          'contact',
          'malfunction',
        ];
        const fragmentsPositions: number[] = fragments.map((fragment: string) =>
          Math.abs(
            document.getElementById(fragment)!.getBoundingClientRect().top ?? 0,
          ),
        );
        const currentFragmentIndex: number = fragmentsPositions.findIndex(
          (index: number) => index === Math.min(...fragmentsPositions),
        );

        return fragments[currentFragmentIndex];
      }),
    );

  constructor() {
    merge(
      this.hasNavigationBoxShadow$.pipe(
        map((hasNavigationBoxShadow: boolean) => ({ hasNavigationBoxShadow })),
      ),
      this.fragmentChanged$.pipe(
        map((currentFragment: NavigationItem['fragment']) => ({
          currentFragment,
        })),
      ),
    )
      .pipe(takeUntilDestroyed())
      .subscribe((newState) =>
        this.state.update((state) => ({ ...state, ...newState })),
      );
  }
}
