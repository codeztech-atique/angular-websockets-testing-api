import { Component, VERSION } from '@angular/core';
import { WebSocketService } from '../services/websockets.service';
import { NotificationService } from './../services/notification.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(
    private notificationService: NotificationService,
    private wbsocketService: WebSocketService
  ) {
    this.wbsocketService.receiveMessage();
  }
}
