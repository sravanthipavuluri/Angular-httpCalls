import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Users} from "./Users";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PserviceService {

  private _postsURL = "https://jsonplaceholder.typicode.com/posts";
  private subject = new Subject<any>();
    constructor(private http: Http) {
    }

    getPosts(): Observable<Users[]> {
        return this.http
            .get(this._postsURL)
            .map((response: Response) => {
                return <Users[]>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
