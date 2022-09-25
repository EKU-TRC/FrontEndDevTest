import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodesComponent } from './component/codes/codes.component';

const routes: Routes = [
  { path: 'codes', component: CodesComponent },
  { path: '**', redirectTo: 'codes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
