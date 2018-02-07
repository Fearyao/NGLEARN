import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {GenderComponent} from './gender/gender.component';
import { AboutRoutes } from './about.routing';
import { NameComponent } from './name/name.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutes,
  ],
  declarations: [
    AboutComponent,
    GenderComponent,
    NameComponent,
  ]
})
export class AboutModule {}
