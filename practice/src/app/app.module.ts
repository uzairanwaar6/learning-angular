import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingsComponent } from './two-way-bindings/two-way-bindings.component';
import { ConditionalStructuresAndStylingComponent } from './conditional-structures-and-styling/conditional-structures-and-styling.component';
import { GameComponent } from './game/game.component';
import { ControllerComponent } from './game/controller/controller.component';
import { OddComponent } from './game/odd/odd.component';
import { EvenComponent } from './game/even/even.component';
import { Styling } from './directives/styling.directive';
import { Double } from './directives/double.directive';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    ErrorComponent,
    TwoWayBindingsComponent,
    ConditionalStructuresAndStylingComponent,
    GameComponent,
    ControllerComponent,
    OddComponent,
    EvenComponent,
    Styling,
    Double
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
