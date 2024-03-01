import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBHvTlCJBr4G8cty5bOwS7pOmjCwe7fS3k",
      authDomain: "ailorem-ipsum.firebaseapp.com",
      projectId: "ailorem-ipsum",
      storageBucket: "ailorem-ipsum.appspot.com",
      messagingSenderId: "1053402587649",
      appId: "1:1053402587649:web:c283f6e694f948487ad600",
      measurementId: "G-8QYEXZ8JQY"
    })),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
