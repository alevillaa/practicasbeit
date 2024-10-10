import { Component } from '@angular/core';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileEditorComponent],
  template: '<app-profile-editor></app-profile-editor>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';
}
