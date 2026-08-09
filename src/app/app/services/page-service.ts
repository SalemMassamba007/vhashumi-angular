import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class PageService {
    showPages = 
    [false,
    false,
    false,
    false,
    false]
  ;
display: boolean = true;
  displayServices = this.showPages[2];
  displayPricing = this.showPages[3];
  displayOurWork = this.showPages[1];
  displayTestimonials = this.showPages[0];
  displayContact = this.showPages[4];
}
