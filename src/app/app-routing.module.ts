import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefPageComponent } from "./def-page/def-page.component";
import { PicListComponent } from "./pic-list/pic-list.component";
const routes:Routes=[{path:"posts",component:PicListComponent},
{path:"",component:DefPageComponent}];

@NgModule(  {
    imports:[RouterModule.forRoot(routes)]
    ,
    exports:[RouterModule]
   })

export class AppRoutingModule{}