import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpSchoolComponent } from './sign-up-school/sign-up-school/sign-up-school.component';
import { LoginSchoolComponent } from './login-school/login-school/login-school.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpSchoolComponent,
    LoginSchoolComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
         path:'sign-in', component: SignUpSchoolComponent
        
      },
      {
        path:'log-in',component: LoginSchoolComponent
      }
      ,
      {
        path:'',component: MainPageComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
