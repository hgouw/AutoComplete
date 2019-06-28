import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatAutoCompleteComponent } from './mat-auto-complete/mat-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    MatAutoCompleteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
