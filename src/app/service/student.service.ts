import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  response = "No data loaded, yet";
   responseVal = "";
  constructor(private http: HttpClient) {
    
  }

  public getStudent():any{
      return this.http.get('https://localhost:82/Demo/1')
        .toPromise().then(this.extractData).catch(this.handleError);
  }

  private extractData(res: any) {
    return res;
  }

  private handleError(error: any): any {
    console.error('An error occurred', error);
  }

}
