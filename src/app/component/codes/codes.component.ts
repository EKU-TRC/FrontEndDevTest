import { Component, OnInit } from '@angular/core';
import { codeService } from 'src/app/services/code.service';
import { Response } from 'src/app/interface/response.interface';
import { FormBuilder, AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})

export class CodesComponent implements OnInit{
  public userForm:FormGroup;
  listData:any;
  fiscalYear: string='';
  budgetTitle: string='';
  response: any;

  constructor(
    private codeService: codeService,
    private fb: FormBuilder,
    ) { 
      this.listData = [];
      this.userForm=this.fb.group({
      fiscalYear:['', Validators.required],
      budgetTitle:['', Validators.required]
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
    this.listData.push(this.userForm.value);
    this.userForm.reset();
    console.log(this.fiscalYear=this.userForm.get('fiscalYear')?.value)
    console.log(this.budgetTitle=this.userForm.get('budgetTitle')?.value)
  }
  reset(){
    this.userForm.reset();
  }
}
