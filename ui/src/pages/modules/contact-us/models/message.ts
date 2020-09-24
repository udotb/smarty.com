import {NonEmptyString} from "../../../../../../../smarty/ui/src/types/NonEmptyString";

class Message {
  private message;
  public static maxLength = 1024;

  constructor(message:NonEmptyString) {
    if (message.value().length > Message.maxLength) {
      throw "Message cannot be longer than " + Message.maxLength + " characters";
    }
    this.message = message.value();
  }

  value() {
    return this.message;
  }
}

export default Message;
