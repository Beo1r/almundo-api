import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Hotel } from './hotel';

@Injectable()
export class HotelService {

  private apiUrl : string;
  private _stream_name$ = new BehaviorSubject("");
  public stream_name$ = this._stream_name$.asObservable();
  private _stream_stars$ = new BehaviorSubject("");
  public stream_stars$ = this._stream_stars$.asObservable();

  constructor (private http: Http) {

    this.apiUrl = 'http://localhost:3000';

  }

  sendHotelName(name: string) {
    this._stream_name$.next(name);
  }

  sendHotelStars(optionsQuery) {
    this._stream_stars$.next(optionsQuery);
  }

  getHotelsByStars (optionsQuery): Observable<Hotel[]> {
    return this.http.get(this.apiUrl + '/stars/' + optionsQuery)
      .map((response: Response) => response.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get(this.apiUrl + '/')
    	.map((response: Response) => response.json())
    		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getHotelByName(name: string): Observable<Hotel[]> {
  	return this.http.get(this.apiUrl + '/hoteles/' + name)
  		.map((response: Response) => response.json())
    		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  
}