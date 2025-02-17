import { LoginAPIRes, LoginRes } from '../interface/loginRes';
import { Injectable } from '@angular/core';
import { Adapter } from '../interface/adapter';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginAPIAdapter implements Adapter {
  constructor() {}
  adapt(data: LoginAPIRes): LoginRes {
    return {
      message: data.message,
      userEmail: data.user.email,
      token: data.token,
    };
  }
}
