import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmp } from './emp';
import { Observable} from 'rxjs';
import { throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private _url: string = "/assets/data/emp1.json"

  constructor(private http: HttpClient) { }

  getEmp(): Observable<IEmp[]>
{
  return this.http.get<IEmp[]>(this._url)
  .pipe(catchError(this.errorHandler));
 }

errorHandler(error: HttpErrorResponse)
{
  return throwError(error.message || "server error");
  

}
}


