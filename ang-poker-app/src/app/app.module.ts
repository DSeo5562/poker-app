import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
