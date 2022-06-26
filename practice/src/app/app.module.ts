import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingsComponent } from './two-way-bindings/two-way-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    ErrorComponent,
    TwoWayBindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
