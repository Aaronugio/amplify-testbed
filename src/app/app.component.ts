import { Component } from '@angular/core';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../aws-exports.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amplify-testbed';
  selectedUtility: string;
  
  constructor() {
    
    API.configure({
      graphql_headers: async() => ({
        'host': 'mytest-host.com'
      })
    });
  }
  
}
