import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks/';
  constructor(private http: HttpClient) { }
  newtask(title: string, description: string) {
    return this.http.post<any>(this.apiUrl, {title: title, description: description}, {
      headers: {'authorization': 'Bearer '+ JSON.parse(localStorage.getItem('token'))}
  })
        .map(task => {
            // logn successful if there's a jwt token in the response
            if (task) {
              
            }

            return task;
        });
}

getTasks() {
  return this.http.get(this.apiUrl, {
    headers: {'authorization': 'Bearer '+ JSON.parse(localStorage.getItem('token'))}
})
}

getTaskId(taskId) {
  return this.http.get(this.apiUrl + taskId, {
    headers: {'authorization': 'Bearer '+ JSON.parse(localStorage.getItem('token'))}
})
}

edittask(title: string, description: string, id: string) {
  return this.http.patch<any>(this.apiUrl + id, {title: title, description: description }, {
    headers: {'authorization': 'Bearer '+ JSON.parse(localStorage.getItem('token'))}
})
      .map(task => {
          // logn successful if there's a jwt token in the response
          return task;
      });
}

taskStatus(is_complete: string, id: string) {
  return this.http.patch<any>(this.apiUrl + id, {is_complete: is_complete}, {
    headers: {'authorization': 'Bearer '+ JSON.parse(localStorage.getItem('token'))}
})
      .map(task => {
          // logn successful if there's a jwt token in the response
          return task;
      });
}

deletetask(id) {
  return this.http.delete<any>(this.apiUrl + id , {
    headers: {'authorization': 'Bearer '+ JSON.parse(localStorage.getItem('token'))}
})
  .map(task => {
      // logn successful if there's a jwt token in the response
      return task;
  });
}


}
