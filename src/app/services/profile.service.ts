import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private username!: string;
  private repo!: string;

  // private clientid = '64c06e357fde8cc182a7';
  // private clientsecret = 'e32e0a6d184519fb794e282db02d03be707967a8';
  // private clientid = 'f3571d8e55e169540825';
  // private clientsecret = 'a6c2b7d8f7c691e771b1908873e13';
  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'kirandash';
  }

  getProfileInfo() {
    return this.http
      .get('https://api.github.com/users/' + this.username)
      .pipe(map((res: any) => res));
  }

  getProfileRepos() {
    return this.http
      .get('https://api.github.com/users/' + this.username + '/repos')
      .pipe(map((res: any) => res));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
