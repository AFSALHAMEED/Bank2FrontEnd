import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

acno=""
pswd=""
amount=""

acno1=""
pswd1=""
amount1=""
// username holder
user=""

  constructor(private ds:DataService,private router:Router) { 
    this.user=this.ds.currentUser
  }

  ngOnInit(): void {
    
  }
  deposit(){

    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount
 const result=  this.ds.deposit(acno,pswd,amount)
    if(result){
alert(` ${amount} is credited to ${acno} and balance is ${result}`)
    }
  
  }

  withdrawal(){
    var acno=this.acno1
    var pswd=this.pswd1
    var amount=this.amount1
 const result= this.ds.withdrawal(acno,pswd,amount)
 console.log(result);
 
 if(result){
  alert(`${amount} is debited and balance is ${result}`)

 }
  }
}
