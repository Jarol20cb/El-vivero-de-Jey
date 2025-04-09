import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnProcesoComponent } from './en-proceso/en-proceso.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'plantas/:nombre', component: EnProcesoComponent }, 
  { path: '**', redirectTo: '' }
];
