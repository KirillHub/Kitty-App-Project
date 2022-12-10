import { TCat, TCatImage } from './../../models/cats';
import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http"
import { ErrorService } from './error.service'
import { Observable, throwError, catchError } from "rxjs"
import { TBodyPostResponse } from 'src/app/models/bodyPostReq';
import TUserSettingsParam from 'src/app/models/userSettingsParam';
import { TCatsCategories } from 'src/app/models/catsCategories';

@Injectable({
  providedIn: 'root'
})

export class CatsService {

  RANDOM_CAT_IMAGE_KEY = 'https://api.thecatapi.com/v1/images/search';
  x_api_key = 'live_unXmyThZGuboII0sdJh0w2xbwknOC7YRCYXEsHiWP3GvdphtzBFnvRYW8AAUlUds';
  httpPostUserVote = 'https://api.thecatapi.com/v1/votes';
  httpBreedsList = 'https://api.thecatapi.com/v1/breeds';
  httpCatsCategories = 'https://api.thecatapi.com/v1/categories/';
  sub_id = "User-322";
  breedName = '';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': `${this.x_api_key}`
  });

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getCatRandomImagesForVote(): Observable<TCatImage[]> {

    return this.http.get<TCatImage[]>(this.RANDOM_CAT_IMAGE_KEY,
      {
        headers: this.headers,
        params: new HttpParams().append('limit', 1),
      })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  };

  voteUp(_catsRandomImageId: string): Observable<TBodyPostResponse> {
    let body: TBodyPostResponse = {
      image_id: _catsRandomImageId,
      sub_id: this.sub_id,
      value: 1
    };

    return this.http.post<TBodyPostResponse>(this.httpPostUserVote, body, {
      headers: this.headers,
    })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  };

  voteDown(_catsRandomImageId: string): Observable<TBodyPostResponse> {
    let body: TBodyPostResponse = {
      image_id: _catsRandomImageId,
      sub_id: this.sub_id,
      value: -1
    };

    return this.http.post<TBodyPostResponse>(this.httpPostUserVote, body, {
      headers: this.headers,
    })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  };

  getCatBreeds(): Observable<TCat[]> {
    return this.http.get<TCat[]>(this.httpBreedsList,
      {
        headers: this.headers
      })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  };

  getCatBreedImages(breedID: string, amount: number): Observable<TCatImage[]> {
    let httpGetBreedById = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedID}`
    return this.http.get<TCatImage[]>(httpGetBreedById,
      {
        headers: this.headers,
        params: new HttpParams().append('limit', amount)
      })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  };

  getCatsImagesByUserSettings(userSettings: TUserSettingsParam): Observable<TCatImage[]> {
    let param = new HttpParams();
    let keys = Object.keys(userSettings);

    keys.forEach(key => {
      userSettings[key] === -1 ? param = param :
        param = param.append(key, userSettings[key])
    });

    return this.http.get<TCatImage[]>(this.RANDOM_CAT_IMAGE_KEY,
      {
        headers: this.headers,
        params: param
      })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  };

  getCatsCategories(): Observable<TCatsCategories[]> {

    return this.http.get<TCatsCategories[]>(this.httpCatsCategories,
      {
        headers: this.headers,
      })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
