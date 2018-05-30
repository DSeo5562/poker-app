import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components

import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomepageComponent } from '../components/homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomepageComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
