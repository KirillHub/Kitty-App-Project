import { TCat, TCatImage } from '../models/cats';
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
  X_API_KEY = 'live_unXmyThZGuboII0sdJh0w2xbwknOC7YRCYXEsHiWP3GvdphtzBFnvRYW8AAUlUds';
  POST_USER_VOTE = `https://api.thecatapi.com/v1/votes`;
  CAT_BREEDS = `https://api.thecatapi.com/v1/breeds`
  CATS_CATEGORIES = `https://api.thecatapi.com/v1/categories/`
  SUB_ID = 'User-322';
  breedName = '';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': `${this.X_API_KEY}`
  });

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }


  getCatRandomImagesForVote(): Observable<TCatImage[]> {

    return this.http
      .get<TCatImage[]>(this.RANDOM_CAT_IMAGE_KEY,
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
      sub_id: this.SUB_ID,
      value: 1
    };

    return this.http.post<TBodyPostResponse>(this.POST_USER_VOTE, body, {
      headers: this.headers,
    })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  };

  voteDown(_catsRandomImageId: string): Observable<TBodyPostResponse> {
    let body: TBodyPostResponse = {
      image_id: _catsRandomImageId,
      sub_id: this.SUB_ID,
      value: -1
    };

    return this.http.post<TBodyPostResponse>(this.POST_USER_VOTE, body, {
      headers: this.headers,
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

    return this.http.get<TCatsCategories[]>(this.CATS_CATEGORIES,
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
