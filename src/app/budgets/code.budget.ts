import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Code } from "../interface/code";
import { BudgetCodeId } from "../model/budget-code-id";
import { FiscalYear } from "../model/fiscal-year";
import { BudgetCode } from "../model/budget-code";
import { BudgetTitle } from "../model/budget-title";

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
getFiscalYear(): Observable<FiscalYear[]>{
    return this.httpclient.get<FiscalYear[]>('https://uat.trc.eku.edu/budgetcodeexam/api/year/', {
        headers: this.httpOptions.headers
    })
}
getBudgetCode(): Observable<BudgetCode[]>{
    return this.httpclient.get<BudgetCode[]>('https://uat.trc.eku.edu/budgetcodeexam/api/code/', {
        headers: this.httpOptions.headers
    })
}
getBudgetTitle(): Observable<BudgetTitle[]>{
    return this.httpclient.get<BudgetTitle[]>('https://uat.trc.eku.edu/budgetcodeexam/api/title/', {
        headers: this.httpOptions.headers
    })
}
}