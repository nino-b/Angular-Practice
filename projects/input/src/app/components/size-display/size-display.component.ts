import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-size-display',
  standalone: true,
  imports: [CommonModule],
  template: ` <div [ngStyle]="{ 'font-size': size }">Hello, Angular!</div> `,
})
export class SizeDisplayComponent {
  @Input({ transform: toPixels }) size: number | null = null;
}

function toPixels(num: number | null) {
  return `${num}px`;
}
