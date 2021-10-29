import { Component, Input, OnInit } from '@angular/core';
import { Budget } from 'src/app/Budget';
@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
/** Component that takes a Budget as input and displays each budgets attributes*/
export class BudgetItemComponent implements OnInit {
  @Input() budget: Budget;

  constructor() { }

  ngOnInit(): void {
  }

}
