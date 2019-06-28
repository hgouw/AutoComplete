import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatAutocompleteModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { MatAutoCompleteComponent } from './mat-auto-complete/mat-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    MatAutoCompleteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
