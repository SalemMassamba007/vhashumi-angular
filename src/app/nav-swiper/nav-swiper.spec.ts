import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSwiper } from './nav-swiper';

describe('NavSwiper', () => {
  let component: NavSwiper;
  let fixture: ComponentFixture<NavSwiper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSwiper],
    }).compileComponents();

    fixture = TestBed.createComponent(NavSwiper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
