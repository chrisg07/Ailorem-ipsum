import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FirebaseService } from './services/firebase.service';
import { CopyToClipboardService } from './services/copy-to-clipboard.service';
import { ResponseTableComponent } from './components/response-table/response-table.component';
import { CopyButtonComponent } from './components/copy-button/copy-button.component';
import { ResponseService } from './services/response.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResponseTableComponent,
    CopyButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    FirebaseService, 
    CopyToClipboardService,
    ResponseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
