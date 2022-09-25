import { Component, OnInit } from '@angular/core';
import { codeService } from 'src/app/services/code.service';
import { Response } from 'src/app/interface/response.interface';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent implements OnInit {
  response!: Response; 

  constructor(private codeService: codeService) { }

  ngOnInit(): void {
    this.codeService.getCodes().subscribe(
      (results: any) => {
        console.log(results);
        this.response = results;
      }
    );
  }

}
