import { Component, OnInit } from '@angular/core';
import { PicItem } from '../models/pic-item.model';
import { PicsService } from '../services/pics.service';
@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.scss']
})
export class PicListComponent implements OnInit {
  allpics!:PicItem[];
   
constructor(private pics:PicsService){}
  ngOnInit(): void {
    this.allpics= this.pics.getPosts();
  }

}
