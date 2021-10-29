import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { apiResponse, Budget } from '../../Budget'; 

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  response: apiResponse;
  budgetList: Budget[];



  constructor(private budgetService: BudgetService) { }

  /**When list is loaded retrieve all budgets from budgetList*/
  ngOnInit(): void {
    this.budgetService.getBudgets()
    .subscribe
    (
      data=>
      {
        this.response = data
        this.budgetList= this.response.data
      }
    )
  }

  /** Requests and subscribes to budget service to add budget*/
  addBudget(budget: Budget){
    this.budgetService.addBudget(budget).subscribe((budget) => (this.budgetList.push(budget)));
  }
  

  
}
