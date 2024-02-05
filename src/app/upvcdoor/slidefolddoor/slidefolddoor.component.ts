import { Component } from '@angular/core';

@Component({
  selector: 'app-slidefolddoor',
  templateUrl: './slidefolddoor.component.html',
  styleUrls: ['./slidefolddoor.component.css']
})
export class SlidefolddoorComponent {
  
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
