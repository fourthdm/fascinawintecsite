import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  contactform: FormGroup;

  constructor(private rest: RestService, private builder: FormBuilder) {
    this.contactform = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Mobileno: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required],),
      Message: new FormControl('', [Validators.required]),
    })
  }

  onsubmit(contactform: any) {
    this.rest.postmessage(contactform).subscribe((data: any) => {
      location.href = 'https://mailthis.to/confirm'
      console.log(data);
      this.contactform.reset();
    }, (error: any) => {
      console.log(error.responseText)
      console.log(error);
    })
  }

}
