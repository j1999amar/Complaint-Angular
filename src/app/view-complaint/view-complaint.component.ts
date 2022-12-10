import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent {
   complaint:any=[];


  constructor(private api:ApiService){
    let userId=localStorage.getItem("userInfo")
    let data={
      "userId":userId  
    }
    this.api.viewComplaint(data).subscribe(
      (response)=>{
        this.complaint=response
        console.log(this.complaint)
      }
    )

  }
}
