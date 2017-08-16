import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
     this.logger.info('User component is loaded');
  }

}
