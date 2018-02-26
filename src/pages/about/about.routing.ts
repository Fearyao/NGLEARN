import { Routes, RouterModule } from '@angular/router';

import {GenderComponent} from './gender/gender.component';
import {NameComponent} from './name/name.component';

const routes: Routes = [
  {path: '', component: NameComponent},
  {path: 'about/name', component: NameComponent},
  {path: 'about/gender', component: GenderComponent},
];

export const AboutRoutes = RouterModule.forChild(routes);
