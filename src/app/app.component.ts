import { Component, OnInit  } from '@angular/core';
import { Code } from './interface/code.interface';
import { codeService } from './services/code.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front End Dev Test for Training Resource Center';
  private code: Code = {
    "fiscalYear": 2022,
    "budgetTitle": ""
  };
  constructor (
    private codeService: codeService,
    private formBuilder: FormBuilder,
    ){}
  ngOnInit(): void {
    this.OnGetCodes();
  }

  OnGetCodes(): void {
    this.codeService.getCodes()
    .subscribe (
      (response => console.table(response)),
      (error: any) => console.log(error),
      ()=> console.log('Done getting codes')
    );
  }
  onSubmit(data: any) {
    console.warn(data);
  }
}

