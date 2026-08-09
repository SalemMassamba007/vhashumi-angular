import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAndCreative } from './professional-and-creative';

describe('ProfessionalAndCreative', () => {
  let component: ProfessionalAndCreative;
  let fixture: ComponentFixture<ProfessionalAndCreative>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalAndCreative],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessionalAndCreative);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
