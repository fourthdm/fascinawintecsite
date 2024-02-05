import { Component } from '@angular/core';

@Component({
  selector: 'app-tophungwindows',
  templateUrl: './tophungwindows.component.html',
  styleUrls: ['./tophungwindows.component.css']
})
export class TophungwindowsComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
