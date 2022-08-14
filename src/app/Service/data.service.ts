import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


   currentUser:any

   currentAcno:any
  userDetails:any ={
    1000:{acno:1000,username:'neer',password:1000,balance:4000,transaction:[]},
    1001:{acno:1001,username:'laisha',password:1001,balance:3000,transaction:[]},
    1002:{acno:1002,username:'max',password:1002,balance:5000,transaction:[]}
  
  
  }
  

  constructor() { }

  // regiter

  register(acno:any,username:any,password:any){
    let userDetails=this.userDetails

    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={
        acno,
        username,
        password,
        balance:0,
        transaction:[]
        
      }
      console.log(userDetails);
      
      return true
    }
  }

  // login 
  login(acno:any,pswd:any){

    let userDetails=this.userDetails

  
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        this.currentUser=userDetails[acno]['username']
        this.currentAcno=userDetails[acno]['acno']
  return true
      }
      else{
        alert('incorrect password')
        return false
      }
  
    }
  else{
    alert("doesnot exist")
    return false
  }
  }

  deposit(acno:any,pswd:any,amt:any){
var amount = parseInt(amt)
    
    let userDetails=this.userDetails
    if(acno in userDetails){
if(pswd==userDetails[acno]["password"]){
  userDetails[acno]['balance']+=amount
  userDetails[acno]['transaction'].push({
    Type:'credit',
    amount

    
  })
  console.log(userDetails);
  
  return userDetails[acno]['balance']
}
else{
  alert('incorrect password')
  return false
}
    }
    else{
      alert('user doesnot exist')
      return false
    }
  }

  withdrawal(acno1:any,pswd1:any,amt1:any){
var amount =parseInt(amt1)
let userDetails=this.userDetails

if(acno1 in userDetails){
if(pswd1==userDetails[acno1]["password"]){
  if(userDetails[acno1]['balance']>amount){
    userDetails[acno1]['transaction'].push({
      Type:'Debit',
      amount
    })
   return userDetails[acno1]['balance']-=amount
    
  }
  else{
    alert('insufficient balance')
    return false
  }
}
else{
  alert('incorrect password')
  return false
}
}
else{
  alert('user doesnot exist')
  return false
}
  }

  getTransaction(acno:any){
return this.userDetails[acno]['transaction']
  }
}
