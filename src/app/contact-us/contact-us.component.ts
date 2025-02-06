import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  pData:any;
  constructor(
    private formBuilder: FormBuilder,
    private postsdata: DbserviceService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.postsdata.getPostDetail().subscribe((res) =>{
      this.pData=res;
      console.log(this.pData);
    })
  }
}
