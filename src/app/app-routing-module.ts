import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Fishinos } from './pages/fishinos/fishinos';
import {Home} from './pages/home/home';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'Fish-inos',
    component: Fishinos
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
