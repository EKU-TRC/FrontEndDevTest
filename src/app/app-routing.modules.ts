import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetCodeListComponent } from './budget-code-list/budget-code-list.component';
import { PostBudgetComponent } from './post-budget/post-budget.component';


const routes: Routes = [
    { path: '', component: BudgetCodeListComponent },
    { path: 'post', component: PostBudgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
