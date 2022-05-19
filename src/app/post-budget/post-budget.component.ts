import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-budget',
  templateUrl: './post-budget.component.html',
  styleUrls: ['./post-budget.component.css']
})
export class PostBudgetComponent implements OnInit {
  fiscalYear!: number;
  budgetCode!: string;
  budgetTitle!: string;
  result!: string;

  title: string = "Post New Budget";
  

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  
  //function for submitting budget information
  submitCode() {
    let url = 'https://uat.trc.eku.edu/budgetcodeexam/api/add';
    this.httpClient.post(url, {fiscalYear:this.fiscalYear, budgetCode:this.budgetCode, budgetTitle:this.budgetTitle}).toPromise().then((data:any) => {
      console.log(data);
      this.result = JSON.stringify(data.results+". "+data.message);
      this.result = this.result.replace(/^"(.+)"$/,'$1');
    })
      
    
  }

}
