import { Component, OnInit, signal } from '@angular/core';
import { NavSwiper } from './nav-swiper/nav-swiper';
import { CountOnEnterDirective } from './count-on-enter';
import { Pricing } from "./pricing/pricing";
import { OurWork } from "./our-work/our-work";
import { Testimony } from "./testimony/testimony";
import { Contact } from "./contact/contact";
import { PageService } from './services/page-services.service';
import { VhashumiWork } from "./vhashumi-work/vhashumi-work";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavSwiper,CountOnEnterDirective, Pricing, OurWork, Testimony, Contact, VhashumiWork],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export default class App{
  protected readonly title = signal('vhashumi-angular');

  constructor(
    public pageService: PageService
  ){}
}