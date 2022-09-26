import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, } from "@angular/common/http";
import { Code } from "../interface/code.interface";

@Injectable ({providedIn: 'root'})
export class codeService {
  clearCode(): Observable<any> {
    throw new Error('Method not implemented.');
  } 

    constructor (private httpclient: HttpClient){}

//Fetch codes
getCodes(): Observable<any>{
    return this.httpclient.get('https://uat.trc.eku.edu/budgetcodeexam/api/all/');
}
//Create codes
createCodes(code: Code): Observable<Code>{
    return this.httpclient.post<Code>('https://uat.trc.eku.edu/budgetcodeexam/api/all/', code);
} 


}