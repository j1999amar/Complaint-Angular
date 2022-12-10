import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  name = '';
  address = '';
  date=''
  phone = '';
  email = '';
  userLogin = '';
  password = '';
  confirmPassword = '';
  readValue = () => {
    let data:any = [
      {
        "name": this.name,
        "address": this.address,
        "date":this.date,
        "phone": this.phone,
        "email": this.email,
        "userLogin": this.userLogin,
        "password": this.password,
        "confirmPassword": this.confirmPassword,
      },
    ];
    console.log(data)
  };
}
