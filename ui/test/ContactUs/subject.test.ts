import ValidSubject from "../../src/pages/modules/contact-us/models/valid-subject";

describe('ValidSubject Test', () => {
  it('Test subject should not be longer than 1024 characters', () => {
    expect(() => new ValidSubject(('a'.repeat(1024)))).toThrow("ValidSubject cannot be longer than " + ValidSubject.maxLength + " characters");
  });

});

