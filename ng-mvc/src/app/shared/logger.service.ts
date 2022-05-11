import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private messages: string[] = [];
  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }
  fetch(): string[] {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }
}
