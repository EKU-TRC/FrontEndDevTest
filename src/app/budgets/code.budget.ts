import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Code } from "../interface/code";

@Injectable ({providedIn: 'root'})
export class codeBudget
{ constructor (private httpclient: HttpClient){}
getCodes(): Observable<any>{
    return this.httpclient.get('https://uat.trc.eku.edu/budgetcodeexam/api/codes');
}
}