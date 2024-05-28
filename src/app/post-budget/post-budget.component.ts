import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-post-budget',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './post-budget.component.html',
  styleUrl: './post-budget.component.scss'
})
export class PostBudgetComponent {

}
