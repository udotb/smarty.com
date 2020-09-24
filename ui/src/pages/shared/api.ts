import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import environment from "../../environment";

@inject(HttpClient)
export class Api {
  public baseUrl;
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = environment.endpoint;
  }

  async getData(url: string) {
    return this.http.fetch(this.baseUrl+url)
      .then((response) => {
        return response
      })
  }

  async postData(url: string, data: object) {
    return this.http.fetch(this.baseUrl+url, {
      method: "post",
      body: json(data)
    })
      .then((response) => {
        return response
      })
  }

  async updateData(url: string, id: number, data: object) {
    return this.http.fetch(this.baseUrl+url + id, {
      method: 'PUT',
      body: json(data)
    })
      .then((response) => {
        return response
      })
  }

  async deleteData(url: string, id: number) {
    return this.http.fetch(this.baseUrl+url + id, {
      method: 'DELETE'
    })
      .then((response) => {
        return response
      })
  }

  async postDataImage(url: string, data: FormData) {
    return this.http.fetch(this.baseUrl+url, {
      method: "post",
      body: data
    })
      .then((response) => {
        return response
      })
  }

  getBaseUrl(){
    return this.baseUrl;
  }
}
