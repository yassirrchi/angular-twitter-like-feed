import { Component,OnInit } from '@angular/core';
import { PicItem } from './models/pic-item.model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allpics!:PicItem[];
 

ngOnInit(): void {
  this.allpics=[{ title: "MyFirstPost",description:"me at the zoo",picUrl:"https://tourscanner.com/blog/wp-content/uploads/2021/09/fun-things-to-do-in-Marrakech.jpg",createdOn :new Date(),likes: 3},
  { title: "MyFirstPost",description:"me at the zoo",picUrl:"https://tourscanner.com/blog/wp-content/uploads/2021/09/fun-things-to-do-in-Marrakech.jpg",createdOn :new Date(),likes: 3},
  { title: "last post",description:"me laval",picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgym2npOL6SEQyQ1JT6rLXbIuy7-2KrsKmg&usqp=CAU",createdOn :new Date(),likes: 9,location:"marrakech"},
  { title: "MyFirstPost",description:"me at the zoo",picUrl:"https://tourscanner.com/blog/wp-content/uploads/2021/09/fun-things-to-do-in-Marrakech.jpg",createdOn :new Date(),likes: 3},
  { title: "MyFirstPost",description:"me at the zoo",picUrl:"https://tourscanner.com/blog/wp-content/uploads/2021/09/fun-things-to-do-in-Marrakech.jpg",createdOn :new Date(),likes: 3},
  { title: "last post",description:"me laval",picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgym2npOL6SEQyQ1JT6rLXbIuy7-2KrsKmg&usqp=CAU",createdOn :new Date(),likes: 9,location:"marrakech"}];
   
 
}
   
}
