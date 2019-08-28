import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
 

  constructor(private registerSevice:RegisterService,private router:Router) { }

  ngOnInit() {
  }
   onSubmit(registerFrom) {
     console.log(registerFrom.value);
     this.registerSevice.registerUser(registerFrom.value)
     .subscribe( data => {
       alert("registered successfully.");
       this.router.navigate(['login'])
     });
  
   }
}
