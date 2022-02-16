import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  @ViewChild('city') cityName;

  styles = {backgroundColor: 'yellow', border: '1px solid red', padding: '5px'}
  userName = 'test';

  constructor() { }

  ngOnInit(): void {
  }

  getClass(){
    return {
      'red': true,
      'italic-style': true,
      'bold-text': true
    }
  }

  onSubmit(city) {
    console.log(`city`, city)
  }

}
