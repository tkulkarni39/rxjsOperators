import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, merge, empty } from 'rxjs';
import { mapTo, startWith, switchMap, scan, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
    const countDownSeconds = 15;

    const setHTML = id => val => (document.getElementById(id).innerHTML = val);

    const pauseButton = document.getElementById('pause');

    const resumeButton = document.getElementById('resume');

    const interval$ = interval(1000).pipe(mapTo(-1));

    const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));

    const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

    const timer$ = merge(pause$, resume$)

    .pipe(

      startWith(true),

      switchMap(val => (val ? interval$ : empty())),

      scan((acc, curr) => (curr ? curr + acc : acc), countDownSeconds),

      takeWhile(v => v >= 0)
    )
    .subscribe(setHTML('remaining'));

  }

}
