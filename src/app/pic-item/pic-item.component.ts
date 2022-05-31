import { Component,Input,OnInit    } from '@angular/core';
import { PicItem } from '../models/pic-item.model';
import { PicsService } from '../services/pics.service';

@Component({
  selector: 'app-pic-item',
  templateUrl: './pic-item.component.html',
  styleUrls: ['./pic-item.component.scss']
})
export class PicItemComponent implements OnInit {
@Input() picItemIn!:PicItem
title!:string;
description!:string;
createdOn!:Date;
likes!:number;
picUrl!:string;
isLiked!:boolean;
buttonText!:string;

   constructor(private picsservice:PicsService){}

  ngOnInit(): void {
     
    this.buttonText="Like";
    this.isLiked=false;
     
    

  }
  liked():void{
    this.isLiked=!this.isLiked;
    
    if(!this.isLiked){
     
     this.buttonText="Like";
      this.picsservice.postLikeButton(this.picItemIn.id,"no");
      
    }
     
     else{
     this.picsservice.postLikeButton(this.picItemIn.id,"yes")
     this.buttonText="unLike";}

  }

}
