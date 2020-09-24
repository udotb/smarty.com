export class InvalidEmail {
  public email;

  constructor(email) {
    this.email = email;
  }

  value() {
    return this.email;
  }
}
