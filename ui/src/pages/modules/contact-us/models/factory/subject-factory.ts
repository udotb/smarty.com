import {InvalidSubject} from "../invalid-subject";
import ValidSubject from "../valid-subject";

export class SubjectFactory {
  public subject;

  constructor(subject) {
    if (subject == '' || subject == undefined) {
      this.subject = new InvalidSubject(subject);
    }
    else {
      this.subject = new ValidSubject(subject);
    }
  }
  value(){
    return this.subject;
  }
}
