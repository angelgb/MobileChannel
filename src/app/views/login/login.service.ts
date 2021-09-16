import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}
  
  private BASE_PATH = 'http://localhost:3000/login'

  public getLogin(user: any): Observable<object> {
    return this.http.get(
      `${this.BASE_PATH}/${user.id}`
    );
  }

}
