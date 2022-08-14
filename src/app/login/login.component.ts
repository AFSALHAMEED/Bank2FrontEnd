import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //string interpolation
  aim='Your Perfect Banking Partner'

  // property binding
accounts="enter your account here"

acno=''

pswd=''



  constructor(private router :Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  // ano change

//   acnoChange(event:any){
// console.log(event.target.value);
// this.acno=event.target.value

//   }

   // pswd change

  //  pswdChange(event:any){
  //   console.log(event.target.value);
  //   this.pswd=event.target.value
    
  //     }

  // login()
  login(){

    var acno=this.acno
    var pswd = this.pswd


  const result=  this.ds.login(acno,pswd)

  if(result){
    alert('login successfull')
    this.router.navigateByUrl('dashboard')
  }
  }



}
