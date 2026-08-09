import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentProcessing } from './document-processing';

describe('DocumentProcessing', () => {
  let component: DocumentProcessing;
  let fixture: ComponentFixture<DocumentProcessing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentProcessing],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentProcessing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
