import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReadMeComponent } from './read-me/read-me.component';
import { GetBudgetComponent } from './get-budget/get-budget.component';
import { PostBudgetComponent } from './post-budget/post-budget.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReadMeComponent, GetBudgetComponent, PostBudgetComponent, HttpClientModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FrontEndDevTest';
}
