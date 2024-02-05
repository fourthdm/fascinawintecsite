import { Component } from '@angular/core';

@Component({
  selector: 'app-aluminiumwindows',
  templateUrl: './aluminiumwindows.component.html',
  styleUrls: ['./aluminiumwindows.component.css']
})
export class AluminiumwindowsComponent {

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
