import {Routes, RouterModule} from '@angular/router';

// pages
import {HomeComponent} from '../pages/home/home.component';
import {MineComponent} from '../pages/mine/mine.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../pages/about/about.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'mine',
    component: MineComponent
  }, {
    path: 'about',
    component: AboutComponent,
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
