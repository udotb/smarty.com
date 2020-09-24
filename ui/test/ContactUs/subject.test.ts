import ValidSubject from "../../src/pages/modules/contact-us/models/valid-subject";

describe('ValidSubject Test', () => {
  it('Test subject should not be longer than 255 characters', () => {
    expect(() => new ValidSubject(('a'.repeat(255)))).toThrow("ValidSubject cannot be longer than " + ValidSubject.maxLength + " characters");
  });

});

