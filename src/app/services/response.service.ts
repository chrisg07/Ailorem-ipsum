import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }

  public getResponse(topic: string): Observable<{completion: string}> {
    const url = 'https://us-central1-ailorem-ipsum.cloudfunctions.net/openAiResponse2?topic=';
    return this.http.get<{completion: string}>(url + topic);
  }
}
