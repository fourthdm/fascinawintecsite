import { Component } from '@angular/core';

@Component({
  selector: 'app-colouredupvcwindows',
  templateUrl: './colouredupvcwindows.component.html',
  styleUrls: ['./colouredupvcwindows.component.css']
})
export class ColouredupvcwindowsComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
