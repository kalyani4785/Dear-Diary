import { Component, OnInit,VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent{

  ktitle:string="Title Name";
  kentry:string="Entry Detail";
  title:string='';
  entry:string='';
  etitle:any;
  eentry:any;
  entryForm !:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.entryForm=this.formbuilder.group({
      title:new FormControl(),
      entry:new FormControl()
    });
  }
  storeData(){
    localStorage.setItem(this.ktitle,this.title);
    localStorage.setItem(this.kentry,this.entry);
    this.etitle=localStorage.getItem(this.title);
    this.eentry=localStorage.getItem(this.entry);
    console.log("Title is: ",this.title);
    console.log("Data is :",this.entry);
    
  }
  onSubmit(){
    // alert("sfcnjefguiej");
    // localStorage.getItem('title');
    // console.log(this.entryForm);
    // console.log("title is :",this.title);
    // localStorage.setItem(this.ktitle,this.title);
    // localStorage.setItem(this.kentry,this.entry);
    // this.etitle=localStorage.getItem(this.title);
    // this.eentry=localStorage.getItem(this.entry);
    // console.log("Title is: ",this.title);
    // console.log("Data is :",this.entry);
    
  }
}
