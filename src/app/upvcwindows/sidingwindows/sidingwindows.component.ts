import { Component } from '@angular/core';

@Component({
  selector: 'app-sidingwindows',
  templateUrl: './sidingwindows.component.html',
  styleUrls: ['./sidingwindows.component.css']
})
export class SidingwindowsComponent {

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
