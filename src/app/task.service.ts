import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://vonganitodoapp.herokuapp.com//users/' + JSON.parse(localStorage.getItem('currentUser')).id + '/tasks';
  constructor(private http: HttpClient) { }
  newtask(title: string, description: string, duedate: string) {
    return this.http.post<any>(this.apiUrl, {title: title, description: description, duedate: duedate })
        .map(task => {
            // logn successful if there's a jwt token in the response
            if (task) {
              
            }

            return task;
        });
}

getTasks() {
  return this.http.get('https://vonganitodoapp.herokuapp.com//users/' + JSON.parse(localStorage.getItem('currentUser')).id + '/tasks')
}

getTaskId(taskId) {
  return this.http.get('https://vonganitodoapp.herokuapp.com//users/' + JSON.parse(localStorage.getItem('currentUser')).id + '/tasks/' + taskId)
}

edittask(title: string, description: string, duedate: string, id: string) {
  return this.http.put<any>(this.apiUrl +'/'+ id, {title: title, description: description, duedate: duedate, id: id })
      .map(task => {
          // logn successful if there's a jwt token in the response
          if (task) {
            
          }

          return task;
      });
}


}
