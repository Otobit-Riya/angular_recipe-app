import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/Placeholder/Placeholder.directive';

import { AuthService ,AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit,OnDestroy {
  isLoginMode = true ;
  isLoding = false ;
  error : string = null;
  @ViewChild(PlaceholderDirective) alertHost : PlaceholderDirective;

  private closeSub : Subscription;

  constructor(private authServic : AuthService,private router :Router,private ComponentFactoryResolver : ComponentFactoryResolver) {  }
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }

  
  onSwichMode(){
    this.isLoginMode=!this.isLoginMode;
  }
  onSubmit( form : NgForm)
  {
    // console.log(form.value);
    

    if(!form.valid){
      return;
    }
   
    
    const email = form.value.email;
    const password = form.value.password;

    let authOdb :Observable<AuthResponseData>;

    this.isLoding =true; 

    if(this.isLoginMode){
     authOdb= this.authServic.login(email,password);
    } else {
      authOdb= this.authServic.signup(email,password);
    }

    authOdb.subscribe(
      resData => {
        console.log(resData);
        this.isLoding=false;
        this.router.navigate(['/recipes']);
      },

      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoding=false; 
      }
      );

    form.reset();
    
  }
  

  onHandleErr(){
    this.error=null;
  }

  private showErrorAlert(message : string)
  {
   // const alertCmp = new AlertComponent();
  const alertCmpFactory= this.ComponentFactoryResolver.resolveComponentFactory(
    AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viweContainerRef;
    hostViewContainerRef.clear();

   const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message=message;
     this.closeSub=componentRef.instance.close.subscribe(()=>
    {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear(); 
    });


  }

  

  

ngOnInit(): void {}
}

