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

//eliminar persona
deleteUser(id: number): Observable<any> {
  return this.http.delete(`${environment.urlGetList}/${id}`, {
    headers: {
      'code-app': '2022*01',
    },
  });
}

//editar persona
updateUser(user: Users): Observable<Users> {
  return this.http.put<Users>(`${environment.urlGetList}/${user.id}`, user, {
    headers: {
      'code-app': '2022*01',
    },
  });
}

}
