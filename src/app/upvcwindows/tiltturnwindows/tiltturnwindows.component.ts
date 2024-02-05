import { Component } from '@angular/core';

@Component({
  selector: 'app-tiltturnwindows',
  templateUrl: './tiltturnwindows.component.html',
  styleUrls: ['./tiltturnwindows.component.css']
})
export class TiltturnwindowsComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
