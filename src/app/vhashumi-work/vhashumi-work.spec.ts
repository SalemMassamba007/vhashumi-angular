import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhashumiWork } from './vhashumi-work';

describe('VhashumiWork', () => {
  let component: VhashumiWork;
  let fixture: ComponentFixture<VhashumiWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VhashumiWork],
    }).compileComponents();

    fixture = TestBed.createComponent(VhashumiWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
