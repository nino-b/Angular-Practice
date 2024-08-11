import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  template: `<p>User: {{ username }}</p>`,
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @Input({ required: true, alias: 'user' }) username: string = '';
}
