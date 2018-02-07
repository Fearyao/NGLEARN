import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import {HomeModule} from '../pages/home/home.module';
import {MineModule} from '../pages/mine/mine.module';
import { AboutModule } from '../pages/about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HomeModule,
    MineModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
