import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBudgetComponent } from './component/add-budget/add-budget.component';
import { CodesComponent } from './component/codes/codes.component';

const routes: Routes = [
  { path: 'codes', component: CodesComponent },
  { path: 'add-budget', component: AddBudgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
