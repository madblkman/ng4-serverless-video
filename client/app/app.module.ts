import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdMenuModule, MdButtonModule, MdListModule } from '@angular/material';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';

import { AuthService } from './services/auth.service';
import { CallbackComponent } from './services/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdMenuModule,
    MdButtonModule,
    MdListModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
