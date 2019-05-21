
import { Component, OnInit } from'@angular/core';
import {Observable,Subject,combineLatest,timer} from'rxjs';

@Component({

selector:'app-combine-latest',
templateUrl:'./combine-latest.component.html',
styleUrls: ['./combine-latest.component.css']

})

export class CombineLatestComponent implements OnInit
{ 

  time1:number;

  time2:number;

  time3:number;

  time1val;

  time2val;

  time3val;

  constructor(){}

  ngOnInit() {}

  timerOne=timer(1000, 4000);

  timerTwo=timer(2000, 3000);

  timerThree=timer(3000, 2000);

  combined=combineLatest(this.timerOne, this.timerTwo, this.timerThree);
 

  subscribe=this.combined.subscribe(
    ([timerValOne, timerValTwo, timerValThree]) => {


  this.time1=timerValOne;

  this.time2=timerValTwo;

  this.time3=timerValThree;

  });

}



