import { Component, OnInit } from '@angular/core';
// import { WelcomeComponent } from './welcome/welcome.component';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'loginDemo';
  username: string="";
  password: string="";
  ReferPage:boolean=false;
  requiredForm !: FormGroup;

  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
  ){}
  ngOnInit(){
    
    this.requiredForm=this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      });
    
  }
 
  
  
  loginValidation(){
    console.log(this.requiredForm);
    if(this.username==="KD4785" && this.password==="12345"){
      console.log("Successfully Login");
      this.router.navigate(['/welcome']);
      this.ReferPage=true;
    }
    else{
      alert("Unauthorized User");
      console.log("Unauthorized User");
    }
  }
  
  

}
