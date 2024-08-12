import { Component, output } from '@angular/core';

@Component({
  selector: 'app-name-input',
  standalone: true,
  template: ` <input type="name" name="name" (input)="setNewName($event)" /> `,
  styleUrl: './name-input.component.css',
})
export class NameInputComponent {
  nameChangeEvent = output<string>();

  setNewName(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.nameChangeEvent.emit(value);
  }
}
