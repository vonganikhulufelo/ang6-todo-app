import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskeditComponent } from './taskedit/taskedit.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'taskedit/:id',
    component: TaskeditComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'new_task',
    component: NewtaskComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
