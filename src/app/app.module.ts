import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApitestbedComponent } from './testers/api/apitestbed/apitestbed.component';
import { CognitoComponent } from './testers/auth/cognito/cognito.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
// import { ApiComponent } from './services/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    ApitestbedComponent,
    CognitoComponent
  //ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
