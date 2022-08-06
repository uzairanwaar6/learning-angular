import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { EditComponent } from './recipes/edit/edit.component';
import { DeleteComponent } from './recipes/delete/delete.component';
import { DetailComponent } from './recipes/detail/detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {ModalModule} from "ngx-bootstrap/modal";
@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent,
    ShoppingListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
