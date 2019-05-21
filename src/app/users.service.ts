import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { $ } from 'protractor';
//import { delay } from 'q';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user = new BehaviorSubject<string>('Tejas');

  public cast = this.user.asObservable();

  constructor() { }

  editUser(newUser){
    this.user.next(newUser);
  }

  //----------------------------------------------------------------------------

  makeRequest(value: string, delayDuration:number){
    return of(value).pipe(
      delay(delayDuration)
    );
  }
}
