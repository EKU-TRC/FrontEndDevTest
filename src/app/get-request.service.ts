import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetRequestService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    // Simple service that calls a get to this url
    return this.http.get('https://uat.trc.eku.edu/budgetcodeexam/api/all');
  }
}


