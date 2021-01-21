import { Component, Input, OnInit } from '@angular/core';
import { APIService, CreateTodoInput} from '../../../services/api/API.service';
import Amplify, { API } from 'aws-amplify';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-apitestbed',
  templateUrl: './apitestbed.component.html',
  styleUrls: ['./apitestbed.component.scss']
})
export class ApitestbedComponent implements OnInit {
  name: string = "qwer";
  description: string = "test";

  httpEndpoint: string = "https://flu63gfeji.execute-api.us-east-1.amazonaws.com/test-route";
  httpEndpointResult: object;

  constructor(private apiService: APIService, private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    Amplify.configure({
      API: {
        graphql_headers: async() => ({
          'host': 'test-value'
        })
      }
    });
  }

  async createTodo() {
    var result = await this.apiService.CreateTodo({name: this.name, description: this.description});
  }

  async callHttpEndpoint() {
    console.log("making Post request to " + this.httpEndpoint);
    await this.http.post(this.httpEndpoint, {}).subscribe((response) => {
      this.httpEndpointResult = response;
      console.log(response);
      console.log("Returned!");
    });
  }

}
