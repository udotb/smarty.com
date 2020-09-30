import {ContactUsModel} from "./models/contact-us-model";
import {ContactUsService} from "../../../services/contact-us/contact-service";
import {inject} from 'aurelia-framework';

@inject(ContactUsService)
export class ContactUs {
  public contactUs;
  public contactUsService;
  public contacts;

  constructor(contactUsService) {
    this.contactUs = new ContactUsModel();
    this.contactUsService = contactUsService;
    this.contacts = [];
  }

  // activate()
  // attached()
  attached() {
    this.getContacts();
  }

  // detached()

  async saveContact() {
    if (this.contactUs.contactUs()) {
      let data = {
        'name': this.contactUs.name,
        'email': this.contactUs.email,
        'subject': this.contactUs.subject,
        'message': this.contactUs.message
      }
      const response = await this.contactUsService.saveContact(`/api/contact-us`, data);
      if (response.status) {
        alert('contact saved')
      }
    }
  }

  async getContacts() {
    const response = await this.contactUsService.getContacts(`/api/contact-us`);
    if (response.status) {
      this.contacts = response.data;
    }
  }

  async deleteContact(id) {
    console.log(id);
    const response = await this.contactUsService.deleteContact(`/api/contact-us`, {'id' : id});
    if (response.status) {
      this.contacts = response.data;
      alert('Are you sure you want to delete data?')
    }
  }
}
