import { Component, EventEmitter, Output } from '@angular/core';

// prettier-ignore
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  template: `
    <input type="range" min="0" max="100" (input)="getNewValue($event)"/>
  `,
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Output() valueChangeEvent = new EventEmitter<number>();
  getNewValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChangeEvent.emit(Number(value));
  }
}
