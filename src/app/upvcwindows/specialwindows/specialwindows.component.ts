import { Component } from '@angular/core';

@Component({
  selector: 'app-specialwindows',
  templateUrl: './specialwindows.component.html',
  styleUrls: ['./specialwindows.component.css']
})
export class SpecialwindowsComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
