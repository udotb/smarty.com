class ValidSubject {
  private subject;
  public static maxLength = 255;

  constructor(subject) {
    if (subject.length > ValidSubject.maxLength) {
      throw "Subject cannot be longer than " + ValidSubject.maxLength + " characters";
    }
    this.subject = subject;
  }

  value() {
    return this.subject;
  }
}

export default ValidSubject;
