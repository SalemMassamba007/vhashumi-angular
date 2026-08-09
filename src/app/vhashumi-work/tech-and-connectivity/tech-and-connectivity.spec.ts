import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAndConnectivity } from './tech-and-connectivity';

describe('TechAndConnectivity', () => {
  let component: TechAndConnectivity;
  let fixture: ComponentFixture<TechAndConnectivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechAndConnectivity],
    }).compileComponents();

    fixture = TestBed.createComponent(TechAndConnectivity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
