import { Component, OnInit } from '@angular/core';
import { DropDownDirective } from 'src/app/directives/drop-down.directive';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  providers: [DropDownDirective]
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
