import { Component, OnInit } from '@angular/core';

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

userDetails:any ={
  1000:{acno:1000,username:'neer',password:1000,balance:4000},
  1001:{acno:1001,username:'laisha',password:1001,balance:3000},
  1002:{acno:1002,username:'max',password:1002,balance:5000}


}

  constructor() { }

  ngOnInit(): void {
  }

  // ano change

  acnoChange(event:any){
console.log(event.target.value);
this.acno=event.target.value

  }

   // pswd change

   pswdChange(event:any){
    console.log(event.target.value);
    this.pswd=event.target.value
    
      }

  // login()
 // event binding
login(){

  var acno=this.acno
  var pswd=this.pswd
  var userDetails=this.userDetails

  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
alert('login succesful')
    }
    else{
      alert('incorrect password')
    }

  }
else{
  alert("doesnot exist")
}
}

}
