import { Component, OnInit } from '@angular/core';
import { Auth } from '@aws-amplify/auth';

@Component({
  selector: 'app-cognito',
  templateUrl: './cognito.component.html',
  styleUrls: ['./cognito.component.scss']
})
export class CognitoComponent implements OnInit {

  public username: string;
  public password: string;


  constructor() { }

  ngOnInit(): void {
    this.username = "";
    this.password = "";
  }

  public SignUp(): void {
    Auth.signUp({
      username: this.username,
      password: this.password,
      
    });
  }

  public SignIn(): void {
    Auth.signIn({
      username: this.username,
      password: this.password      
    });
  }
  
  public FederatedResignIn


}
