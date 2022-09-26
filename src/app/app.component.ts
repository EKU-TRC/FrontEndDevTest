import { Component, OnInit  } from '@angular/core';
import { Code } from './interface/code.interface';
import { codeService } from './services/code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front End Dev Test for Training Resource Center';
  onNewBudgetCreate(newBudgets: {fiscalYear: number, budgetTitle: string}){

  }
  constructor (private codeService: codeService){}
  ngOnInit(): void {
    this.OnGetCodes();
  }

  OnGetCodes(): void {
    this.codeService.getCodes()
    .subscribe (
      ((response: any) => console.table(response)),
      (error: any) => console.log(error),
      ()=> console.log('Done getting codes')
    );
  }
}

