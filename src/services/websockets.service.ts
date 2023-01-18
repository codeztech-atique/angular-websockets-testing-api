import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Subject, Observable, BehaviorSubject, pipe, mergeMap } from 'rxjs';
import { environment } from './../environments/environment';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  public subject: WebSocketSubject<any>;

  constructor(private notificationService: NotificationService) {
    this.connect();
  }

  public connect() {
    this.subject = webSocket({
      url: environment.websocketUrlClient,
      deserializer: ({ data }) => {
        return new Promise((res, rej) => {
          res(data);
        });
      },
      openObserver: {
        next: () => {
          console.log('connecion ok');
        },
      },
      closeObserver: {
        next: () => {
          console.log('disconnect ok');
          this.connect();
        },
      },
    });
    this.subject.subscribe();
  }

  public send(msg) {
    console.log('Send Message:', msg);
    this.subject.next(msg);
  }

  public disconnect() {
    this.subject.complete();
  }

  public receiveMessage() {
    this.subject.subscribe((msg) => {
      if (msg.__zone_symbol__value != '') {
        const data = JSON.parse(msg.__zone_symbol__value);
        console.log('message received: ', data);

        this.notificationService.success('Congratulations', data.message);
      }
    });
  }
}
