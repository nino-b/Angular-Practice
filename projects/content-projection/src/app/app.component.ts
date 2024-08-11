import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageContentComponent } from './components/message-content/message-content.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ModalComponent } from './components/modal/modal.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MessageContentComponent,
    ProfileCardComponent,
    ModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'content-projection';

  modalOpened = true;

  toggleModal() {
    this.modalOpened = !this.modalOpened;
  }
}
