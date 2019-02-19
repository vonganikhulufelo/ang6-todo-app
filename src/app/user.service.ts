import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  register(name: string, email: string, password: string) {
    return this.http.post<any>('https://immense-sands-62810.herokuapp.com/users', { name: name, email: email, password: password }).map(user => {
            // login successful if there's a jwt token in the response
            if (user) {
             
            }

            return user;
        });
}


}
