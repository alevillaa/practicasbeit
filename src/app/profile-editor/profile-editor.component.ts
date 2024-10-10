import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  trabajo1Form = new FormGroup({
    datosalfanumconC: new FormControl('', [Validators.pattern('^[\\w\\ÁÉÍÓÚáéíóúñÑ]+$')]),
    numericos: new FormControl('', [Validators.pattern('^[0-9]+$')]),
    telefonico: new FormControl('', [Validators.pattern('^[0-9]{10}$')]),
    datosalfanum: new FormControl('', [Validators.pattern('^[\\w]+$')]),
  });

}
