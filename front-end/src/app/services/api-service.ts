import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";


export class ApiService {
  httpClient = inject(HttpClient);
  
  httpPrefix = 'http://localhost:3000/';
  
    get(url: string) {
        return this.httpClient.get(this.httpPrefix + url);
    }

}


