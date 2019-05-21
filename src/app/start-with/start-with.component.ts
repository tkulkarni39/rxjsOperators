import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith, scan, delay } from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {

  value:string;

  constructor() { }

  ngOnInit() {

    const source = of('Hello', 'Tejas', 'Kulkarni');

    const example = source.pipe(

      startWith('Hello'),

      delay(2000),

      scan((accumulated, current) => `${accumulated} ${current}`)

      );

      const subscribe = example.subscribe(val => this.value = val )
  }

}
