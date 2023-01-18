import { Component, VERSION } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { WebSocketService } from '../../services/websockets.service';

@Component({
  selector: 'customer-app',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  name = 'Angular ' + VERSION.major;
  constructor(
    private wbsocketService: WebSocketService,
    private notificationService: NotificationService
  ) {}
  sendNotification() {
    let message = {
      action: 'sendpublic',
      message: 'You have assinged to support team',
    };

    this.wbsocketService.send(message);
  }
}
