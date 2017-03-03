import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../environments/environment';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  fetchResponse() {
    return this.http.get(environment.server + '/api/objects')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response | any) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
