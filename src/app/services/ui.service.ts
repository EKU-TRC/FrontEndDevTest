import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private ShowAddBudget: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  /** Sets showaddbudget to the opposite of what it is when function is called */
  toggleAddBudget(): void {
    this.ShowAddBudget = !this.ShowAddBudget;
    this.subject.next(this.ShowAddBudget);
}

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
