import { Component, OnInit  } from '@angular/core';
import { codeBudget } from './budgets/code.budget';
import { BudgetCodeId } from './model/budget-code-id';
import { BudgetTitle } from './model/budget-title';
import { FiscalYear } from './model/fiscal-year';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front End Dev Test for Training Resource Center';
  listBudgetCodeId?: BudgetCodeId[]
  budgetCodeIdSelected?: number
  listFiscalYear!: FiscalYear[]
  fiscalYearSelected!: number
  listBudgetCode!: BudgetCodeId[]
  budgetCodeSelected!: string
  listBudgetTitle!: BudgetTitle[]
  budgetTitleSelected!: string
  
  constructor (private codeBudget: codeBudget){}
  
  ngOnInit(): void {
    this.OnGetCodes();
  }
  OnGetCodes(): void {
    this.codeBudget.getCodes()
    .subscribe (
      (response => console.log(response)),
      (error: any) => console.log(error),
      ()=> console.log('Done getting codes')
    );
  }
}
