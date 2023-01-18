import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SiginComponent } from './Components/sigin/sigin.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';




@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    RegistrationComponent,
    ForgotemailComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
   // MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
