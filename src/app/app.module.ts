import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { TaskService } from './task.service';
import { NewtaskComponent } from './newtask/newtask.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskeditComponent } from './taskedit/taskedit.component';
import { UpadteuserComponent } from './upadteuser/upadteuser.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    NewtaskComponent,
    TasksComponent,
    TaskeditComponent,
    UpadteuserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
