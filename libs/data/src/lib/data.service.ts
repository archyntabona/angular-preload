import { Pets } from '../../../utils/src/lib/models/pets.models'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

export class DataService {
  public PET_SERVICE_URL = 'http://localhost:3333/api/';
  constructor(private http: HttpClient) {};

  public getPets(): Observable<Pets>{
    const url = `${this.PET_SERVICE_URL}/pets`;
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
