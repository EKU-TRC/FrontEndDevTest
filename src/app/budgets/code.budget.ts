import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Code } from "../interface/code";
import { BudgetCodeId } from "../model/budget-code-id";

@Injectable ({providedIn: 'root'})
export class codeBudget
{ constructor (private httpclient: HttpClient){}

httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
    })
}
getCodes(): Observable<any>{
    return this.httpclient.get('https://uat.trc.eku.edu/budgetcodeexam/api/all/');
}

getBudgetCodeId(): Observable<BudgetCodeId[]>{
    return this.httpclient.get<BudgetCodeId[]>('https://uat.trc.eku.edu/budgetcodeexam/api/id/', {
        headers: this.httpOptions.headers
    })
}
}