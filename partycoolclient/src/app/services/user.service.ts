import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public isLoginRendered: boolean = false;

  toggleLogin = (status: boolean) => {
    console.log(status)
    console.log({isLoginRendered:this.isLoginRendered})
    return this.isLoginRendered = status;
  }
}
