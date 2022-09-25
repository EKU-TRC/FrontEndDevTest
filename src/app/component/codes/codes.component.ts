import { Component, OnInit } from '@angular/core';
import { codeService } from 'src/app/services/code.service';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent implements OnInit {

  constructor(private codeService: codeService) { }

  ngOnInit(): void {
    this.codeService.getCodes().subscribe(
      (results: any) => {
        console.log(results);
      }
    );
  }

}
