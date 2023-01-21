import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import {
  Notification,
  NotificationType,
} from '../../models/notification.model';
import { first, debounceTime, delay, Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationListComponent implements OnInit {
  notifications: Notification[] = [];
  private _subscription: Subscription;

  constructor(private _notificationSvc: NotificationService) {}

  private _addNotification(notification: Notification) {
    this.notifications.push(notification);

    if (notification.timeout !== 0) {
      setTimeout(() => this.close(notification), notification.timeout);
    }
  }

  ngOnInit() {
    this._subscription = this._notificationSvc
      .getObservable()
      .subscribe((notification) => {
        console.log('I am notification called: -', notification);
        this._addNotification(notification);
      });
  }

  // ngOnDestroy() {
  //   console.log('I am destroyed.');
  //   this._subscription.unsubscribe();
  // }

  close(notification: Notification) {
    this.notifications = this.notifications.filter(
      (notif) => notif.id !== notification.id
    );
  }

  className(notification: Notification): string {
    let style: string;

    switch (notification.type) {
      case NotificationType.success:
        style = 'success';
        break;

      case NotificationType.warning:
        style = 'warning';
        break;

      case NotificationType.error:
        style = 'error';
        break;

      default:
        style = 'info';
        break;
    }

    return style;
  }
}
