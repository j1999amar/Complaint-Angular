import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  userLogin = '';
  password = '';
  readValue = () => {
   let data=[
    {
      "userLogin":this.userLogin,
      "password":this.password 
    }
   ]
   console.log(data)

  };
}
