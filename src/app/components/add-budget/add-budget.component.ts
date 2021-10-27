import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Budget } from 'src/app/Budget';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent implements OnInit {
  @Output() onAddBudget: EventEmitter<Budget> = new EventEmitter();
  text: string;
  number: number;
  code: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert("Please enter budget name!")
    }

    const newBudget = {
    budgetCodeId: 0,
    fiscalYear: this.number,
    budgetCode: this.code,
    budgetTitle: this.text
    }

    this.onAddBudget.emit(newBudget);

    this.text = '';
    this.number = 0;
    this.code = '';
  }
}
