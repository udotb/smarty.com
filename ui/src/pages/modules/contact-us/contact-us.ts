import {ContactUsModel} from "./models/contact-us-model";
import {ContactUsService} from "../../../services/contact-us/contact-service";
import {inject} from 'aurelia-framework';

@inject(ContactUsService)
export class ContactUs {
  public contactUs;
  public contactUsService;

  constructor(contactUsService) {
    this.contactUs = new ContactUsModel();
    this.contactUsService = contactUsService;
  }

  async sendMessage() {
    console.log(this.contactUs.contactUs());
    if (this.contactUs.contactUs()) {
      let data = {
        'name': this.contactUs.name,
        'email': this.contactUs.email,
        'subject': this.contactUs.subject,
        'message': this.contactUs.message
      }
      const response = await this.contactUsService.storeContact(`/api/contact-us`, data);
      if (response.status) {
        alert('contact saved')
      }
      //api call
    }

  }
}
