import { Routes, RouterModule } from '@angular/router';

import {GenderComponent} from './gender/gender.component';
import {NameComponent} from './name/name.component';

const routes: Routes = [
  {path: 'about/name', component: NameComponent, outlet: 'about'},
  {path: 'about/gender', component: GenderComponent, outlet: 'about'},
];

export const AboutRoutes = RouterModule.forChild(routes);
