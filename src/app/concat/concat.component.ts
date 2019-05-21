import { Component, OnInit } from '@angular/core';
import { take, concatAll, map, concat } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, Subject, interval, of, pipe } from 'rxjs';
 

@Component({

 selector: 'app-concat',
 templateUrl: './concat.component.html',
 styleUrls: ['./concat.component.css']

})

export class ConcatComponent implements OnInit {

  constructor(){}

  ngOnInit(){}

  obs1 = interval(1000).pipe(take(5));

  obs2 = interval(500).pipe(take(2));

  obs3 = interval(2000).pipe(take(1));

  concatinatedValue=[];

  source = of(this.obs1, this.obs2, this.obs3);

  example = this.source.pipe(concatAll());

  subscribe = this.example.subscribe(pipe(val => this.concatinatedValue.push(val)));

}