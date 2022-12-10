import { Component } from '@angular/core';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {
  addComplaint=""
  readValues=()=>{
    let data=[{
      "addComplaint":this.addComplaint
    }]
    console.log(data)
  }

}
