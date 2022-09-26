import { Component, OnInit } from '@angular/core';
import { codeService } from 'src/app/services/code.service';
import { Response } from 'src/app/interface/response.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})

export class CodesComponent implements OnInit{
  response: any;
  fiscalYear: string='';
  budgetTitle: string='';
  

  constructor(
    private codeService: codeService,
    private formBuilder: FormBuilder,
    ) { }
  
    ngOnInit(): void {
    this.codeService.getCodes().subscribe(
      (results: any) => {
        console.log(results);
        this.response = results;
      }
    );
  }
  onSubmit() {
    console.log('Fiscal Year:',this.fiscalYear, 'Budget Title:',this.budgetTitle);
  }
}
