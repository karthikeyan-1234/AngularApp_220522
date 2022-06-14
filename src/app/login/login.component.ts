import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private service:LoginService,private router: Router) { 
  }

  ngOnInit(): void {

    this.username = "Arjun";
    this.password = "123456";

    if(localStorage.getItem("username") != null){
    console.log(localStorage.getItem("username"));
    this.router.navigate(['cities']);}
  }

  checkLogin(){
    this.service.checkLogin(this.username,this.password).subscribe(
      res =>
      {
        console.log("Authenticated. Redirecting to Cities page");
        localStorage.setItem("username",this.username);
        this.router.navigate(['cities']);
      }
      ,err =>{console.log("Authenticated Failed..!!")})
  }

}
