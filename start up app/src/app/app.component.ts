import { Component, Directive, Renderer, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { LoggerService } from './services/logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private Logger: LoggerService) {
  }
}



