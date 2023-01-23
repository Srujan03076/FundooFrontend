import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { SiginComponent } from './Components/sigin/sigin.component';

// const routes: Routes = [
//   {
//     path:'', redirectTo:"/signin", pathMatch:'full' 
//  },
//   {
//     path:'registration', component: RegistrationComponent
//   },
//   {
//     path:'signin', component:SiginComponent
//   },
//   {
//     path:'forgotemail', component: ForgotemailComponent
//   },
//   {
//     path:'forgotpassword/:token', component: ForgotpasswordComponent
//   },
// ]


@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
