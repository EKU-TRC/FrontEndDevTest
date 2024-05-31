import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BudgetCode } from '../budget-code';
import { ApiRequestService } from '../api-request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';





@Component({
  selector: 'app-post-budget',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule],
  providers: [ApiRequestService],
  templateUrl: './post-budget.component.html',
  styleUrl: './post-budget.component.scss'
})
export class PostBudgetComponent {

  //binds elements on form into data we can use here

  budgetForm = new FormGroup({
    fiscalYear: new FormControl(''),
    budgetCode: new FormControl(''),
    budgetTitle: new FormControl('')
  })

  //inject our GetRequestService
  constructor(private dataService: ApiRequestService) { 
    
  }
 
  //This function is called when form is submitted
  submitBudget(){
    console.log("submitted");

    //convert form into BudgetCode
    const budgetCode: BudgetCode = this.budgetForm.value as BudgetCode;
    console.log(budgetCode);

    //Send Post Request using ApiRequest Service class
     this.dataService.postData(budgetCode).subscribe(response => {
      console.log('Post Response:', response);
      
    }, error => {
      console.error('Error posting data:', error);
    });


    //Reload the page so the BudgetCode table can refresh, wait 2 seconds to give enough time to the API.
    this.reloadWithDelay();

  }

  reloadWithDelay() {
    console.log("Reloading...");
    setTimeout(() => {
      location.reload();
    }, 2000); // 2 second delay
  }

  

}
    

