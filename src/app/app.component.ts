import { Component, OnInit  } from '@angular/core';
import { codeBudget } from './budgets/code.budget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front End Dev Test for Training Resource Center';
  
  constructor (private codeBudget: codeBudget){}
  
  ngOnInit(): void {
    this.OnGetCodes();
  }
  OnGetCodes(): void {
    this.codeBudget.getCodes()
    .subscribe (
      (response => console.log(response)),
      (error: any) => console.log(error),
      ()=> console.log('Done getting codes')
    );
  }
}
