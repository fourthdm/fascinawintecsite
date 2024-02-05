import { Component } from '@angular/core';

@Component({
  selector: 'app-liftslidedoor',
  templateUrl: './liftslidedoor.component.html',
  styleUrls: ['./liftslidedoor.component.css']
})
export class LiftslidedoorComponent {


  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
