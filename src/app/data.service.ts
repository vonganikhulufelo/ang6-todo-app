import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://immense-sands-62810.herokuapp.com/users')
  }

  login(email: string, password: string) {
    return this.http.post<any>('https://immense-sands-62810.herokuapp.com/users/login', { email: email, password: password }).map(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        });
}

getUser(userId) {
  return this.http.get('https://immense-sands-62810.herokuapp.com/users/'+userId)
}

}
