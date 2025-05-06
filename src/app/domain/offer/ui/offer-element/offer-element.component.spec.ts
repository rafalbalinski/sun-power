import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferElementComponent } from './offer-element.component';

describe(OfferElementComponent.name, () => {
  let component: OfferElementComponent;
  let fixture: ComponentFixture<OfferElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
