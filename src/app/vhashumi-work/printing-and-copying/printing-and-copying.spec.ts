import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingAndCopying } from './printing-and-copying';

describe('PrintingAndCopying', () => {
  let component: PrintingAndCopying;
  let fixture: ComponentFixture<PrintingAndCopying>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintingAndCopying],
    }).compileComponents();

    fixture = TestBed.createComponent(PrintingAndCopying);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
