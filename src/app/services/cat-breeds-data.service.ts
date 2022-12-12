import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { TCat } from '../models/cats'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from "rxjs";

@Injectable()

export class CatBreedsDataService extends DefaultDataService<TCat> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
  ) {
    super('CatBreeds', http, httpUrlGenerator);
  }

  X_API_KEY = `live_unXmyThZGuboII0sdJh0w2xbwknOC7YRCYXEsHiWP3GvdphtzBFnvRYW8AAUlUds`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': `${this.X_API_KEY}`
  });
  httpBreedsList = 'https://api.thecatapi.com/v1/breeds';

  override getAll(): Observable<TCat[]> {

    return this.http.get(`https://api.thecatapi.com/v1/breeds`,
      {
        headers: this.headers
      }
    )
      .pipe(
        map((data) => {
          const catBreeds: TCat[] = [];
          for (let key in data) {
            catBreeds.push({ ...data[key]})
          }
          return catBreeds;
        })
      )
  }
}
