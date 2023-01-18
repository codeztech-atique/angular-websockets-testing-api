import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NotificationListComponent } from './notification/notification.component';
import { NotificationService } from '../services/notification.service';
import { CustomerComponent } from './customer/customer.component';
import { WebSocketService } from '../services/websockets.service';
import { SupportComponent } from './support/support.component';
import { CommonRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CustomerComponent,
    SupportComponent,
    NotificationListComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpModule, CommonRoutingModule],
  providers: [NotificationService, WebSocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
