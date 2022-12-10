import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  constructor(private route:Router,private api:ApiService){}
  name = '';
  address = '';
  date=''
  phone = '';
  email = '';
  userLogin = '';
  password = '';
  confirmPassword = '';
  readValue = () => {
    let data:any = 
      {
        "name": this.name,
        "address": this.address,
        "date":this.date,
        "phone": this.phone,
        "email": this.email,
        "userLogin": this.userLogin,
        "password": this.password,
        "confirmPassword": this.confirmPassword,
      }
    
    if(this.userLogin!=""&&(this.password==this.confirmPassword)){
      this.api.addUser(data).subscribe(
        (response)=>{
          console.log(response)
        }
      ) 
      this.route.navigate(['/userLogin'])
    }
    else{
      alert("Something Went Wrong...")
    }
  };
}
