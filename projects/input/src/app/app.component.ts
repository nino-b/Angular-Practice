import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageDisplayComponent } from './components/message-display/message-display.component';
import { SizeDisplayComponent } from './components/size-display/size-display.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MessageDisplayComponent,
    SizeDisplayComponent,
    UserProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'input';
}
