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
  search!: string;


  budgetCodes: Budget[] = [];
  public displayedColumns = ['budgetCodeId', 'fiscalYear', 'budgetCode', 'budgetTitle']; 
  title: string = "Display Budget Codes";
  result!: string;
  constructor(
    private httpClient: HttpClient
  ) {
    
  }

  ngOnInit(): void {
    
  }

  getBudgetCodes(){
    this.httpClient.get<any>('https://uat.trc.eku.edu/budgetcodeexam/api/all').subscribe(
      response => {
        console.log(response);
        this.budgetCodes = response.data;
        this.result = JSON.stringify(response.results+". "+response.message);
        this.result = this.result.replace(/^"(.+)"$/,'$1');
      }
    );
  }

  searchByID(){
    const param = (<HTMLInputElement>document.getElementById('search')).value;
    this.httpClient.get<any>('https://uat.trc.eku.edu/budgetcodeexam/api/id/'+param).subscribe(
      response => {
        console.log(response);
        this.budgetCodes.push(response.data);
        this.budgetCodes = [...this.budgetCodes];
        this.result = JSON.stringify(response.results);
        this.result = this.result.replace(/^"(.+)"$/,'$1');
        console.log(this.budgetCodes);
      }
    );
  }

  searchByYear(){
    const param = (<HTMLInputElement>document.getElementById('search')).value;
    this.httpClient.get<any>('https://uat.trc.eku.edu/budgetcodeexam/api/year/'+param).subscribe(
      response => {
        console.log(response);
        this.budgetCodes = response.data;
        this.result = JSON.stringify(response.results);
        this.result = this.result.replace(/^"(.+)"$/,'$1');
      }
    );
  }

  searchByCode(){
    const param = (<HTMLInputElement>document.getElementById('search')).value;
    this.httpClient.get<any>('https://uat.trc.eku.edu/budgetcodeexam/api/code/'+param).subscribe(
      response => {
        console.log(response);
        this.budgetCodes = response.data;
        this.result = JSON.stringify(response.results);
        this.result = this.result.replace(/^"(.+)"$/,'$1');
        console.log(this.budgetCodes);
      }
    );
  }
}
