import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

/** Component used to display title and toggle form button */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'List of Budgets:';
  showAddBudget: boolean = false;
  subscription: Subscription;

  /** Subscribes to the value of show add budget*/
  constructor(private uiService:UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => this.showAddBudget = value)
  }

  ngOnInit(): void {
  }

  /** Makes request to ui service to toggle add budget form */
  toggleAddBudget(){
    this.uiService.toggleAddBudget();
  }
}
