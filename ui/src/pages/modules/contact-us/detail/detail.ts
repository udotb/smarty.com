import {ContactUsModel} from "../models/contact-us-model";
import {ContactUsService} from "../../../../services/contact-us/contact-service";
import {inject} from 'aurelia-framework';

@inject(ContactUsService)
export class detail {
  public contactUs;
  public contactUsService;
  public contacts;
  public detail;
  public contactUsId;
  public contactDetail;

  constructor(contactUsService) {
    this.contactUs = new ContactUsModel();
    this.contactUsService = contactUsService;
    this.contacts = [];
  }

  activate(params){
    this.contactUsId = params.contactId;
    this.getContactDetails();
  }

  attached() {
    this.getContacts();
  }

  async getContacts() {
    const response = await this.contactUsService.getContacts(`/api/contact-us`);
    if (response.status) {
      this.contacts = response.data;
    }
  }

  async getContactDetails() {
    const response = await this.contactUsService.getContactDetails(`/api/contact-us/${this.contactUsId}/details`);
    if (response.status) {
      this.contactDetail = response.data;
    }
  }

  async editContacts() {
    const response = await this.contactUsService.getContacts(`/api/contact-us`);
    if (response.status) {
      this.contacts = response.data;
    }
  }
  displayTagInfo(event,place){
    if(!place.hovered){
      //Do what you want to do, HERE

      place.hovered = true;
    }
  }


}
