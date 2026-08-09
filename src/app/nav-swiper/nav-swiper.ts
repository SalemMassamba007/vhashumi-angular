import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { PageService } from '../services/page-services.service';


@Component({
  selector: 'app-nav-swiper',
  templateUrl: './nav-swiper.html',
  styleUrls: ['./nav-swiper.css'],
  imports: [],
})
export class NavSwiper implements AfterViewInit {
  constructor(public pageService: PageService) {}

  

  hidePage(index: number) {
    this.pageService.homeDisplay = true;
    this.pageService.pages[index] = false;
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper(
      document.querySelector('.mySwiper') as any,
      {
        modules: [EffectCoverflow, Pagination],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 2,
        coverflowEffect: {
          rotate: 90,
          stretch: 100,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      } as any,
    );
  }
}
