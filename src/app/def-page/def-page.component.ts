import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-def-page',
  templateUrl: './def-page.component.html',
  styleUrls: ['./def-page.component.scss']
})
export class DefPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  displayPosts():void{
  this.router.navigateByUrl('posts');
  }

}
