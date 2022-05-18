import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Budget {
  constructor(
    public budgetCodeId: number,
    public fiscalYear: number,
    public budgetCode: string,
    public budgetTitle: string
  ) {
  }
}

@Component({
  selector: 'app-budget-code-list',
  templateUrl: './budget-code-list.component.html',
  styleUrls: ['./budget-code-list.component.css']
})
export class BudgetCodeListComponent implements OnInit {


  budgetCodes: Budget[] = [];
  public displayedColumns = ['budgetCodeId', 'fiscalYear', 'budgetCode', 'budgetTitle']; 
  title: string = "Display Budget Codes";
  constructor(
    private httpClient: HttpClient
  ) {
    
  }

  ngOnInit(): void {
    
  }

  toggleAddTask() {
    this.getBudgetCodes();
  }

  getBudgetCodes(){
    this.httpClient.get<any>('https://uat.trc.eku.edu/budgetcodeexam/api/all').subscribe(
      response => {
        console.log(response);
        this.budgetCodes = response.data;
      }
    );
  }
}
