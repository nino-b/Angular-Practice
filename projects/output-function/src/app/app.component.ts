import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameInputComponent } from './components/name-input/name-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NameInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'output-function';
  newName: string = '';
  displayNewName(name: string) {
    this.newName = name;
  }
}
