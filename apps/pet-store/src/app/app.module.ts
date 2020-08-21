import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app.routing.module';
import { DataService } from '@angular-preload/data';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // StoreModule.forRoot({ metaReducers: !environment.production ? [] : []}),
    // EffectsModule.forRoot(),
  ],
  providers: [
    DataService,
    // HttpClient,
    // HttpHandler,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
