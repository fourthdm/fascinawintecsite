import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  experiencecount: number = 0;
  estop: any = setInterval(() => {
    this.experiencecount++;

    if (this.experiencecount == 1089) {
      clearInterval(this.estop);
    }
  }, 0.1);

  clients: number = 0;
  clientstop: any = setInterval(() => {
    this.clients++;
    if (this.clients == 205) {
      clearInterval(this.clientstop);
    }
  }, 0.1);

  work: number = 0;
  workstop: any = setInterval(() => {
    this.work++;
    if (this.work == 731) {
      clearInterval(this.workstop);
    }
  }, 0.1);

  c = 0;
  counts(from: any, to: any) {
    const cs = setInterval(() => {
      this.c++;
      if (from >= to) {
        clearInterval(cs);
      }
    }, 30);
  }

  hclient: number = 0;
  hclientstop: any = setInterval(() => {
    this.hclient++;
    if (this.hclient == 1250) {
      clearInterval(this.hclientstop);
    }
  }, 0);



}
