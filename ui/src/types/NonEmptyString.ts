export class NonEmptyString {
  public nonEmptyString;

  constructor(nonEmptyString, exceptionMessage) {
    if (nonEmptyString !== undefined && /^(?!\s*$).+/.test(nonEmptyString)) {
      this.nonEmptyString = nonEmptyString;
    } else {
      throw exceptionMessage;
    }
  }
  value() {
    return this.nonEmptyString;
  }
}

