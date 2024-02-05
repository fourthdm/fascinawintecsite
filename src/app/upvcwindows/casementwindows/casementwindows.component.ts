import { Component } from '@angular/core';

@Component({
  selector: 'app-casementwindows',
  templateUrl: './casementwindows.component.html',
  styleUrls: ['./casementwindows.component.css']
})
export class CasementwindowsComponent {

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
