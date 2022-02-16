import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  adminStream:Observable<any[]>;

  arr = []
    // {
    //   id:1,
    //   name:"admin1"
    // },
    // {
    //   id:2,
    //   name:"admin2"
    // },
    // {
    //   id:3,
    //   name:"admin3"
    // },
    // {
    //   id:4,
    //   name:"admin4"
    // },
    // {
    //   id:5,
    //   name:"admin5"
    // },
    // {
    //   id:6,
    //   name:"admin6"
    // },
    // {
    //   id:7,
    //   name:"admin7"
    // },
    // {
    //   id:8,
    //   name:"admin8"
    // },
    // {
    //   id:9,
    //   name:"admin9"
    // },
    // {
    //   id:10,
    //   name:"admin10"
    // }];

    // arr2 = [
    //   {
    //     id:11,
    //     name:"admin11"
    //   },
    //   {
    //     id:12,
    //     name:"admin12"
    //   },
    //   {
    //     id:13,
    //     name:"admin13"
    //   },
    //   {
    //     id:14,
    //     name:"admin14"
    //   },
    //   {
    //     id:15,
    //     name:"admin15"
    //   }];

      arr3:any[] = []
  constructor() { }

  ngOnInit(): void {
    let i = 0;
    let interval
    this.adminStream = new Observable(observer => {
      interval = setInterval(() => { 
        this.arr3.push({id: ++i, name:"admin"+i})
        observer.next(this.arr3)
      }, 1000);
      setTimeout(() => {
        clearInterval(interval)
        observer.complete()
      },10000)

    });

    for(let i = 0; i < 1000; i++) {
      this.arr.push({
          id: i,
          name: "admin"+i,
      })
  }
  }

  onScroll(){
    console.log(`scrolled`)
  }

  trackByItems(index: number, item: any): number {
    return item;
  }

  addNumber(){
    this.arr.map((el) => {
      if(el.id < 5){
        el.name = 'test'+el.id
      }
    })
  }

}
