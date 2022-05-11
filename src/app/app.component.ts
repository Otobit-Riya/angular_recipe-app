import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LogIn } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(private authService :AuthService,private loginService : LogIn){}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.loginService.printLog('helloe from ngcomponet')
  }
  

  
}
