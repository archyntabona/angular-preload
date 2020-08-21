import { Pets } from '@angular-preload/utils'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class DataService {
  public PET_SERVICE_URL = 'http://localhost:3333/api/pets';
  constructor(private http: HttpClient) {};

  public getPets(): Observable<Pets>{
    const url = `${this.PET_SERVICE_URL}`;
    return this.http.get<Pets>(url).pipe(
      tap(
        (res) => {
          if (res.id == null) {
            return 'error Server must be down';
          }
        }
      )
    )
  }

}
