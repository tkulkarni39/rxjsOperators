import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
//import {subscribe} from 'rxjs'
import { from } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  user: string;
  editUser: string;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.cast.subscribe(user=>this.user = user);
  }

  editTheUser(){
    this.usersService.editUser(this.editUser)
  }
}
