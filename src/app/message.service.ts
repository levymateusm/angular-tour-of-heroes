import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: { msg: string; uuid: string; }[] = [];

  add(message: string) {
    const msg = { msg: message, uuid: crypto.randomUUID() };
    this.messages = this.messages.slice(this.messages.length - 5, this.messages.length);
    this.messages.push(msg);
    this.messages.reverse();
    setInterval(
      () =>
        (this.messages = this.messages.filter(({ uuid }) => uuid !== msg.uuid)),
      5000
    );
  }

  clear() {
    this.messages = [];
  }
}
