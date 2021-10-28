import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = "https://uat.trc.eku.edu/budgetcodeexam/api/all";

  constructor(private http: HttpClient) {
  }

  getBudgets(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
  }

