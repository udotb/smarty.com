import {NonEmptyString} from "../../src/types/NonEmptyString";
import Name from "../../../../smarty1/ui/src/pages/modules/contact-us/models/name";

describe('Name Test', () => {
  it('Test name should not be longer than 1024 characters', () => {
    expect(() => new Name(new NonEmptyString('a'.repeat(1025), 'Name can not be empty'))).toThrow("Name cannot be longer than " + Name.maxLength + " characters");
  });

  it('Test event name should accept valid string length', () => {
    expect(() => new Name(new NonEmptyString('a'.repeat(255), 'Name can not be empty'))).not.toThrow();
    expect(() => new Name(new NonEmptyString('a'.repeat(100), 'Name can not be empty'))).not.toThrow();
    expect(() => new Name(new NonEmptyString('a'.repeat(50), 'Name can not be empty'))).not.toThrow();
  });
});

