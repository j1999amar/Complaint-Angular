import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-complaints',
  templateUrl: './view-all-complaints.component.html',
  styleUrls: ['./view-all-complaints.component.css']
})
export class ViewAllComplaintsComponent {
  data:any=[]
  constructor(private api:ApiService){
    this.api.viewAllComplaints().subscribe(
      (response)=>{
        console.log(response)
        this.data=response
      }
    )
  }

}
