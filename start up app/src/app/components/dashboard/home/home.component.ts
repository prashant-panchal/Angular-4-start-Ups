import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { LoggerService } from '../../../services/logger.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private contacts: any = [];
  private contactDetails: any = {};

  constructor(private Contactservice: UtilsService, private logger: LoggerService) {
    this.getContacts();
  }

  getContacts() {
    this.logger.info('Getting contacts from REST API');
    this.Contactservice.getContactsData().subscribe(data => {
      this.contacts = data.contacts;
    });
  }
  showContact(contactDetails) {
    this.contactDetails = contactDetails;
  }

  onSubmit() {
    this.Contactservice.postContactData(this.contactDetails)
    .subscribe(data => {this.logger.info('Success'); });
  }


  ngOnInit() {
    this.logger.info('Home Component is loaded');
  }

}
