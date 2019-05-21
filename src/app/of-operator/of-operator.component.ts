import { Component, OnInit, Input } from '@angular/core';
import  { Observable, of, from, BehaviorSubject } from 'rxjs';
import {map, filter, scan} from 'rxjs/operators'
import { MapOperator } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.css']
})
export class OfOperatorComponent implements OnInit {

  constructor() { }
  @Input() name: string;
  toggle : true;

  buttonClick$ = new BehaviorSubject<any>(null);
  clicks = this.buttonClick$.pipe(
    scan(count => count+1, 0)
  );



  ngOnInit() {

   const stream1$ = of("tejas");

   stream1$
   .pipe(map(name =>name.toUpperCase())).subscribe(data => console.log(data));

   
  }

}
