import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import * as queryString from 'query-string';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {
  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  getBlob<payloadT, T>(endPointUrl: string, payload: any): Observable<any> {
    const params = payload
      ? new HttpParams({
        fromString: queryString.stringify(payload, { skipNull: true }),
      })
      : {};
    return new Observable((observer) => {
      this.http
        .get<any>(`${environment.baseUrl}${endPointUrl}`, {
          params,
          observe: 'response' as 'body',
          responseType: 'blob' as 'json',
        })
        .pipe(catchError((error) => this.handleError(error)))
        .subscribe((res) => {
          observer.next(res);
          observer.complete();
        });
    });
  }

  get<payloadT>(endPointUrl: string, payload?: any): Observable<payloadT> {
    const params = payload
      ? new HttpParams({
        fromString: queryString.stringify(payload, { skipNull: true }),
      })
      : {};

    return new Observable((observer) => {
      this.http
        .get<payloadT>(`${environment.baseUrl}/${endPointUrl}`, {
          params,
        })
        .pipe(catchError((error) => this.handleError(error)))
        .subscribe((res: any) => {
          res?.error ? observer.error(res.error) : observer.next(res);
          observer.complete();
        });
    });
  }


  private handleError({ error }: any) {
    this.snackBar.open(error.status_message, 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['red-snackbar'],
    });
    return of({
      error,
    });
  }

}
