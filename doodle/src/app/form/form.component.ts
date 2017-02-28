import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public attrNumber: number;
  public attributes: any[];

  constructor() {
  }

  ngOnInit() {
    this.attrNumber = 0;
  }

  public onSubmit(f: NgForm) {
    this.attrNumber = f.value;
    console.log(this.attrNumber.valueOf());
    // for (let i = 0; i <= this.attrNumber; i++) {
    //   this.attributes[i] = '';
    // }
    // console.log(this.attributes);
  }
}
