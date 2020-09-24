import {NonEmptyString} from "../../src/types/NonEmptyString";
import Message from "../../../../smarty1/ui/src/pages/modules/contact-us/models/message";


describe('Message Test', () => {
  it('Test message should not be longer than 1024 characters', () => {
    expect(() => new Message(new NonEmptyString('a'.repeat(1025), 'Message can not be empty'))).toThrow("Message cannot be longer than " + Message.maxLength + " characters");
  });

  it('Test message should accept valid string length', () => {
    expect(() => new Message(new NonEmptyString('a'.repeat(1024), 'Message can not be empty'))).not.toThrow();
    expect(() => new Message(new NonEmptyString('a'.repeat(100), 'Message can not be empty'))).not.toThrow();
    expect(() => new Message(new NonEmptyString('a'.repeat(50), 'Message can not be empty'))).not.toThrow();
  });
});
