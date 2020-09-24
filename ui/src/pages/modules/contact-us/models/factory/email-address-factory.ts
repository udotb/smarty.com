import {InvalidEmail} from "../invalid-email";
import EmailAddress from "../../../../../types/email-address";

export class EmailAddressFactory {
  public email;

  constructor(email) {
    if (email == '' || email == undefined) {
      this.email = new InvalidEmail(email);
    } else {
      this.email = new EmailAddress(email);
    }
  }

  value() {
    return this.email;
  }
}
