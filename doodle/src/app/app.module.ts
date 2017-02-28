import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import {HttpService} from "./http.service";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
