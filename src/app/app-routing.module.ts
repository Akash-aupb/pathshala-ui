import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpSchoolComponent } from './sign-up-school/sign-up-school/sign-up-school.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SignUpSchoolComponent]
