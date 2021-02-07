import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import {ErrorsComponent}from './components/errors/errors.component';
import { SallesListComponent } from './salles-list/salles-list.component';
import { SalleComponent } from './salle/salle.component';
import { UsersComponent } from './users/users.component'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Challenge2Component } from './challenge2/challenge2.component';
// import { MiniprojetComponent } from './miniprojet/miniprojet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ErrorsComponent,
    SallesListComponent,
    SalleComponent,
    UsersComponent,
    Challenge2Component,
    // MiniprojetComponent,
    NavbarComponent,
    AddArticleComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

