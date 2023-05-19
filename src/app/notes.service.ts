import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environments';

@Injectable({
    providedIn: 'root',
  })

  export class NotesService { 
    headers: { headers: any };
  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        dataType: 'jsonp',
      }),
    };
    this.headers = httpOptions;
  }

  // getNotes(): Observable<> {
  //   return this.http.get(environment.apiUrl + '/notes', this.headers);
  // }
  public register(data: any) {
    return this.http.post(environment.apiUrl + 'api/Createnote', data);
  }
  public getData() {
    return this.http.get(environment.apiUrl + 'api/GetNotes');
  }

  public update(data: any) {
    return this.http.post(environment.apiUrl + 'api/updateNote', data);
  }

  public delete(data: any) {
    debugger
    return this.http.post(environment.apiUrl + 'api/deleteNote', data);
  }


  }
