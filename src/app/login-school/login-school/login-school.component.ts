import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-school',
  templateUrl: './login-school.component.html',
  styleUrls: ['./login-school.component.scss']
})
export class LoginSchoolComponent implements OnInit {

@Input() id: number ;
@Input()   pwd: number;

  constructor() { 
    this.id = 0;
    this.pwd = 0;
  }


  ngOnInit(): void {
   console.log("login started");
   console.log(this.id);
    console.log(this.pwd);
    
  }

  loginFunction(id: number, pwd:number ){

    console.log(id);
    console.log(pwd);
  }

  

  
}
