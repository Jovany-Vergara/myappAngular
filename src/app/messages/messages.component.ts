import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: [] = [];
  constructor(public messagesService: MessageService) {}

  ngOnInit(): void {
    console.log('Hola mundo');
    console.log(this.messagesService);
  }
}
