import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * UtilsService for sending the get and post requests.
 */
@Injectable()
export class UtilsService {
  private apiURL = 'https://address-book-demo.herokuapp.com/api/contacts';
  private postURL = 'http://localhost:4200/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  getContactsData() {
    return this.http.get(this.apiURL)
      .map((res: Response) => res.json());
  }

  postContactData(data) {
    return this.http.post(this.postURL, JSON.stringify(data), {headers : this.headers})
      .map((res: Response) => res.json());
  }


}
