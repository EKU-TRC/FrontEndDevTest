import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from '../Budget';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = "https://uat.trc.eku.edu/budgetcodeexam/api/all";
  private addUrl = "https://uat.trc.eku.edu/budgetcodeexam/api/add";

  constructor(private http: HttpClient) {
  }

  getBudgets(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  addBudget(budget: Budget):Observable<Budget> {
    return this.http.post<Budget>(this.addUrl, budget, httpOptions)
  }
  }

