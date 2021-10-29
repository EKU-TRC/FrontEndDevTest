import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Budget } from 'src/app/Budget';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

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
  showAddBudget: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => this.showAddBudget = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert("Please enter budget name!")
      return;
    }
    if(!this.number){
      alert("Please enter budget year!")
      return;
    }
    if(!this.code){
      alert("Please enter budget code!")
      return;
    }

    const newBudget = {
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
