import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(private api: ApiService,private route:Router) {}
  userLogin = '';
  password = '';
  readValue = () => {
    let data = {
      "userLogin": this.userLogin,
      "password": this.password,
    };

    this.api.searchUserId(data).subscribe((response:any) => {
      if(response.status=="success"){
        let userId=localStorage.setItem("userInfo",response.userid)
        this.route.navigate(['/addComplaint'])
      }else{
        alert("Login Failed")
      }
    });
  };
}
