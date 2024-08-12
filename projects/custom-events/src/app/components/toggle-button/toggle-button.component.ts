import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  template: `
    <button (click)="onToggle()">{{ isOn ? 'Turn Off' : 'Turn On' }}</button>
  `,
  styleUrl: './toggle-button.component.css',
})
export class ToggleButtonComponent {
  @Output() toggle = new EventEmitter<boolean>();
  isOn = false;
  onToggle() {
    this.isOn = !this.isOn;
    this.toggle.emit(this.isOn);
  }
}
