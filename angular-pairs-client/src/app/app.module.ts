import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NameEditorComponent } from './name-editor/name-editor/name-editor.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { LoadDataComponent } from './load-data/load-data.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NameEditorComponent,
    ReactiveFormComponent,
    TestComponent,
    LoadDataComponent,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
