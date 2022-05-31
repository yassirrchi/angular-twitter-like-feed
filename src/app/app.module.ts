import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PicItemComponent } from './pic-item/pic-item.component';
import { PicListComponent } from './pic-list/pic-list.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppRoutingModule } from './app-routing.module';
import { DefPageComponent } from './def-page/def-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PicItemComponent,
    PicListComponent,
    AppHeaderComponent,
    DefPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
