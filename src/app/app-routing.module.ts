import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefPageComponent } from "./def-page/def-page.component";
import { PicDetailComponent } from "./pic-detail/pic-detail.component";
import { PicListComponent } from "./pic-list/pic-list.component";
const routes:Routes=[{path:"posts",component:PicListComponent},
{path:"",component:DefPageComponent},
{path:"posts/:id",component:PicDetailComponent}];

@NgModule(  {
    imports:[RouterModule.forRoot(routes)]
    ,
    exports:[RouterModule]
   })

export class AppRoutingModule{}