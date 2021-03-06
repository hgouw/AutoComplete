import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { SimpleAutoCompleteComponent } from './simple-auto-complete/simple-auto-complete.component';
import { FilterAutoCompleteComponent } from './filter-auto-complete/filter-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    SimpleAutoCompleteComponent,
    FilterAutoCompleteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
