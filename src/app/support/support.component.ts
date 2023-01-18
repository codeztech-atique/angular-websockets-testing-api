import { Component, VERSION } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { WebSocketService } from '../../services/websockets.service';

@Component({
  selector: 'support-app',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent {
  name = 'Angular ' + VERSION.major;
  constructor(
    private wbsocketService: WebSocketService,
    private notificationService: NotificationService
  ) {}
}
