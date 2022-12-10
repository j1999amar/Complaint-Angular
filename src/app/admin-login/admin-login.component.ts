import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminUserName=""
  adminPassword=""
  readValue=()=>{
    let data=[{
      "adminUsername":this.adminUserName,
      "adminPassword":this.adminPassword
    }]
    console.log(data)

  }

}
