import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  standalone: false
})
export class MessageComponent implements OnInit {

  http = inject(HttpClient);
  messages: { message: string }[] = [];

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.http.get('/rest/messages/list').subscribe({
      next: (response: any) => {
        this.messages = response
      },
      error: (err) => console.log(err)
    })
  }
}
