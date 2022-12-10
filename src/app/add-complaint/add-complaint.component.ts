import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css'],
})
export class AddComplaintComponent {
  constructor(private api:ApiService){}
  addComplaint = '';
  readValues = () => {
    let id=localStorage.getItem('userInfo')
    let data = 
      {
        "userId":id,
        "addComplaint": this.addComplaint,
      }
      console.log(this.addComplaint)
    
    this.api.addComplaint(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.addComplaint = '';
      })
    }
  };

