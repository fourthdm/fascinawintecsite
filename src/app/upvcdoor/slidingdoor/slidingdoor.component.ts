import { Component } from '@angular/core';

@Component({
  selector: 'app-slidingdoor',
  templateUrl: './slidingdoor.component.html',
  styleUrls: ['./slidingdoor.component.css']
})
export class SlidingdoorComponent {

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
