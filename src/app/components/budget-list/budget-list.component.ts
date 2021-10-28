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


  addBudget(budget: Budget){
    console.log(this.budgetList);
  }
}
