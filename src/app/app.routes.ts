import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnProcesoComponent } from './en-proceso/en-proceso.component';
import { VenusComponent } from './especies/venus/venus.component';
import { NepenthesComponent } from './especies/nepenthes/nepenthes.component';
import { SarraceniaComponent } from './especies/sarracenia/sarracenia.component';
import { DroserasComponent } from './especies/droseras/droseras.component';
import { TiendaComponent } from './tienda/tienda.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'error', component: EnProcesoComponent },
  { path: 'especies/venus', component: VenusComponent },
  { path: 'especies/nepenthes', component: NepenthesComponent },
  { path: 'especies/drosera', component: DroserasComponent },
  { path: 'especies/sarracenia', component: SarraceniaComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: '**', redirectTo: '' }
];
