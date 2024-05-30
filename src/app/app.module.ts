import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputCodeComponent } from './components/input-code/input-code.component';
import { ExecutingButtonComponent } from './components/executing-button/executing-button.component';

@NgModule({
  declarations: [AppComponent, InputCodeComponent, ExecutingButtonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
