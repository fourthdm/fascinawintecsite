import { Component } from '@angular/core';

@Component({
  selector: 'app-casementdoor',
  templateUrl: './casementdoor.component.html',
  styleUrls: ['./casementdoor.component.css']
})
export class CasementdoorComponent {

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
