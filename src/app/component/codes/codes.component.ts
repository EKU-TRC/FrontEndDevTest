import { Component, OnInit } from '@angular/core';
import { codeService } from 'src/app/services/code.service';
import { Response } from 'src/app/interface/response.interface';
import { FormBuilder, AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})

export class CodesComponent implements OnInit{
  public userForm:FormGroup;
  fiscalYear: string='';
  budgetTitle: string='';
  response: any;

  constructor(
    private codeService: codeService,
    private formBuilder: FormBuilder,
    ) { this.userForm=this.formBuilder.group({
      fiscalYear:'',
      budgetTitle:''
    });
  }
  
    ngOnInit(): void {
    this.codeService.getCodes().subscribe(
      (results: any) => {
        console.log(results);
        this.response = results;
      }
    );
  }
  setValue() {
    console.log(this.fiscalYear=this.userForm.get('fiscalYear')?.value)
    console.log(this.budgetTitle=this.userForm.get('budgetTitle')?.value)
}
}
