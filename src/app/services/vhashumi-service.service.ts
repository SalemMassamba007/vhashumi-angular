import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class  VhashumiService{

  pages = [false, false, false, false];

  showPage(index: number) {
    this.pages = [false, false, false, false];
    this.pages[index] = true;
    console.log('fired');
  }
  hidePage(index: number) {
    if (index == 20) {
      this.pages = [false, false, false, false];
    }
    this.pages[index] = false;
  }
}