import { Component,Input,OnInit    } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PicItem } from '../models/pic-item.model';
import { PicsService } from '../services/pics.service';

@Component({
  selector: 'app-pic-detail',
  templateUrl: './pic-detail.component.html',
  styleUrls: ['./pic-detail.component.scss']
})
export class PicDetailComponent implements OnInit {
 picItemIn!:PicItem
title!:string;
description!:string;
createdOn!:Date;
likes!:number;
picUrl!:string;
isLiked!:boolean;
buttonText!:string;

   constructor(private picsservice:PicsService,private route:ActivatedRoute){}

  ngOnInit(): void {
     
    this.buttonText="Like";
    this.isLiked=false;
    const postId=+this.route.snapshot.params["id"];
    this.picItemIn=this.picsservice.getPostById(postId);
     
    

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
