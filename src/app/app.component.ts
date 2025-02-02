import { Component, OnInit } from '@angular/core';
// Angular Data Grid 
import { WjGridModule, WjFlexGrid } from '@mescius/wijmo.angular2.grid';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLogin: Observable<boolean>;
  key: any;
  title = 'Employee-registration-client';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLogin = this.authService.isLoggedIn;
  }
  

}
