import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProfileEditorComponent } from './profile-editor/profile-editor.component'; 

@NgModule({
  declarations: [
    ProfileEditorComponent 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [ProfileEditorComponent] 
})
export class module { }
