import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private route:Router){}
  adminUserName=""
  adminPassword=""
  readValue=()=>{
    let data=[{
      "adminUsername":this.adminUserName,
      "adminPassword":this.adminPassword
    }]
    console.log(data)
    if(this.adminUserName=="admin"&&this.adminPassword=="12345"){
      this.route.navigate(['/viewAllComplaints'])
    }else{
      alert("Login Failed")
    }

  }

}
