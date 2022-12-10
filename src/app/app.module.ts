import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
const myRouter:Routes=[
  {
    path:'',
    component:AdminLoginComponent
  },
  {
    path:'userRegistration',
    component:UserRegistrationComponent
  },
  {
    path:'userLogin',
    component:UserLoginComponent
  },
  {
    path:'addComplaint',
    component:AddComplaintComponent
  },
  {
    path:'viewProfile',
    component:ViewProfileComponent
  },
  {
    path:'viewComplaint',
    component:ViewComplaintComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    AddComplaintComponent,
    ViewProfileComponent,
    ViewComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
