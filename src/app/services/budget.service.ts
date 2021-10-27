import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = "https://uat.trc.eku.edu/budgetcodeexam/api/all";

  constructor(private http: HttpClient) {
  }
  }

