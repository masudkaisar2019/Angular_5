import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  names = ["Jhon", "Judy","Peter"];
  name:string = '';


  constructor() { }

  ngOnInit() {
  }
  eventFromOuter(passed:string) {
    this.name = passed;
  }

}
