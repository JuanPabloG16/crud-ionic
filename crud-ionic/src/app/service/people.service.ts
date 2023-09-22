import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { ResponseUsers } from '../models/Response.model';
import { Injectable } from '@angular/core';
import { Users } from '../models/People.model';

@Injectable({
  providedIn:"root"
})

export class peopleService {


 constructor(private http: HttpClient) { }

//conseguir personas
getPeople(): Observable<Users[]>{

  return this.http.get<ResponseUsers>(environment.urlGetList,{
    headers:{
    'code-app':'2022*01'
  }
  }).pipe(map(response => response.data));
}

//agregar personas
insertUser(user:Users): Observable<ResponseUsers>{

  return this.http.post<ResponseUsers>(environment.urlGetList, user,{
    headers: {
      'code-app': '2022*01',
    },
  });
}

}
