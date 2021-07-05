import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  response = "Test";
  constructor(private http: HttpClient, private _router: Router)
  {
    this._router.navigateByUrl('/students');

 //   this.http.get('http://demoapi-service:80/Demo', {responseType: 'text'}).subscribe((response: any) => {
 //     console.log(response);
	//  this.response = response;		
	//});
  }  
}
