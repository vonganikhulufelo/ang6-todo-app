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

updateUser(name: string, email: string, password: string, userimage: string) {
  return this.http.patch<any>('https://immense-sands-62810.herokuapp.com/users/'+ JSON.parse(localStorage.getItem('currentUser')).id, { name: name, email: email, password: password, userimage: userimage }, {
    headers: {'authorization': 'Bearer '+ JSON.parse(localStorage.getItem('token'))}
}).map(user => {
          // login successful if there's a jwt token in the response
          if (user) {
           
          }

          return user;
      });
}


}
