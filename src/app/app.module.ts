import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FnTagModule } from './fn-tag/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FnTagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
