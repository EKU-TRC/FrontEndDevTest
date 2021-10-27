import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../Budget'; 

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
  }


  addBudget(budget: Budget){
    console.log(budget);
  }
}
