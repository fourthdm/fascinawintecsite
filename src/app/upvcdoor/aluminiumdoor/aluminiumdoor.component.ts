import { Component } from '@angular/core';

@Component({
  selector: 'app-aluminiumdoor',
  templateUrl: './aluminiumdoor.component.html',
  styleUrls: ['./aluminiumdoor.component.css']
})
export class AluminiumdoorComponent {


  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
