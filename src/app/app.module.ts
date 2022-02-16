import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralComponent } from './components/structural/structural.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { CustomComponent } from './components/custom/custom.component';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './directives/drop-down.directive';


@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    AttributeComponent,
    CustomComponent,
    DropDownDirective
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
