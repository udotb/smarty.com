import Name from "./name";
import {NonEmptyString} from "../../../../types/NonEmptyString";
import ValidSubject from "./valid-subject";
import Message from "./message";
import {EmailAddressFactory} from "./factory/email-address-factory";


export class ContactUsModel {
  public name;
  public email;
  public subject;
  public message;
  public nameError;
  public emailError;
  public subjectError;
  public messageError;

  contactUs() {
    try {
      new Name(new NonEmptyString(this.name, 'Name is require.'));
      new EmailAddressFactory(this.email);
      new ValidSubject(this.subject);
      new Message(new NonEmptyString(this.message, 'Message is require.'))
    } catch (e) {
       console.log(e)
      if (e === 'Name is require.' || e === `Name cannot be longer than ${Name.maxLength} characters`) {
        this.nameError = e;
      }
      if (e === 'Please enter valid Email Address') {
        this.emailError = e;
      }
      if (e === `Subject cannot be longer than ${ValidSubject.maxLength} characters`) {
        this.subjectError = e;
      }
      if (e === 'Message is require.' || e === `Message cannot be longer than ${Message.maxLength} characters`) {
        this.messageError = e;
      }
      return false;
    }
    return true;
  }
}
