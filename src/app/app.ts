import { Component, signal } from '@angular/core';
import { NavSwiper } from './nav-swiper/nav-swiper';
import { CountOnEnterDirective } from './count-on-enter';
import { PageService } from './app/services/page-service';
import { Services } from "./services/services";
import { Pricing } from "./pricing/pricing";
import { OurWork } from "./our-work/our-work";
import { Testimony } from "./testimony/testimony";
import { Contact } from "./contact/contact";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavSwiper, CountOnEnterDirective, Services, Pricing, OurWork, Testimony, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export default class App {
  protected readonly title = signal('vhashumi-angular');

  constructor (
      public pageService: PageService
    ) {}
    
}