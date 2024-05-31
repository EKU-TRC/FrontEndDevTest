import { Component, OnInit } from '@angular/core';
import { BudgetCode } from '../budget-code';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ApiRequestService } from '../api-request.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-get-budget',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginator],
  providers: [ApiRequestService,  ViewChild, MatTableDataSource],
  templateUrl: './get-budget.component.html',
  styleUrl: './get-budget.component.scss'
})
export class GetBudgetComponent implements OnInit {

  // Define the array to store BudgetCode objects
  budgetCodeList: BudgetCode[] = []; 

  //MatTableDataSource is a class provided by AngularMaterial that lets you integrate MatTable with various data structures
  //And lets you do sorting/filtering/pagination easily
  dataSource!: MatTableDataSource<BudgetCode>;

  //This lets us access the MatPaginator component, which lets us do pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //inject our GetRequestService
  constructor(private dataService: ApiRequestService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((response: any) => {
      // Assuming the data is returned as an array in the response
      const data = response.data;

      // Map each item in the 'data' array to a BudgetCode object
      this.budgetCodeList = data.map((item: any) => ({
        budgetCodeId: item.budgetCodeId,
        fiscalYear: item.fiscalYear,
        budgetCode: item.budgetCode,
        budgetTitle: item.budgetTitle
      }));

      console.log("Grabbing all budgetCodes");
      console.log(this.budgetCodeList); // Now this will log an array of BudgetCode objects
      

      // Initialize MatTableDataSource
    this.dataSource = new MatTableDataSource(this.budgetCodeList);
    // Bind the paginator to the MatTableDataSource
    this.dataSource.paginator = this.paginator;
      
    });



  }


  //dummy data we no longer use
  budgetCodeList2: BudgetCode[] = [{

    budgetCodeId: '1',
    fiscalYear: '2022',
    budgetCode: 'AAA',
    budgetTitle: 'Title'

  }, {
    budgetCodeId: '2',
    fiscalYear: '2022',
    budgetCode: 'AAA',
    budgetTitle: 'Title'
  }

];





//used in MatTable
displayedColumns: string[] = ['budgetCodeId', 'fiscalYear', 'budgetCode', 'budgetTitle'];


}
