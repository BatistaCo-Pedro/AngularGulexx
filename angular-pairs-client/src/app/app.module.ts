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

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    NameEditorComponent,
    ReactiveFormComponent,
    TestComponent,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
