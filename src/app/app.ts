import { Component, signal } from '@angular/core';
import { NavSwiper } from './nav-swiper/nav-swiper';
import { CountOnEnterDirective } from './count-on-enter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavSwiper, CountOnEnterDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vhashumi-angular');

  display: Boolean = true;

}