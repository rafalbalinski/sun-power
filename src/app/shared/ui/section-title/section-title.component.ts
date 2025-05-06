import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-section-title',
  imports: [NgClass],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  public readonly align = input<'left' | 'center' | 'right'>('center');
  public readonly title = input.required<string>();
  public readonly subTitle = input<string>();
  public readonly hasShadowTitle = input<boolean>(false);
}
