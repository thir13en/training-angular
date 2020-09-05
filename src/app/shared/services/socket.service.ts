import { Injectable } from '@angular/core';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private readonly trackingSck: WebSocketSubject<any[]> = webSocket('es://socket.url');

  get trackingStream$(): WebSocketSubject<any[]> {
    return this.trackingSck;
  }
}
