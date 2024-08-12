import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleButtonComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'custom-events';
  toggleStatus: string = 'It is Off';
  sliderVal: number = 0;

  displayToggleResult(isOn: boolean) {
    this.toggleStatus = isOn ? 'It is On' : 'It is Off';
  }
  updateValue(value: number) {
    this.sliderVal = value;
  }
}
