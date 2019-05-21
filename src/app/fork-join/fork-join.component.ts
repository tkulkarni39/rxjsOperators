import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  public propOne: string;

  public propTwo: string;

  public propThree: string;

  constructor(private userService: UsersService) { }

  ngOnInit() {

    forkJoin(
      
      this.userService.makeRequest("Request One", 2000),

      this.userService.makeRequest("Request Two", 1000),

      this.userService.makeRequest("Request Three", 3000),
    )
    .subscribe(([res1, res2, res3]) =>{
      
      this.propOne = res1;

      this.propTwo = res2;

      this.propThree = res3;
    }
    )
  }

}
