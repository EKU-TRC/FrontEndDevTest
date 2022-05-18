import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-enter-button',
  templateUrl: './enter-button.component.html',
  styleUrls: ['./enter-button.component.css']
})
export class EnterButtonComponent implements OnInit {
  @Input()
  text!: string;
  @Input()
  color!: string;
  @Output() btnClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
