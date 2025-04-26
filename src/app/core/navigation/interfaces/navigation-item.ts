export interface NavigationItem {
  name: string;
  path: string[];
  fragment: 'home' | 'about-us' | 'offer' | 'pricing';
}
