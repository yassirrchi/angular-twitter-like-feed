import { Injectable } from "@angular/core";
import { PicItem } from "../models/pic-item.model";

@Injectable({providedIn:"root"})
export class PicsService{
posts:PicItem[]=[{id:1, title: "me at the zoo",description:"thats the first ever video uploaded to youtube by jawed, by the way he's the co-founder of youtube",picUrl:"https://images.livemint.com/img/2020/04/23/1600x900/youtube_1587665448629_1587665448994.JPG",createdOn :new Date(),likes: 3},
{ id:2, title: "You gotta try this experience guys!!",description:"took this image in the region of Imlil, few miles away of Marrakech ,i spent 3 days with my family here, cant describe how flavourful the food is, now im heading to Agafay   ",picUrl:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/184620798.jpg?k=581f3baeca0ad0bc0b94dfa633674ad84b93c79da28dd38fca09f02b04afea27&o=&hp=1",createdOn :new Date(),likes: 3},
{id:3,  title: "Can someone help me recover my Oracle Database?",description:"yesterday i was cleaning my harddrive with BitDEFENDER, and it autoselected my db controlfiles and datafiles as junkfiles to be deleted, and i didnt pay attention.",picUrl:"https://i.stack.imgur.com/ouE72.png",createdOn :new Date(),likes: 9,location:"marrakech"},
{ id:4, title: "I quit crypto!",description:"Most of you have heard about Luna or Terra, well i lost 99% of my money because i and the crypto community trusted this project blindly, im lucky that i didnt invested a huge amount but this taught me a lesson , I mean an EXPENSIVE one😂",picUrl:"https://btcacademy.online/wp-content/uploads/2022/05/terra-luna.jpeg",createdOn :new Date(),likes: 3},
{ id:5, title: "the hell is this?",description:"found this thing in the rockpool, it looks like a slug but its bigger🤔.",picUrl:"https://www.therockpoolproject.co.uk/wp-content/uploads/2021/04/Sea-Hare-n.small_.jpg",createdOn :new Date(),likes: 3},
{ id:6, title: "English language is GERMANIC!",description:"last week i stumbled upon an english text from 13th century it it sounded like dutch, swedish... i did a little research then found out that english belongs to germanic language family, now i know why some regions in uk have a difficult english or an english with a weird accent like the english spoken in Liverpool,Glassgow...",picUrl:"https://i.ytimg.com/vi/RLJGTYkEKLI/hqdefault.jpg",createdOn :new Date(),likes: 9,location:"marrakech"}];
 
getPosts():PicItem[]{
    return this.posts;
}
 

getPostById(id:number):PicItem{
    const post=this.posts.find(p=>p.id===id);
    if(post)
    return post;
    else
    throw new Error("this post might be deleted by the author");
     
}
postLikeButton(id:number,liked:'yes'|'no'):void{
const post=this.getPostById(id);
liked==='yes'?post.likes++:post.likes--;


}
}