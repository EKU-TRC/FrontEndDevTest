import { Component } from '@angular/core';
import { BudgetCode } from '../budget-code';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-get-budget',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './get-budget.component.html',
  styleUrl: './get-budget.component.scss'
})
export class GetBudgetComponent {



  budgetCodeList: BudgetCode[] = [{

    budgetCodeId: '1',
    fiscalYear: '2022',
    budgetCode: 'AAA',
    budgetTitle: 'Title'

  }, {
    budgetCodeId: '2',
    fiscalYear: '2022',
    budgetCode: 'AAA',
    budgetTitle: 'Title'
  }

];

displayedColumns: string[] = ['budgetCodeId', 'fiscalYear', 'budgetCode', 'budgetTitle'];


}
