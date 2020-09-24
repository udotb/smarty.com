import {inject} from 'aurelia-framework';
import {Api} from "../../pages/shared/api";

@inject(Api)
export class ContactUsService {
  public api;

  constructor(api) {
    this.api = api;
  }

  storeContact(url, data) {
    return this.api.postData(url, data)
      .then(response => response.json())
      .then(data => {
        return data;
      })
  }

}
