import {NonEmptyString} from "../../../../../../../smarty/ui/src/types/NonEmptyString";

class Name {
  private name;
  public static maxLength = 255;

  constructor(name:NonEmptyString) {
    if (name.value().length > Name.maxLength) {
      throw "Name cannot be longer than " + Name.maxLength + " characters";
    }
    this.name = name.value();
  }

  value() {
    return this.name;
  }
}

export default Name;
