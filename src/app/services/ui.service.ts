import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private ShowAddBudget: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddBudget(): void {
  this.ShowAddBudget = !this.ShowAddBudget;
  this.subject.next(this.ShowAddBudget);
}

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
