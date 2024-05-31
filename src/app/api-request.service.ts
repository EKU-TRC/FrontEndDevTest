import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BudgetCode } from './budget-code';


@Injectable({
  providedIn: 'root'
})

//Service used in getBudget and postBudget components for API calls
export class ApiRequestService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    // Simple service that calls a get to this url
    return this.http.get('https://uat.trc.eku.edu/budgetcodeexam/api/all');
  }

    // Simple service that calls a POST request to this url, provided a BudgetCode
  postData(budgetCode: BudgetCode): Observable<any> {
    const url = 'https://uat.trc.eku.edu/budgetcodeexam/api/add';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(budgetCode);
    return this.http.post(url, body, { headers });
  }


}


