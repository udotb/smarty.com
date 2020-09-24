class Password {
  private password: string;

  constructor(password: string) {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(password)) {
      this.password = password;
    } else {
      throw "Password Incorrect";
    }
  }

  value() {
    return this.password;
  }
}
export default Password;
