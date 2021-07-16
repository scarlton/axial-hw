import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { NumberOutputComponent } from './number-output/number-output.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponent,
    NumberOutputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: NumberInputComponent },
      { path: 'display', component: NumberOutputComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
