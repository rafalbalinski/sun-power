import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  public readonly title = input.required<string>();
  public readonly subTitle = input<string>();
  public readonly hasShadowTitle = input<boolean>(false);
}
