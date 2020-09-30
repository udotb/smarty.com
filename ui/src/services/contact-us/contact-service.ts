import {inject} from 'aurelia-framework';
import {Api} from "../../pages/shared/api";

@inject(Api)
export class ContactUsService {
  public api;

  constructor(api) {
    this.api = api;
  }

  saveContact(url, data) {
    return this.api.postData(url, data)
      .then(response => response.json())
      .then(data => {
        return data;
      })
  }

  getContacts(url) {
    return this.api.getData(url)
      .then(response => response.json())
      .then(data => {
        return data;
      })
  }

  getContactDetails(url) {
    return this.api.getData(url)
      .then(response => response.json())
      .then(data => {
        return data;
      })
  }

  deleteContact(url, data) {
    return this.api.deleteDetail(url, data)
      .then(response => response.json())
      .then(data => {
        return data;
      })
  }

  editContact(url, data) {
    return this.api.updateData(url, data)
      .then(response => response.json())
      .then(data => {
        return data;
      })
  }

}
