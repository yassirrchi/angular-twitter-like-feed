import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  headerText!:string

  constructor() { }

  ngOnInit(): void {
   if(Math.random()>0.5)
    this.headerText="Twitter posts like app";
    else
    this.headerText="Reddit posts like app";
  }

}
