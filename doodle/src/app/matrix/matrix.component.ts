import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  public objects: any;
  public attributes: any;

  constructor(private service$: HttpService) { }

  ngOnInit() {
    this.service$.fetchResponse().subscribe(data => {
      console.log(data);
      this.attributes = data.attributes;
      this.objects = data.objects;
    });
  }
}
