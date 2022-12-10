import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
   userData:any={}

  constructor(private api:ApiService){
    let id=localStorage.getItem("userInfo")
    let data={
      "id":id
    }
    this.api.getUserData(data).subscribe(
      (response)=>{
        this.userData=response
        console.log(this.userData[0])
      }
    )
  }
  

}
